const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		try {
			const verifiedUser = jwt.verify(token, process.env.JWT_KEY);
			req.user = verifiedUser;
			next();
		} catch (error) {
			res.send("Error authorization");
		}
	} else {
		res.send("Not's logged!");
	}
};
