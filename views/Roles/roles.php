<?php include("views/include/header.php") ?>
<section class="tabla">
  <a href="#" class="tabla__btn-add" id="openModal">Nuevo <i class="fas fa-plus"></i></a>
  <h1 class="tabla__titulo"><i class="fas fa-users-cog"></i> Roles</h1>
  <table class="tabla__table" id="tableRoles">
    <thead class="tabla__thead">
      <tr>
        <th class="tabla__th">Nombre</th>
        <th class="tabla__th">Descripción</th>
        <th class="tabla__th">Status</th>
        <th class="tabla__th">Acción</th>
      </tr>
    </thead>
    <tbody class="tabla__tbody" id="tableBody">
      
    </tbody>
  </table>
</section>
<template id="templateTableRol">
  <tr>
    <td class="tabla__td nombreRol" ></td>
    <td class="tabla__td descripcionRol" ></td>
    <td class="tabla__td">
      <span class="tabla__status statusRolPoUp"  title="">
        <i class="fas fa-circle"></i>
      </span>
    </td>
    <td class="tabla__td" >
      <a href="#" class="tabla__btn-action tabla__btn-action--roltarea">
       <i class="fas fa-wrench"></i>
      </a>
      <a href="#" class="tabla__btn-action tabla__btn-action--update">
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a href="#" class="tabla__btn-action tabla__btn-action--delete">
        <i class="fas fa-trash-alt"></i>
      </a>
    </td>
  </tr>
</template>
<?php include("views/include/footer.php") ?>
