import {
    NETWORKING_STARTED,
    NETWORKING_FINISHED,
    NETWORK_ERROR,
    LOAD_SUCCEEDED,
    SAVE_SUCCEEDED
} from '../constants/actionTypes';

export const startNetworkAction = () => ({type: NETWORKING_STARTED});
export const finishNetworkAction = () => ({type: NETWORKING_FINISHED});
export const networkErrorAction = error => ({type: NETWORK_ERROR, error});

export const loadedAction = json => ({type: LOAD_SUCCEEDED, items: json.items});
export const savedAction = items => ({type: SAVE_SUCCEEDED, items});