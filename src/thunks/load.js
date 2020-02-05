import {loadingAction, loadedAction, loadErrorAction} from '../actions/load';
import {clearFilterAction} from '../actions/filter';
import config from '../config';

export const loadItems = () => async dispatch => {
    dispatch(loadingAction());
    try {
        const response = await fetch(config.apiUrl);
        const json = await response.json();
        dispatch(clearFilterAction());
        dispatch(loadedAction(json));
    }catch(e){
        dispatch(loadErrorAction(e));
    }
}