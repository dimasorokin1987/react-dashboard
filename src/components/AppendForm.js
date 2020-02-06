import React from 'react';
import Editor from './Editor';
import {connect} from 'react-redux';
import {appendAction} from '../actions';

const mapStateToProps = state => ({
    text: state.item,
    disabled: state.networking
});

const mapDispatchToProps = dispatch => ({
    onAppend: item=>dispatch(appendAction(item))
});

const AppendForm = props=>{
    const editor = React.useRef();

    const submitHandler = e => {
        e.preventDefault();
        if(props.text.trim() === '') return;
        
        props.onAppend(props.text);
        editor.current.focus();
    };

    return (
        <form onSubmit={submitHandler}>
            <Editor ref={editor}/>
            <button
                className='btn green'
                disabled={props.disabled}
            >Append</button>
        </form>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(AppendForm);