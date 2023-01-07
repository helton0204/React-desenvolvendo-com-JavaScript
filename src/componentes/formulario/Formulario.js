import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Botao from "../botao/Botao";
import CampoTexto from "../campoTexto/CampoTexto";
import ListaSuspensa from "../listaSuspensa/ListaSuspensa";
import "./formulario.css";

const Formulario = ({times, cadastrarColaborador}) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        cadastrarColaborador({id: uuid(), nome: nome, cargo: cargo, imagem: imagem, time: time, favorito: false});
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    placeholder="Digite seu nome"
                    valor={nome}
                    atualizarValor={novoValor => setNome(novoValor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    obrigatorio={true} 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    atualizarValor={novoValor => setCargo(novoValor)}    
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    atualizarValor={novoValor => setImagem(novoValor)}  
                />
                <ListaSuspensa 
                    label="Time" 
                    obrigatorio={true} 
                    itens={times}
                    valor={time}
                    atualizarValor = {novoValor => setTime(novoValor)}
                />
                <Botao cor="#6278F7">Criar Card</Botao>
            </form>
        </section>
    )

}
export default Formulario;