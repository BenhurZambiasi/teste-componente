import React from 'react';
import { Container, Box, BoxAlert } from './style';
import { VscError } from "react-icons/vsc";


const AlertErro = (props) => {

    return (
        
        <Container>

            <Box> 
                <VscError onClick={() => props.showAlertErro(false)} fontSize={50} color="#fff"/>
            </Box>

            <BoxAlert>
                <strong>parece que houve um problema</strong>
                <span>{props.text}</span>
            </BoxAlert>

        </Container>
    )
}

export default AlertErro;