import React, { Component } from 'react';
import './App.css';
import {Router, Route } from 'react-router-dom';
import Header from './Vistas/Header/Header.js';
import Login from './Vistas/Login/Login.js';
import Home from './Vistas/Home/Home';
import ListaPacientes from './Vistas/Pacientes/ListaPacientes';
import Rutas from './Rutas';
import Footer from './Vistas/Footer/Footer';


class App extends Component {
  render() {
    return (      
     <div>
       <Header/>
       <Rutas/>
       <Footer/>
      </div>
    );
  }
}

export default App;
