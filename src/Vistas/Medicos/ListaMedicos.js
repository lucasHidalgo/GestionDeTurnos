import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ModalCrearMedico from './modalCrearMedico';
import ModalBorrarMedico from './ModalBorrarMedico';

class ListaMedicos extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      Medicos : []
    };
    this.onAdd = this.onAdd.bind(this);
  }


  componentWillMount(){
    return fetch('http://localhost/gestiondeturnos/api/public/Medicos/obtenerMedicos',{
      method: 'GET',  
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      this.setState({
        Medicos : responseJson
      });     
    })
    .catch((error) => {
      console.error(error);
    });
  }
  onAdd(medico){    
    let listaMedicos = this.state.Medicos;
    listaMedicos.push(JSON.parse(medico));
    this.setState({listaMedicos});
    console.log(listaMedicos);
  }
  
  render() {
    let medicos = this.state.Medicos;
    return (               
        <main>        
         <Jumbotron>         
           <ModalCrearMedico texto={"Crear medico"} onAdd={this.onAdd}/>
           <h5>Lista de Medicos</h5>
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
          {medicos.map((medico,key) => {               
            return (<tr key={key}>
              <td >{medico.Nombre}</td>
              <td>{medico.Apellido}</td>
              <td>{medico.TipoDocumento}</td>
              <td>{medico.NumeroDocumento}</td>
              <td>{medico.FechaNacimiento}</td>
              <td>{medico.NombreEspecialidad}</td> 
              <td>
                <ModalCrearMedico texto={"Editar"} Medico={medico}/> 
                <ModalBorrarMedico texto={"Eliminar"} Medico={medico}/>
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

export default ListaMedicos;
