<?php

class Usuario{

    private $conexion;

    private $id;
    private $nombre;
    private $email;
    private $password;

    public function __construct($conexion){
        $this->conexion = $conexion;
    }

    public function registro(){

        $insert = $this->conexion->prepare("INSERT INTO usuario(nombre,email,password) VALUES(:nombre,:email,:password)");

        $insert->execute(array(
            "nombre" => $this->nombre,
            "email" => $this->email,
            "password" => $this->password
        ));

        $this->conexion = null;

    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * @param mixed $nombre
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }



}