const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project, userId) {
    return this.database.query(
      `insert into ${this.table} (name, theme, description, typeID, userId, link) values (?,?,?,?,?,?)`,
      [
        project.name,
        project.theme,
        project.description,
        project.typeId,
        userId,
        project.link,
      ]
    );
  }

  insertTech(userId, projectId, techId) {
    return this.database.query(
      `INSERT INTO projecthastech (projectUserId, projectId, techId) VALUES (?, ?, ?)`,
      [userId, projectId, techId]
    );
  }

  findAll(userId) {
    return this.database.query(`select * from  ${this.table} `, [userId]);
  }
}

module.exports = ProjectManager;
