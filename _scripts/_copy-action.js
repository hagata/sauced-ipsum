/*Copy-action*/

var triggerConfirm = document.getElementById('copy-ipsum');
var copyConfirm = document.getElementById('copyConfirmation');
var confirmText = document.getElementById('output-ipsum');

triggerConfirm.addEventListener("click", function() {
  copyConfirm.classList.toggle("on");
  confirmText.classList.toggle("on");
 
  
  setTimeout(function() {
    copyConfirm.classList.toggle("on");
		text.classList.toggle("on");
  }, 1000)
})