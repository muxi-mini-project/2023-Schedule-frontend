import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
//import '../src/assets/style/font.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);