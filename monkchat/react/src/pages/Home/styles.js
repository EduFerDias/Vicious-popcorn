import styled from "styled-components"

const Faixa1 = styled.div`

    display: flex; 
    flex-direction: column;
    background-color: #583BBF;
    padding: 2em 2em 3.3em;
    cursor: normal;

    @media (max-width: 1024px) {

        .Faixa1{
            padding: 1em 1em 1.1em;
        }
    }

`

export { Faixa1 };