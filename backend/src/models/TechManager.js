const AbstractManager = require("./AbstractManager");

class TechManager extends AbstractManager {
  constructor() {
    super({ table: "tech" });
  }

  findAll() {
    return this.database.query(`select name, id from tech`);
  }
}

module.exports = TechManager;
