import React, { Component } from 'react';
import Header from '../Header/Header.js';

class CrearUsuario extends Component {
  render() {
    return (   
    <div>
        <Header/>
        <main>     
            <label>Nombre</label><br/>
            <input type="text" id="nombre"/><br/>
            <label>Apellido</label><br/>
            <input type="text" id="nombre"/>
        </main>
    </div>   
    );
  }
}

export default CrearUsuario;
