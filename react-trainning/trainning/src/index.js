import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ErrorBoundary} from './ErrorBoundary';
//teste de ciclo de vida
//import {Menu} from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);