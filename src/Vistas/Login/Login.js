import React, { Component } from 'react';
import {  BrowserRouter as Router,   Route,   Link, Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    return (        
      <main>   
        <form>                     
        <p className="App-intro">
        <input type="text" id="Email"/><br/>
        <input type="password" id="clave"/><br/>
          To get started, edit <code>src/App.js</code> and save to reload.  Main        
        </p>           
        <Link onClick="" className="nav-link" to="/Home">Home</Link>
        </form>
      </main>
    
    );
  }
}

export default Login;
