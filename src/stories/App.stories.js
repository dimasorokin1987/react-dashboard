import React from 'react';
import {action} from '@storybook/addon-actions';
import {Provider} from 'react-redux';
import {store} from '../store';

import App from '../App';

export default {
    title: 'react-dashboard',
    component: App
};

export const base = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
);