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

?>