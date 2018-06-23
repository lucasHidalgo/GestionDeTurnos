import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {  
  render() {
        let añoActual = new Date().getFullYear();
    const hr = {      
      backgroundColor:"white"      
    };
    const footerH6={
        color:"white",
        fontSize:11,
        marginLeft:20
    }
    return (      
        <footer >     
         <hr style={hr}/>
         <h6 style={footerH6}>Gestion de turnos "Pandas" Lucas Hidalgo - Natanael Corteggiano | {añoActual} &copy;</h6>
        </footer>          
    );
  }
}

export default Footer;