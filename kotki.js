//целзий -> фаренхайт
document.getElementById("buttonA").onclick = function () {
	let inputA = document.getElementById("inputA").value;
    let a = Number(inputA);
    document.getElementById("answerA").style.display = "block";
    document.getElementById("answerA").innerHTML = "Фаренхайт: " + Math.round(((a*1.8)+32)*100)/100 + " °F";
}

document.getElementById("inputA").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonA").click();
    }
});

//километри -> мили
document.getElementById("buttonB").onclick = function () {
	let inputA = document.getElementById("inputB").value;
    let b = Number(inputA);
    document.getElementById("answerB").style.display = "block";
    document.getElementById("answerB").innerHTML = "Мили: " + Math.round(b*0.62137*100)/100;
}

document.getElementById("inputB").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonB").click();
    }
});

// фаренхайт -> целзий 
document.getElementById("buttonC").onclick = function () {
	let inputA = document.getElementById("inputC").value;
    let a = Number(inputA);
    document.getElementById("answerC").style.display = "block";
    document.getElementById("answerC").innerHTML = "Целзий: " + Math.round(((a-32)/1.8)*100)/100 + " °C";
}

document.getElementById("inputC").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonC").click();
    }
});

//мили -> километри 
document.getElementById("buttonD").onclick = function () {
	let inputA = document.getElementById("inputD").value;
    let b = Number(inputA);
    document.getElementById("answerD").style.display = "block";
    document.getElementById("answerD").innerHTML = "Километри: " + Math.round(b/0.62137*100)/100;
}


document.getElementById("inputD").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonD").click();
    }
});
