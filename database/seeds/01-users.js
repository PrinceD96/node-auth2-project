exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					username: "devOne",
					password: "password1",
					department: "Frontend"
				},
				{
					id: 2,
					username: "devTwo",
					password: "password2",
					department: "Backend"
				},
				{
					id: 3,
					username: "devThree",
					password: "password3",
					department: "UX/UI"
				}
			]);
		});
};
