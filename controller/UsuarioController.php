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

        $this->render('indexView',array());

    }

    public function vistaPP(){

        $this->render('politicaPrivacidadView',array());
    }

    public function registro(){

        if (isset($_POST['nombreRegistro'])){

            $usuario = new Usuario($this->conexion);
            $usuario->setNombre($_POST['nombreRegistro']);
            $usuario->setEmail($_POST['emailRegistro']);
            $pass = $_POST['passwordRegistro'];
            $passHash = password_hash($pass, PASSWORD_BCRYPT);
            $usuario->setPassword($passHash);

            $usuario->registro();
        }
    }
}