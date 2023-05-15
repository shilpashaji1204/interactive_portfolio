const db = require('../../configs/db.config');

const getAllMessages = () => {
	return db.query("SELECT * FROM messages;").then(data => {
		return data.rows;
	})
}