import React from 'react';
// import { createRoot } from 'react-dom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
// import './index.css';
import App from './src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
