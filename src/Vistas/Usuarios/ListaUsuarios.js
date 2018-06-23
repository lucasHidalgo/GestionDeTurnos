import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ModalCrearUsuario from './modalCrearUsuario';

class ListaUsuarios extends Component { 
  render() {
    return (               
        <main>        
         <Jumbotron>         
           <ModalCrearUsuario/>
           <h5>Lista de usuarios</h5>
         <Table hover bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </Jumbotron>
        </main>    
    );
  }
}

export default ListaUsuarios;
