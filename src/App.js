import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import { getDataFromApi, getDataFromApiByFetch } from './ApiService';

import Home from './pages/Home/Home';
import About from './pages/About';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  return (
    <Router>
      <nav>
        <HeaderBar />
      </nav>

      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
