import {
    startNetworkAction,
    finishNetworkAction,
    savedAction,
    networkErrorAction
} from '../actions/network';
import config from '../config';

export const storeItems = (items) => async dispatch => {
    dispatch(startNetworkAction());
    try {
        const response = await fetch(config.apiUrl,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
           // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                //'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({items})
        });
        const json = await response.text();
        console.log('store items response:',json);
        dispatch(savedAction(json));
    }catch(e){
        dispatch(networkErrorAction(e));
    }
    dispatch(finishNetworkAction());
}