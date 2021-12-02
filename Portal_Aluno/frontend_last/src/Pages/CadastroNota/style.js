import styled from "styled-components";


export const Exit = styled.div`
    margin: 3% 0 1% 10%;

    a {
        color: #000;
    }
`;

export const Container = styled.div`
    width: 70%; 
    margin: 45px auto;
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
`;


export const TableDiv = styled.div`

    .nota{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-width:1px;
        width: 3%;
    }

    line-height:25px;
    font-family: Open Sans;


    .redNote{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-color:red;
        color:red;
        border-width:1px;
        width: 3%;
    }

    .redNote:focus{
        border-color:red;
    }

    .greenNote{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-color:#7FC008;
        color:#7FC008;
        border-width:1px;
        width: 3%;
    }


    .greenNote:focus{
        border-color:#7FC008;
    }

    span{
        padding: 2px 9px;
        font-size: 13px;
    }

    input{
        padding: 2px 9px;
        font-size: 13px;
    }



    .flTable {
    border-radius: 5px;
    font-size: 15px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
    margin-bottom: 5%;
    text-align-last: center;
}


.flTable td, .flTable th {
    text-align: left;
    padding: 8px;
}

.flTable td {
    font-size: 15px;
    text-align: -webkit-center;
    border-bottom: 1px solid #dcdcdc;
    background-color: white;
}

.flTable thead th {
    color: black;
    font-weight: 500;
    border-bottom: 2px solid #dcdcdc;
}


.flTable thead th:nth-child(odd) {
    color: black;
    box-shadow: inset 0px -1px 0px #DFE2E9;
    font-weight: 500;
}

.flTable tr:nth-child(even) {
    background: #F8F8F8;
}

@media (max-width: 767px) {

    .redNote{
        width:15%;
    }

    .greenNote{
        width:15%;
    }

    .flTable {
        display: block;
        width: 100%;
    }
    .tableWrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .flTable thead, .flTable tbody, .flTable thead th {
        display: block;
    }
    .flTable thead th:last-child{
        border-bottom: none;
    }
    .flTable thead {
        float: left;
    }
    .flTable tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .flTable td, .flTable th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .flTable thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .flTable tbody tr {
        display: table-cell;
    }
    .flTable tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .flTable tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
        border-bottom: 1px solid #E6E4E4;
    }
    .flTable tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
        border-bottom: 1px solid #E6E4E4;
    }
    .flTable tbody td {
        display: block;
        text-align: center;
    }
}

`;

export const ValorTrabalho = styled.div`
font-size: 16px;

span{
    color: #0E4DA4;
}

.InputValor{
    padding: 1.8%;
    width: 40%;    
}

`;

export const NameValueTrab = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right:20%;
    padding-bottom: 3%;


    input{
        border:none;
        border-bottom:1px solid black;
        outline-style: none;
    }


`;