import {SET_FILTER, CLEAR_FILTER} from '../constants/actionTypes';

export const setFilterAction = filterText => ({type:SET_FILTER, filterText});
export const clearFilterAction = () => ({type:CLEAR_FILTER});