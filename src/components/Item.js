import React from 'react';

export default React.memo(props => {
    return (
        <pre className='item'>{props.children}</pre>
    );
});