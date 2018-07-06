<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Usuarios/obtenerUsuarios", function(Request $request, Response $response ){
    $consulta = "SELECT * FROM usuarios WHERE rol_id not in
     (SELECT id from roles where Nombre != 'Medico' OR Nombre != 'Paciente')";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $usuarios = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($usuarios);
    }catch(PDOexception $e){
        
        echo $e->getMessage();
    }
});


?>