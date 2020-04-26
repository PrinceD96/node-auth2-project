const db = require("../../../database/dbConfig");

const find = () => {
	return db("users").select("id", "username", "department");
};

const findBy = filter => {
	return db("users").where(filter);
};

const findById = id => {
	return db("users").where({ id }).first();
};

const add = user => {
	return db("users")
		.insert(user)
		.then(([id]) => db("users").where({ id }).first());
};

const update = (id, changes) => {
	return db("users").where({ id }).update(changes);
};

const remove = id => {
	return db("users").where({ id }).del();
};

module.exports = {
	find,
	findBy,
	findById,
	add,
	update,
	remove
};
