
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importe les styles par défaut de Create React App
import App from './App'; // Importe le composant principal de l'application
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Mesure les performances de l'application (peut être utile pour l'optimisation)
reportWebVitals();