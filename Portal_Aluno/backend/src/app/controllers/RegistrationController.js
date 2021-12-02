import Discipline from "../models/discipline";
import User from "../models/user";

class RegistrationController {
  //criando o registro
  async store(req, res) {
    try {
      const { cpf } = req.params;
      const { disciplines } = req.body;

      const disciplinas = await User.findOne({
        cpf: cpf,
        disciplines: { $in: disciplines },
      });

      if (disciplinas) {
        const discipline = await Discipline.find({ _id: disciplines }).select(
          "name"
        );

        return res
          .status(400)
          .send({ error: "Disciplina já cadastrada", discipline });
      }

      const user = await User.findOneAndUpdate(
        { cpf: cpf },
        { $push: { disciplines } },
        { new: true }
      );

      if (!user) {
        return res
          .status(400)
          .send({ error: "CPF incorreto ou não existente" });
      }

      return res.send({ user });
    } catch (error) {
      return res.status(400).send({ error: "CPF incorreto ou não existente" });
    }
  }
}

export default new RegistrationController();
