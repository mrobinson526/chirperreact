import React from 'react';
const Chirper = props => {
    return (
        <h5>{props.username}, {props.usermsg}</h5>
    )
};
export default Chirper;