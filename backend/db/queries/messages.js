const db = require('../../configs/db.config');

const getAllMessages = () => {
	return db.query("SELECT * FROM messages;").then(data => {
		return data.rows;
	})
}

const getMessagesByProjectId = id => {
  return db.query("SELECT * FROM messages WHERE messages.project_id = $1", [id]).then(data => {
    return data.rows;
  })
}

const getMessageById = id => {
  return db.query("SELECT * FROM messages WHERE id = $1", [id]).then(data => {
    return data.rows;
  })
}

const createMessage = (project_reference, content, sender, receiver) => {
  const date = Date.now();
  const values = [project_reference, content, date, sender, receiver];
  return pool
    .query(`INSERT INTO messages (project_id, content, date, sender_id, receiver_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add message error:', err.message);
      return null;
    });
};;

module.exports = {getAllMessages, getMessagesByProjectId, createMessage, getMessageById};