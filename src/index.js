import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
)

reportWebVitals();