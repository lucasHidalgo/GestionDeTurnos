import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormularioMedico extends Component {
  constructor(props){
    super(props);
    this.state={
      Medico:null
    };
    console.log(props.Medico);
  }
  render() {
    let datosMedico = this.props.Medico;
    return (
      <Form>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input type="text" name="nombre" id="nombre" value={datosMedico.Nombre} />
        </FormGroup>
        <FormGroup>
          <Label for="Apellido">Apellido</Label>
          <Input type="text" name="Apellido" id="Apellido" value={datosMedico.Apellido} />
        </FormGroup>
        <FormGroup>
          <Label for="tipoDoc">Tipo Documento</Label>
          <Input type="text" name="tipoDoc" id="tipoDoc" value={datosMedico.TipoDocumento} />
        </FormGroup>
        <FormGroup>
          <Label for="numDoc">Numero documento</Label>
          <Input type="text" name="numDoc" id="numDoc" value={datosMedico.NumeroDocumento} />
        </FormGroup>
        <FormGroup>
          <Label for="especialidad">Especialidad</Label>
          <Input type="select" name="especialidad" id="especialidad">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>   
        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input type="select" name="rol" id="rol">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>              
      </Form>
    );
  }
}
export default FormularioMedico;