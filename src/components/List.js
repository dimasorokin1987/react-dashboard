import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import getFilteredItems from '../selectors/getFilteredItems';

const mapStateToProps = state => ({
    //texts: state.list
    texts: getFilteredItems(state)
});

const List = props => (
    <div>
        {props.texts.map((txt,index)=>(
            <Item key={index}>{txt}</Item>
        ))}
    </div>
);

export default connect(mapStateToProps)(List);