import {SAVE_STARTED, SAVE_SUCCEEDED, SAVE_FAILED} from '../constants/actionTypes';

export default (state = {saving:false}, action)=>{    
    switch(action.type){
        case SAVE_STARTED:
            return {
                ...state,
                saving: true
            };
        case SAVE_SUCCEEDED:
            return {
                saving: false
            };
        case SAVE_FAILED:
            console.log('loading error:', action.error);
            return {
                saving: false
            };
        default:
            return state;
    }
};