import {CHANGE_ITEM, APPEND} from '../constants/actionTypes'

export default (state = '', action)=>{
    // const act = {
    //     APPEND: list=>list.concat([action.item])
    // }[action.type] || (list=>list);
    // return act(list);
    
    switch(action.type){
        case CHANGE_ITEM:
            return action.item;
        case APPEND:
            return '';
        default:
            return state;
    }
};