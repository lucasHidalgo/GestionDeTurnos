<?php 
class Database{
    private $host = "localhost";
    private $usuario ="root";
    private $password="";
    private $base="gestiondeturnos";

    public function conectar(){    
        try{                      
            $conexionMySql = 'mysql:host='.$this->host.';dbname='.$this->base.'';   
            $conexionDb = new PDO($conexionMySql,$this->usuario, $this->password);  
            $conexionDb->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);        
            
            $conexionDb -> exec("set names utf8");
    
            return $conexionDb;
        }catch(PDOexception $e){        
            echo $e->getMessage();
        }            
    }
}

?>