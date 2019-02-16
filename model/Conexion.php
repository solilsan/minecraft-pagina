<?php

class Conexion{
    private $driver;
    private $host,$user,$pass,$database;

    public function __construct(){
        require_once 'config/dbConfig.php';
        $this->driver=dbDriver;
        $this->host=dbHost;
        $this->user=dbUser;
        $this->pass=dbPass;
        $this->database=dbDatabase;
    }

    public function conexion(){
        $bbdd = $this->driver.':host='.$this->host.';dbname='.$this->database;

        try{
            $connection = new PDO($bbdd,$this->user,$this->pass);

            return $connection;
        }
        catch (PDOException $e){
            throw new Exception('Problemas al establecer la conexión.');
        }
    }

}