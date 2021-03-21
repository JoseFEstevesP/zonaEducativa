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
}
 ?>