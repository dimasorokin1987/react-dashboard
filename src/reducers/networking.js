import {NETWORKING_STARTED, NETWORKING_FINISHED} from '../constants/actionTypes';

export default (state = false, action)=>{    
    switch(action.type){
        case NETWORKING_STARTED:
            return true;
        case NETWORKING_FINISHED:
            return false;
        default:
            return state;
    }
};