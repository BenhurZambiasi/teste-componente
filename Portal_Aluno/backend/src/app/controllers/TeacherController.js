import User from "../models/user";

class TeacherController {
  async getTeacher(req, res) {
    const teachers = await User.find({ usertype: "Professor" });
    return res.status(200).json({ teachers });
  }
  //editando
}
export default new TeacherController();
