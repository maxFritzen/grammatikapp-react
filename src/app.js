import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import List from './components/List';


const App = () => (
  <div>
    <List />
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
