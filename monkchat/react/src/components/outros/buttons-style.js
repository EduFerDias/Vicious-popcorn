import styled from "styled-components";

const ChatButton = styled.button`

    font-family: Monteserrat-Bold;
    color: white;

    border-radius: 1.25em;
    background-color: #50B4BF;
    border: none;
    padding: 0.4375em 1.25em;
    font-size: 1em;
    line-height: 1.25em;

    margin-top: 0.5em;
    margin: 0px 0.21875em;

    transition: 0.5s;

    cursor: pointer;

    @media(max-width: 1024px)
    {

        width: 95.278%;
        border-radius: 0.25em;
        margin: 0px 0px 0.3125em 0px;
        
    }



`

export { ChatButton }