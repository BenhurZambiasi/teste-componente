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
font-size: 20px;

span{
    color: #0E4DA4;
}

.InputTitle{
    padding: 0.8%;
    width: 25%;    
}

`;

export const Descricao = styled.div`
font-size: 20px;
padding-bottom:0.5%;
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
    margin-bottom: 10%;

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

    .spinner{
        float:right;
        padding-left:-10px;
        border:2px solid rgba(231, 232, 246, 0.8);
        border-left-color: #6c63ff;
        height: 15px;
        width: 15px;
        border-radius:50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin{
        to{transform: rotate(360deg);}
    }


`;


export const InputTitle = styled.div`
    padding: 1%;
    width: 25%;


`;
