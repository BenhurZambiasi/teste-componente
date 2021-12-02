import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillFilePdf, AiFillFileExcel } from "react-icons/ai";

import { getDisciplineTeacher, downloadPdf } from "services/teacher";

import { useAuth } from "components/contexts/auth";
import Main from "components/template/main";
import ExportExcel from "components/exportExcel";
import "./stylesDT.css";

const headerprops = {
  icon: "book",
  title: " Disciplinas",
  subtitle: "Todas as disciplinas",
};

const DisciplineTeacher = () => {
  const { user, DataSet } = useAuth();

  const [disciplines, setDisciplines] = useState([]);

  async function handleDisc() {
    const resp = await getDisciplineTeacher(user._id, user.usertype);
    setDisciplines(resp.discipline);
  }

  async function getPdf() {
    await downloadPdf(user._id);
  }

  useEffect(() => {
    handleDisc();
  }, []);

  return (
    <Main {...headerprops}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Lista de Disciplinas</h2>
        <div>
          <AiFillFilePdf
            color="#D50000"
            size={40}
            style={{ cursor: "pointer" }}
            onClick={getPdf}
          />
          <ExportExcel
            name="Disciplinas"
            dataSet={DataSet}
            columns={DataSet[1].columns}
            buttonRender={
              <AiFillFileExcel
                color="#1F6E43"
                size={40}
                style={{ cursor: "pointer" }}
              />
            }
          />
        </div>
      </div>
      <div className="tabelT container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th colSpan="4">Disciplinas</th>
            </tr>
            <tr>
              <th>Turno</th>
              <th>Disciplina</th>
              <th>Numero de estudantes</th>
              <th>Turma</th>
            </tr>
          </thead>
          <tbody>
            {disciplines.map((item) => {
              console.log(item);
              return (
                <tr>
                  <td>{item.turno}</td>
                  <td>{item.name}</td>
                  <td>{item.numberStudents}</td>
                  <td>415</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Main>
  );
};

export default DisciplineTeacher;
