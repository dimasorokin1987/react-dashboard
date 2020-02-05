import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const reduxStateString = window.localStorage.getItem('reduxState');
const reduxState = JSON.parse(reduxStateString)||{
    item: '',
    list: [],
    filterText: ''
};

export const store = createStore(
    reducer,
    reduxState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(()=>{
   // window.localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});