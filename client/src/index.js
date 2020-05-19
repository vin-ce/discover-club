import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/hoc/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './state/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
