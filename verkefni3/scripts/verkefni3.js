var modal = document.getElementsById("popupbox");

var btn = document.getElementById("popup");

var close = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}
close.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}