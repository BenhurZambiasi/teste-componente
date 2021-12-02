import Content from "../models/content";
import Discipline from "../models/discipline";

class ContentController {
  //criando
  async store(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const discipline = await Discipline.findById({ _id: id });
      const content = await Content.create({ title, description });
      await discipline.contents.push(content);
      discipline.save();

      return res.send({ discipline });
    } catch (err) {
      return res.status(400).send({ error: "Erro de cadastro!" });
    }
  }

  //listagem de disciplina com conteudos
  async index(req, res) {
    try {
      const { id } = req.params;
      if (id == null) {
        const discipline = await Discipline.find().populate("user", [
          "firstname",
          "lastname",
        ]);

        return res.send({ discipline });
      }
      const discipline = await Discipline.findById({ _id: id }).populate([
        "contents",
      ]);
      return res.send({ discipline });
    } catch (error) {
      return res.status(400).send({ error: "Erro de cadastro!" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const delet = await Content.findByIdAndDelete(id);
      return res.status(200).send({ ok: "Conteudo excluido com sucesso!" });
    } catch (error) {
      return res.status(400).send({ error: "Erro de cadastro!" });
    }
  }
}
export default new ContentController();
