import {useDispatch, useSelector} from 'react-redux';
import {clearErrorAction} from '../actions';

const ErrorHandler = props=>{
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    if(error) {
        dispatch(clearErrorAction());
        alert(error);
    }
    return props.children;
};

export default ErrorHandler;