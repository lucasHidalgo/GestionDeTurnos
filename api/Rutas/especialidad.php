<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Especialidad/obtenerEspecialidades", function(Request $request, Response $response ){
    $consulta = "SELECT Id, nombre from especialidades";        
    try{
        $db = new Database();        
        $db=$db->conectar();
        $ejecutar = $db->query($consulta);
        $especialidades = $ejecutar->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        echo json_encode($especialidades);
    }catch(PDOexception $e){        
        echo $e->getMessage();
    }
});

?>