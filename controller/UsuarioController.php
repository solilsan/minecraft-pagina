<?php

require_once 'IndexController.php';

class UsuarioController extends IndexController{

    private $conectar;
    private $conexion;

    public function __construct(){

        require_once __DIR__.'/../model/Conexion.php';
        require_once __DIR__.'/../model/Usuario.php';

        $this->conectar = new Conexion();
        $this->conexion = $this->conectar->conexion();
    }
    
    public function index(){

        $this->render('index',array());

    }
}