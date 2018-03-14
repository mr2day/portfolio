import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Sections from './Sections';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route path='/sections' component={Sections}></Route>
  </Switch>
);

export default Main;
