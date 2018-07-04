<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require '../config/db.php';

$app = new \Slim\App;
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get("/api/obtenerMedicos", function(Request $request, Response $response ){
    $consulta = "SELECT * FROM usuarios WHERE rol_id in (SELECT id from roles where Nombre = 'Medico')";        
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

$app->get("/api/obtenerUsuarios", function(Request $request, Response $response ){
    $consulta = "SELECT * FROM usuarios WHERE rol_id not in
     (SELECT id from roles where Nombre = 'Medico' OR Nombre = 'Paciente')";        
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


$app->get("/api/obtenerPacientes", function(Request $request, Response $response ){
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
$app->run();