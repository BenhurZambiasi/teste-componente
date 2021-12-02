import styled from "styled-components";

export const Container = styled.div`

`

export const Exit = styled.div`
    margin: 3% 0 1% 10%;

    a {
        color: #000;
    }
`;



export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
 
`

export const Content = styled.div`
    align-self: flex-start;
    width:77%;

a {
    display:flex;
    text-decoration: none;
    color: #000;
    font-size: 20px;
    margin: 10px 0px;
}

h1 {
    display:flex;
    color: #000;
    font-size: 36px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: inherit;
    margin: 50px 0px 50px 0px;

}
    
`

export const Cards = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    min-width:77%;
    max-width:77%;
    border: 1px solid #0E4DA4;
    border-radius: 5px;
    margin-bottom: 50px;
    padding-left:10px;
    padding-right: 10px;


button {
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 60px;
    min-width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    margin: 0px 20px 145px 55px;
    outline: 0;
}
`

export const Card1 = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 255px;
    max-width:860px;
    color: #fff;

    overflow-x: scroll;
    ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
    border-radius: 5px;
  }

p {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 170px;
    min-width: 170px;
    background-color: #FFBB12;
    border-radius: 20px;
    margin: 25px;
    cursor: pointer;

}


`

export const Cards2 = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    min-width:77%;
    max-width:77%;
    border: 1px solid #0E4DA4;
    border-radius: 5px;
    padding-left:10px;
    padding-right: 10px;
    margin-bottom: 6%;

button {

    height: 60px;
    min-width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    outline: 0;
    margin: 15px;
    margin: 0px 20px 145px 55px;
}

`

export const Card2 = styled.div`
    display:flex;
    height: 255px;
    max-width:75%;
    color: #000;
    max-width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
    border-radius: 5px;
  }



p{
    display: flex;
    flex-direction:column;
    line-height:2;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 170px;
    min-width: 170px;
    background-color: #F0f0f0;
    border-radius: 20px;
    margin: 25px;
}

`