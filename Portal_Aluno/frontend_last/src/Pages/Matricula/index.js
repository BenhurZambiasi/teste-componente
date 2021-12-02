import React, { useState, useEffect } from "react";
import { Exit, Container, Selects, Button } from "./style";
import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Api from "../../services/Api";
import AlertSuccess from "../../components/ModalAlerts/SuccessAlert";
import AlertErro from "../../components/ModalAlerts/ErroAlert";
import { useHistory } from "react-router-dom";

const Matricula = (props) => {
  const history = useHistory();
  const [matricula, setMatricula] = useState();
  const [disciplinas, setDisciplinas] = useState([]);
  const [disciplinesSelected, setDisciplinesSelected] = useState([]);
  const [modalAlertSuccess, setModalAlertSuccess] = useState(false);
  const [modalAlertErro, setModalAlertErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function ModalClickSuccess() {
    setModalAlertSuccess(false);
    history.push("/Home");
  }

  useEffect(() => {
    Api.get("/content", {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((response) => {
      setDisciplinas(response.data.discipline);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    cadastrarDisciplinas();
  }

  function cadastrarDisciplinas() {
    Api.post(
      `/registration/${matricula}`,
      { disciplines: disciplinesSelected },
      {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
    ).then(
      (response) => {
        if (response.data) {
          setModalAlertSuccess(true);
        }
      },
      (err) => {
        setErrorMessage(err.response.data.error);
        setModalAlertErro(true);
      }
    );
  }

  return (
    <>
      {/* MODAL */}
      {modalAlertSuccess && (
        <AlertSuccess
          showAlertSuccess={ModalClickSuccess}
          text={"Aluno matriculado"}
        />
      )}

      {modalAlertErro && (
        <AlertErro showAlertErro={setModalAlertErro} text={errorMessage} />
      )}

      {/* SAIR */}
      <Exit>
        <Link to="/Home">
          <BsBoxArrowInLeft fontSize={30} color="#000" />
        </Link>
      </Exit>

      {/* CONTAINER */}
      <Container>
        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit}>
          {/* INPUT N° MATRICULA ALUNO */}
          <input
            id="number"
            type="text"
            placeholder="CPF"
            value={matricula}
            required
            onChange={(event) => setMatricula(event.target.value)}
          />
          <br />

          {/* SELECT DISCIPLINA */}
          <Selects>
            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[0] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>
            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[1] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>

            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[2] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>

            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[3] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>

            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[4] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>

            <select
              id="disciplinas"
              defaultValue="Disciplina"
              onChange={(event) => {
                let disciplines = [...disciplinesSelected];
                disciplines[5] = event.target.value;
                setDisciplinesSelected(disciplines);
              }}>
              <option disabled>Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina._id} value={disciplina._id}>
                  {disciplina.name}
                </option>
              ))}
            </select>
          </Selects>
          <Button>
            <button type="submit">Salvar</button>
          </Button>
        </form>
      </Container>

      {/* BOTÃO */}
    </>
  );
};

export default Matricula;
