import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import App from './components/App';
import './styles/variables.less'

const store = createStore(rootReducer)

registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
