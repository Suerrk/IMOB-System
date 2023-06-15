function checkUserCode() {
  var userCode = document.getElementById("userCodeInput").value;
  if (userCode === "228n099b4") {
    location.href = "error.html";
  } else {
    location.href = "index.html";
  }
}
