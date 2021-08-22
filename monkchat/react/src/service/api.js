import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarMensagens(idSala) {
        let r = await api.get(`/chat/${idSala}` );
        return r.data;
    };



    async inserirMensagem(nomeSala, nomeUsuario, mensagem) {
        let m = {
            sala: {
                nome: nomeSala
            },
    
            usuario: {
                nome: nomeUsuario
            },
    
            mensagem: mensagem
        }

        let r = await api.post('chat/', m);
        return r.data;
    };
}
