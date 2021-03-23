const tableBody = document.getElementById("tableBody");
const templateTableRol = document.getElementById("templateTableRol").content;
const fragmet = document.createDocumentFragment();
const dataRoles = new XMLHttpRequest();
dataRoles.open("GET", `${base_url}/roles/getRoles`, true);
dataRoles.send();
const parrafo = templateTableRol.getElementById("tablePText");
const poUpstatus = templateTableRol.getElementById("statusRolPoUp");
dataRoles.onreadystatechange = () => {
  if (dataRoles.readyState == 4 && dataRoles.status == 200) {
    let dataJson = JSON.parse(dataRoles.responseText);
    dataJson.forEach((data) => {
      if (data.status != 0) {
        parrafo.textContent = "Activo";
        poUpstatus.classList.add("tabla__status--activo");
      } else {
        parrafo.textContent = "Inactivo";
        poUpstatus.classList.add("tabla__status--inactivo");
      }
      templateTableRol.getElementById("nombreRol").textContent = data.rolnombre;
      templateTableRol.getElementById("descripcionRol").textContent =
        data.roldescripcion;
      const clone = templateTableRol.cloneNode(true);
      fragmet.appendChild(clone);
      tableBody.appendChild(fragmet);
    });
  }
};
