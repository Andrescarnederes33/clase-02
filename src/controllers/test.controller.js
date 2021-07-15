// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

/*Connection*/
const pool = require("../database");

/*Utilities*/
// const { httpRes } = require("../utils/httpResponse");

exports.get = async (req, res) => {

	try {
		/*Find User by Email*/
		const result = await pool.query("SELECT * FROM ongs WHERE email = ?", [
			email,
		]);
		res.json(httpRes(605, {}, {}));
	} catch (error) {
		res.json(httpRes(602, {}, {}));
	}
};

