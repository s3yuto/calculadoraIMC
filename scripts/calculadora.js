
function calcularPeso(){
    //entrada
    let peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    let altura = parseFloat(document.getElementById("altura").value.replace(",","."));

    //processamento
    let imc = peso / (altura * altura);
    console.log("IMC =", imc);

    // saída
        if (imc < 18.5){
        document.getElementById("imc"). textContent = "Abaixo do peso";
    }
        else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("imc"). textContent = "Peso Normal";
    }
        else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("imc"). textContent = "Sobrepeso";
    }
        else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("imc"). textContent = "Obesidade grau 1";
    }
        else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("imc"). textContent = "Obesidade grau 2";
    }
    else if (imc >= 40) {
        document.getElementById("imc"). textContent = "Obesidade grau 3"
    }
}  

