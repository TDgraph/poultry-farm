


import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Privider connects react to redux
import { Provider } from 'react-redux';

// configured redux store
import { store } from './app/store';

//wrap with redux provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
