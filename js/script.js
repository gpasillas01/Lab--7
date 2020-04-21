function init(){
 eb.addEventListener('click', function() {
    alert('Griselda Pasillas: ' + msg.value);
	document.getElementById('textoutput').innerHTML = msg.value;});
  var msg = document.getElementById('entryinput');	
  var eb = document.getElementById('entrybutton');}
window.addEventListener('load', init);
