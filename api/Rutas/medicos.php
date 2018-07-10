<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Medicos/obtenerMedicos", function(Request $request, Response $response ){
    $consulta = "SELECT u.ID, u.Nombre,u.Apellido,u.TipoDocumento,u.NumeroDocumento,
                u.FechaNacimiento, e.Nombre NombreEspecialidad FROM usuarios as u
                LEFT JOIN especialidades as e on u.Especialidad_ID = e.ID
                 WHERE rol_id in (SELECT id from roles where Nombre = 'Medico')";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $medicos = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($medicos);
    }catch(PDOexception $e){
        
        echo $e->getMessage();
    }
});

$app->post("/Medicos/agregarMedico", function(Request $request, Response $response ){    
     $nombre = $request->getParam("Nombre");
     $apellido = $request->getParam("Apellido");
     $tipoDocumento = $request->getParam("TipoDocumento");
     $numeroDocumento = $request->getParam("NumeroDocumento");
     $fechaNacimiento = $request->getParam("FechaNacimiento");
     $especialidadId = $request->getParam("especialidadId");
    
    $query = "INSERT INTO usuarios (nombre,apellido,tipoDocumento,NumeroDocumento,FechaNacimiento,Contraseña,Email,Especialidad_ID,Rol_Id)
              VALUE(
                    :nombre,
                    :apellido,
                    :tipoDocumento,
                    :numeroDocumento,
                    :fechaNacimiento,
                    'asd',
                    'asd',
                    :especialidadId,
                    1)";
                          
    try{
        $db = new Database();        
        $db=$db->conectar();
        $update = $db->prepare($query);
        
        $update->bindParam(":nombre",$nombre);
        $update->bindParam(":apellido",$apellido);
        $update->bindParam(":tipoDocumento",$tipoDocumento);
        $update->bindParam(":numeroDocumento",$numeroDocumento);
        $update->bindParam(":fechaNacimiento",$fechaNacimiento);        
        $update->bindParam(":especialidadId",$especialidadId);        
        $update->execute();        

        $arr = array('success'=> true,'error'=>false,'msj'=>"se creo con exito el medico");
        echo json_encode($arr);
    }catch(PDOexception $e){
        $arr = array('error'=> true,'msj'=>$e->getMessage());
        echo json_encode($arr);
    }
});

$app->put("/Medicos/editarMedico/{id}", function(Request $request, Response $response ){
    $id = $request->getAttribute("id");
    $nombre = $request->getParam("Nombre");
    $apellido = $request->getParam("Apellido");
    $tipoDocumento = $request->getParam("TipoDocumento");
    $numeroDocumento = $request->getParam("NumeroDocumento");
    $fechaNacimiento = $request->getParam("FechaNacimiento");
    $especialidadId = $request->getParam("especialidadId");
    
    $query = "UPDATE usuarios SET
                    nombre  = :nombre,
                    apellido =:apellido,
                    tipoDocumento =:tipoDocumento,
                    numeroDocumento =:numeroDocumento,
                    FechaNacimiento =:fechaNacimiento,
                    contraseña= 'pass',
                    Email='email',
                    Especialidad_ID=:especialidadId,
                    Rol_Id=1
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
        $update->bindParam(":especialidadId",$especialidadId);        
        
        $update->execute();
        $arr = array('success'=> true,'error'=>false,'msj'=>"se edito con exito el medico");
        echo json_encode($arr);
    }catch(PDOexception $e){
        $arr = array('error'=> true,'msj'=>$e->getMessage());
        echo json_encode($arr);
    }
});

$app->delete("/Medicos/borrarMedico/{id}", function(Request $request, Response $response ){
    $id = $request->getAttribute("id");    
    
    $query = "DELETE FROM usuarios
              WHERE ID = $id";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $update = $db->prepare($query);               
        $update->execute();
        $arr = array('success'=> true,'error'=>false,'msj'=>"se borro con exito el medico");
        echo json_encode($arr);
    }catch(PDOexception $e){
        $arr = array('error'=> true,'msj'=>$e->getMessage());
        echo json_encode($arr);
    }
});


?>