import {clearFilterAction} from '../actions/filter';
import {
    startNetworkAction,
    finishNetworkAction,
    loadedAction,
    networkErrorAction
} from '../actions/network';
import config from '../config';

export const loadItems = () => async dispatch => {
    dispatch(startNetworkAction());
    try {
        const response = await fetch(config.apiUrl);
        const json = await response.json();
        dispatch(clearFilterAction());
        dispatch(loadedAction(json));
    }catch(e){
        dispatch(networkErrorAction(e));
    }
    dispatch(finishNetworkAction());
}