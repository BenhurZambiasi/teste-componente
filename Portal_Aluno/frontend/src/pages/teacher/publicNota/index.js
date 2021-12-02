import React, { useEffect, useState } from "react";

import Main from "components/template/main";
import { createDiscipline } from "services/discipline";
import { getAllTeachers } from "services/teacher";

const headerprops = {
  icon: "book",
  title: " Publicar Notas",
  subtitle: "Publicar notas dos alunos",
};

const CadDisciplina = () => {
  const [disciplina, setDisciplina] = useState();
  const [qtdAlunos, setQtdAlunos] = useState();
  const [professor, setProfessor] = useState();
  const [teachers, setTeachers] = useState([]);

  const [loading, setLoading] = useState(false);

  async function getTeachers() {
    const resp = await getAllTeachers();
    setTeachers(resp.teachers);
  }

  async function create(event) {
    event.preventDefault();
    setLoading(true);
    await createDiscipline(disciplina, professor, qtdAlunos);
    setLoading(false);
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <Main {...headerprops}>
      <form className="form" onSubmit={create}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Disciplina</label>
              <input
                type="text"
                name="disciplina"
                className="form-control"
                onChange={({ target }) => setDisciplina(target.value)}
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Quantidades de Alunos</label>
              <input
                type="text"
                name="qtdalunos"
                className="form-control"
                onChange={({ target }) => setQtdAlunos(target.value)}
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Professor</label>
              <select
                className="form-control"
                aria-label="Default select example"
                onChange={(event) => setProfessor(event.target.value)}>
                {teachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    {teacher.firstname} {teacher.lastname}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content">
            {loading ? (
              <button className="spinner" />
            ) : (
              <button className="btn btn-primary">Cadastrar</button>
            )}
          </div>
        </div>
      </form>
    </Main>
  );
};

export default CadDisciplina;
