import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    z-index:3;
    background: rgba(196, 196, 196, 0.56);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:20vh;
    width: 5vw;
    background: #f78b8b;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 3px 3px 3px #979797;
    cursor: pointer;
`;

export const BoxAlert = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height:20vh;
    width: 40vw;
    box-sizing: border-box;
    border: 1px solid #f78b8b;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 3px 3px 3px #979797;
    background: #fff5f5;

    strong{
        color: #f78b8b;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 35px;
    }

    span{
        color: #000;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;