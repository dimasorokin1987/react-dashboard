import {SET_FILTER} from '../constants/actionTypes';

export default (state = '', action) => {
    switch(action.type){
        case SET_FILTER:
            return action.filterText;
        default:
            return state;
    }
}