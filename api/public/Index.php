<?php
session_start();
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require '../config/db.php';

$app = new \Slim\App;


require '../Rutas/medicos.php';
require '../Rutas/pacientes.php';
require '../Rutas/usuarios.php';
require '../Rutas/especialidad.php';
require '../Rutas/turnos.php';


$app->run();
?>