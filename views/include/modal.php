<article class="modal" id="modalNewRol">
  <div class="modal__content modal__content--Rol" id="modalContent">
    <a href="#" class="closeModal">
      <i class="fas fa-times"></i>
    </a>
    <section class="formulario__Conteform formulario__Conteform--modiRol" id="contenForm">
      <h1 class="formulario__titulo formulario__titulo--Rol">
        <i class="fas fa-users-cog"></i> Nuevo Rol
      </h1>
      <div class="info" id="infoContenRol">
        <p class="info__infoText" id="infoTextRol"></p>
      </div>
      <form action="#" class="formConten" id="forRoles">
        <label for="nombreRol" class="formConten__label">Nombre</label>
        <div class="formConten__contIimput" id="p">
          <span class="formConten__iconConten"
            ><i class="fas fa-user-cog"></i
          ></span>
          <input type="text" class="formConten__input" name="nombreRol" />
          <div class="infoContenforInput">
            <p class="infoContenforInput__p">
              El nombre se compone de 4 a 16 caracteres no tiene que contener numeros y caracteres especiales.
            </p>
          </div>
        </div>
        <!-- descripcion -->
        <label for="descripcionRol" class="formConten__label"
          >Descripcion</label
        >
        <div class="formConten__contIimput">
          <span class="formConten__iconConten">
            <i class="fas fa-book-open"></i>
          </span>
          <input
            type="text"
            class="formConten__input"
            name="descripcionRol"
          />
          <div class="infoContenforInput">
            <p class="infoContenforInput__p">
              La descripcion se compone de 4 a 40 caracteres no tiene que contener numeros y caracteres especiales.
            </p>
          </div>
        </div>
        <!-- status -->
        <label for="estadoRol" class="formConten__label">Estado</label>
        <div class="formConten__contIimput">
          <span class="formConten__iconConten">
            <i class="fas fa-pen"></i>
          </span>
          <select name="estado" id="estadoRol" class="formConten__input">
            <option class="formConten__option" value="1">Activo</option>
            <option class="formConten__option" value="0">Inactivo</option>
          </select>
        </div>
        <button
          class="formConten__button formConten__button--marginTop"
          type="submit"
          id="formularionBtnRol"
        >
          Añadir nuevo Rol <i class="fas fa-sign-in-alt"></i>
        </button>
      </form>
    </section>
  </div>
</article>
<article class="modal" id="modalConfigRol">
  <div class="modal__content modal__content--preferencia" id="modalContentPreferencia">
     <a href="#" class="closeModal">
      <i class="fas fa-times"></i>
    </a>
  </div>
  </article>
<article class="modal" id="modalcal">
  <div class="modal__content modal__content--calendari" id="contentModalCal">
    <a href="#" class="closeModal">
      <i class="fas fa-times"></i>
    </a>
    <img src="" alt="" class="conten_calModal_img" id="imgContentModal"/>
  </div>
  </article>
