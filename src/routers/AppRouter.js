import React from 'react';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import PracticePage from '../components/PracticePage';
import TestPage from '../components/TestPage';
import NotFoundPage from '../components/NotFoundPage';
import StartPage from '../components/StartPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={StartPage} exact={true}/>
        <Route path="/practice" component={PracticePage} />
        <Route path="/test" component={TestPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
