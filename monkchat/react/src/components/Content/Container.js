import { Container } from "./Container-Styles";
import { ChatButton } from "../outros/buttons-style";
import { ChatInput } from "../outros/input";
import { TypeBox } from "../outros/TextArea";
import { Chat } from './Chat-style';

import Api from '../../service/api.js';
import { useState } from "react";

/* just waitin' for the npm to start! */
export default function Conteudo() {
    const [chat, setChat] = useState([]);
    const [sala, setSala] = useState('');
    const [usu, setUsu] = useState('');
    const [msg, setMsg] = useState('');
    
    const api = new Api();

    const atualizar = async () => {
            const mensagens = await api.listarMensagens(1);
            setChat(mensagens)
        }

    const enviarMensagem = async() => {
            const r = await api.inserirMensagem(sala, usu, msg);
            console.log(r);
            alert('Sua mensagem foi enviada com sucesso!')
        
            await atualizar();
        } 
            


    
        return(
            <Container>
            <div className="room-msg">
                <div className="chat-info">
                    <div className="room-info">
                        <div className="room-name">
                            Sala<span className="colon">:</span> <ChatInput value={sala} onChange={e => setSala(e.target.value)}/>
                        </div>
                        <div className="Nick">
                            Nick<span className="colon">:</span> <ChatInput id="nickname" value={usu} onChange={e => setUsu(e.target.value)}/>
                        </div>
                        <div className="Room-op">
                            <ChatButton>Entrar</ChatButton>
                            <ChatButton>Criar</ChatButton>
                        </div>
                    </div>
                </div>

                <div className="msg-area">
                    <div className="message-title">Mensagem<span className="colon">:</span></div>
                    <div className="typing-area">
                        <TypeBox placeholder="Digite sua mensagem aqui!" id="digitacao" value={msg} onChange={e => setMsg(e.target.value)}></TypeBox>
                    </div>
                    <ChatButton className="send-button" onClick={enviarMensagem}>Enviar</ChatButton> 
                </div>
            </div>

            <div className="chat-area">
            <div className="refresh" onClick={atualizar}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1V7H11" stroke="#F2EBDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 19V13H7" stroke="#F2EBDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.25634 7.66592C2.69672 6.31197 3.44516 5.10146 4.43183 4.14734C5.4185 3.19321 6.61125 2.52657 7.89878 2.20962C9.1863 1.89267 10.5266 1.93574 11.7947 2.33481C14 3.02881 16.0668 5.98418 17 7M2 14.325L4.10581 16.5082C5.03901 17.5241 6.19352 18.2661 7.46161 18.6652C8.7297 19.0643 10.07 19.1073 11.3576 18.7904C12.6451 18.4734 13.8378 17.8068 14.8245 16.8527C15.8112 15.8985 16.5596 14.688 17 13.3341" stroke="#F2EBDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            <Chat >
    
                {chat.map( x =>
                    <div className="message">
                            <span className="message">
                                <span>({new Date(x.dt_mensagem.replace('z', '')).toLocaleTimeString()})</span> &nbsp;
                                <span><b>{x.tb_usuario.nm_usuario}</b> fala para <b>todos</b>:</span> &nbsp;
                                <span>{x.ds_mensagem}</span>
                            </span>
                    </div>
                )}
    
            </Chat>
            </div> 
        </Container>
        )
    
    }
