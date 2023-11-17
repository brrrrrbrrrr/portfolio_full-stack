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

  findAll() {
    return this.database.query(
      `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.theme, ${this.table}.description,
       ${this.table}.userId, ${this.table}.typeId, ${this.table}.link, ${this.table}.img,
       GROUP_CONCAT(tech.name) AS techName, 
       GROUP_CONCAT(projecthastech.techId) AS techIds
       FROM ${this.table} 
       LEFT JOIN projecthastech ON ${this.table}.id = projecthastech.projectId
       LEFT JOIN tech ON tech.id = projecthastech.techId 
       GROUP BY ${this.table}.id, 
       ${this.table}.name, ${this.table}.theme, ${this.table}.description, ${this.table}.userId, ${this.table}.typeId, ${this.table}.link, ${this.table}.img `
    );
  }

  find(id) {
    return this.database.query(
      `SELECT ${this.table}.*, projecthastech.techId FROM ${this.table} left JOIN projecthastech ON ${this.table}.id = projecthastech.projectId where id = ?`,
      [id]
    );
  }

  deleteTech(userId, projectId) {
    return this.database.query(
      `delete from projecthastech  where projectUserId = ? and projectId = ?`,
      [userId, projectId]
    );
  }

  insertTech(userId, projectId, techId) {
    return this.database.query(
      `INSERT INTO projecthastech (projectUserId, projectId, techId) VALUES (?, ?, ?)`,
      [userId, projectId, techId]
    );
  }

  findTech(userId, projectId) {
    return this.database.query(
      `select techId from projecthastech where projectUserId = ? and projectId = ?`,
      [userId, projectId]
    );
  }

  update(item, id) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      item,
      id,
    ]);
  }
}

module.exports = ProjectManager;
