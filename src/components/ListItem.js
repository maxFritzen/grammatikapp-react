import React from 'react';

const ListItem = (props) => (
  <div>
    <p onClick={props.onClick}>{props.word}</p>
  </div>
);

export default ListItem;
