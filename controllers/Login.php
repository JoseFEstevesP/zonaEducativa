<?php 
class Login extends Controllers
{
public function __construct()
{
parent::__construct();
}
public function loginUser()
{
  // dep($_POST);
  if($_POST){
    if(empty($_POST['usuario'])||empty($_POST['clave'])){
      $arrResponse= array('status' => false, 'msg' => 'Error de datos');
    }else{
      $strUuario=strtolower(strClean($_POST['usuario']));
      $strPassword=hash('SHA256',$_POST['clave']);
      $resquestUser= $this->model->loginUser($strUuario,$strPassword);
    }
  }
  die();
}
}
?>