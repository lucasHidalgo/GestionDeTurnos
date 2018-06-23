import React, { Component } from 'react';
import '../../App.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,} from 'reactstrap';

class Header extends Component {  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }  

  render() {
    const navItems = {
      color: 'white',      
    };
    return (      
        <header >      
        <Navbar color="dark" light expand="md">
        <img src={logo} className="App-logo" alt="logo" />
          <NavbarBrand style={navItems} tag={Link} to="/Home">Gestion de Turnos "Pandas"</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={navItems}  tag={Link} to="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={navItems}  tag={Link} to="/ListaPacientes" >Pacientes</NavLink>
              </NavItem>    
              <NavItem>
                <NavLink style={navItems}  tag={Link} to="/ListaMedicos" >Medicos</NavLink>
              </NavItem>   
              <NavItem>
                <NavLink style={navItems}  tag={Link} to="/ListaTurnos" >Turnos</NavLink>
              </NavItem>   
              <NavItem>
                <NavLink style={navItems}  tag={Link} to="/ListaUsuarios" >Usuarios</NavLink>
              </NavItem>             
            </Nav>
          </Collapse>
        </Navbar>   
        </header>          
    );
  }
}

export default Header;