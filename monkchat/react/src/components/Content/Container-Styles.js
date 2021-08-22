import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0 , 0.12);

    padding: 0px 3.1875em 3em;
    margin-left: 1.9375em;
    cursor: default;

    .room-msg{
        display: flex;
        flex-direction: column;

        margin-right: 3.125em;

        padding-top: 3.25em;
    }

    .chat-info{
        display: flex;
        flex-direction: row;

        font-family: Monteserrat-Bold;
        color: white;
    }

    .room-name{
        margin-bottom: 0.4375em;
        font-size: 1.5em;
        padding-left: 0.25em;
    }

    .Nick{
        margin-bottom: 0.8125em;
        font-size: 1.5em;
    }

    .Room-op{
        display: flex;
        flex-direction: row-reverse;

        margin-top: 0.8125em;
    }

    .msg-area{
        margin-top: 3.9375em;
    }

    .message-title{
        font-family: Monteserrat-Bold;
        color: white;
        font-size: 1.5em;

        margin-bottom: 0.5em;
    }

    .send-button:hover, .Room-op button:hover{
        background-color: #3b97a1;
    }   

    .msg-area button{
        
        margin-left: 9.9em;
        margin-top: 0.5em;

    }

    .chat-area{
        margin-top: 1.3125em;
    }

    .chat-area svg {
        margin-bottom: 0.6875em;
    }

    .refresh{
        display: flex;
        flex-direction: row-reverse;

        transition: 0.5s;

        cursor: pointer;
    }

    .refresh svg{
        transition: 1.2s;
    }
    .refresh svg:hover{
        transform: rotate(360deg);
    }

    .message{
        color: white;
        font-family: Monteserrat-regular;
        margin-bottom: 0.6875em;
    }

    @media (max-width: 1024px) {


        .Header{
            flex-direction: column;
        }
        .header-title{
            font-size: 2em;
        }
        .Header img{
            width: 3.875em;
        }    
        .Line{
            display: none;
        }

 
            padding: 0.625em;
            margin-left: 0px;
            flex-direction: column;

        .chat-info, .room-info{
            width: 116%;
            padding: 0px;
        }
        .room-name, .Nick{
            padding: 0px;
            width: 104%;
            font-size: 1.25em;
            align-items: center;
        }
        .room-name{
            margin-bottom: 0.3125em;
        }
        .colon{
            display: none;
        }

        #nickname{
            margin: 0px;
            margin-left: 1.25em;
            width: 74.491%;
        }
        
        .Room-op{
            flex-direction: column;
            width: 104%;
        }


        .msg-area{
            width: 114.935%;
        }

        .msg-area button{
            margin:0.3em 0px 0px;
        }

        .typing-area{
            width: 100%;
        }

        .send-button{
            border-radius: 0.25em;
            width: 100%;
        }

         .refresh{
            width: 94.06%;
            padding: 1.625em 0px 0.625em 0.625em;
        }

        .chat-area{
            width: 100%;
            justify-content: space-between;
        }
    }

`

export { Container };