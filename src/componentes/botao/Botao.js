import './botao.css'

const Botao = ({cor = '#6278F7', children}) => {
    return(
        <button className='botao' style={{backgroundColor: cor}}>
            {children}
        </button>
    )
}
export default Botao;