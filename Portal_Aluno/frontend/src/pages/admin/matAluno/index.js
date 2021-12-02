import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import Main from "components/template/main";
import { getAllDisciplines } from "../../../services/discipline";
import { registration } from "../../../services/registration";
import { getAllStudents } from "../../../services/students";
import "./styles.css";

import "../../../components/styles/styles.css";

const headerprops = {
  icon: "graduation-cap",
  title: " Mátriculas",
  subtitle: "Mátricula de Alunos",
};

const CreateUser = () => {
  const [cpf, setCpf] = useState();
  const [students, setStudents] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [discipline, setDiscipline] = useState([]);
  const [disciplineError, setDisciplineError] = useState([]);

  const [loading, setLoading] = useState(false);
  const [checked, setCheck] = useState(false);
  const [messageError, setMessageError] = useState();
  const [messageSuccess, setMessageSuccess] = useState();
  const [erroForm, setErrorForm] = useState();

  const [smShow, setSmShow] = useState(false);

  async function registrationStudent() {
    setLoading(true);
    await registration(cpf, discipline).then(
      (resp) => {
        setMessageSuccess("Cadastro realizado com sucesso!");
        setMessageError("");
        setLoading(false);
        setSmShow(true);
      },
      (err) => {
        setDisciplineError(err.response.data.discipline);
        setMessageSuccess("");
        setMessageError(err.response.data.error);
        setLoading(false);
        setSmShow(true);
      }
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (cpf === undefined) {
      setErrorForm("Por favor selecione um aluno");
    } else if (discipline.length === 0) {
      setErrorForm("Por favor selecione uma disciplina");
    } else {
      registrationStudent();
    }
  }

  async function getStudents() {
    const resp = await getAllStudents();
    setStudents(resp.students);
  }

  async function getDiscipline() {
    const resp = await getAllDisciplines();
    setDisciplines(resp.discipline);
  }

  useEffect(() => {
    getStudents();
    getDiscipline();
  }, []);

  function handleDisciplina(disc) {
    setCheck(!checked);
    const discp = [...discipline];
    const res = discp.includes(disc);
    if (res) {
      const index = discp.indexOf(disc);
      discp.splice(index, 1);
      setDiscipline(discp);
    } else {
      discp.push(disc);
      setDiscipline(disciplines);
    }
  }

  function ErrorMessage() {
    return (
      <>
        <Modal
          show={smShow}
          onHide={() => setSmShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <p className="messageError">Erro ao matricular </p>
              <p className="messageError">
                Aluno já matriculado nas disciplinas abaixo
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ flexDirection: "row", display: "flex" }}>
            {disciplineError.map((item) => (
              <p className="messageError">{item.name} </p>
            ))}
          </Modal.Body>
        </Modal>
      </>
    );
  }

  function SucccesMessage() {
    return (
      <>
        <Modal
          show={smShow}
          onHide={() => setSmShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <p className="success">Aluno matriculado com sucesso! </p>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
  return (
    <Main {...headerprops}>
      <form className="form container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Aluno</label>
              <select
                className="form-control"
                onChange={(event) => setCpf(event.target.value)}>
                <option value="" disabled selected>
                  Selecione um Aluno
                </option>
                {students.map((student) => (
                  <option key={student._id} value={student.cpf}>
                    {student.firstname} {student.lastname}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                value={cpf}
                className="form-control"
                disabled
              />
            </div>
          </div>

          <div className="col-12 col-md-12 disciplines">
            <label className="labelDiscipline">Disciplinas</label>
            <div className="form-group discipline">
              {disciplines.map((disc) => (
                <div>
                  <input
                    className="check"
                    type="checkbox"
                    value={disc._id}
                    onClick={() => handleDisciplina(disc._id)}
                  />
                  <label style={{ marginLeft: 10 }}> {disc.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        <div>
          {loading ? (
            <button className="btn btn-primary loading">
              <div className="spinner" />
            </button>
          ) : (
            <>
              <button className="btn btn-primary loading">Cadastrar</button>

              {messageSuccess && <SucccesMessage />}

              {messageError && <ErrorMessage />}

              {erroForm && cpf === undefined && (
                <p className="messageError">{erroForm}</p>
              )}

              {erroForm && discipline.length === 0 && (
                <p className="messageError">{erroForm}</p>
              )}
            </>
          )}
        </div>
      </form>
    </Main>
  );
};

export default CreateUser;
