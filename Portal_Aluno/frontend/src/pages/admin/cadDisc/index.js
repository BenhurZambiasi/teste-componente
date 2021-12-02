import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import Main from "components/template/main";
import {
  createDiscipline,
  deleteDiscipline,
  getAllDisciplines,
} from "services/discipline";
import { getAllTeachers } from "services/teacher";

import "components/styles/styles.css";
import "./cadDisc.css";

const headerprops = {
  icon: "book",
  title: " Disciplinas",
  subtitle: "Cadastro de disciplinas",
};

const emptDisciplines = {
  disciplina: "",
  qtdAlunos: "",
};

const CadDisciplina = () => {
  const [disciplina, setDisciplina] = useState();
  const [qtdAlunos, setQtdAlunos] = useState();
  const [professor, setProfessor] = useState();
  const [turno, setTurno] = useState();
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [messageError, setMessageError] = useState();
  const [messageSuccess, setMessageSuccess] = useState();
  const [disciplines, setDisciplines] = useState([]);

  function clear() {
    setDisciplina(emptDisciplines.disciplina);
    setQtdAlunos(emptDisciplines.qtdAlunos);
    setProfessor(emptDisciplines.qtdAlunos);
  }
  async function getTeachers() {
    const resp = await getAllTeachers();
    setTeachers(resp.teachers);
  }

  async function create() {
    clear();
    setLoading(true);
    await createDiscipline(disciplina, professor, turno, qtdAlunos).then(
      (resp) => {
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
    setLoading(false);
  }

  async function deleteDisciplineId(id) {
    await deleteDiscipline(id);
  }

  async function getDiscipline() {
    const resp = await getAllDisciplines();
    setDisciplines(resp.discipline);
  }

  useEffect(() => {
    getDiscipline();
    getTeachers();
  }, [disciplines]);

  return (
    <Main {...headerprops}>
      <div className="formDisc container-fluid">
        <div className="discp">
          <div className="form-group">
            <label>Disciplina</label>
            <input
              type="text"
              name="disciplina"
              className="form-control"
              value={disciplina}
              onChange={({ target }) => setDisciplina(target.value)}
            />
          </div>
        </div>

        <div className="qtdalunos">
          <div className="form-group">
            <label>Quantidades de Alunos</label>
            <input
              type="text"
              name="qtdalunos"
              className="form-control"
              value={qtdAlunos}
              onChange={({ target }) => setQtdAlunos(target.value)}
            />
          </div>
        </div>
        <div className="turno">
          <div className="form-group">
            <label>Turno</label>
            <select
              className="form-control"
              value={turno}
              onChange={(event) => setTurno(event.target.value)}>
              <option value="" disabled selected>
                Selecione um Turno
              </option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>
        </div>

        <div className="professor">
          <div className="form-group">
            <label>Professor</label>
            <select
              className="form-control"
              value={professor}
              onChange={(event) => setProfessor(event.target.value)}>
              <option value="" disabled selected>
                Selecione um Professor
              </option>
              {teachers.map((teacher) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.firstname} {teacher.lastname}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="btnCadastrar">
          {loading ? (
            <button className="btn btn-primary loading">
              <div className="spinner" />
            </button>
          ) : (
            <>
              <button className="button" onClick={create}>
                Cadastrar
              </button>
              {messageSuccess && (
                <p className="DmessageSuccess">{messageSuccess}</p>
              )}
              {messageError && <p className="DmessageError">{messageError}</p>}
            </>
          )}
        </div>
      </div>

      <hr />
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="tabela container-fluid">
        <thead>
          <tr>
            <th colSpan="4">Disciplinas</th>
          </tr>
          <tr>
            <th>Título</th>
            <th>Professor</th>
            <th>Turno</th>
            <th>Qtd Alunos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {disciplines.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td className="descricao">
                {item.user.firstname} {item.user.lastname}
              </td>
              <td className="descricao">{item.turno}</td>
              <td className="descricao">{item.numberStudents}</td>
              <td
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}>
                <i
                  className="fa fa-trash-o fa-2x"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteDisciplineId(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Main>
  );
};

export default CadDisciplina;
