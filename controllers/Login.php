<?php 
class Login extends Controllers
{
public function __construct()
{
parent::__construct();
}
public function loginUser()
{
  dep($_POST);
  die();
}
}
?>