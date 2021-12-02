require("dotenv").config();

import express from "express";
import app from "./app";
import bodyParser from "body-parser";

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portal Aluno",
      version: "1.0.0",
      description:
        "API de cadastro de usuários e aplicação para isntituições de ensino",
    },
    servers: [
      {
        url: process.env.APP_SERVER,
      },
    ],
  },
  apis: ["./routes/*js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const porta = process.env.PORT || process.env.APP_SERVER;

app.listen(porta);
