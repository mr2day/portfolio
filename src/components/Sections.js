import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SectionList from './SectionList'
import Section from './Section'

const Sections = () => (
  <div className='about'>
    <h1>Sections</h1>
    <Switch>
      <Route exact path='/sections' component={SectionList}/>
      <Route path='/sections/:number' component={Section}/>
    </Switch>
  </div>
);

export default Sections;
