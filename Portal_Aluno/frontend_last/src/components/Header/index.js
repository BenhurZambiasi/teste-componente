import React, { useState } from 'react';
import { Container, User } from './style';
import { FaUserCircle } from "react-icons/fa";

import UpdateUsuario from '../../Pages/UpdateUsuario'

const Header = () => {

  const [modalCadastroUsuario, setModalCadastroUsuario] = useState(false);


  return (

    <Container>
      {modalCadastroUsuario && <UpdateUsuario showModal1={setModalCadastroUsuario} />}
      <h2>Bem-vindo, {sessionStorage.getItem("firstname")}</h2>

      <User>
        <ul>
          <li data-dropdown>
            <FaUserCircle fontSize={50} color="#fff" />
            <ul className="dropdown-menu animeDown">
              <li> <p onClick={() => setModalCadastroUsuario(true)}>Meus Dados</p> </li>
              <li> <a href="/MeuPortal" onClick={() => sessionStorage.removeItem('token')}>Sair </a></li>
            </ul>
          </li>
        </ul>
      </User>

    </Container>

  );
};

export default Header;