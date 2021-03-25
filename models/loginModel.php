<?php 

class LoginModel extends Mysql
{
  private $intIdUsuario;
  private $strUsuario;
  private $strPassword;
  private $strToken;

  public function __construct()
    {
      parent::__construct();
    }
    public function loginUser(string $usuario, string $password)
    {
      $this->strUsuario = $usuario;
      $this->strPassword=$password;
      $sql="SELECT idusuario,status FROM usuario WHERE usuario = '$this->strUsuario' and clave = '$this->strPassword' and status != 0 ";
      $request = $this->select($sql);
      return $request;
    }
}

?>