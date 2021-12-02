import React, { useState } from 'react';
import { Exit, Container, Formulario, Title, Select, Button } from './style';
import Api from '../../services/Api';
import { BsX } from "react-icons/bs";
import AlertSuccess from '../../components/ModalAlerts/SuccessAlert';
import AlertErro from '../../components/ModalAlerts/ErroAlert';
import { useHistory } from 'react-router-dom';


const Usuario = (props) => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [tipoUsuario, setTipoUsuario] = useState();
    const [modalAlertSuccess, setModalAlertSuccess] = useState(false);
    const [modalAlertErro, setModalAlertErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();


    function ModalClickSuccess() {
        setModalAlertSuccess(false);
        history.push('/Home')
        window.location.reload();
    }

    function handleSubmit(event) {
        event.preventDefault();
        createUser();
    }

    function createUser() {

        Api.post("/users", { firstname: nome, lastname: sobrenome, cpf, email, password: senha, usertype: tipoUsuario }, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then(res => {
            if (res.data) {
                setModalAlertSuccess(true)
            }
        }, (err) => {
            setErrorMessage(err.response.data.error);
            setModalAlertErro(true);
        })
    }

    return (

        <>
            {/* MODAL */}
            {modalAlertSuccess && <AlertSuccess showAlertSuccess={ModalClickSuccess} text={"Usuário Cadastrado"} />}
            {modalAlertErro && <AlertErro showAlertErro={setModalAlertErro} text={errorMessage} />}

            <Container>
                <Formulario>

                    {/* SAIR */}
                    <Exit onClick={() => props.showModal1(false)}>
                        <BsX fontSize={30} color="red" />
                    </Exit>

                    {/* TITULO */}
                    <Title>
                        <h1>Cadastro de Usuário</h1>
                    </Title>

                    {/* FORMULÁRIO */}
                    <form onSubmit={handleSubmit}>
                        <div className="inputNome">

                            {/* INPUT NOME */}
                            <input className="input1" id="nome" type="text" placeholder="Nome" value={nome} required onChange={(event) => setNome(event.target.value)} />

                            {/* INPUT SOBRENOME */}
                            <input className="input2" id="sobrenome" type="text" placeholder="Sobrenome" value={sobrenome} required onChange={(event) => setSobrenome(event.target.value)} />
                        </div>

                        {/* INPUT CPF */}
                        <input id="cpf" type="text" placeholder="CPF" value={cpf} required onChange={(event) => setCpf(event.target.value)} />

                        {/* INPUT EMAIL */}
                        <input id="email" type="text" placeholder="E-mail" value={email} required onChange={(event) => setEmail(event.target.value)} />

                        {/* INPUT SENHA */}
                        <input id="senha" type="password" placeholder="Senha" value={senha} required onChange={(event) => setSenha(event.target.value)} />

                        {/* INPUT TIPO DE USUARIO*/}
                        <Select>
                            <select
                                id="disciplinas"
                                onChange={(event) => setTipoUsuario(event.target.value)}
                            >
                                <option value="1" selected>Administrador</option>
                                <option value="2" selected>Professor</option>
                                <option value="3" selected>Aluno</option>
                                <option value="" disabled selected>Tipo de Usuário</option>

                            </select>
                        </Select>

                        {/* BOTÃO */}
                        <Button>
                            <button>Salvar</button>
                        </Button>

                    </form>

                </Formulario>

            </Container>
        </>
    )
}

export default Usuario;