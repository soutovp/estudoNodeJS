var nodemailer = require("nodemailer");
var mailPass = require("../info");
console.log(mailPass.emailPass);

var transporter = nodemailer.createTransport({
	service: "Hotmail",
	auth: {
		user: "fernandoandradesouto@hotmail.com",
		pass: mailPass.emailPass,
	},
});

var mailOptions = {
	from: "fernandoandradesouto@hotmail.com",
	to: "fernandosouto.servicos@gmail.com",
	subject: "Sending Email using Node.js",
	text: "That was easy",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
