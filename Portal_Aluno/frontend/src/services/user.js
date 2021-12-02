import api from "./api";

export async function createUser(
  firstname,
  lastname,
  cpf,
  email,
  password,
  usertype,
  avatar
) {
  const response = await api.post("/users", {
    firstname,
    lastname,
    cpf,
    email,
    password,
    usertype,
    avatar,
  });
  return response;
}

export async function upDateUser(
  id,
  firstname,
  lastname,
  email,
  password,
  avatar
) {
  const res = await api.put(`/users/${id}`, {
    firstname,
    lastname,
    email,
    password,
    avatar,
  });
  return res.data.user;
}
