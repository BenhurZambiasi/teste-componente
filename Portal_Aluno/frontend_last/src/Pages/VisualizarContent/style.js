import styled from "styled-components";


export const Exit = styled.div`
    margin: 3% 0 1% 10%;

    a {
        color: #000;
    }
`;

export const Container = styled.div`
    width: 80%; 
    margin: 45px auto;
`;

export const Title = styled.div`
font-size: 26px;
`;

export const TitleContent = styled.div`
font-size: 26px;
    color: #0E4DA4;
    text-align:center;

`;

export const DescCont = styled.textarea`
padding:2%;
max-width:96%;
min-width:96%;
min-height:120px
`;

export const Clear = styled.div`
padding:1.2%;
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 25px;

    button {
        height: 60px;
        width: 200px;
        color: #0E4DA4;
        border: 1px solid #0E4DA4;
        background: transparent;
        border-radius: 8px;
        cursor: pointer;
        outline: 0;
    }
`;

export const TextCtd = styled.p`
line-height: 2rem;
text-align: justify;
margin-bottom: 10%;
font-size:18pt;
`;
