import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterAction} from '../actions';

export default () => {
    const dispatch = useDispatch();
    const filterText = useSelector(state => state.filterText);

    const changeHandler = e => {
        dispatch(setFilterAction(e.target.value));
    }
    return (
        <input
            type='text'
            style={{width:'30%'}}
            placeholder='search text'
            onChange={changeHandler}
            value={filterText}
        />
    )
}