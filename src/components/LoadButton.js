import React from 'react';
import {connect} from 'react-redux';
import {loadItems} from '../thunks/load';

const mapStateToProps = state => ({
    disabled: state.load.loading
});

const mapDispatchToProps = dispatch => ({
    onLoad: ()=>dispatch(loadItems())
});

const LoadButton = props => (
    <button
        className='btn blue'
        onClick={props.onLoad}
        disabled={props.disabled}
    >Load</button>
);
export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);