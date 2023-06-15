function checkUserCode() {
  var userCode = prompt("Digite o codigo de Usuario:");
  if (userCode === "228n099b4") {
    location.href = "error.html";
  } else if (userCode === "2290b0984563h") {
    location.href = "records.html";
  } else {
    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "Senha invalida";
  }
}