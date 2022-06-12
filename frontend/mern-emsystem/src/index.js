import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("a1de51a6bb47827760c6dbffc3fccbc0" );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


