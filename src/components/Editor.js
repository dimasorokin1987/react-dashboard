import React from 'react';
import {connect} from 'react-redux';
import {changeItemAction} from '../actions';

const mapStateToProps = state => ({
    text: state.item
});

const mapDispatchToProps = dispatch => ({
  onChangeItem: item => dispatch(changeItemAction(item))
});

const Editor = React.forwardRef((props,ref) => {
    const changeHandler = e => {
        props.onChangeItem(e.target.value);
    };

    return (<textarea
        style={{width:'100%'}}
        //cols={100}
        rows={5}
        ref={ref}
        value={props.text}
        onChange={changeHandler}
    />)
});

const ConnectedEditor = connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true
})(Editor);
export default ConnectedEditor;