import React, { Component } from 'react';
import { Button , Modal, ModalHeader,Form, FormGroup, Label, Input,  ModalBody, ModalFooter } from 'reactstrap';


class ModalCrearMedico extends Component {
  constructor(props){
    super(props);
    this.state={
      modal: false,      
      Nombre:this.props.Medico != null ? this.props.Medico.Nombre : "",
      Apellido: this.props.Medico != null ?this.props.Medico.Apellido:"",
      TipoDocumento:this.props.Medico != null ?this.props.Medico.TipoDocumento:"",
      NumeroDocumento: this.props.Medico != null ?this.props.Medico.NumeroDocumento:"",
      Especialidad:this.props.Medico != null ? this.props.Medico.Especialidad:"",
      EspecialidadId:this.props.Medico != null ? this.props.Medico.EspecialidadId:"",
      FechaNacimiento: this.props.Medico != null ? this.props.Medico.FechaNacimiento:"",
      Id:this.props.Medico != null ? this.props.Medico.ID:"",
      Especialidades:null
    };      
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  componentWillMount(){
    fetch('http://localhost/gestiondeturnos/api/public/Especialidad/obtenerEspecialidades',
      {
        method:'get'
      })
      .then(response=>response.json())
      .then(responseJson=>{
        this.setState({
          Especialidades:responseJson
        });        
      })
  }
  
  handleSubmit(event) {        
    event.preventDefault();
    const idMedico = this.state.Id;
    let especialidad = document.querySelectorAll('#especialidad option:checked')[0].text  
    
    const parametros = JSON.stringify({
      TipoDocumento: this.state.TipoDocumento,
      NumeroDocumento: this.state.NumeroDocumento,
      Nombre: this.state.Nombre,
      Apellido: this.state.Apellido,
      FechaNacimiento: this.state.FechaNacimiento,
      ID: idMedico,
      NombreEspecialidad: especialidad
  });  
    this.props.onAdd(parametros);
  let url;
  let metodo;
  if(this.props.Medico != null){
     url = "http://localhost/gestiondeturnos/api/public/Medicos/editarMedico/"+idMedico;
     metodo = "put";
  }else
    {
      url = "http://localhost/gestiondeturnos/api/public/Medicos/agregarMedico";
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
        //agregar a la lista  
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
    let datosMedico = this.state;
    let especialidades = this.state.Especialidades;    
    return (                                
         <div>              
        <Button outline color="success" onClick={this.toggle}>{this.props.buttonLabel} {this.props.texto} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear Nuevo Medico</ModalHeader>                            
          <Form>
        <ModalBody>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" onChange={this.handleChange("Nombre")} value={datosMedico.Nombre}  />
        </FormGroup>
        <FormGroup>
          <Label for="Apellido">Apellido</Label>
          <Input type="text" name="Apellido" id="Apellido" value={datosMedico.Apellido} onChange={this.handleChange("Apellido")}/>
        </FormGroup>
        <FormGroup>
          <Label for="tipoDoc">Tipo Documento</Label>
          <Input type="text" name="tipoDoc" id="tipoDoc" value={datosMedico.TipoDocumento} onChange={this.handleChange("TipoDocumento")}/>
        </FormGroup>
        <FormGroup>
          <Label for="numDoc">Numero documento</Label>
          <Input type="text" name="numDoc" id="numDoc" value={datosMedico.NumeroDocumento} onChange={this.handleChange("NumeroDocumento")}/>
        </FormGroup>
        <FormGroup>
          <Label for="fechaTurno">Fecha</Label>
          <Input type="date" name="date" value={datosMedico.FechaNacimiento} onChange={this.handleChange("FechaNacimiento")} />
        </FormGroup>
        <FormGroup>
          <Label for="especialidad">Especialidad</Label>
          <Input type="select" name="especialidad" id="especialidad"
           value={datosMedico.EspecialidadId} 
           onChange={this.handleChange("EspecialidadId")}>
            {especialidades != null ? especialidades.map((especialidad,key)=>{
              return <option key={key} value={especialidad.Id}>{especialidad.nombre}</option>
           }):""}       
          </Input>
        </FormGroup>                   
        </ModalBody>
        <ModalFooter>              
            <Button type="button" color="primary"  onClick={this.handleSubmit}>Agregar</Button>{' '}
            <Button type="button" color="secondary" onClick={this.toggle} >Cancelar</Button>
          </ModalFooter>                 
      </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCrearMedico;
