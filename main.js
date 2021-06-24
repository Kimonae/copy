const buttonCopy = document.getElementById("button-copy");
buttonCopy.addEventListener("click", function() {
 // Votre code ici 
 var k = document.getElementById("copytext");
 k.focus();
 k.select();
 k.execCommand("copy");



});
