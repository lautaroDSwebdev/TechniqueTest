import styled from "styled-components";

export const FormStyle = styled.section`
position:fixed;
inset:10rem;
height:auto;
width:30%;
margin:auto;
background-color:#42439c;
transition:all ease-in-out .3s;
form{
    display:flex;
    flex-flow:column;
    gap:10px;
    width: 100%;
    padding:1rem;
    input[type="text"],input[type="email"] {
        border-radius: 10px;
        padding:5px;
    }
    button{
        cursor: pointer;
    }
}

`