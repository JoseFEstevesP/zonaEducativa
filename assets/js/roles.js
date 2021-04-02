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
