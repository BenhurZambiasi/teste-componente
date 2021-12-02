import styled from "styled-components";


export const Content = styled.div`
    z-index: 1;

    h1 {
        display: flex;
        justify-content: center;
        color: #0E4DA4;
        font-size: 48px;
        padding: 10% 0;
        font-weight: inherit;
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 180px;
    padding: 30px;
    font-size: 24px;

    a {
        text-decoration: none;
    }

    .p1{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#BB6BD9;
        color: #fff;
        height: 188px;
        width:355px;
        border-radius: 20px;
        cursor: pointer;
    }
    
    .p2{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#6FCF97;
        color: #fff;
        height: 188px;
        width:355px;
        border-radius: 20px;
        cursor: pointer;
    }

    .p3{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#F2994A;
        color: #fff;
        height: 188px;
        width:355px;
        border-radius: 20px;
        cursor: pointer;
    }
`;