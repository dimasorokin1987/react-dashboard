import {APPEND, CHANGE_ITEM, CLEAR_ERROR} from '../constants/actionTypes';

export const appendAction = item => ({type: APPEND, item});
export const changeItemAction = item => ({type: CHANGE_ITEM, item});
export const clearErrorAction = item => ({type: CLEAR_ERROR});