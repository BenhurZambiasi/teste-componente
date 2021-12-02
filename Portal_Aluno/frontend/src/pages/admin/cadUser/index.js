import React, { useState } from "react";

import avatarPadrao from "assets/image/avatar.png";
import { cpfMask } from "components/mask";
import Main from "components/template/main";
import { createUser } from "services/user";

import "./user.css";

const headerprops = {
  icon: "users",
  title: " Usuários",
  subtitle: "Cadastro de usuários",
};

const emptyUser = {
  firstname: "",
  lastname: "",
  email: "",
  cpf: "",
  userType: "",
  password: "",
};

const CreateUser = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();
  const [avatar, setAvatar] = useState(avatarPadrao);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState();
  const [messageSuccess, setMessageSuccess] = useState();

  function clear() {
    setFirstName(emptyUser.firstname);
    setLastName(emptyUser.lastname);
    setCpf(emptyUser.cpf);
    setEmail(emptyUser.email);
    setPassword(emptyUser.password);
    setUserType(emptyUser.userType);
    setAvatar(avatarPadrao);
  }

  async function create() {
    setLoading(true);
    await createUser(
      firstName,
      lastName,
      cpf,
      email,
      password,
      userType,
      avatar
    ).then(
      () => {
        setMessageSuccess("Cadastro realizado com sucesso!");
        setMessageError("");
        setLoading(false);
        clear();
      },
      (err) => {
        setMessageSuccess("");
        setMessageError(err.response.data.error);
        setLoading(false);
      }
    );
  }

  function handleSubmit() {
    create();
  }

  function getFoto(e) {
    const { files } = e.target;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      setAvatar(event.target.result);
      console.log(event);
    };
  }

  function handleCpfMask(target) {
    setCpf(cpfMask(target));
  }

  return (
    <Main {...headerprops}>
      <div className="formUser container">
        <div className="avatarUser">
          <div className="form-group">
            <div
              className="userAvatar"
              style={{
                backgroundImage: `url(${avatar})`,
              }}
            />
          </div>
        </div>

        <div className="btnfile">
          <label className="label">
            <div className="btnAvatar">Upload Foto</div>
          </label>
          <input
            type="file"
            className="file "
            name="file"
            id="file"
            accept="image/*"
            onChange={(e) => getFoto(e)}
          />
        </div>

        <div className="firstname">
          <div className="form-group ">
            <label>Nome</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control"
              onChange={({ target }) => setFirstName(target.value)}
              required
            />
          </div>
        </div>

        <div className="lastname">
          <div className="form-group">
            <label>Sobrenome</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
              required
            />
          </div>
        </div>
        <div className="cpf">
          <div className="form-group">
            <label>CPF</label>
            <input
              type="text"
              name="cpf"
              className="form-control"
              value={cpf}
              onChange={({ target }) => handleCpfMask(target.value)}
            />
          </div>
        </div>
        <div className="usertype">
          <div className="form-group">
            <label>Tipo de usuário</label>
            <select
              className="form-control"
              value={userType}
              onChange={(event) => setUserType(event.target.value)}>
              <option selected>Selecione um tipo</option>
              <option value="Administrador">Administrador</option>
              <option value="Professor">Professor</option>
              <option value="Aluno">Aluno</option>
            </select>
          </div>
        </div>
        <div className="email">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
        </div>
        <div className="password">
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </div>

        <div className="btn-conf">
          {loading ? (
            <button className="btnAttConfi">
              <div className="spinner" />
            </button>
          ) : (
            <>
              <button className="btnAttConfi " onClick={() => handleSubmit()}>
                Cadastrar
              </button>
              {messageSuccess && (
                <p className="messageSuccess">{messageSuccess}</p>
              )}
              {messageError && <p className="messageError">{messageError}</p>}
            </>
          )}
        </div>
      </div>
    </Main>
  );
};

export default CreateUser;
