import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      usuario: '',
      contraseña: '',
      redirect: false
    }
  

  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
  }
  
  login(event){
    event.preventDefault();
    console.log(this.state);
   const parametros = JSON.stringify({
     usuario: this.state.usuario,
     contraseña:this.state.contraseña
    });
   
   fetch('http://localhost/gestiondeturnos/api/public/Usuarios/iniciarsesion', {
          headers: {
              'Content-Type': 'application/json',              
          },
          method: "POST",
          body: parametros
      }).then((response) => response.json())      
      .then((responseJson) => {  
        console.log(responseJson)    
        this.setState({
          redirect:true      
        }); 
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    
  }


  render() {

    if(this.state.redirect){
     return (<Redirect to={'/Home'}/>)
    }  



    return (
      <div>
      <Col sm="12" md={{ size: 7, offset: 4 }}>
      <h2><Badge color="secondary">Iniciar Sesión</Badge></h2>
      </Col>
     <Form>
        <FormGroup>
        <Col sm="12" md={{ size: 3, offset: 4 }}>        
    <Label for="Usuario">Usuario</Label>
    <Input type="text" name="usuario" id="Usuario" placeholder="Ingrese su usuario"  onChange={this.onChange}/>
    </Col>
    </FormGroup>
    <FormGroup>
    <Col sm="12" md={{ size: 3, offset: 4 }}>
    <Label for="Contraseña">Contraseña</Label>
    <Input type="password" name="contraseña" id="Contraseña" placeholder="Ingrese su contraseña"  onChange={this.onChange}/>
    </Col>
    </FormGroup>
    <Col sm="12" md={{ size: 1, offset: 5 }}>
    <Input type="button" value="Iniciar Sesión" className="button" onClick={this.login} />
    </Col>
    </Form>
    </div>
    );
  }
}

export default Login;
