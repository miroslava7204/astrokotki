//целзий -> фаренхайт
document.getElementById("buttonA").onclick = function () {
	let inputA = document.getElementById("inputA").value;
    let a = Number(inputA);
    document.getElementById("answerA").style.display = "block";
    document.getElementById("answerA").innerHTML = "Фаренхайт: " + Math.round(((a*1.8)+32)*100)/100 + " F";
}

//километри -> мили
document.getElementById("buttonB").onclick = function () {
	let inputA = document.getElementById("inputB").value;
    let b = Number(inputA);
    document.getElementById("answerB").style.display = "block";
    document.getElementById("answerB").innerHTML = "Мили: " + Math.round(b*0.62137*100)/100 + " miles";
}

// фаренхайт -> целзий 
document.getElementById("buttonC").onclick = function () {
	let inputA = document.getElementById("inputC").value;
    let a = Number(inputA);
    document.getElementById("answerC").style.display = "block";
    document.getElementById("answerC").innerHTML = "Целзии: " + Math.round(((a-32)/1.8)*100)/100 + " C";
}

//мили -> километри 
document.getElementById("buttonD").onclick = function () {
	let inputA = document.getElementById("inputD").value;
    let b = Number(inputA);
    document.getElementById("answerD").style.display = "block";
    document.getElementById("answerD").innerHTML = "Километри: " + Math.round(b/0.62137*100)/100 + " км";
}
