import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    z-index:2;
    background: rgba(196, 196, 196, 0.56);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;

    input {
        width: 100%;
        border: 1px solid rgba(196, 196, 196, 0.56);;
        background: rgba(196, 196, 196, 0.56);
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid #263238;
        outline: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 19px;
        margin-bottom: 25px;
    }

    input::placeholder {
        color: #000;
    }
`;

export const Exit = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 500px;
    cursor: pointer;
    padding: 10px;
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    width: 75%;

    h1{
        display: flex;
        align-items: flex-start;
        font-weight: inherit;
        font-size: 28px;
        padding-bottom: 20px;
        color: #000
    }
`;

export const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:70vh;
    width: 40vw;
    flex-direction:column;
    box-sizing: border-box;
    border: 1px solid #979797;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #979797;
    background: #fff;


    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 70%;
        width: 75%;
        border-radius: 5px;
        background: #ffffff;
        color: #000;

        .inputNome {
            width:100%;
            display:flex;
            justify-content:space-between;

            input{
                width:49%;
            }
        }
    }    
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        width: 180px;
        color: #0E4DA4;
        border: 1px solid #0E4DA4;
        background: transparent;
        border-radius: 8px;
        cursor: pointer;
    }
`;