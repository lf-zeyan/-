import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';
import './components/index.css'
import Herder from './components/header.js'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <div className='box'>
        <BrowserRouter>
            <Herder/>
            <App />
        </BrowserRouter>

    </div>,
    document.getElementById('root'));

