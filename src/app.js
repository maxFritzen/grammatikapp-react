import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ListItem from './components/ListItem';

const jsx = (
  <div>
    <ListItem />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
