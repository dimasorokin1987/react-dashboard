import {SAVE_STARTED, SAVE_SUCCEEDED, SAVE_FAILED} from '../constants/actionTypes';

export const savingAction = () => ({type: SAVE_STARTED});
export const savedAction = items => ({type: SAVE_SUCCEEDED, items});
export const saveErrorAction = error => ({type: SAVE_FAILED, error});