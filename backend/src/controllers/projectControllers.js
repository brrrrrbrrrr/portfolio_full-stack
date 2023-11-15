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

const read = (req, res) => {
  const projectId = req.params.id;
  models.project
    .find(projectId)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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

const destroyTech = (req, res, next) => {
  const userId = req.payload.sub.id;
  const id = parseInt(req.params.id, 10);

  models.project
    .findTech(userId, id)
    .then(([rows]) => {
      if (rows[0] == null) {
        next();
      } else {
        models.project
          .deleteTech(userId, id)

          .then(([result]) => {
            if (result.affectedRows === 0) {
              res.sendStatus(404);
            } else {
              next();
            }
          })
          .catch((err) => {
            console.error(err);

            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const insertTechs = (req, res, next) => {
  const { techId } = req.body;
  if (techId && Object.keys(techId).length > 0) {
    const userId = req.payload.sub.id;
    const projectId = req.params.id;

    // TODO validations (length, format...)

    const insertTechPromises = techId.map((tech) =>
      models.project.insertTech(userId, projectId, tech)
    );

    Promise.all(insertTechPromises)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          delete req.body.techId;

          next();
        }
      })
      .catch((err) => {
        console.error(err);

        res.sendStatus(500);
      });
  } else {
    delete req.body.techId;
    next();
  }
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

const edit = (req, res) => {
  if (req.body && Object.keys(req.body).length > 0) {
    const values = req.body;

    // TODO validations (length, format...)

    const id = parseInt(req.params.id, 10);

    models.project
      .update(values, id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);

        res.sendStatus(500);
      });
  } else res.sendStatus(204);
};

module.exports = { add, browse, destroyTech, insertTechs, read, edit };
