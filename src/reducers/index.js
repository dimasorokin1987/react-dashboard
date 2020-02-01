import item from './item';
import list from './list';
import load from './load';
import save from './save';
import filterText from './filterText';
import { combineReducers } from 'redux';

export default combineReducers({
    item,
    list,
    load,
    save,
    filterText
});