import styled from "styled-components";

const Chat = styled.div`
        display: flex;
        flex-direction: column;
        background: rgba(192, 65, 224, 0.19);
        border-radius: 3px;
        overflow-y: scroll;
        width: 58.625em;
        height: 27.375em;
        padding: 1.3125em 0px 0px 1.625em;
        cursor: text;

    &::-webkit-scrollbar-track
    {
        border-radius: 0.625em;
        background-color: #3E006F;
    }
    &::-webkit-scrollbar
    {
        width: 0.4375em;
        border-radius: 0.625em;
        background-color: #d1d1d1;
    }
    &::-webkit-scrollbar-thumb
    {
        border-radius: 0.625em;
        background-color: #CBCBCB;
    }
    @media (max-width: 1024px) {
            height: 17.125em;
            width: 94.06%;
            padding: 1.625em 0px 0.625em 0.625em;
    }
`

export { Chat }