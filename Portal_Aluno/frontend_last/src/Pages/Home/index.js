import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Content, Card } from './style';
import CadastroUsuario from '../CadastroUsuario';
import CadastroDisciplina from '../CadastrarDisciplina';


const Home = () => {

    const [modalCadastroUsuario, setModalCadastroUsuario] = useState(false);
    const [modalCadastroDisciplina, setModalCadastroDisciplina] = useState(false);

    return (

        <Content>

            {/* MODAL */}
            {modalCadastroUsuario && <CadastroUsuario showModal1={setModalCadastroUsuario} />}
            {modalCadastroDisciplina && <CadastroDisciplina showModal2={setModalCadastroDisciplina} />}

            {/* TITULO */}
            <h1>Escolha uma das opções abaixo:</h1>

            {/* MENU */}
            <Card>

                <div onClick={() => setModalCadastroUsuario(true)} className="p1"><div className="p">Cadastrar novo usuário</div></div>
                <Link to="/Matricula" className="p2">Matricular aluno</Link>
                <div onClick={() => setModalCadastroDisciplina(true)} className="p3">Cadastrar disciplina</div>

            </Card>

        </Content>
    )
}
export default Home;