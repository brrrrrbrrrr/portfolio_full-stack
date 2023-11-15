/* eslint-disable import/no-extraneous-dependencies */

const joi = require("joi");
const models = require("../models");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return joi
    .object({
      name: joi.string().max(45).presence(presence),
      picture: joi.string().max(45).presence(presence),
      firstname: joi.string().max(45).presence(presence),
      age: joi.string().max(45).presence(presence),
      mail: joi.string().email().presence(presence),
      password: joi.string().max(200).presence(presence),
      newPassword: joi.string().max(45).presence("optional"),
      city: joi.string().max(45).presence(presence),
      typeId: joi.number().integer().presence(presence),
      description: joi.string().max(2000).presence(presence),
    })
    .validate(data, { abortEarly: false }).error;
};

const getUserByLoginToNext = async (req, res, next) => {
  const { mail } = req.body;
  if (!mail) {
    return res.sendStatus(422);
  }
  const result = await models.user.getUserByLogin(mail);
  if (result) {
    if (result[0] != null) {
      req.user = { ...result[0] };
      next();
    } else return res.sendStatus(401);
  } else return res.sendStatus(500);
  return null;
};

const read = (req, res) => {
  const userId = 1;
  models.user
    .find(userId)
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

const updateUser = (req, res) => {
  const updatedValues = req.body;
  const idUser = req.payload.sub.id;
  const errors = validate(updatedValues, false);
  if (errors) {
    console.error(errors);
    return res.status(422).json({ error: errors.message });
  }

  models.user
    .update(updatedValues, idUser)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  return null;
};

module.exports = {
  getUserByLoginToNext,
  read,
  updateUser,
};
