// modal inicio seccion
const closeInicio = document.getElementById("closeInicio");
closeInicio.addEventListener("click", () => {
  modalInitSecion.classList.toggle("modalSccion--openModal");
});

// para ver la pasword
const pass = document.getElementById("pass");
const eye = document.getElementById("eyePass");
const eyeIcon = document.getElementById("eyeIcon");
eye.addEventListener("click", () => {
  if (pass.getAttribute("type") == "password") {
    pass.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    pass.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});
// validaciones
const formulario = document.getElementById("formConten");
const inputs = document.querySelectorAll("#formConten input");
const usuarioCon = document.getElementById("usuarioCon");
const claveCon = document.getElementById("claveCon");
const infoConten = document.getElementById("infoConten");
const infoText = document.getElementById("infoText");
const registrar = document.getElementById("registrar");
const IniciarSecion = document.getElementById("IniciarSecion");
const nombCon = document.getElementById("nombCon");
const CIcon = document.getElementById("CIcon");
const emailCon = document.getElementById("emailCon");
const tituloFormIndex = document.getElementById("tituloFormIndex");
const registrarSecionGrupo = document.getElementById("registrarSecionGrupo");
const formularionBtn=document.getElementById('formularionBtn')

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  clave: /^.{4,16}$/,
  nombre: /^[a-zA-ZÁ-ÿ\s]{3,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  CI: /^\d{8,10}$/,
};
let canpos = {
  usuario: false,
  clave: false,
  nombre: false,
  correo: false,
  CI: false,
};
var reg=true;
registrar.addEventListener("click", (e) => {
  e.preventDefault();
  registrarSecionGrupo.classList.toggle('registrarSecionGrupo--registrar')
  tituloFormIndex.textContent = "Registrarse";
  formularionBtn.innerHTML='Registrar <i class="fas fa-sign-in-alt"></i>'
  registrar.style.display="none"
  IniciarSecion.style.display="flex"
  registrar.setAttribute('id','IniciarSecion')
  reg = false
});
IniciarSecion.addEventListener('click',(e)=>{
  e.preventDefault();
  registrarSecionGrupo.classList.toggle('registrarSecionGrupo--registrar')
  tituloFormIndex.textContent = "Iniciar secion";
formularionBtn.innerHTML='Iniciar Seccion <i class="fas fa-sign-in-alt"></i>'
  registrar.style.display="flex"
  IniciarSecion.style.display="none"
  registrar.setAttribute('id','registrar')
  reg = true
})
const validarFormu = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampos(expresiones.usuario, e.target, "usuario", usuarioCon);
      break;
    case "clave":
      validarCampos(expresiones.clave, e.target, "clave", claveCon);
      break;
case "nombre":
      validarCampos(expresiones.nombre, e.target, "nombre", nombCon);
      break;
    case "correo":
      validarCampos(expresiones.correo, e.target, "correo",  emailCon);
      break;
      case "CI":
      validarCampos(expresiones.CI, e.target, "CI", CIcon);
      break;
  }
};
const validarCampos = (expresion, input, canpo, conCampo) => {
  if (expresion.test(input.value)) {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
   conCampo.querySelector('.infoContenforInput').classList.remove('infoContenforInput--leyenda_active')
    canpos[canpo] = true;
  } else {
    conCampo.classList.add("formConten__contIimput--validatorInpud");
    conCampo.classList.add("formConten__iconConten--iconValidator");
   conCampo.querySelector('.infoContenforInput').classList.add('infoContenforInput--leyenda_active')
    canpos[canpo] = false;
  }
  if (input.value == "") {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
   conCampo.querySelector('.infoContenforInput').classList.remove('infoContenforInput--leyenda_active')

    canpos[canpo] = false;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormu);
  input.addEventListener("blur", validarFormu);
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  if(reg){
    if (canpos.usuario && canpos.clave) {
     
    }else {
    infoConten.classList.add("info--error");
    infoText.innerHTML = "<b>Error:</b> Todos los campos son abligatorios";
  } 
  }else{
    if(canpos.usuario && canpos.clave || canpos.nombre && canpos.CI && canpos.correo){
   
  }else {
    infoConten.classList.add("info--error");
    infoText.innerHTML = "<b>Error:</b> Todos los campos son abligatorios";
  }
  }
});
