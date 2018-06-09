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
      body: "qwe"
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
      
        <h1>PRUEBA</h1>
        <h4>{this.state.mensaje}</h4>
       
      </div>
    );
  }
}

export default TraerDatos;