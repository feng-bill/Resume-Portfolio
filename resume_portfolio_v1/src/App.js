import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouterDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './store'


import './App.css';

//import Header from '../src/components/Header/Header'
import Dashboard from '../src/components/Dashboard/Dashboard'
import About from '../src/components/About/About'
import Projects from './components/Projects/Projects'
// import Work from './components/Work/Work'

import Skills from './components/Skills/Skills'
import Contact from '../src/components/Contact/Contact'
import Photo from '../src/components/Photo/Photo'

import Todo from './components/Todo/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Route exact={true} path="/" component={Dashboard} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/photo' component={Photo} />
          <Route exact path='/todo' component={Todo} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
