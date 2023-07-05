/* eslint-disable import/no-extraneous-dependencies */

const models = require("../models");

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

module.exports = { getUserByLoginToNext, read };
