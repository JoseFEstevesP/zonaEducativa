<?php 

class Errors extends Controllers
{
  public function __construct()
  {
    parent::__construct();
  }
  public function notFound()
  {
    $data['titulo'] = "Error"; 
   $this->Views->getView($this,"error", $data);
  }
}
$notFound = new Errors();
$notFound->notFound();
 ?>