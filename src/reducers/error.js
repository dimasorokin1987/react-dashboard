import {NETWORK_ERROR, CLEAR_ERROR} from '../constants/actionTypes';

export default (state = '', action)=>{    
    switch(action.type){
        case NETWORK_ERROR:
            return action.error;
        case CLEAR_ERROR:
            return '';
        default:
            return state;
    }
};