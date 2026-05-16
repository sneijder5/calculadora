// Calculadora basica: suma, resta y multiplicacion

function operacion(numero1, numero2, operador) {
    if (operador === "+") return numero1 + numero2;
    if (operador === "-") return numero1 - numero2;
    if (operador === "*") return numero1 * numero2;
    return "Operador no valido";
}

// Division con validacion de division por cero
function division(numero1, numero2) {
    if (numero2 === 0) return "No se puede dividir entre cero";
    return numero1 / numero2;
}

// Potencia: base elevada al exponente
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Ejemplos
console.log("5 + 3 =", operacion(5, 3, "+"));
console.log("10 - 4 =", operacion(10, 4, "-"));
console.log("6 * 7 =", operacion(6, 7, "*"));
console.log("20 / 4 =", division(20, 4));
console.log("10 / 0 =", division(10, 0));
console.log("2 ^ 5 =", potencia(2, 5));
