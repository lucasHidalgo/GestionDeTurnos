import React, { Component } from 'react';
import { Button , Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';


class ModalCrearTurno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      medicos:[],
      pacientes:[]
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount(){
    fetch('http://localhost/gestiondeturnos/api/public/Turnos/obtenerRelaciones',
      {
        method:'get'
      })
      .then(response=>response.json())
      .then(responseJson=>{
        this.setState({
          medicos:responseJson.medicos,
          pacientes:responseJson.pacientes
        });        
      })
  }




  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    let medicos = this.state.medicos;
    let pacientes = this.state.pacientes;
    return (                                
         <div>              
        <Button outline color="success" onClick={this.toggle}>{this.props.buttonLabel} Crear Turno  </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear Nuevo Turno</ModalHeader>
          <Form>
          <ModalBody>                      
          <FormGroup>
          <Label for="Paciente">Paciente</Label>
          <Input type="select" name="select" id="Paciente">
            {pacientes.map((paciente,key)=>{
              return <option key={key} value={paciente.ID}>{paciente.Nombre} {paciente.Apellido}</option>
            })}            
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="Medico">Medico</Label>
          <Input type="select" name="select" id="Medico">
          {medicos.map((medico,key)=>{
              return <option key={key} value={medico.ID}>{medico.Nombre} {medico.Apellido}</option>
            })}
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="fechaTurno">Fecha</Label>
          <Input type="date" name="date" id="fechaTurno" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="horaTurno">Hora</Label>
          <Input type="time" name="time" id="horaTurno" placeholder="time placeholder" />
        </FormGroup>                
      
          </ModalBody>
          <ModalFooter>
              {/* este boton sera el submit handler*/}
            <Button color="primary" onClick={this.toggle}>Agregar</Button>{' '}            
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>                    
      </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCrearTurno;
