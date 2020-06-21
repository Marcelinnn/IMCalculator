function CalculoImc(){
    var peso = parseFloat(document.formImc.peso.value);
    var altura = parseFloat(document.formImc.altura.value);
    var imc = peso/(altura*altura);
    document.formImc.resultado.value = imc.toFixed(1);
    if(imc < 18.5) {
        document.formImc.resultado.value = imc.toFixed(1) + " - Abaixo do peso!"
    } if(imc > 24.9 && imc <= 30.0){
        document.formImc.resultado.value = imc.toFixed(1) + " - Sobrepeso!"
    } 
if(imc >= 18.5 && imc <= 24.9){
    document.formImc.resultado.value = imc.toFixed(1) + " - Peso ideal!"
}if(imc >= 30.0 && imc <= 34.9){
    document.formImc.resultado.value = imc.toFixed(1) + " - Obesidade I"
}if(imc >= 35.0 && imc <= 39.9){
    document.formImc.resultado.value = imc.toFixed(1) + " - Obesidade II"
}if(imc >= 40.0){
    document.formImc.resultado.value = imc.toFixed(1) + " - Obesidade III"
}
}



    

    
