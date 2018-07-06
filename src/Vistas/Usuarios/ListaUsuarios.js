import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ModalCrearUsuario from './modalCrearUsuario';
import ModalBorrarUsuario from './ModalBorrarUsuario';

class ListaUsuarios extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      Usuarios : []
    };
  }


  componentWillMount(){
    return fetch('http://localhost/gestiondeturnos/api/public/Usuarios/obtenerUsuarios',{
      method: 'GET',  
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      this.setState({
        Usuarios : responseJson
      });     
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  render() {
    let Usuarios = this.state.Usuarios;
    return (               
        <main>        
         <Jumbotron>         
           <ModalCrearUsuario texto={"Crear usuario"}/>
           <h5>Lista de Usuarios</h5>
         <Table hover bordered striped>
        <thead>
          <tr>            
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Documento</th>
            <th>Numero Documento</th>
            <th>Fecha nacimiento</th>
            <th>Especialidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Usuarios.map((usuario,key) => {               
            return (<tr key={key}>
              <td >{usuario.Nombre}</td>
              <td>{usuario.Apellido}</td>
              <td>{usuario.TipoDocumento}</td>
              <td>{usuario.NumeroDocumento}</td>
              <td>{usuario.FechaNacimiento}</td>
              <td>{usuario.NombreEspecialidad}</td> 
              <td>
                <ModalCrearUsuario texto={"Editar"} Usuario={usuario}/><ModalBorrarUsuario texto={"Eliminar"} Usuario={usuario}/>
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

export default ListaUsuarios;
