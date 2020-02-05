import React from 'react';
//import {useDispatch, useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {setFilterAction} from '../actions/filter';

const mapStateToProps = state => ({
    filterText: state.filterText
});

const mapDispatchToProps = dispatch => ({
  onChangeFilterText: text => dispatch(setFilterAction(text))
});

const FilterField = props => {
    // const dispatch = useDispatch();
    // const filterText = useSelector(state => state.filterText);

    const changeHandler = e => {
       //dispatch(setFilterAction(e.target.value));
       props.onChangeFilterText(e.target.value);
    }
    return (
        <input
            type='text'
            style={{width:'30%'}}
            placeholder='search text'
            onChange={changeHandler}
            value={props.filterText}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterField);