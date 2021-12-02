import styled from "styled-components";


export const Container = styled.div`
`;

export const Titulo = styled.div`

    h1 {
        color: #000;
        font-size: 40px;
        font-weight: inherit;
        margin:50px 0px 50px 175px;
    }
`;

export const Disciplina = styled.div`
    display: grid;
    gap:2rem;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80%;
    width: 80%;
    margin: 0 auto;
    

`;

export const Card = styled.button`
    display: flex;
    box-sizing:border-box;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height:7rem;
    padding-left:1rem;
    background: #F0F0F0;
    border-radius: 8px ;
    line-height:3;
    color: black;
    cursor:pointer;
    border: none;
    outline-color:#6C63FF;

    span{
        font-size:1rem
    }


   span:nth-last-child(1){
    color: #263238;
    opacity: 0.54;
   }
 `;