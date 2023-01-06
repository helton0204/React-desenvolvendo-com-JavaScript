import Colaborador from '../colaborador/Colaborador';
import './time.css';

const Time = ({nome, corPrimaria, corSecundaria, colaboradores, deletarColaborador, colaboradorFavorito}) => {
    return (
        colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor: corSecundaria}}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                                key={colaborador.id}
                                idColaborador={colaborador.id}
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem}
                                corPrimaria={corPrimaria}
                                deletarColaborador={deletarColaborador}
                                favorito={colaborador.favorito}
                                colaboradorFavorito={colaboradorFavorito}
                            />
                    })
                }
            </div>
        </section>
    )
}
export default Time;