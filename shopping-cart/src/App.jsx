import React, { Component } from 'react';
import './css/style.scss'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home            from './Components/Home';


class App extends Component {
    render() {
        return (
            <Router>
				<Route exact path='/'          component={Home} />{/* 
        <Route path='/Admin/Login'     component={AdminLogin} /> */}
     
      </Router>
    );
  }
} 
export default App;