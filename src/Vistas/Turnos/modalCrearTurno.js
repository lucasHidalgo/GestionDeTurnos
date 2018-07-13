import React, { Component } from 'react';
import { Button , Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';


class ModalCrearTurno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      medicos:[],
      pacientes:[],
      horas:[],
      consultorios:[],
      pacienteId:this.props.turno != null ? this.props.turno.pacienteId : null,
      medicoId:this.props.turno != null ? this.props.turno.medicoId : null,
      horaId:this.props.turno != null ? this.props.turno.horaId : null,
      fecha:this.props.turno != null ? this.props.turno.Fecha : null,
      consultorioId:this.props.turno != null ? this.props.turno.consultorioId : null,
      turnoId :this.props.turno != null ? this.props.turno.turnoId : null,
      esEdicion : this.props.turno == null ? false : true
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);    
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
          pacientes:responseJson.pacientes,  
          horas:responseJson.horas,   
          consultorios:responseJson.consultorios       
        });        
      })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleSubmit(event) {        
    event.preventDefault();    
    let paciente = document.querySelectorAll('#Paciente option:checked')[0].value;
    let medico = document.querySelectorAll('#Medico option:checked')[0].value;  
    let hora = document.querySelectorAll('#horas option:checked')[0].value;  
    let fechaTurno = document.querySelectorAll('#fechaTurno')[0].value;
    let consultorioId = document.querySelectorAll('#consultorio option:checked')[0].value;  
    
    
    const parametros = JSON.stringify({
      pacienteId: paciente,
      medicoId: medico,
      horaId: hora,
      fechaTurno : fechaTurno,
      consultorioId : consultorioId
  });      

  let url;
  let metodo;    
  if(this.state.esEdicion){
    let idTurno = this.state.turnoId; 
     url = "http://localhost/gestiondeturnos/api/public/Turno/editarTurno/"+idTurno;
     metodo = "put";
  }else
    {
      //this.props.onAdd(parametros);
      url = "http://localhost/gestiondeturnos/api/public/Turno/agregarTurno";
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



  render() {
    let medicos = this.state.medicos;
    let pacientes = this.state.pacientes;          
    let horas = this.state.horas;          
    let consultorios = this.state.consultorios;  
    let datosTurno = this.state;
    console.log(datosTurno);
    return (                                
         <div>              
        <Button outline color="success" onClick={this.toggle}>{this.props.buttonLabel} {this.props.texto} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear Nuevo Turno</ModalHeader>
          <Form>
          <ModalBody>                      
          <FormGroup>
          <Label for="Paciente">Paciente</Label>
          <Input value={datosTurno.pacienteId} onChange={this.handleChange("pacienteId")} type="select" name="select" id="Paciente">
            {pacientes.map((paciente,key)=>{
              return <option key={key} value={paciente.ID}>{paciente.Nombre} {paciente.Apellido}</option>
            })}            
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="Medico">Medico</Label>
          <Input value={datosTurno.medicoId} onChange={this.handleChange("medicoId")} type="select" name="select" id="Medico">
          {medicos.map((medico,key)=>{
              return <option key={key} value={medico.ID}>{medico.Nombre} {medico.Apellido}</option>
            })}
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="fechaTurno">Fecha</Label>
          <Input value={datosTurno.fecha} onChange={this.handleChange("fecha")} type="date" name="date" id="fechaTurno" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="horaTurno">Hora</Label>
          <Input value={datosTurno.horaId} onChange={this.handleChange("horaId")} type="select" name="select" id="horas">
          {horas.map((hora,key)=>{
              return <option key={key} value={hora.Id}>{hora.Hora} </option>
            })}
          </Input>
        </FormGroup>      
        <FormGroup>
          <Label for="consultorio">Consultorio</Label>
          <Input value={datosTurno.consultorioId} onChange={this.handleChange("consultorioId")} type="select" name="select" id="consultorio">
          {consultorios.map((consultorio,key)=>{
              return <option key={key} value={consultorio.ID}>{consultorio.Nombre} </option>
            })}
          </Input>
        </FormGroup>           
      
          </ModalBody>
          <ModalFooter>
              {/* este boton sera el submit handler*/}
            <Button color="primary" onClick={this.handleSubmit}>Agregar</Button>{' '}            
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>                    
      </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCrearTurno;
