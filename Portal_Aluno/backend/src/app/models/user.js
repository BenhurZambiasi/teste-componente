import mongoose from "../../database";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
  },

  disciplines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discipline",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

export default User;
