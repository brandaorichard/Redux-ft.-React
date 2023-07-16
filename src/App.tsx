// Lendo as informacoes do estado global:

// Importacao do hook useSelector
//Esse hook recebe como parâmetro uma callback, a qual, por sua vez, recebe como parâmetro o valor do estado global e retorna o valor do estado desejado
import { useSelector } from 'react-redux';

import './index.css';

type RootState = {
  count: number;
}

function App() {
  // Criacao da const rootState, que recebe o valor retornado pelo hook useSelector
  // O hook recebe como parâmetro a callback (state: RootState) => state
  // A callback está recebendo como parâmetro o state, que é o estado do Redux
  // A callback retorna esse mesmo estado
  const rootState = useSelector((state: RootState) => state);
  // Com isso, a const rootState recebe o valor armazenado no estado do Redux ({ count: 0 }). Por fim, utiliza-se a chave count do estado global para renderizar o valor.

  return (
    <>
      <h1>Counter</h1>
      <h2>{ rootState.count }</h2>
      <button>Increment 1</button>
      <button>Increment 5</button>
    </>
    
  )
}

export default App

// No código acima, o contador está com o valor 0, de forma estática. O objetivo é utilizar o estado global para realizar as ações da aplicação. Então, é necessário substituir o valor do contador pelo valor armazenado no estado global count, criado anteriormente. Além disso, é preciso alterar esse valor sempre que os botões forem clicados