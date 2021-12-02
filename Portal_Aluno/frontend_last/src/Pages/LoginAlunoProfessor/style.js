import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #C4C4C4;
    z-index: 3;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6C63FF;
`;

export const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 400px;
        width: 600px;
        border-radius: 5px;
        background: #ffffff;
        color: #000;
    }
`;

export const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    label{
        font-size: 15px;
        color: #000;
        margin-left: 15px;
    }
`;

export const CheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 25px 20px 0px; 
    width: 120px;
    
    label{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        margin-left: 8px;
    }

    input[type=radio]{
        display: none;
    }

    .Box1::after{
        content: "";
        clear: both;
    }

    .Box1:checked::before{
        content:"";
        margin:-5.5px;
        position:absolute;
        width:12px;
        height: 12px;
        border: 6px solid  rgba(231, 232, 246, 0.8);
        border-radius:50%;
     }

     input:checked + label{
        color:#6C63FF;
     }
     
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-right: 215px;
        padding: 10px 0 5px 0;
    }
    
    input{
        height: 38px;
        width: 265px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        border: 1px solid;
        border-color: #c0c0c0;
        border-radius: 8px;
        padding-left: 10px;
        color: #000;
        outline: 0;
    }
`;

export const Box2 = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-right: 215px;
        padding: 10px 0 5px 0;
    }
    
    input{
        height: 38px;
        width: 265px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        border: 1px solid;
        border-color: #c0c0c0;
        border-radius: 8px;
        padding-left: 10px;
        color: #000;
        outline: 0;
    }
`;

export const Senha = styled.div`
    padding: 5px 0 0 155px;

    a{
        text-decoration: none;
        color: #6C63FF;
    }
`;

export const Botao = styled.div`
    padding-top: 30px; 

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 38px;
        width: 265px;
        font-size: 15px;
        border: 1px solid ;
        border-color: #c0c0c0;
        border-radius: 8px;
        padding: 10px 0 5px 10px;
        color: #6c63ff;
        margin-bottom: 30px;
        outline: 0;
        background: #ffffff;
        cursor: pointer;
    }

    .spinner{
        margin: 0 0 5px 4px;
        border:5px solid rgba(231, 232, 246, 0.8);
        border-left-color: #6c63ff;
        height: 18px;
        width: 18px;
        border-radius:50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin{
        to{transform: rotate(360deg);}
    }
`;

export const Imagem = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    img{
        display: block;
        right: 0;
        bottom: 0;
    }
`;