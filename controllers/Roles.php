<?php 
class Roles extends Controllers
{
  public function __construct()
  {
    parent::__construct();
  }
  public function Roles()
  {
    $data['titulo'] = "Roles"; 
    $this->Views->getView($this,"roles", $data);
  }
  public function getRoles()
  {
    $arrData = $this->model->selectRoles();
    echo json_encode($arrData,JSON_UNESCAPED_UNICODE);
    die();
  } 
  public function setRoles()
  {
    // $setRol = strClean($_POST['nombreRol']);
    // $setDescripcion = strClean($_POST['descripcionRol']);
     $setRol = $_POST['nombreRol'];
    $setDescripcion = $_POST['descripcionRol'];
    $intStatus = intval($_POST['estadoRol']);
    $requestRol=$this->model->insertRol($setRol,$setDescripcion,$intStatus);
    if($requestRol > 0)
    {
      $arrResponse=array('status'=>true,'msg'=>'Rol creado con exito.');
    }else if($requestRol=='exist')
    {
      $arrResponse=array('status'=>false,'msg'=>'El rol que decea crear ya exite.');
    }else
    {
      $arrResponse=array('status'=>false,'msg'=>'No es posible crear el Rol.');
    }
    echo json_encode($arrResponse,JSON_UNESCAPED_UNICODE);
    die();
  }
}
 ?>