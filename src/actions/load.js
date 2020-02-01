import {LOAD_STARTED, LOAD_SUCCEEDED, LOAD_FAILED} from '../constants/actionTypes';

export const loadingAction = () => ({type: LOAD_STARTED});
export const loadedAction = json => ({type: LOAD_SUCCEEDED, items: json.items});
export const loadErrorAction = error => ({type: LOAD_FAILED, error});