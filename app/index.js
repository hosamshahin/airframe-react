import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './components/Auth';
import App from './components/App';

const basePath = process.env.BASE_PATH || '/';

render(
    <Router basename={basePath}>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    document.querySelector('#root')
);