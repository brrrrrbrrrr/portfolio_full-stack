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
      `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.theme, ${this.table}.description,
       ${this.table}.userId, ${this.table}.typeId, ${this.table}.link, GROUP_CONCAT(projecthastech.techId) 
       AS techIds FROM ${this.table} LEFT JOIN projecthastech ON ${this.table}.id = projecthastech.projectId
        GROUP BY ${this.table}.id, 
       ${this.table}.name, ${this.table}.theme, ${this.table}.description, ${this.table}.userId, ${this.table}.typeId, ${this.table}.link`
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
