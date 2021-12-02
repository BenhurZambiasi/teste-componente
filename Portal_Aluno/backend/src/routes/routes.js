import { Router } from "express";
import express from "express";

import UserController from "../app/controllers/UserController";
import SessionController from "../app/controllers/SessionController";
import DisciplineController from "../app/controllers/DisciplineController";
import ContentController from "../app/controllers/ContentController";
import RegistrationController from "../app/controllers/RegistrationController";
import NotaController from "../app/controllers/NotaController";

import TeacherController from "../app/controllers/TeacherController";
import StudentsController from "../app/controllers/StudentsController";
import AdminController from "../app/controllers/AdminController";

import PdfDisciplines from "../utils/pdfDisciplines";
import authMiddleware from "../app/middlewares/auth";

const routes = new Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */
/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
routes.get("/", (req, res) => {
  res.send("ok");
});


routes.post("/sessions", SessionController.store);

routes.post("/sessions/adm", SessionController.loginAdm);
routes.post("/sessions/teacher", SessionController.loginTeacher);
routes.post("/sessions/resetpassword", SessionController.resetPassword);

routes.post("/sessions/forgot", SessionController.forgotPassword);

routes.post("/users", UserController.store);

routes.get("/pdf/:id", PdfDisciplines.generatePdf);
routes.get("/pdfs/:id", PdfDisciplines.downloadPdf);

// routes.use(authMiddleware);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.index);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.post("/discipline", DisciplineController.store);
routes.get("/discipline/:id", DisciplineController.lista);
routes.delete("/discipline/:id", DisciplineController.delete);
routes.get("/discipline/:idUser/:usertype", DisciplineController.index);

routes.post("/nota/:idDisciplina", NotaController.store);

routes.post("/content/:id", ContentController.store);
routes.get("/content/", ContentController.index);
routes.get("/content/:id", ContentController.index);
routes.delete("/content/:id", ContentController.delete);

routes.get("/teacher", TeacherController.getTeacher);
routes.get("/students", StudentsController.getStudents);
routes.get("/students/:id", StudentsController.getDisciplineId);
routes.get("/admins", AdminController.getAdmin);

routes.post("/registration/:cpf", RegistrationController.store);

export default routes;
