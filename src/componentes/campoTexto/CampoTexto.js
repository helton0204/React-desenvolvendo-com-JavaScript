import './campoTexto.css';

function CampoTexto({label, obrigatorio = false, placeholder, valor, atualizarValor}){
    
    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                type="text" 
                placeholder={placeholder} 
                required={obrigatorio}
                value={valor}
                onChange={evento => atualizarValor(evento.target.value)}
            />
        </div>
    )

}
export default CampoTexto;