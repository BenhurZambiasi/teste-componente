import React, { useEffect, useState } from "react";
import {
  Exit,
  Container,
  TableDiv,
  Button,
  ValorTrabalho,
  NameValueTrab,
} from "./style";
import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Api from "../../services/Api";
import AlertSuccess from "../../components/ModalAlerts/SuccessAlert";
import AlertErro from "../../components/ModalAlerts/ErroAlert";

const CadastroNota = ({ ...props }) => {
  const [nota, setNota] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const [nomeNota, setNomeNota] = useState([]);
  const [pesoNota, setPesoNota] = useState([]);
  const [render, setRender] = useState(false);
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalAlertErro, setModalAlertErro] = useState(false);
  const [modalAlertSuccess, setModalAlertSuccess] = useState(false);

  function ModalClickSuccess() {
    setModalAlertSuccess(false);
    window.location.reload();
  }

  const data = props.location.state;

  useEffect(() => {
    Api.get(`listadeAlunos/${data.disciplina._id}`).then((response) => {
      setAlunos(response.data.disciplinas);
    });
  }, [data, data._id, data.disciplina._id]);

  function handleSubmit(event) {
    event.preventDefault();
    cadastroNota();
  }

  function cadastroNota() {
    let notas = {
      nomeNota: nomeNota,
      pesoNota: pesoNota,
      alunos: nota,
    };
    setloading(true);
    Api.post(`nota/${data.disciplina._id}`, { notas }).then(
      (res) => {
        if (res.data) {
          setModalAlertSuccess(true);
        }
      },
      (err) => {
        setErrorMessage(err.response.data.error);
        setModalAlertErro(true);
        setloading(false);
      }
    );
  }

  return (
    <>
      {/* MODAL */}
      {modalAlertSuccess && (
        <AlertSuccess
          showAlertSuccess={ModalClickSuccess}
          text={"Notas cadastradas com sucesso"}
        />
      )}
      {modalAlertErro && (
        <AlertErro showAlertErro={setModalAlertErro} text={errorMessage} />
      )}
      <Exit>
        <Link
          to={{
            pathname: "/DetalhamentoDisciplina",
            state: data,
          }}>
          <BsBoxArrowInLeft fontSize={30} color="#000" />
        </Link>
      </Exit>

      <Container>
        <TableDiv>
          <form onSubmit={handleSubmit}>
            <NameValueTrab>
              <label htmlFor="">
                <ValorTrabalho>
                  Nome do trabalho:{" "}
                  <input
                    type="text"
                    className="InputValor"
                    required
                    onChange={({ target }) => setNomeNota(target.value)}
                  />
                </ValorTrabalho>
              </label>

              <label htmlFor="">
                <ValorTrabalho>
                  Valor do trabalho:{" "}
                  <input
                    type="text"
                    className="InputValor"
                    required
                    onChange={({ target }) =>
                      setPesoNota(target.value)
                    }></input>
                </ValorTrabalho>
              </label>
            </NameValueTrab>

            <table className="flTable">
              <thead>
                <tr>
                  <th>
                    <strong>Alunos</strong>
                  </th>
                  <th>
                    <strong>Nota</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno, index) => {
                  return (
                    <tr key={aluno._id}>
                      <td> {aluno.firstname} </td>
                      <td>
                        <input
                          required
                          onChange={({ target }) => {
                            let notas = nota;
                            let aux = {
                              idAlunos: aluno._id,
                              valorNota: target.value,
                            };
                            notas[index] = aux;
                            setNota(notas);
                            setRender(!render);
                          }}
                          className={
                            nota[index] && Number(nota[index].valorNota) >= 6
                              ? "greenNote"
                              : "redNote"
                          }></input>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Button>
              {loading ? (
                <button>Salvando...</button>
              ) : (
                <button type="submit">Salvar</button>
              )}
            </Button>
          </form>
        </TableDiv>
      </Container>
    </>
  );
};

export default CadastroNota;
