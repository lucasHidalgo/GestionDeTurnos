import React, { Component } from 'react';




class TraerDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje : null
    };
  }

  componentWillMount(){
    return fetch('http://localhost/gestiondeturnos/api/api.php',{
      method: 'POST',  
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      this.setState({
          mensaje : responseJson.Mensaje
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
      
        <h5>PRUEBA</h5>
        <h4>{this.state.mensaje}</h4>
       
      </div>
    );
  }
}

export default TraerDatos;