import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './styles/index.css';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
