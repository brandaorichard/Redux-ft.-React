type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  count: 0,
};

// A action é um objeto que envia uma ação ao reducer, o qual realizará uma alteração no estado global. É possível defini-la do seguinte modo:
const action = { 
  type: 'INCREMENT_COUNTER',
  payload: 10
};

// A função reducer recebe como parâmetro o estado inicial e uma action
// Por padrão, a action sempre retornará um objeto com a chave type, que informa qual ação deve ser feita no estado

function counterReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    // Aqui fazemos a verificacao se a acao é INCREMENT_COUNTER.  Em caso positivo, ela irá incrementar o valor da chave count, que está no estado global, em 1.
    case 'INCREMENT_COUNTER':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;