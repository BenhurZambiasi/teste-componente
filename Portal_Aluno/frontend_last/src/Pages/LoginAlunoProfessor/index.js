import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Title,
  Formulario,
  Check,
  CheckBox,
  Box1,
  Box2,
  Senha,
  Botao,
  Imagem,
} from "./style";
import { GiGraduateCap } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";
import Img from "../../assets/img2.svg";
import Api from "../../services/Api";
import Alert from "../../components/ModalAlerts/ErroAlert";
import { Table } from "react-bootstrap";

const MeuPortal = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [loading, setloading] = useState(false);
  const [modalAlertErro, setModalAlertErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    loginUser();
  }

  function loginUser() {
    setloading(true);
    if (checkbox === "2") {
      Api.post("/sessions/teacher", { email: email, password: senha }).then(
        (response) => {
          if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("firstname", response.data.user.firstname);
            sessionStorage.setItem("check", checkbox);
            sessionStorage.setItem("user", response.data.user._id);

            history.push({
              pathname: "/ListaDeDisciplinas",
              state: response.data,
            });
            window.location.reload();
          }
        },
        (err) => {
          setErrorMessage(err.response.data.error);
          setModalAlertErro(true);
          setloading(false);
        }
      );
    } else {
      Api.post("/sessions", { email: email, password: senha }).then(
        (response) => {
          if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("firstname", response.data.user.firstname);
            sessionStorage.setItem("check", checkbox);
            sessionStorage.setItem("user", response.data.user._id);
            history.push({
              pathname: "/ListaDeDisciplinas",
              state: response.data,
            });
            window.location.reload();
          }
        },
        (err) => {
          setErrorMessage(err.response.data.error);
          setModalAlertErro(true);
          setloading(false);
        }
      );
    }
  }

  return (
    <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>asdsas</th>
          </tr>
        </thead>
      </Table>
    </div>
    // <>
    //   {/* MODAL */}
    //   {modalAlertErro && (
    //     <Alert showAlertErro={setModalAlertErro} text={errorMessage} />
    //   )}

    //   <Container>
    //     {/* TITULO */}
    //     <Title>
    //       <h1>meu portal</h1>
    //     </Title>

    //     {/* FORMULARIO */}
    //     <Formulario>
    //       <form onSubmit={handleSubmit}>
    //         {/* CHECK BOX*/}
    //         <Check>
    //           {/* CHECK BOX ESTUDANTE */}
    //           <CheckBox>
    //             <input
    //               className="Box1"
    //               id="checkbox"
    //               type="radio"
    //               value="3"
    //               name="box1"
    //               onChange={({ target }) => setCheckbox(target.value)}
    //             />
    //             <label htmlFor="checkbox">
    //               {" "}
    //               <GiGraduateCap fontSize="30" /> <span>Estudante</span>{" "}
    //             </label>
    //           </CheckBox>

    //           {/* CHECK BOX PROFESSOR */}
    //           <CheckBox>
    //             <input
    //               className="Box1"
    //               id="checkbox2"
    //               type="radio"
    //               value="2"
    //               name="box1"
    //               onClick={({ target }) => setCheckbox(target.value)}
    //             />
    //             <label htmlFor="checkbox2">
    //               {" "}
    //               <GoBriefcase fontSize="25" /> <span>Professor</span>{" "}
    //             </label>
    //           </CheckBox>
    //         </Check>

    //         {/* INPUT EMAIL */}
    //         <Box1>
    //           <label htmlFor="Email">E-mail</label>
    //           <input
    //             id="Email"
    //             type="email"
    //             value={email}
    //             onChange={(event) => setEmail(event.target.value)}
    //             required
    //           />
    //         </Box1>

    //         {/* INPUT SENHA */}
    //         <Box2>
    //           <label htmlFor="Senha">Senha</label>
    //           <input
    //             id="Senha"
    //             type="password"
    //             value={senha}
    //             onChange={(event) => setSenha(event.target.value)}
    //             minLength="6"
    //             required
    //           />
    //         </Box2>

    //         {/* LINK PARA REDEFINIR SENHA */}
    //         <Senha>
    //           <Link to="/RedefinirSenhaAlunoProfessor">
    //             <strong>Esqueci senha</strong>
    //           </Link>
    //         </Senha>

    //         {/* BOTAO */}
    //         <Botao>
    //           {loading ? (
    //             <button>
    //               {" "}
    //               <div className="spinner"></div>
    //             </button>
    //           ) : (
    //             <button>
    //               {" "}
    //               <strong>Entrar</strong>{" "}
    //             </button>
    //           )}
    //         </Botao>
    //       </form>
    //     </Formulario>

    //     {/* IMAGEM */}
    //     <Imagem>
    //       <img src={Img} alt="ilustração de alguém caminhando"></img>
    //     </Imagem>
    //   </Container>
    // </>
  );
};

export default MeuPortal;
