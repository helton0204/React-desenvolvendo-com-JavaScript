import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Banner from './componentes/banner/Banner';
import Formulario from './componentes/formulario/Formulario';
import Time from './componentes/time/Time';

function App() {

  const times = [
    {
      id: uuid(),
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
        id: uuid(),
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2'
    },
    {
        id: uuid(),
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        id: uuid(),
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE95F5'
    },
    {
        id: uuid(),
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9'
    },
    {
        id: uuid(),
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const cadastrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (idColaborador) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== idColaborador));
  }

  const colaboradorFavorito = (idColaborador) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === idColaborador){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }))
  } 

  return (
    <div>
      <Banner/>
      <Formulario times={times.map(time => time.nome)} cadastrarColaborador={colaborador => cadastrarColaborador(colaborador)}/>
      {times.map(time => (
        <Time 
          key={time.id} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}  
          deletarColaborador={idColaborador => deletarColaborador(idColaborador)}
          colaboradorFavorito={idColaborador => colaboradorFavorito(idColaborador)}
        />
      ))}
    </div>
  );

}
export default App;
