import express from "express";
import routes from "./routes/routes";
import path from "path";
import Cors from "cors";
import swaggerUi from "swagger-ui-express";
import openApiDocumentation from "../swagger.json";

import "./database";
class App {
  constructor() {
    this.server = express();
    this.server.use(Cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(
      "/swagger",
      swaggerUi.serve,
      swaggerUi.setup(openApiDocumentation)
    );
    this.server.use(routes);
  }
}

export default new App().server;
