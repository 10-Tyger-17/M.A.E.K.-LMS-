window.onload = function () {
  // Realiza la solicitud fetch al archivo PHP
  fetch("http://localhost/M.A.E.K.-LMS-/basex/BDExport.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Datos recibidos:", data);
    })
    .catch((error) => {
      console.error("Error al hacer fetch:", error);
    });

  const buttonAddData = document.getElementById("buttonAddUser");
  const buttonDeleteData = document.getElementById("buttonDeleteUser");

  buttonAddData.onclick = function () {
    window.open("../HTML/PopUp.html", "_blank", "width=631,height=300");
  };
  buttonDeleteData.onclick = function () {
    window.open("../HTML/SelectUser.html", "_blank", "width=631,height=300");
  };
};
