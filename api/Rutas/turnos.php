<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get("/Turnos/obtenerTurnos", function(Request $request, Response $response ){
    $consulta = "SELECT Id, nombre from Turnos
                INNER JOIN ";        
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

?>