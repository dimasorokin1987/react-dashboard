import {SET_FILTER,CLEAR_FILTER} from '../constants/actionTypes';

export default (state = '', action) => {
    switch(action.type){
        case SET_FILTER:
            return action.filterText;
        case CLEAR_FILTER:
            return '';
        default:
            return state;
    }
}