  <section id="formulario" class="formulario">
      <div id="formContenPrincipal" class="formulario__conten ">
        <div class="closeModal" id="closeInicio">
          <i class="fas fa-times"></i>
        </div>
        <div class="formulario__Conteform">
          <h1 class="formulario__titulo">Iniciar sesion.</h1>
          <h2 class="formulario__SubTitulo">Z.E.D.C</h2>
          <div class="info" id="infoContenInicio">
          <p class="info__infoText" id="infoTextInicio"></p>
        </div>
          <form action="#" class="formConten" id="formContenInicio" name="forminicio">
          <label for="user" class="formConten__label">Usuario:</label>
          <div class="formConten__contIimput usuarioCon">
            <span class="formConten__iconConten">
              <i class="fas fa-user-circle"></i>
            </span>
            <input type="text" id="userInicio" class="formConten__input" placeholder="Usuario..." name="usuario"/>
            <div class="infoContenforInput">
              <p class="infoContenforInput__p">
                El usuario tiene que ser de 4 a 16 digitos y solo numeros,
                letras y guion bajo.
              </p>
            </div>
          </div>
          <label for="passInicio" class="formConten__label">Clave:</label>
          <div class="formConten__contIimput claveCon" >
            <div class="infoContenforInput">
              <p class="infoContenforInput__p">
                La clave tiene que ser de 4 a 16 digitos.
              </p>
            </div>
            <span class="formConten__iconConten">
              <i class="fas fa-key"></i>
            </span>
            <input type="password" id="passInicio" class="pass formConten__input" placeholder="Clave..." name="clave"/>
            <span class="formConten__iconConten formConten__iconConten--eye " id="eyePassInicio">
              <i  class="fas fa-eye " id="eyeIconInico"></i>
            </span>
          </div>         
            <a href="#" class="formulario__enlace">Registrar <i class="fas fa-external-link-alt"></i></a>
            <button class="formConten__button" type="submit" id="formularionBtnInicio">
            Iniciar Seccion <i class="fas fa-sign-in-alt"></i>
          </button>
          </form>
      </div>
      <!-- =========================== -->
        <div class="formulario__Conteform formulario__Conteform--activo">
          <h1 class="formulario__titulo">Registrar</h1>
          <h2 class="formulario__SubTitulo">Z.E.D.C</h2>
          <div class="info" id="infoContenRegistro">
          <p class="info__infoText" id="infoTextRegistro"></p>
        </div>
            <form action="#" class="formConten" id="formContenRegisto" name="formregisto">
            <label for="nom" class="formConten__label">Nombre:</label>
            <div class="formConten__contIimput" id="nombCon">
              <span class="formConten__iconConten">
                <i class="fas fa-portrait"></i>
              </span>
              <input type="text"id="nom"class="formConten__input"placeholder="Nombre..."name="nombre"/>
              <div class="infoContenforInput">
                <p class="infoContenforInput__p">
                  El nombre no se conpone de numeros y caracteres especiales
                </p>
              </div>
            </div>
            <label for="CI" class="formConten__label">CI</label>
            <div class="formConten__contIimput" id="CIcon">
              <span class="formConten__iconConten">
                <i class="fas fa-id-card"></i>
              </span>
              <input type="text" id="CI" class="formConten__input" placeholder="CI..." name="CI">
              <div class="infoContenforInput">
                <p class="infoContenforInput__p">La CI es de solo numeros</p>
              </div>
            </div>
            <label for="email" class="formConten__label">Correo:</label>
            <div class="formConten__contIimput" id="emailCon">
              <span class="formConten__iconConten">
                <i class="fas fa-envelope"></i>
              </span>
              <input type="email" id="email" class="formConten__input" placeholder="Correo..." name="email">
              <div class="infoContenforInput">
                <p class="infoContenforInput__p">
                  El correo solo puede contenet letras,numeros,punto,guiones y
                  guiones bajos
                </p>
              </div>
            </div>
          <label for="user" class="formConten__label">Usuario:</label>
          <div class="formConten__contIimput usuarioCon" >
            <span class="formConten__iconConten">
              <i class="fas fa-user-circle"></i>
            </span>
            <input type="text" id="userRegistro" class="formConten__input" placeholder="Usuario..." name="usuario">
            <div class="infoContenforInput">
              <p class="infoContenforInput__p">
                El usuario tiene que ser de 4 a 16 digitos y solo numeros,
                letras y guion bajo.
              </p>
            </div>
          </div>
          <label for="passRegistro" class=" formConten__label">Clave:</label>
          <div class="formConten__contIimput claveCon">
            <div class="infoContenforInput">
              <p class="infoContenforInput__p">
                La clave tiene que ser de 4 a 16 digitos.
              </p>
            </div>
            <span class="formConten__iconConten">
              <i class="fas fa-key"></i>
            </span>
            <input type="password" id="passRegistro" class="pass formConten__input" placeholder="Clave..." name="clave">
            <span id="eyePassRegistro" class=" formConten__iconConten formConten__iconConten--eye">
              <i id="eyeIconRegistro" class="fas fa-eye"></i>
            </span>
          </div> 
            <a href="#" class="formulario__enlace">Iniciar sesion <i class="fas fa-external-link-alt"></i></a>
            <button class="formConten__button" type="submit" id="formularionBtnRegistrar">
            Registrar <i class="fas fa-sign-in-alt"></i>
          </button>
          </form>
      </div>
    </section>