import item from './item';
import list from './list';
import networking from './networking';
import error from './error';
import filterText from './filterText';
import { combineReducers } from 'redux';

export default combineReducers({
    item,
    list,
    filterText,
    networking,
    error
});