import styled  from "styled-components";

const ChatInput = styled.input`

        font-family: Monteserrat-regular;
        color: black;
        font-weight: 400;
        margin-left: 1.0625em;

        padding: 0.3125em 0px;
        border-radius: 0.3125em;
        border: none;

        cursor:text;

        @media(max-width: 1024px)
        {
            
                margin: 0px;
                margin-left: 1.5em;
                width: 74.491%;
            
        }
`
export { ChatInput }