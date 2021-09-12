import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/css/index.css';
import './style/css/bootstrap.min.css';
import './style/scss/main.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { getTotals } from './features/cartSlice';
import { PersistGate } from 'redux-persist/integration/react';

store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
