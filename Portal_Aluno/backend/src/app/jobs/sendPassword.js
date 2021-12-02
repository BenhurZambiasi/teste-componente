import Mail from "../../utils/email";

class SendPassword {
  async handle(user, email) {
    const { firstname, password } = user;
    await Mail.sendMail({
      to: `${firstname} < ${email} >`,
      subject: "Esqueci senha",
      template: "forgot_password",
      context: {
        firstname,
        password,
      },
    });
  }
}

export default new SendPassword();
