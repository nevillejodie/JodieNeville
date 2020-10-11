import React from 'react';
import './App.css';
import About from '../AboutMe'
import Contact from '../Contact'
import Home from '../Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="li">
              <NavLink exact={true} to="/" className="normal" activeClassName="selected">Home</NavLink>
            </li>
            <li className="li">
              <NavLink to="/aboutme" className="normal" activeClassName="selected">About Me</NavLink>
            </li>
            <li className="li">
              <NavLink to="/contact" className="normal" activeClassName="selected" >Contact</NavLink>
            </li>
          </ul>
        </nav>
   
        <Switch>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




