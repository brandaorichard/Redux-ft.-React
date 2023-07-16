// ./src/main.tsx
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/index.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// Provider: Ira passar as informações da store para a aplicação. Para isso, é preciso importá-lo no ./src/main.tsx e encapsular o componente App, passando a store como prop exemplo no codigo acima.