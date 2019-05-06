import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

class App extends Component {

  render(){
    return(
      <Router>
        <div>
          <h2>Welcome to app</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to='/about' className="nav-link"> About</Link></li>
              <li><Link to='/contact' className="nav-link"> Contact</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
