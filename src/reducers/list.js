import {APPEND, LOAD_SUCCEEDED} from '../constants/actionTypes'

export default (state = [], action)=>{
    // const act = {
    //     APPEND: list=>list.concat([action.item])
    // }[action.type] || (list=>list);
    // return act(list);
    
    switch(action.type){
        case APPEND:
            return [
                ...state,
                action.item
            ];
            //return list.concat([action.item]);
        case LOAD_SUCCEEDED:
            return action.items;
        default:
            return state;
    }
};