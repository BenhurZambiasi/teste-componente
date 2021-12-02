import nodemailer from "nodemailer";
import { resolve } from "path";
import SMTP from "../config/smtp";
import exphbs from "express-handlebars";
import nodemailerhbs from "nodemailer-express-handlebars";

class Mail {
  constructor() {
    const { host, pass, port, user } = SMTP;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, "..", "template", "email");

    this.transporter.use(
      "compile",
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, "layouts"),
          partialsDir: resolve(viewPath, "partials"),
          defaultLayout: "default",
          extname: ".hbs",
        }),
        viewPath,
        extName: ".hbs",
      })
    );
  }
  sendMail(message) {
    return this.transporter.sendMail({
      ...SMTP.default,
      ...message,
    });
  }
}

export default new Mail();

// const path = require("path");
// import SMTP from "../config/smtp";
// const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");

// const transporter = nodemailer.createTransport({
//   host: SMTP.host,
//   port: SMTP.pass,
//   secure: false,
//   auth: {
//     user: SMTP.user,
//     pass: SMTP.pass,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// transporter.use(
//   "compile",
//   hbs({
//     viewEngine: "handlebars",
//     viewPath: path.resolve("./src/utils/auth/"),
//     extName: ".html",
//   })
// );

// export default transporter;
