const tableBody = document.getElementById("tableBody");
const modalNewRol = document.getElementById("modalNewRol");
const modalContent = document.getElementById("modalContent");
const openModal = document.getElementById("openModal");
openModal.addEventListener("click", (e) => {
  e.preventDefault;
  modal(modalNewRol, modalContent);
});
moadalClose(modalNewRol, modalContent);
const modalConfigRol = document.getElementById("modalConfigRol");
const modalContentPreferencia = document.getElementById(
  "modalContentPreferencia"
);
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("tabla__btn-action--roltarea")) {
    modal(modalConfigRol, modalContentPreferencia);
  }
});
moadalClose(modalConfigRol, modalContentPreferencia);
// ====================================================================
const templateTableRol = document.getElementById("templateTableRol").content;
const fragmet = document.createDocumentFragment();
const dataRoles = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : new ActiveXObject("Micorsoft.XMLHTTP");
dataRoles.open("GET", `${base_url}/Roles/getRoles`, true);
const poUpstatus = templateTableRol.querySelector(".statusRolPoUp");
dataRoles.addEventListener("load", (data) => {
  if (dataRoles.readyState == 4 && dataRoles.status == 200) {
    const dataJson = JSON.parse(data.target.response);
    console.log(dataJson);
    dataJson.forEach((data) => {
      console.log(data);
      if (data.status != 0) {
        poUpstatus.classList.add("tabla__status--activo");
        poUpstatus.setAttribute("title", "Activo");
      } else {
        poUpstatus.classList.add("tabla__status--inactivo");
        poUpstatus.setAttribute("title", "Inactivo");
      }
      templateTableRol.querySelector(".nombreRol").textContent = data.rolnombre;
      templateTableRol.querySelector(".descripcionRol").textContent =
        data.roldescripcion;
      let btnAction = templateTableRol.querySelectorAll(".tabla__btn-action");
      btnAction.forEach((btnAc) => {
        btnAc.setAttribute("rl", data.idrol);
      });
      const clone = templateTableRol.cloneNode(true);
      fragmet.appendChild(clone);
      tableBody.appendChild(fragmet);
    });
  }
});
dataRoles.send();

// }
// ==========================================================
const forRoles = document.getElementById("forRoles");
const forRolesInput = document.querySelectorAll("#forRoles input");

const expresionesRol = {
  rol: /^[a-zA-Z0-9\_\-]{4,16}$/,
  descripcion: /^[a-zA-Z??-??\s]{4,40}$/,
};
let canposRol = {
  rol: false,
  descripcion: false,
};
const validarFormuRol = (e) => {
  switch (e.target.name) {
    case "nombreRol":
      validarCamposRol(
        expresionesRol.rol,
        e.target,
        "rol",
        e.target.offsetParent
      );
      break;
    case "descripcionRol":
      validarCamposRol(
        expresionesRol.rol,
        e.target,
        "descripcion",
        e.target.offsetParent
      );
      break;
  }
};
const validarCamposRol = (expresion, input, canpo, conCampo) => {
  if (expresion.test(input.value)) {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.remove("infoContenforInput--leyenda_active");
    canposRol[canpo] = true;
  } else {
    conCampo.classList.add("formConten__contIimput--validatorInpud");
    conCampo.classList.add("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.add("infoContenforInput--leyenda_active");
    canposRol[canpo] = false;
  }
  if (input.value == "") {
    conCampo.classList.remove("formConten__contIimput--validatorInpud");
    conCampo.classList.remove("formConten__iconConten--iconValidator");
    conCampo
      .querySelector(".infoContenforInput")
      .classList.remove("infoContenforInput--leyenda_active");
    canposRol[canpo] = false;
  }
};
const infoContenRol = document.getElementById("infoContenRol");
const infoTextRol = document.getElementById("infoTextRol");
forRolesInput.forEach((input) => {
  input.addEventListener("keyup", validarFormuRol);
  input.addEventListener("blur", validarFormuRol);
});
forRoles.addEventListener("submit", (e) => {
  e.preventDefault();
  if (canposRol.rol && canposRol.descripcion) {
    const setRoles = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Micorsoft.XMLHTTP");
    const formdata = new FormData(forRoles);
    setRoles.open("POST", `${base_url}/Roles/setRoles`, true);
    setRoles.send(formdata);
    setRoles.onreadystatechange = () => {
      if (setRoles.readyState == 4 && setRoles.status == 200) {
        const objData = JSON.parse(setRoles.responseText);
        if (objData.status) {
          infoContenRol.classList.add("info--correcto");
          infoTextRol.textContent = objData.msg;
          setTimeout(() => {
            modal(modalNewRol, modalContent);
            forRoles.reset();
            infoContenRol.classList.remove("info--correcto");
          }, 1000);
          // agregar el reseteo del formulario y el q se recarge la peticion ajax
        } else {
          infoContenRol.classList.add("info--error");
          infoTextRol.textContent = objData.msg;
        }
      }
    };
  } else {
    infoContenRol.classList.add("info--error");
    infoTextRol.innerHTML = "<b>Error:</b> Todos los campos son abligatorios";
  }
});
