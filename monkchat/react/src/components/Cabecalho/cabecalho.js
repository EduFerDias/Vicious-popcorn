import { Cabecalho } from "./cabecalho-style";

export default function Header(){
    return(
        <Cabecalho>
            <div className="Logo">
                <img src={'./assets/images/logo1 1.png'} alt=""/>
            </div>
            <div className="Line"></div>   
            <div className="header-title">MonkChat</div>
        </Cabecalho>
    );

}