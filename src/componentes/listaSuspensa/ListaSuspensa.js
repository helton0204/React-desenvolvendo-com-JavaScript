import './listaSuspensa.css';

const ListaSuspensa = ({label, obrigatorio = false, itens, valor, atualizarValor}) => {

    const aoSelecionar = (evento) => {
        atualizarValor(evento.target.value);
    }

    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={aoSelecionar}>
                <option value=''></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}
export default ListaSuspensa;