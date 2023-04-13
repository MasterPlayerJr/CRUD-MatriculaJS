const buttons = document.querySelector("#container");


var soma = 1

function teste() {
    console.log("teste" + soma)
    soma++
}

buttons.addEventListener('click', teste)