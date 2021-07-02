import '../css/Faixa1.css'

export default function Faixa1() {
    return(
        <div className="Faixa1">
        <div class="cabecalho" >
            <div class="F1-logo">
                <a href="https://www.uber.com/br/pt-br/">
                    Uber
                </a>
            </div>
            <div class="F1-botao-ling">
                <button class="linguagem">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z" fill="currentColor"></path></svg> PT-BR
                </button>
                <button class="viaje">
                    Viaje pela Uber
                </button>
            </div>
        </div>
    </div>
    );
}