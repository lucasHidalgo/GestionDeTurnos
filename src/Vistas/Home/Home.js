import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Col, Input } from 'reactstrap';

class Home extends Component {

  constructor(props){
    super(props);
    this.state ={
      redirect: false
    }
    this.logout = this.logout.bind(this);
  }

  componentWilMount(){
    if(sessionStorage.getItem("userData")){
      console.log("Call User Feed");
    }
    else{
      this.setState({redirect: true});
    }
  }

  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirect: true});

    fetch('http://localhost/gestiondeturnos/api/public/Usuarios/logoffusuario',{
      method: 'GET',  
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      this.setState({
        Logout : responseJson
      });     
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    const mainHome = {
      color:"white"
    }

    if(this.state.redirect){
     return (<Redirect to={''}/>)
    }

    return (               
        <main style={mainHome}>   
          Ultimos turnos:    
            
        <Col sm="12" md={{ size: 2}}>
        <Input type="submit" value="Cerrar Sesión" className="button" onClick={this.logout}/>
        </Col>  
        </main>    
    );
  }
}

export default Home;
