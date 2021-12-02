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

`;

export const Exit = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 500px;
    right:0;
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
        font-size: 35px;
        padding-bottom: 50px;
        color: #000
    }
`;

export const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:50vh;
    width: 40vw;
    flex-direction:column;
    box-sizing: border-box;
    border: 1px solid #979797;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #979797;
    background: #fff;

    form{
        display: flex;
        flex-direction: column;
        width: 75%;
        border-radius: 5px;
        color: #000;
        line-height: 2;
        font-size:18pt;
    }
    p{
        border-bottom: 1px solid black
    }
       
`;


