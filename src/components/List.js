import React from 'react';

const List = (props) => (
  <div>
    <button onClick={() => {props.handleClick("substantiv")} }>Substantiv</button>
    <button onClick={() => {props.handleClick("verb")} }>Verb</button>
    <button onClick={() => {props.handleClick("adjektiv")} }>Adjektiv</button>
  </div>
);

export default List;
