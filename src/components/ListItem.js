import React from 'react';

const ListItem = (props) => (

    <td onClick={props.onClick}>{props.word}</td>

);

export default ListItem;
