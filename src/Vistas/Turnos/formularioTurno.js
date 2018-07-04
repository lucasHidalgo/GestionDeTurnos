import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormularioTurno extends Component {
  render() {
    return (
      <Form>
          <FormGroup>
          <Label for="Paciente">Paciente</Label>
          <Input type="select" name="select" id="Paciente">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> 
        <FormGroup>
          <Label for="Medico">Medico</Label>
          <Input type="select" name="select" id="Medico">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
      </Form>
    );
  }
}
export default FormularioTurno;