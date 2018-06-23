import React, { Component } from 'react';
import { Button , Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormularioMedico from './formularioMedico';

class ModalCrearMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (                                
         <div>              
        <Button outline color="success" onClick={this.toggle}>{this.props.buttonLabel} Crear Medico  </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Crear Nuevo Medico</ModalHeader>
          <ModalBody>
            <FormularioMedico/>
          </ModalBody>
          <ModalFooter>
              {/* este boton sera el submit handler*/}
            <Button color="primary" onClick={this.toggle}>Agregar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCrearMedico;
