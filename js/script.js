function init() {
    var buttonId = document.getElementById("entrybutton")
      buttonId.addEventListener("click", onClick);
      function onClick()
      {
        var inputContent = document.getElementById("entryinput").value;
        alert("Mohammad " + inputContent )
        document.getElementById("textoutput").innerHTML = inputContent;
      }
window.addEventListener('load', init);
