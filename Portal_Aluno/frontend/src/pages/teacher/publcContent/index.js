import React, { useEffect, useState } from "react";
import { Button, Col, Form, Table } from "react-bootstrap";

import { useAuth } from "components/contexts/auth";
import Main from "components/template/main";

import { deleteContent } from "services/discipline";
import { createContent, getContent } from "services/teacher";

import "./styles.css";

const headerprops = {
  icon: "book",
  title: " Publicar",
  subtitle: "Publicar Conteúdos",
};

const CreateUser = () => {
  const { disciplines } = useAuth();

  const [idDiscipline, setIdDiscipline] = useState();
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function getAllContent(target) {
    const resp = await getContent(target);
    setContent(resp.discipline.contents);
  }
  async function createContents() {
    await createContent(idDiscipline, title, description);
    await getAllContent(idDiscipline);

    setTitle("");
    setDescription("");
  }

  useEffect(() => {}, [idDiscipline, content]);

  async function excludeContent(item, index) {
    let cont = [...content];
    const res = cont.includes(item);
    if (res) {
      cont.splice(index, 1);
      setContent(cont);
      await deleteContent(item._id);
    } else {
      setContent(content);
    }
  }

  return (
    <Main {...headerprops}>
      <div className="divForm container-fluid">
        <Form>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Disciplinas</Form.Label>
                <Form.Control
                  as="select"
                  onChange={({ target }) => {
                    setIdDiscipline(target.value);
                    getAllContent(target.value);
                  }}>
                  <option value="" disabled selected>
                    Selecione uma Disciplina
                  </option>
                  {disciplines.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              rows={3}
              onChange={({ target }) => setDescription(target.value)}
            />
          </Form.Group>
        </Form>
        <Button size="md" className="loading" onClick={createContents}>
          Cadastrar
        </Button>

        <hr />
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="tabela container-fluid">
          <thead>
            <tr>
              <th colSpan="4">Conteudos</th>
            </tr>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, index) => (
              <tr>
                <td>{item.title}</td>
                <td className="descricao">{item.description}</td>
                <td
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}>
                  <i
                    className="fa fa-trash-o fa-2x"
                    style={{ cursor: "pointer" }}
                    onClick={() => excludeContent(item, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Main>
  );
};

export default CreateUser;
