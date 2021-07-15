const nodemailer = require("nodemailer");
const ejs = require("ejs");

var transporter = nodemailer.createTransport({
	host: process.env.MAILER_HOST,
	port: 587,
	auth: {
		user: process.env.MAILER_USER,
		pass: process.env.MAILER_PASSWORD,
	},
});


exports.sendMail = (sendTo, messageOption) => {
	
	let dirName = __dirname + "/templates" + `/${messageOption.templateName}.ejs`;

	ejs.renderFile(dirName, messageOption.templateData, function (err, data) {
		
		var mailOptions = {
			from: "Ong Studio noreply@ongstudio.org",
			to: sendTo,
			subject: messageOption.subject,
			html: data,
		};

		if (err) {
			console.log(err);
		} else {
			transporter.sendMail(mailOptions, function (error, info) {
				error
					? console.log(`error sending email , ${error}`)
					: console.log("email sent");
			});
		}
	});
};
