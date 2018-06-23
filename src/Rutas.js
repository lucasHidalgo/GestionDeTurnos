import React, { Component } from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Login from './Vistas/Login/Login.js';
import Home from './Vistas/Home/Home';
import ListaPacientes from './Vistas/Pacientes/ListaPacientes';
import ListaUsuarios from './Vistas/Usuarios/ListaUsuarios';
import ListaMedicos from './Vistas/Medicos/ListaMedicos';
import ListaTurnos from './Vistas/Turnos/ListaTurnos';

class Rutas extends Component {
  render() {
    return (      
    <div>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={Home}/>        
        <Route path="/ListaPacientes" component={ListaPacientes}/>
        <Route path="/ListaUsuarios" component={ListaUsuarios}/>
        <Route path="/ListaMedicos" component={ListaMedicos}/>
        <Route path="/ListaTurnos" component={ListaTurnos}/>              
        </Switch>
    </div>
    );
  }
}

export default Rutas;
