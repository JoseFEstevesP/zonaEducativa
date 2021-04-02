<?php 
class Home extends Controllers
{
  public function __construct()
  {
    parent::__construct();
  }
  public function home()
  {
    $data['titulo'] = "Home";
    $this->Views->getView($this,"home", $data);
  }
}
?>