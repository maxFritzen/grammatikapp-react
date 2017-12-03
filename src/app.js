import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';


const App = () => (
  <div>
    <AppRouter />
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
