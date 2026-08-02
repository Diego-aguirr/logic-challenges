// ============================================
// 🎯 TUS EJERCICIOS ACÁ
// ============================================
// Escribí tu código y presioná Ctrl+Enter

// Ejercicio 1: Sumar dos números
function sumar(a, b) {
  return a + b;
}

console.log("Suma:", sumar(5, 3));

// Ejercicio 2: Par o impar
function parImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log("4 es", parImpar(4));
console.log("7 es", parImpar(7));

// Ejercicio 3: Factorial
function factorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log("Factorial de 5:", factorial(5));
console.log("Factorial de 10:", factorial(10));
