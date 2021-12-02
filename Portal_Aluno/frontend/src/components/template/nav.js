import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import "./nav.css";

function Nav(props) {
  const { signOut, user } = useAuth();

  const local = window.location.pathname;

  console.log(local);

  return (
    <>
      {user.usertype === "Administrador" && (
        <aside className="menu-area">
          <nav className="menu">
            <Link to="/" className={`${local === "/" && "activeLocation"}`}>
              <i className="fa fa-home"></i> Início
            </Link>
            <Link
              to="/users"
              className={`${local === "/users" && "activeLocation"}`}>
              <i className="fa fa-users"></i> Cadastro Usuário
            </Link>
            <Link
              to="/disciplina"
              className={`${local === "/disciplina" && "activeLocation"}`}>
              <i className="fa fa-book"></i> Cadastro Disciplina
            </Link>
            <Link
              to="/matAluno"
              className={`${local === "/matAluno" && "activeLocation"}`}>
              <i className="fa fa-graduation-cap"></i> Mátricula Aluno
            </Link>
            <Link to="#" onClick={signOut}>
              <i class="fa fa-sign-out"></i> Sair
            </Link>
          </nav>
        </aside>
      )}

      {user.usertype === "Professor" && (
        <aside className="menu-area">
          <nav className="menu">
            <Link to="/" className={`${local === "/" && "activeLocation"}`}>
              <i className="fa fa-home"></i> Início
            </Link>

            <Link
              to="/disciplinas"
              className={`${local === "/disciplinas" && "activeLocation"}`}>
              <i className="fa fa-graduation-cap"></i> Disciplinas
            </Link>
            <Link
              to="/publicContent"
              className={`${local === "/publicContent" && "activeLocation"}`}>
              <i className="fa fa-book"></i> Publicar Novo Conteudo
            </Link>
            <Link
              to="/publicNota"
              className={`${local === "/publicNota" && "activeLocation"}`}>
              <i className="fa fa-pencil-square-o"></i> Publicar Notas
            </Link>

            <Link to="#" onClick={signOut}>
              <i class="fa fa-sign-out"></i> Sair
            </Link>
          </nav>
        </aside>
      )}

      {user.usertype === "Aluno" && (
        <aside className="menu-area">
          <nav className="menu">
            <Link to="/">
              <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
              <i className="fa fa-users"></i> Aluno
            </Link>
            <Link to="/disciplina">
              <i className="fa fa-book"></i> Cadastro Disciplina
            </Link>
            <Link to="/matAluno">
              <i className="fa fa-graduation-cap"></i> Mátricula Aluno
            </Link>

            <Link to="#" onClick={signOut}>
              <i className="fa fa-sign-out"></i> Sair
            </Link>
          </nav>
        </aside>
      )}
    </>
  );
}

export default Nav;
