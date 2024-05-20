function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 905.50;
    let euro = 962.48;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: " + resultado.toFixed(2));
    }
    else {
        alert("Tenes que completar todos los espacios")
    }
}