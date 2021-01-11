document.getElementById("grey").addEventListener("click", greyHandler);
document.getElementById("white").addEventListener("click", whiteHandler);
document.getElementById("blue").addEventListener("click", blueHandler);
document.getElementById("yellow").addEventListener("click", yellowHandler);
function greyHandler() {
	document.body.style.backgroundColor = "gray";
}

function whiteHandler() {
	document.body.style.backgroundColor = "white";
}

function blueHandler() {
	document.body.style.backgroundColor = "blue";
}

function yellowHandler() {
	document.body.style.backgroundColor = "yellow";
}
