const http = require("http");
const path = require("path");
const formidable = require("formidable");
const fs = require("fs");
const nodemailer = require("nodemailer");
const mailPass = require("../info");

var transporter = nodemailer.createTransport({
	service: "Hotmail",
	auth: {
		user: "fernandoandradesouto@hotmail.com",
		pass: mailPass.emailPass,
	},
});

var mailOptions = {
	from: "fernandoandradesouto@hotmail.com",
	to: "headbanger.87@hotmail.com, fernandosouto.servicos@gmail.com",
	subject: "Sending Email using Node.js",
	text: "That was easy",
	// html: "<h1>Welcome</h1><p>That was easy!</p>"
};

http.createServer((req, res) => {
	if (req.url == "/fileupload") {
		let form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var oldpath = files.filetoupload.filepath;
			var newpath = path.join(__dirname, "../", "arquivos", files.filetoupload.originalFilename);
			fs.mkdir(path.join(__dirname, "../arquivos"), { recursive: true }, (err) => {});
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
				res.write("File uploaded and moved!");
				res.end();
			});
			res.write("File Uploaded");
			res.end();
			mailOptions.subject = "File Uploaded";
			mailOptions.text = `File ${files.filetoupload.originalFilename} Uploaded and moved to ${newpath}`;
			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log("Email sent: " + info.response);
				}
			});
		});
	} else {
		res.writeHead(200, {
			"Content-Type": "text/html",
		});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write("</form>");
		return res.end();
	}
}).listen(8080);
