import User from "../models/user";

class AdminController {
  async getAdmin(req, res) {
    const admins = await User.find({ usertype: "Administrador" });
    return res.status(200).json({ admins });
  }
}
export default new AdminController();
