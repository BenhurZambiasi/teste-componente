import React from 'react';
import { Container, Box, BoxAlert } from './style';
import { AiOutlineCheckCircle } from "react-icons/ai";


const AlertSuccess = (props) => {

    return (
        
        <Container>

            <Box>
                <AiOutlineCheckCircle onClick={props.showAlertSuccess} fontSize={50} color="#fff"/>
            </Box>

            <BoxAlert>
                <strong>Sucesso!</strong>
                <span>{props.text}</span>
            </BoxAlert>

        </Container>
    )
}

export default AlertSuccess;