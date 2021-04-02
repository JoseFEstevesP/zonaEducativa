<!DOCTYPE html>
<html lang='es'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title><?= $data['titulo'] ?> - Zona Educativa Distrito Capital</title>
  <link rel="stylesheet" href="<?= base_url(); ?>assets/css/style.css">
  </head>
  <body id="body">
    <header class="header">
      <img class="logo" src="<?= base_url(); ?>assets/img/cintillo.png" alt="cintillo de la pagina Zona Educativa Distrito Capital">
      <?php include('views/include/main_menu.php') ?>
    </header>
    <main class="main">
<?php include('modal.php') ?>
<?php include('formularioIndex.php') ?>

