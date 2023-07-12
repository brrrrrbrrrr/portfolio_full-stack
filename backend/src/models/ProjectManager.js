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

  findAll() {
    return this.database.query(
      `SELECT ${this.table}.*, projecthastech.techId FROM ${this.table} left JOIN projecthastech ON ${this.table}.id = projecthastech.projectId`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT ${this.table}.*, projecthastech.techId FROM ${this.table} left JOIN projecthastech ON ${this.table}.id = projecthastech.projectId where id = ?`,
      [id]
    );
  }

  deleteTech(id) {
    return this.database.query(
      `delete from projecthastech  where projectId = ?`,
      [id]
    );
  }
}

module.exports = ProjectManager;
