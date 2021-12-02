import React, { useEffect, useState } from 'react';
import { Exit, Container, Formulario, Title } from './style';
import Api from '../../services/Api';
import { BsX } from "react-icons/bs";


const Usuario = ({ ...props }) => {

    const id = sessionStorage.getItem('user')


    const [user, setUser] = useState([]);






    useEffect(() => {
        Api.get(`/users/${id}`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((response) => {
            setUser(response.data.user)
        })
    }, [id])


    return (

        <>
            <Container>
                <Formulario>
                    <Exit onClick={() => props.showModal1(false)}>
                        <BsX fontSize={30} color="red" />
                    </Exit>

                    {/* SAIR */}

                    {/* TITULO */}
                    <Title>
                        <h1>Meus dados</h1>
                    </Title>

                    {/* FORMULÁRIO */}
                    {user.map((u) => {
                        console.log(u)
                        return (
                            <form key={u._id} >
                                <p>Nome: {u.firstname}</p>
                                <p>Sobrenome: {u.lastname}</p>
                                <p>CPF: {u.cpf}</p>
                                <p>Email: {u.email}</p>
                            </form>
                        )
                    })}

                </Formulario>

            </Container>
        </>
    )
}

export default Usuario;