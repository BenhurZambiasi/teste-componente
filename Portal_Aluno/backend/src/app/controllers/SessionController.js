import User from "../models/user";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import mailer from "../../utils/email";
import enviar from "../jobs/sendPassword";
import { log } from "console";
const path = require("path");

class SessionController {
  //iniciando a sessão
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email })
        .select("+password")
        .populate("disciplines");

      if (!user) return res.status(400).send({ error: "Email inválido " });

      if (user.password !== password)
        return res.status(400).send({ error: "Senha inválida" });

      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: "7d",
      });

      res.send({ user, token });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Falha no login, usuário ou senha inválida" });
    }
  }

  async loginAdm(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");
      if (!user) return res.status(400).send({ error: "Email inválido " });
      if (user.usertype != "Administrador")
        return res
          .status(400)
          .send({ error: "Acesso negado, é necessario ser adminstrador" });
      if (user.password !== password)
        return res.status(400).send({ error: "Senha inválida" });
      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: "7d",
      });
      res.send({ user, token });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Falha no login, usuário ou senha inválida" });
    }
  }
  async loginTeacher(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email })
        .select("+password")
        .populate(["avatar"]);

      if (!user) return res.status(400).send({ error: "Email inválido " });
      if (user.password !== password)
        return res.status(400).send({ error: "Senha inválida" });

      if (user.usertype === "Aluno")
        return res.status(400).send({ error: "Acesso negado" });

      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: "7d",
      });

      res.send({ user, token });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Falha no login, usuário ou senha inválida" });
    }
  }

  //resetando o password
  async resetPassword(req, res) {
    try {
      const { email, cpf, password } = req.body;
      const options = { new: true };
      const user = await User.findOneAndUpdate(
        { email, cpf },
        { email, cpf, password },
        options
      );
      if (!user)
        return res.status(400).send({ error: "Email ou CPF inválidos" });
      res.send(user);
    } catch (error) {
      return res.status(400).send({ error: "Falha na requisição" });
    }
  }

  async forgotPassword(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ email }).select([
      "password",
      "firstname",
    ]);
    if (!user) return res.status(400).send({ error: "Email inválidos" });
    enviar.handle(user, email);
    return res.status(200).send({ ok: "email enviado com sucesso" });
  }
}

export default new SessionController();
