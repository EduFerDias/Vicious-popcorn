import { Faixa1 } from './styles'
import Cabecalho  from '../../components/Cabecalho/cabecalho';
import Conteudo from '../../components/Content/Container';

export default function Home(){
    return(
            <Faixa1>
                
                 <Cabecalho />
                 <Conteudo />
                
            </Faixa1>

    );
}