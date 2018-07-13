<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Turnos/obtenerTurnos", function(Request $request, Response $response ){
    $consulta = "SELECT medicos.Nombre medNombre, medicos.Apellido medApe, pacientes.Nombre pacNombre,
                pacientes.Apellido pacApe,h.Hora,c.Nombre Consultorio,Turnos.Fecha,
                medicos.Id medicoId, pacientes.Id  pacienteId, h.Id horaId, c.Id consultorioId, Turnos.Id turnoId from Turnos 
                left outer join Usuarios as medicos on Turnos.UsuarioMedicoID = medicos.ID
                left outer join Usuarios as pacientes on turnos.UsuarioPacienteID = pacientes.ID
                join horas as h on h.Id = turnos.Hora
                join consultorios as c on c.ID = Turnos.Consultorios_ID";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $Turnos = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($Turnos);
    }catch(PDOexception $e){        
        $arr = array('error'=>$e->getMessage());
        echo json_encode($arr);             
    }
});


$app->get("/Turnos/obtenerRelaciones", function(Request $request, Response $response ){
    $consultaPacientes = "SELECT ID,Nombre,Apellido FROM usuarios WHERE rol_id in (SELECT id from roles where Nombre = 'Paciente')";
    $consultaMedicos = "SELECT u.ID, u.Nombre,u.Apellido FROM usuarios as u    
     WHERE rol_id in (SELECT id from roles where Nombre = 'Medico')";
     $consultaHora = "SELECT Id,Hora FROM horas";
     $consultoriosConsulta = "SELECT ID,Nombre FROM consultorios";
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consultaPacientes);
        $pacientes = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        
        $ejecutar = $db->query($consultaMedicos);
        $medicos = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $ejecutar = $db->query($consultaHora);
        $horas = $ejecutar->fetchAll(PDO::FETCH_OBJ); 

        $ejecutar = $db->query($consultoriosConsulta);
        $consultorios = $ejecutar->fetchAll(PDO::FETCH_OBJ);                

        $arr = array('pacientes'=> $pacientes,'medicos'=>$medicos,'horas'=>$horas,'consultorios'=>$consultorios);
        echo json_encode($arr);
    }catch(PDOexception $e){   
        $arr = array('error'=>$e->getMessage());
        echo json_encode($arr);             
    }

    
});


$app->post("/Turno/agregarTurno", function(Request $request, Response $response ){    
    $medicoId = $request->getParam("medicoId");
    $pacienteId = $request->getParam("pacienteId");
    $horaId = $request->getParam("horaId");
    $FechaTurno = $request->getParam("fechaTurno");
    $consultorioId = $request->getParam("consultorioId");    
   
   $query = "INSERT INTO turnos (UsuarioMedicoID,UsuarioPacienteID,hora,Fecha,Consultorios_ID)
             VALUE(
                   :UsuarioMedicoID,
                   :UsuarioPacienteID,                                      
                   :hora,
                   :FechaTurno,  
                   :consultorioId                                                                          
                   )";
                         
   try{
       $db = new Database();        
       $db=$db->conectar();
       $update = $db->prepare($query);
       
       $update->bindParam(":UsuarioMedicoID",$medicoId);
       $update->bindParam(":UsuarioPacienteID",$pacienteId);
       $update->bindParam(":hora",$horaId);
       $update->bindParam(":FechaTurno",$FechaTurno);
       $update->bindParam(":consultorioId",$consultorioId);        
       $update->execute();        

       $arr = array('success'=> true,'error'=>false,'msj'=>"se creo con exito el Usuario");
       echo json_encode($arr);
   }catch(PDOexception $e){
       $arr = array('error'=> true,'msj'=>$e->getMessage());
       echo json_encode($arr);
   }
});


$app->put("/Turno/editarTurno/{id}", function(Request $request, Response $response ){    
    $idTurno = $request->getAttribute("id");
    $medicoId = $request->getParam("medicoId");
    $pacienteId = $request->getParam("pacienteId");
    $horaId = $request->getParam("horaId");
    $FechaTurno = $request->getParam("fechaTurno");
    $consultorioId = $request->getParam("consultorioId");    
   
   $query = "UPDATE turnos
             SET
            UsuarioMedicoID = :UsuarioMedicoID,
            UsuarioPacienteID= :UsuarioPacienteID,                                      
            hora = :hora,
            Fecha = :FechaTurno,  
            Consultorios_ID = :consultorioId                                                                          
            WHERE ID = ".$idTurno;
                         
   try{
       $db = new Database();        
       $db=$db->conectar();
       $update = $db->prepare($query);
       
       $update->bindParam(":UsuarioMedicoID",$medicoId);
       $update->bindParam(":UsuarioPacienteID",$pacienteId);
       $update->bindParam(":hora",$horaId);
       $update->bindParam(":FechaTurno",$FechaTurno);
       $update->bindParam(":consultorioId",$consultorioId);        
       $update->execute();        

       $arr = array('success'=> true,'error'=>false,'msj'=>"se creo con exito el Usuario");
       echo json_encode($arr);
   }catch(PDOexception $e){
       $arr = array('error'=> true,'msj'=>$e->getMessage());
       echo json_encode($arr);
   }
});
$app->delete("/Turnos/borrarTurno/{id}", function(Request $request, Response $response ){
    $idTurno = $request->getAttribute("id");
    $query = "DELETE FROM turnos
    WHERE ID = $idTurno";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $update = $db->prepare($query);               
        $update->execute();
        $arr = array('success'=> true,'error'=>false,'msj'=>"se borro con exito el turno");
        echo json_encode($arr);
    }catch(PDOexception $e){
        $arr = array('error'=> true,'msj'=>$e->getMessage());
        echo json_encode($arr);
    }
});



?>