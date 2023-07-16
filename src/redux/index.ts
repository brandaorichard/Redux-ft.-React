// Criando store e reducer

// Implementando a store (armazena o estado global da aplicacao)
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';


type ActionType = {
  type: string;
}

const INITIAL_STATE = {
  count: 0,
};

// O reducer é uma funcao com dois parametros. state: que recebe o valor do estado inicial como default. action: que será criada posteriormente. O tipo ActionType foi criado para indicar que a action será um objeto que contém uma chave type do tipo string.
const reducer = (state = INITIAL_STATE, action: ActionType) => state;

const store = createStore(reducer, composeWithDevTools());

// Com a store pronta iremos criar o reducer (responsável por escrever no estado global) e adicionar a store. Dessa forma ele passa ao estado globval a chave count com o valor inicial 0.

export default store;

// Para finalizar a configuração do React com Redux, é preciso passar as informações da store para o restante da aplicação. Assim, os componentes criados poderão acessar o estado global que criamos.

//ok
