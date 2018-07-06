import React, { Component } from 'react';
import { Button , Modal, ModalHeader,Form, FormGroup, Label, Input, FormText, ModalBody, ModalFooter } from 'reactstrap';


class ModalCrearPaciente extends Component {
  constructor(props){
    super(props);
    this.state={
      modal: false,      
      Nombre:this.props.Paciente != null ? this.props.Paciente.Nombre : "",
      Apellido: this.props.Paciente != null ?this.props.Paciente.Apellido:"",
      TipoDocumento:this.props.Paciente != null ?this.props.Paciente.TipoDocumento:"",
      NumeroDocumento: this.props.Paciente != null ?this.props.Paciente.NumeroDocumento:"",      
      FechaNacimiento: this.props.Paciente != null ? this.props.Paciente.FechaNacimiento:"",
      Id:this.props.Paciente != null ? this.props.Paciente.ID:""
    };      
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleSubmit(event) {    
    
    event.preventDefault();
    const idPaciente = this.state.Id;
    const parametros = JSON.stringify({
      TipoDocumento: this.state.TipoDocumento,
      NumeroDocumento: this.state.NumeroDocumento,
      Nombre: this.state.Nombre,
      Apellido: this.state.Apellido,
      FechaNacimiento: this.state.FechaNacimiento
  });
  console.log(parametros);
  let url;
  let metodo;
  if(this.props.Paciente != null){
     url = "http://localhost/gestiondeturnos/api/public/Pacientes/editarPaciente/"+idPaciente;
     metodo = "put";
  }else
    {
      url = "http://localhost/gestiondeturnos/api/public/Pacientes/agregarPaciente";
      metodo = "post";
    }
  

  fetch(url, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          method: metodo,
          body: parametros
      }).then((response) => response.json())
      .then((responseJson) => {      
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

      this.setState({
        modal:false      
      });    
  }

  handleChange(key) {    
    return function (e) {
      const state = {};
      state[key] = e.target.value;
      this.setState(state);
  }.bind(this);   
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    let datosPaciente = this.state;
    return (                                
         <div>              
        <Button outline color="success" onClick={this.toggle}>{this.props.buttonLabel} {this.props.texto} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear Nuevo Paciente</ModalHeader>                            
          <Form>
        <ModalBody>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" onChange={this.handleChange("Nombre")} value={datosPaciente.Nombre}  />
        </FormGroup>
        <FormGroup>
          <Label for="Apellido">Apellido</Label>
          <Input type="text" name="Apellido" id="Apellido" value={datosPaciente.Apellido} onChange={this.handleChange("Apellido")}/>
        </FormGroup>
        <FormGroup>
          <Label for="tipoDoc">Tipo Documento</Label>
          <Input type="text" name="tipoDoc" id="tipoDoc" value={datosPaciente.TipoDocumento} onChange={this.handleChange("TipoDocumento")}/>
        </FormGroup>
        <FormGroup>
          <Label for="numDoc">Numero documento</Label>
          <Input type="text" name="numDoc" id="numDoc" value={datosPaciente.NumeroDocumento} onChange={this.handleChange("NumeroDocumento")}/>
        </FormGroup>
        <FormGroup>
          <Label for="fechaTurno">Fecha</Label>
          <Input type="date" name="date" value={datosPaciente.FechaNacimiento} onChange={this.handleChange("FechaNacimiento")} />
        </FormGroup>          
        </ModalBody>
        <ModalFooter>              
            <Button type="button" color="primary" onClick={this.handleSubmit} onClick={this.handleSubmit}>Agregar</Button>{' '}
            <Button type="button" color="secondary" onClick={this.toggle} >Cancelar</Button>
          </ModalFooter>                 
      </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCrearPaciente;
