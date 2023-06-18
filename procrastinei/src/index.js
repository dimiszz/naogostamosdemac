import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas.js'
import './pages/login/main.css'
import './pages/login/util.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Rotas />
  </React.StrictMode>
);
