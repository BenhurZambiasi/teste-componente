import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Title, Formulario, Box1, Box2, Box3, Botao, Imagem, BotaoVoltar } from './style';
import Img from '../../assets/img2.svg'
import Api from '../../services/Api';
import AlertErro from '../../components/ModalAlerts/ErroAlert';
import AlertSuccess from '../../components/ModalAlerts/SuccessAlert';


const SenhaAlunoProfessor = () => {
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);
    const [modalAlertSuccess, setModalAlertSuccess] = useState(false);
    const [modalAlertErro, setModalAlertErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();

    function ModalClickSuccess() {
        setModalAlertSuccess(false);
        history.push("/MeuPortal");
    }

    function handleSubmit(event) {
        event.preventDefault();
        senha();
    }

    function senha() {
        setloading(true)
        Api.post("/sessions/resetpassword", { email, cpf, password }).then(response => {
            if (response.data) {
                setModalAlertSuccess(true)
            }
        }, (err) => {
            setErrorMessage(err.response.data.error);
            setModalAlertErro(true);
            setloading(false)
        })
    }

    return (

        <>
            {/* MODAL */}
            {modalAlertSuccess && <AlertSuccess
                showAlertSuccess={ModalClickSuccess}
                text={"As suas Informações foram atualizadas, senha redefinida."}
            />}

            {modalAlertErro && <AlertErro
                showAlertErro={setModalAlertErro}
                text={errorMessage}
            />}

            <Container>

                {/* TITULO */}
                <Title>
                    <h1>esqueci senha</h1>
                </Title>

                {/* FORMULARIO */}
                <Formulario>
                    <form onSubmit={handleSubmit}>


                        {/* INPUT EMAIL */}
                        <Box1>
                            <label htmlFor="Email">E-mail</label>
                            <input
                                id="Email"
                                Type="email"
                                Value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </Box1>

                        {/* INPUT CPF */}
                        <Box2>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                id="cpf"
                                Type="text"
                                Value={cpf}
                                onChange={(event) => setCpf(event.target.value)}
                                required
                            />
                        </Box2>

                        {/* INPUT NOVA SENHA */}
                        <Box3>
                            <label htmlFor="Senha">Nova Senha</label>

                            <input
                                id="Senha"
                                Type="password"
                                Value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                minLength='6'
                                required
                            />
                        </Box3>

                        {/* BOTAO */}
                        <Botao>
                            {loading ? <button> <div className="spinner"> </div> </button> : <button> <strong>Redefinir Senha</strong> </button>}
                        </Botao>

                        <BotaoVoltar>
                            <button >
                                <Link to="/MeuPortal" className="LinkButton">
                                    <strong>Voltar</strong>
                                </Link>
                            </button>
                        </BotaoVoltar>
                    </form>
                </Formulario>

                {/* IMAGEM */}
                <Imagem>
                    <img src={Img} alt='ilustração de alguém caminhando'></img>
                </Imagem>

            </Container>

        </>
    )
}

export default SenhaAlunoProfessor;