import {APPEND, CHANGE_ITEM, SET_FILTER} from '../constants/actionTypes';

export const appendAction = item => ({type: APPEND, item});
export const changeItemAction = item => ({type: CHANGE_ITEM, item});
export const setFilterAction = filterText => ({type:SET_FILTER, filterText})