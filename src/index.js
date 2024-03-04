import React from 'react';
import ReactDOM from 'react-dom/client';
import './mycomponents/App.css';
import App from './mycomponents/App';
import { BrowserRouter,Switch } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App />

    </BrowserRouter>

);

