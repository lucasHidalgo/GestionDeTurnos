import React, { Component } from 'react';
import '../../App.css';
import logo from './logo.svg';
import {  BrowserRouter as Router,   Route,   Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';


class Header extends Component {  
 
  render() {
    return (      
        <header className="App-header">      
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React desde Header</h1>    
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/CrearUsuario">Nuevo Usuario</Link>
        </header>          
    );
  }
}

export default Header;