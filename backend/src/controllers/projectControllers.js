const joi = require("joi");
const models = require("../models");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return joi
    .object({
      name: joi.string().max(45).presence(presence),
      theme: joi.string().max(45).presence(presence),
      link: joi.string().max(45).presence("optional"),
      techId: joi.array().items(joi.number()).presence(presence),

      typeId: joi.number().integer().presence(presence),
      description: joi.string().max(2000).presence(presence),
    })
    .validate(data, { abortEarly: false }).error;
};

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { name, theme, description, typeId, link, techId } = req.body;
  const userId = req.payload.sub.id;

  // TODO validations (length, format...)
  const validationError = validate(req.body);
  if (validationError) {
    return res.status(422).json({ error: validationError.message });
  }

  models.project
    .insert({ name, theme, description, typeId, link }, userId)
    .then(([projectInsertResult]) => {
      const projectId = projectInsertResult.insertId;

      // Insérer les relations projet-technologie dans la table "projecthastech"
      const insertTechPromises = techId.map((tech) =>
        models.project.insertTech(userId, projectId, tech)
      );

      Promise.all(insertTechPromises)
        .then(() => {
          res.location(`/user/${projectId}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  return null;
};

module.exports = { add, browse };
