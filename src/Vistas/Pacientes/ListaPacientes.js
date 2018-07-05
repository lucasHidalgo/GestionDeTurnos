import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ModalCrearPaciente from './modalCrearPaciente';

class ListaPacientes extends Component {
constructor(props) {
    super(props);
    this.state = {
      Pacientes : []
    };
  }

componentWillMount(){
    return fetch('http://localhost/gestiondeturnos/api/Medicos/api/obtenerPacientes',{
      method: 'GET',  
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      this.setState({
        Pacientes : responseJson
      });    
    })
    .catch((error) => {
      console.error(error);
    });
  } 
  render() {
    let pacientes = this.state.Pacientes;
    return (               
        <main>        
         <Jumbotron>         
           <ModalCrearPaciente texto={"Crear paciente"}/>
           <h5>Lista de Pacientes</h5>
         <Table hover bordered striped>
        <thead>
          <tr>            
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Documento</th>
            <th>Numero Documento</th>
            <th>Fecha nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente,key) => {               
            return (<tr key={key}>
              <td >{paciente.Nombre}</td>
              <td>{paciente.Apellido}</td>
              <td>{paciente.TipoDocumento}</td>
              <td>{paciente.NumeroDocumento}</td>
              <td>{paciente.FechaNacimiento}</td>
              <td>
                <ModalCrearPaciente texto={"Editar"} Paciente={paciente}/> <a>Eliminar</a>
                </td>
            </tr>)
          })}
          

        </tbody>
      </Table>
      </Jumbotron>
        </main>    
    );
  }
}

export default ListaPacientes;
