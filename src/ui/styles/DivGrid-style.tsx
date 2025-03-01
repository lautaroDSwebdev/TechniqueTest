import styled from "styled-components";

export const DivGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
gap:2rem ;
padding: 2rem;
ul{
    display:flex;
    justify-content:center;
    flex-flow:column;
    margin: auto;
    background: #353670;
    max-width: 226px;
    border-radius:5px;
    padding:1rem;
    overflow:hidden;
    height:auto;
        p{
            color: #c1d2ef;
            font-weight: 400;
        }
    }
`