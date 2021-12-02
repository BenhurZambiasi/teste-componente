import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Api from '../../services/Api';

import { Container, Titulo, Disciplina, Card } from './style';


const ListarContent = ({ ...props }) => {
  const [contents, setContents] = useState([])

  const data = props.location.state
  console.log(data[0])
  useEffect(() => {
    Api.get(`/content/${data._id}`, {
      headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
    }).then((res) => {
      setContents(res.data.discipline.contents)
    })
  }, [data._id])



  return (

    <Container>

      {/* CABEÇALHO */}
      <Header />

      {/* TITULO */}
      <Titulo>
        <h1>{data.name} - Turma 345</h1>
      </Titulo>

      {/* MENU */}
      <Disciplina>

        {contents.map((content) => {
          return (
            <Card key={content._id}>

              <span  >{content.title} </span>
              <span > {content.description} </span>
            </Card>
          )
        })}

      </Disciplina>

    </Container>
  )
}
export default ListarContent;