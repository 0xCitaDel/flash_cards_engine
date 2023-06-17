import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import React from 'react';
import { Provider } from 'react-redux'
import store from '@app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes> 
        </Provider>
    </BrowserRouter>
);
