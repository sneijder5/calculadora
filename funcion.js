// Calculadora basica: suma, resta y multiplicacion

function operacion(numero1, numero2, operador) {
    if (operador === "+") return numero1 + numero2;
    if (operador === "-") return numero1 - numero2;
    if (operador === "*") return numero1 * numero2;
    return "Operador no valido";
}

// Ejemplos
console.log("5 + 3 =", operacion(5, 3, "+"));
console.log("10 - 4 =", operacion(10, 4, "-"));
console.log("6 * 7 =", operacion(6, 7, "*"));
