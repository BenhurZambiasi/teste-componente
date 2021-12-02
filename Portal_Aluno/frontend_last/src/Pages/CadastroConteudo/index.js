import React, { useState } from "react";
import {
  Exit,
  Container,
  Title,
  TitleContent,
  Descricao,
  Clear,
  DescCont,
  Button,
} from "./style";
import { Link } from "react-router-dom";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Api from "../../services/Api";

const Conteudo = ({ ...props }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [loading, setloading] = useState(false);

  const { disciplina, user } = props.location.state;

  function handleSubmit(event) {
    event.preventDefault();
    createCont();
  }

  function createCont() {
    setloading(true);
    Api.post(
      `/content/${disciplina._id}`,
      { title, description },
      {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      }
    ).then((response) => {
      if (response.data) console.log("ok");
      setloading(false);
    });
  }

  return (
    <>
      <Exit>
        <Link
          to={{
            pathname: "/DetalhamentoDisciplina",
            state: { disciplina, user },
          }}>
          <BsBoxArrowInLeft fontSize={30} color="#000" />
        </Link>
      </Exit>

      <Container>
        <Title>{disciplina.name} - Turma 345</Title>

        <Clear></Clear>

        <TitleContent>
          Titulo :{" "}
          <input
            type="text"
            id="TitleCont"
            className="InputTitle"
            onChange={(event) => setTitle(event.target.value)}></input>
        </TitleContent>

        <Clear></Clear>

        <Descricao>Descrição: </Descricao>

        <form onSubmit={handleSubmit}>
          <DescCont
            id="conteudo"
            type="textarea"
            placeholder="Descrição do conteudo"
            onChange={(event) => setDescription(event.target.value)}
          />

          <Button>
            {loading ? (
              <button>
                Salvando ...<div className="spinner"></div>
              </button>
            ) : (
              <button>Salvar</button>
            )}
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Conteudo;
