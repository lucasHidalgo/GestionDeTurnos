import React, { Component } from 'react';
import TraerDatos from '../../PruebasFetchPhp/TraerDatos.js';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Login extends Component {
  render() {
    return (
    <Router>      
      <main>       
        <p className="App-intro">
        <input type="text" id="Email"/><br/>
        <input type="password" id="clave"/><br/>
          To get started, edit <code>src/App.js</code> and save to reload.  Main        
        </p>     
        <Link to="/home">Home</Link>
      </main>
      </Router>
    );
  }
}

export default Login;
