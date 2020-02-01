import {LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED} from '../constants/actionTypes';

export default (state = {loading:false}, action)=>{    
    switch(action.type){
        case LOAD_STARTED:
            return {
                ...state,
                loading: true
            };
        case LOAD_SUCCEEDED:
            return {
                loading: false
            };
        case LOAD_FAILED:
            console.log('loading error:', action.error);
            return {
                loading: false
            };
        default:
            return state;
    }
};