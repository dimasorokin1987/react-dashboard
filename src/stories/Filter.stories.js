import React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs,text} from '@storybook/addon-knobs';
import {Provider} from 'react-redux';
import {store} from '../store';

import FilterField from '../components/FilterField';

export default {
    title: 'FilterField',
    component: FilterField,
    decorators: [withKnobs]
};

export const base = ()=>(
    <Provider store={store}>
        <FilterField />
    </Provider>
)