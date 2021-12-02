import React, { useState } from "react";

import { useAuth } from "components/contexts/auth";
import Main from "components/template/main";

import { upDateUser } from "services/user";

import "./home.css";

function Home() {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState(user.password);
  const [avatar, setAvatar] = useState(user.avatar);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(true);

  async function handleUpate() {
    setLoading(true);
    await upDateUser(user._id, firstName, lastName, email, senha, avatar);
    user.firstname = firstName;
    user.lastname = lastName;
    user.email = email;
    setEdit(true);
    setLoading(false);
  }

  function getFoto(e) {
    const { files } = e.target;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      user.avatar = event.target.result;
      setAvatar(event.target.result);
    };
  }

  function senhas() {
    setMostrarSenha(!mostrarSenha);
  }

  return (
    <Main icon="home" title=" Início" subtitle={`Área do ${user.usertype}`}>
      <div className="container">
        <div>
          <div style={{ fontSize: 30 }}>Bem Vindo!</div>
        </div>

        <hr />
        <p className="mb-2" style={{ fontSize: 30 }}>
          Meus dados
        </p>

        <div className="formHome form">
          <div className="avatar">
            <div className="form-group">
              <img src={user.avatar} alt="avatar" className="homeAvatar" />
            </div>
          </div>

          <div className="firstname">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Digite seu Nome"
                value={firstName}
                disabled={edit}
                onChange={({ target }) => setFirstName(target.value)}
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
                placeholder="Digite seu Nome"
                value={lastName}
                disabled={edit}
                onChange={({ target }) => setLastName(target.value)}
              />
            </div>
          </div>
          <div className="email">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Digite seu Email"
                value={email}
                disabled={edit}
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
          </div>
          <div className="passsword">
            <div className="form-group senha">
              <div>
                <label>Senha</label>
                <div className="mostrar" onClick={senhas}>
                  {mostrarSenha ? "Ocultar Senha" : "Mostrar Senha"}
                </div>
              </div>
              <input
                type={mostrarSenha ? "text" : "password"}
                name="lastName"
                className="form-control"
                placeholder="Digite seu Nome"
                value={senha}
                disabled={edit}
                onChange={({ target }) => setSenha(target.value)}
              />
            </div>
          </div>
          <div className="btnfile">
            {!edit && (
              <label htmlFor="file" className="label">
                <div className="btnAvatar">Alterar Foto</div>
              </label>
            )}

            <input
              type="file"
              className="file "
              name="file"
              id="file"
              accept="image/*"
              onChange={(e) => getFoto(e)}
            />
          </div>
          <div className="cpf">
            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                className="form-control"
                placeholder="Digite seu Nome"
                value={user.cpf}
                disabled
              />
            </div>
          </div>
          <div className="usertype">
            <div className="form-group">
              <label>Tipo de Usuário</label>
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder="Digite seu Email"
                value={user.usertype}
                disabled
              />
            </div>
          </div>

          <div className="btn-conf">
            {edit === true ? (
              <button className="btnAttConfi " onClick={() => setEdit(false)}>
                Atualizar
              </button>
            ) : loading ? (
              <button className="btnAttConfi">
                <div className="spinners" />
              </button>
            ) : (
              <button className="btnAttConfi " onClick={handleUpate}>
                Confirmar
              </button>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Home;
