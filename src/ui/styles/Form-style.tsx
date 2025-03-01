import styled from "styled-components";

export const FormStyle = styled.section`
position:fixed;
inset:10rem;
height:20vh;
width:20%;
margin:auto;
background-color:#42439c;
transition:all ease-in-out .3s;
form{
    display:flex;
    flex-flow:column;
    gap:3px;
    input[type="text"]{
        border-radius: 3px;
    }
}

`