function myFunction() {
  var textInput= document.getElementById("entryinput");
  var textOutput= document.getElementById("textoutput");
  alert("Desmend Jetton: " + textInput.value);
  textOutput.innerHTML = textInput.value;
  textInput.value="";
}
  var alertButton =document.getElementById("entrybutton");
  alertButton.addEventListener("click", myFunction);
