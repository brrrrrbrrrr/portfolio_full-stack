const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getUserByLogin(login) {
    return this.database
      .query(
        `SELECT id, name, firstname, password from ${this.table} WHERE mail = ?`,
        [login]
      )
      .then(([result]) => result)
      .catch((err) => {
        console.warn(err);
        return false;
      });
  }

  find(id) {
    return this.database.query(
      `SELECT ${this.table}.name, firstname, mail, age, picture, description, typeId, city, types.name AS typeName 
      FROM ${this.table} 
      JOIN type AS types ON ${this.table}.typeId = types.id 
      WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  update(user, id) {
    return this.database.query(`update ${this.table} set ? where id `, [
      user,
      id,
    ]);
  }
}

module.exports = UserManager;
