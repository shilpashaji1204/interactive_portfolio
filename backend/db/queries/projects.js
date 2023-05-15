const db = require('../../configs/db.config');

const getAllProjects = () => {
	return db.query("SELECT * FROM projects;").then(data => {
		return data.rows;
	})
}

const getProjectsById = id => {
  return db.query("SELECT * FROM projects WHERE projects.user_id = $1", [id]).then(data => {
    return data.rows;
  })
}

const addProject = (userID, project) => {
  const values = [project.title, project.description, project.features, project.tech_stack, image_url, userID];
  return pool
    .query(`INSERT INTO projects (title, description, features, tech_stack, image_url, project_url, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add project error;', err.message);
      return null;
    });
};

module.exports = {addProject, getProjectsById, getAllProjects};