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
dataRoles.open("GET", `${base_url}/roles/getRoles`, true);
dataRoles.send();
const poUpstatus = templateTableRol.querySelector(".statusRolPoUp");
dataRoles.onreadystatechange = () => {
  if (dataRoles.readyState == 4 && dataRoles.status == 200) {
    let dataJson = JSON.parse(dataRoles.responseText);
    dataJson.forEach((data) => {
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
};
// ==========================================================
const forRoles = document.getElementById("forRoles");
const forRolesInput = document.querySelectorAll("#forRoles input");

const expresionesRol = {
  rol: /^[a-zA-Z0-9\_\-]{4,16}$/,
  descripcion: /^[a-zA-ZÁ-ÿ\s]{4,40}$/,
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
    console.log("correcto");
  } else {
    infoContenRol.classList.add("info--error");
    infoTextRol.innerHTML = "<b>Error:</b> Todos los campos son abligatorios";
  }
});
