<?php 
class RolesModel extends Mysql
{
  public $intIdRol;
  public $strRol;
  public $strDescrpcion;
  public $intStatus;

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
  public function insertRol(string $rol, string $descripcion,int $status)
  {
    $return = "";
    $this->strRol = $rol;
    $this->strDescrpcion = $descripcion;
    $this->intStatus = $status;
    $sql = "SELECT * FROM rol WHERE rolnombre = '$this->strRol'";
    $request=$this->selectAll($sql);
    if (empty($return)) {
      $qury_insert = "INSERT INTO rol(rolnombre,roldescripcion,status) VALUE(?,?,?)";
      $arrData=array($this->strRol,$this->strDescrpcion,$this->intStatus);
      $requestInsert = $this->insert($qury_insert,$arrData);
      $return = $requestInsert;
    }else{
      $return="exist";
    }
    return $return;
  }
}  
?>

