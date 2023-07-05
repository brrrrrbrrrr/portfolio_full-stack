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

module.exports = { getUserByLoginToNext };
