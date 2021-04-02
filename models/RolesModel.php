<?php 
class RolesModel extends Mysql
{
  public function __construct()
    {
      parent::__construct();
    }
  public function selectRoles()
  {
    $sql = "SELECT * FROM rol ";
    $request= $this->selectAll($sql);
    return $request;
  }
}  
?>

