import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 87px;
    background-color: #6C63FF;
    
    h2 {
        color: #fff;
        font-family: Helvetica, Arial,  sans-serif;
        font-size: 24px;
        padding: 30px;
    }
`;

export const User = styled.div`
    margin-right: 40px;

    padding-top:16px;
    a{
        text-decoration:none;
        color:white
    }
    li{
        list-style:none
    }
    p{
        cursor:pointer;
        color:white
    }

    [data-dropdown] .dropdown-menu{
        display:none;
    }

    [data-dropdown]:hover .dropdown-menu{
        display:block;
    }

    .dropdown-menu{
        text-align:center;
        line-height:2;
        padding:15px;
        position:absolute;
        right:0;
        background:#6C63FF;
        width:100px;
        z-index:200;
        border-radius: 6px;
    }

    .dropdown-menu li a:hover{
        color: #aaa
    }
    .dropdown-menu li p:hover{
        color: #aaa
    }


    .animeDown{
        opacity:0;
        transform:translateY(-10px);
        animation: animeDown 0.3s forwards;
    }

    @keyframes animeDown{
        to{
            opacity:1;
            transform:initial
        }
    }
`;