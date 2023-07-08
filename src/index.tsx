import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.scss"
import "./assets/home-products.scss"
import "./assets/content.scss"
import "./assets/products.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

