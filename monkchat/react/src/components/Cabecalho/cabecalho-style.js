import styled from "styled-components"

const Cabecalho = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: Monteserrat-Bold;
    margin-bottom: 2.25em;

    cursor:default;

.Line{
    background-image: linear-gradient(#BA9D4C, #F3D991);
    width: 0.25em;
    height: 3.5em;
    border-radius: 0.625em;
    margin-right: 1.6875em;
}
.Header img{
    margin-right: 0.8125em;
}

.header-title{
    color: white;
    font-size: 2.25em;
}


`

export { Cabecalho }