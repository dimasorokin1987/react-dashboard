import {APPEND, CHANGE_ITEM} from '../constants/actionTypes';

export const appendAction = item => ({type: APPEND, item});
export const changeItemAction = item => ({type: CHANGE_ITEM, item});