// db/queries/users.js

const db = require('../../configs/db.config');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	})
}

const getUserById = id => {
	return db.query("SELECT * FROM users; WHERE id = $1", [id]).then(data => {
		return data.rows;
	})
}

const getExperienceById = id => {
  return db.query("SELECT * FROM experience WHERE experience.user_id = $1", [id]).then(data => {
    return data.rows;
  })
}

const getAboutById = id => {
  return db.query("SELECT about FROM users WHERE id = $1", [id]).then(data => {
    return data.rows;
  })
}

const addUser = (user) => {
  const values = [user.name, user.email, user.password, NULL, FALSE];
  return pool
    .query(`INSERT INTO users (name, email, password, about, admin) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = {getAllUsers, getUserById, getExperienceById, addUser, getAboutById};