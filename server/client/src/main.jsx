import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { ConversionProvider } from './context/ConversionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConversionProvider>
      <App />
    </ConversionProvider>
  </React.StrictMode>
);
