<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Turnos/obtenerTurnos", function(Request $request, Response $response ){
    $consulta = "SELECT Id, nombre from Turnos";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $Turnos = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($Turnos);
    }catch(PDOexception $e){        
        echo $e->getMessage();
    }
});


$app->get("/Turnos/obtenerRelaciones", function(Request $request, Response $response ){
    $consultaPacientes = "SELECT ID,Nombre,Apellido FROM usuarios WHERE rol_id in (SELECT id from roles where Nombre = 'Paciente')";
    $consultaMedicos = "SELECT u.ID, u.Nombre,u.Apellido FROM usuarios as u    
     WHERE rol_id in (SELECT id from roles where Nombre = 'Medico')";
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consultaPacientes);
        $pacientes = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        
        $ejecutar = $db->query($consultaMedicos);
        $medicos = $ejecutar->fetchAll(PDO::FETCH_OBJ);

        $arr = array('pacientes'=> $pacientes,'medicos'=>$medicos);
        echo json_encode($arr);
    }catch(PDOexception $e){        
        echo $e->getMessage();
    }

    
})



?>