import ejs from "ejs";
import path from "path";
import pdf from "html-pdf";
import puppeteer from "puppeteer";

import Discipline from "../models/discipline";
import User from "../models/user";

class DisciplineController {
  //criando
  async store(req, res) {
    try {
      const { name, user, turno, numberStudents } = req.body;
      const discipline = await Discipline.create({
        name,
        user,
        turno,
        numberStudents,
      });
      discipline.save();
      return res.send({ discipline });
    } catch (err) {
      return res
        .status(400)
        .send({ error: "Erro de cadastro!, informe os dados corretamente" });
    }
  }

  //listando
  async index(req, res) {
    try {
      const { idUser, usertype } = req.params;
      if (idUser && usertype == "Professor") {
        const discipline = await Discipline.find({ user: idUser }).select([
          "name",
          "numberStudents",
          "turno",
        ]);

        return res.send({ discipline });
      } else if (idUser && usertype == "Aluno") {
        const userDiscipline = await User.find({ _id: idUser })
          .populate("disciplines")
          .select("firstname");
        return res.send({ userDiscipline });
      }
      return res.status(400).send({
        error:
          "Informe o usertype corretamente, 2 para professor e 3 para aluno",
      });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Falha na requisição, preencha os dados corretamente" });
    }
  }

  async lista(req, res) {
    const { idDisciplina } = req.params;
    const user = await User.find({ disciplines: idDisciplina });
    return res.send(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    await Discipline.findOneAndRemove({ _id: id });
    return res
      .status(200)
      .send({ message: "Disciplina deletado com sucesso!!" });
  }
}
export default new DisciplineController();
