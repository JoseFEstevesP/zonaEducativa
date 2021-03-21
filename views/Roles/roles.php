<?php include("views/include/header.php") ?>
<section class="tabla">
      <h1 class="tabla__titulo"><i class="fas fa-users-cog"></i> Roles</h1>
      <table class="tabla__table">
        <!-- <caption class="tabla__titulo">
          <i class="fas fa-users-cog"></i>
          Roles
        </caption> -->
        <thead class="tabla__thead">
          <tr>
            <th class="tabla__th">Nombre</th>
            <th class="tabla__th">Descripción</th>
            <th class="tabla__th">Status</th>
            <th class="tabla__th">Acción</th>
          </tr>
        </thead>
        <tbody class="tabla__tbody">
          <tr>
            <td class="tabla__td">Administrador</td>
            <td class="tabla__td">
              Administra los roles asignados a los usuarios y publica noticias
            </td>
            <td class="tabla__td">
              <span class="tabla__status tabla__status--activo">
                <div class="tabla__mensaje">
                  <p class="tabla__mensajeP">activo</p>
                </div>
                <i class="fas fa-circle"></i>
              </span>
            </td>
            <td class="tabla__td">
              <a href="" class="tabla__btn-action tabla__btn-action--update">
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a href="" class="tabla__btn-action tabla__btn-action--delete">
                <i class="fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="tabla__td">Supervisor</td>
            <td class="tabla__td">publica noticias</td>
            <td class="tabla__td">
              <span class="tabla__status tabla__status--activo">
                <div class="tabla__mensaje">
                  <p class="tabla__mensajeP">activo</p>
                </div>
                <i class="fas fa-circle"></i>
              </span>
            </td>
            <td class="tabla__td">
              <a href="" class="tabla__btn-action tabla__btn-action--update">
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a href="" class="tabla__btn-action tabla__btn-action--delete">
                <i class="fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td class="tabla__td">Usuario</td>
            <td class="tabla__td">abservar noticias</td>
            <td class="tabla__td">
              <span class="tabla__status tabla__status--inactivo">
                <div class="tabla__mensaje">
                  <p class="tabla__mensajeP">Inactivo</p>
                </div>
                <i class="fas fa-circle"></i>
              </span>
            </td>
            <td class="tabla__td">
              <a href="" class="tabla__btn-action tabla__btn-action--update">
                <i class="fas fa-pencil-alt"></i>
              </a>
              <a href="" class="tabla__btn-action tabla__btn-action--delete">
                <i class="fas fa-trash-alt"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
<?php include("views/include/footer.php") ?>
