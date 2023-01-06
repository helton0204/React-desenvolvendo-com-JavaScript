import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'; //importando um ícone do pacote react-icons
import './colaborador.css';

const Colaborador = ({idColaborador, nome, cargo, imagem, corPrimaria, deletarColaborador, favorito, colaboradorFavorito}) => {
    
    const propsFavorito = {
        size: 25,
        onClick: () => colaboradorFavorito(idColaborador)
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => deletarColaborador(idColaborador)}
            />
            <div className='cabecalho' style={{backgroundColor:  corPrimaria}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div>
                    {favorito ? 
                        <AiFillHeart {...propsFavorito} color='#ff0000'/> :
                        <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Colaborador;