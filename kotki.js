//целзий -> фаренхайт
document.getElementById("buttonA").onclick = function () {
	let inputA = document.getElementById("inputA").value;
    let a = Number(inputA);
    document.getElementById("answerA").innerHTML = (a*1.8)+32;
}

//километри -> мили
document.getElementById("buttonB").onclick = function () {
	let inputA = document.getElementById("inputB").value;
    let b = Number(inputA);
    document.getElementById("answerB").innerHTML = Math.round(b*0.6214);
}