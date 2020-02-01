import React from 'react';
import {connect} from 'react-redux';
import {storeItems} from '../thunks/store';

const mapStateToProps = state => ({
    disabled: state.save.saving
});

const mapDispatchToProps = dispatch => ({
    onStore: items => dispatch(storeItems(items))
});

const StoreButton = props => {
    const clickHandler = () => {
        props.onStore(props.items)
    }
    return (
        <button
            className='btn red'
            onClick={clickHandler}
            disabled={props.disabled}
        >Store</button>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreButton);