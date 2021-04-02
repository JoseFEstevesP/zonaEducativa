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
}
 ?>