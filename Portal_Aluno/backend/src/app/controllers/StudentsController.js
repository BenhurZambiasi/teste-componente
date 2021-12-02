import Discipline from "../models/discipline";
import User from "../models/user";

class StudentsController {
  async getStudents(req, res) {
    const students = await User.find({ usertype: "Aluno" })
      .select(["_id", "firstname", "lastname", "cpf"])
      .populate("disciplines");

    return res.status(200).json({ students });
  }

  async getDisciplineId(req, res) {
    const { id } = req.params;
    const discipline = await Discipline.findById(id).select("name");

    return res.status(200).json({ discipline });
  }
}
export default new StudentsController();
