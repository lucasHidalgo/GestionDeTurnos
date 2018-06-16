import React, { Component } from 'react';
import TraerDatos from '../../PruebasFetchPhp/TraerDatos.js';


class Login extends Component {
  render() {
    return (      
      <main>       
        <p className="App-intro">
        <input type="text" id="Email"/><br/>
        <input type="password" id="clave"/><br/>
          To get started, edit <code>src/App.js</code> and save to reload.  Main        
        </p>     
        
      </main>
    );
  }
}

export default Login;
