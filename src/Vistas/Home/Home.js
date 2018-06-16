import React, { Component } from 'react';
import TraerDatos from '../../PruebasFetchPhp/TraerDatos.js';
import Header from '../Header/Header.js';

class Home extends Component {
  render() {
    return (   
    <div>
        <Header/>
        <main>       
            <TraerDatos/>    
        </main>
    </div>   
    );
  }
}

export default Home;
