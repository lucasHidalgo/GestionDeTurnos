<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;




$app->get("/Pacientes/obtenerPacientes", function(Request $request, Response $response ){
    $consulta = "SELECT * FROM usuarios WHERE rol_id in (SELECT id from roles where Nombre = 'Paciente')";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $pacientes = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($pacientes);
    }catch(PDOexception $e){
        
        echo $e->getMessage();
    }
});



$app->post("/Pacientes/agregarPaciente", function(Request $request, Response $response ){    
    $nombre = $request->getParam("Nombre");
    $apellido = $request->getParam("Apellido");
    $tipoDocumento = $request->getParam("TipoDocumento");
    $numeroDocumento = $request->getParam("NumeroDocumento");
    $fechaNacimiento = $request->getParam("FechaNacimiento");
    
   
   $query = "INSERT INTO usuarios (nombre,apellido,tipoDocumento,NumeroDocumento,FechaNacimiento,Contraseña,Email,Especialidad_ID,Rol_Id)
             VALUE(
                   :nombre,
                   :apellido,
                   :tipoDocumento,
                   :numeroDocumento,
                   :fechaNacimiento,
                   'asd',
                   'asd',
                   null,
                   2)";
                         
   try{
       $db = new Database();        
       $db=$db->conectar();
       $update = $db->prepare($query);
       
       $update->bindParam(":nombre",$nombre);
       $update->bindParam(":apellido",$apellido);
       $update->bindParam(":tipoDocumento",$tipoDocumento);
       $update->bindParam(":numeroDocumento",$numeroDocumento);
       $update->bindParam(":fechaNacimiento",$fechaNacimiento);        
       $update->execute();        

       $arr = array('success'=> true,'error'=>false,'msj'=>"se creo con exito el Paciente");
       echo json_encode($arr);
   }catch(PDOexception $e){
       $arr = array('error'=> true,'msj'=>$e->getMessage());
       echo json_encode($arr);
   }
});

$app->put("/Pacientes/editarPaciente/{id}", function(Request $request, Response $response ){
   $id = $request->getAttribute("id");
   $nombre = $request->getParam("Nombre");
   $apellido = $request->getParam("Apellido");
   $tipoDocumento = $request->getParam("TipoDocumento");
   $numeroDocumento = $request->getParam("NumeroDocumento");
   $fechaNacimiento = $request->getParam("FechaNacimiento");
   
   $query = "UPDATE usuarios SET
                   nombre  = :nombre,
                   apellido =:apellido,
                   tipoDocumento =:tipoDocumento,
                   numeroDocumento =:numeroDocumento,
                   FechaNacimiento =:fechaNacimiento,
                   contraseña= 'pass',
                   Email='email',
                   Especialidad_ID=null,
                   Rol_Id=2
                   WHERE ID = $id";        
   try{
       $db = new Database();        
       $db=$db->conectar();
       $update = $db->prepare($query);
       $update->bindParam(":nombre",$nombre);
       $update->bindParam(":apellido",$apellido);
       $update->bindParam(":tipoDocumento",$tipoDocumento);
       $update->bindParam(":numeroDocumento",$numeroDocumento);
       $update->bindParam(":fechaNacimiento",$fechaNacimiento);
       
       $update->execute();
       $arr = array('success'=> true,'error'=>false,'msj'=>"se edito con exito el Paciente");
       echo json_encode($arr);
   }catch(PDOexception $e){
       $arr = array('error'=> true,'msj'=>$e->getMessage());
       echo json_encode($arr);
   }
});

$app->delete("/Pacientes/borrarPaciente/{id}", function(Request $request, Response $response ){
    $id = $request->getAttribute("id");    
    
    $query = "DELETE FROM usuarios
              WHERE ID = $id";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $update = $db->prepare($query);               
        $update->execute();
        $arr = array('success'=> true,'error'=>false,'msj'=>"se borro con exito el paciente");
        echo json_encode($arr);
    }catch(PDOexception $e){
        $arr = array('error'=> true,'msj'=>$e->getMessage());
        echo json_encode($arr);
    }
});

?>