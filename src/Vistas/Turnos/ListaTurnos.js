import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ModalCrearTurno from './modalCrearTurno';
import ModalBorrarTurno from './ModalBorrarTurno';

class ListaTurnos extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      Turnos : []
    };
    this.onAdd = this.onAdd.bind(this);
  }

  componentWillMount(){
     fetch('http://localhost/gestiondeturnos/api/public/Turnos/obtenerTurnos',{
      method: 'GET',  
    })
    .then((response) => response.json())
    .then((responseJson) => {   
      console.log(responseJson);
      this.setState({
        Turnos : responseJson
      });     
    })
    .catch((error) => {
      console.error(error);
    });    
  }

  onAdd(turno){    
    let listaTurnos = this.state.Turnos;
    listaTurnos.push(JSON.parse(turno));
    this.setState({listaTurnos});
    console.log(listaTurnos);
  }

  render() {
    let turnos = this.state.Turnos;
    return (               
        <main>        
         <Jumbotron>         
           <ModalCrearTurno texto={"Crear turno"}/>
           <h5>Lista de Turnos</h5>
         <Table hover bordered striped>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Medico</th>
            <th>Consultorio</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno,key) => {               
            return (<tr key={key}>
              <td >{turno.pacNombre} {turno.pacApe}</td>
              <td>{turno.medNombre} {turno.medApe}</td>
              <td>{turno.Consultorio}</td>
              <td>{turno.Fecha}</td>
              <td>{turno.Hora}</td>              
              <td>

                <ModalCrearTurno texto={"Editar"} turno={turno}/>  
                <ModalBorrarTurno texto={"Eliminar"} turno={turno}/>               
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

export default ListaTurnos;
