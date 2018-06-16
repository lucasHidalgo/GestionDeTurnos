import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Vistas/Header/Header.js';
import Login from './Vistas/Login/Login.js';
import Home from './Vistas/Home/Home';
import CrearUsuario from './Vistas/Usuarios/CrearUsuario';

class App extends Component {
  render() {
    return (      
      <Router>        
      <div>      
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={Home}/>        
        <Route path="/CrearUsuario" component={CrearUsuario}/>        
      </div>
    </Router>
    );
  }
}

export default App;
