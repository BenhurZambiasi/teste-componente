import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../services/Api";
import { Container, Titulo, Disciplina, Card } from "./style";

const Home = ({ ...props }) => {
  const [disciplinas, setDisciplinas] = useState([]);
  const history = useHistory();
  const check = sessionStorage.getItem("check");
  const { user } = props.location.state;

  function getLIst() {
    if (check === "2") {
      Api.get(`/discipline/${user._id}/${user.usertype}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }).then((response) => {
        console.log("check", response);
        setDisciplinas(response.data.discipline);
      });
    } else {
      Api.get(`/discipline/${user._id}/${user.usertype}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response);
        setDisciplinas(response.data.userDiscipline[0].disciplines);
      });
    }
  }

  useEffect(() => {
    getLIst();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {/* TITULO */}
      <Titulo>
        <h1>Disciplinas:</h1>
      </Titulo>

      {/* MENU */}
      <Disciplina>
        {disciplinas.map((disciplina) => {
          return (
            <Card
              key={disciplina._id}
              onClick={() =>
                history.push({
                  pathname: "/DetalhamentoDisciplina",
                  state: { disciplina, user },
                })
              }>
              <span className="title">{disciplina.name} </span>
              <span> Turma 345 </span>
            </Card>
          );
        })}
      </Disciplina>
    </Container>
  );
};
export default Home;
