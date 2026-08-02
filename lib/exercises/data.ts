import { Exercise, Category, Difficulty } from "./types";

export type { Category, Difficulty };

export const exercises: Exercise[] = [
  // ============================================
  // FUNDAMENTOS — Lo básico
  // ============================================
  {
    id: "sumar-dos-numeros",
    title: "Sumar dos números",
    category: "fundamentos",
    difficulty: "facil",
    functionName: "sumar",
    description:
      "Creá una función que reciba dos números y devuelva la suma de ambos.",
    example: { input: "sumar(2, 3)", output: "5" },
    starterCode: `function sumar(a, b) {\n  // tu código acá\n\n}`,
    solution: `function sumar(a, b) {\n  return a + b;\n}`,
    hints: ["Usá el operador `+` para sumar.", "Devolvé el resultado con `return`."],
    testCases: [
      { args: [2, 3], expected: 5, description: "2 + 3 = 5" },
      { args: [0, 0], expected: 0, description: "0 + 0 = 0" },
      { args: [-1, 1], expected: 0, description: "-1 + 1 = 0" },
      { args: [10, 20], expected: 30, description: "10 + 20 = 30" },
    ],
  },
  {
    id: "par-o-impar",
    title: "Par o impar",
    category: "fundamentos",
    difficulty: "facil",
    functionName: "parImpar",
    description:
      "Creá una función que reciba un número y devuelva 'par' o 'impar' según corresponda.",
    example: { input: "parImpar(4)", output: '"par"' },
    starterCode: `function parImpar(numero) {\n  // tu código acá\n\n}`,
    solution: `function parImpar(numero) {\n  if (numero % 2 === 0) {\n    return "par";\n  }\n  return "impar";\n}`,
    hints: [
      "El operador módulo `%` devuelve el resto de una división.",
      "Si `numero % 2 === 0`, es par.",
    ],
    testCases: [
      { args: [4], expected: "par", description: "4 es par" },
      { args: [7], expected: "impar", description: "7 es impar" },
      { args: [0], expected: "par", description: "0 es par" },
      { args: [-3], expected: "impar", description: "-3 es impar" },
    ],
  },
  {
    id: "mayor-de-tres",
    title: "Mayor de tres",
    category: "fundamentos",
    difficulty: "facil",
    functionName: "mayorDeTres",
    description:
      "Creá una función que reciba tres números y devuelva el mayor.",
    example: { input: "mayorDeTres(1, 5, 3)", output: "5" },
    starterCode: `function mayorDeTres(a, b, c) {\n  // tu código acá\n\n}`,
    solution: `function mayorDeTres(a, b, c) {\n  if (a >= b && a >= c) return a;\n  if (b >= a && b >= c) return b;\n  return c;\n}`,
    hints: [
      "Compará cada número con los otros dos.",
      "Si `a` es mayor o igual que `b` y que `c`, entonces `a` es el mayor.",
    ],
    testCases: [
      { args: [1, 5, 3], expected: 5, description: "mayor de 1, 5, 3 es 5" },
      { args: [10, 2, 8], expected: 10, description: "mayor de 10, 2, 8 es 10" },
      { args: [3, 3, 3], expected: 3, description: "iguales = 3" },
      { args: [-1, -5, -2], expected: -1, description: "mayor de negativos es -1" },
    ],
  },
  {
    id: "factorial",
    title: "Factorial",
    category: "fundamentos",
    difficulty: "medio",
    functionName: "factorial",
    description:
      "Creá una función que reciba un número y devuelva su factorial. El factorial de n (n!) es el producto de todos los números enteros desde 1 hasta n. El factorial de 0 es 1.",
    example: { input: "factorial(5)", output: "120" },
    starterCode: `function factorial(n) {\n  // tu código acá\n\n}`,
    solution: `function factorial(n) {\n  let resultado = 1;\n  for (let i = 2; i <= n; i++) {\n    resultado *= i;\n  }\n  return resultado;\n}`,
    hints: [
      "Empezá con resultado = 1.",
      "Usá un `for` que vaya de 2 hasta n, multiplicando en cada paso.",
      "El factorial de 0 y 1 es 1.",
    ],
    testCases: [
      { args: [0], expected: 1, description: "0! = 1" },
      { args: [1], expected: 1, description: "1! = 1" },
      { args: [5], expected: 120, description: "5! = 120" },
      { args: [10], expected: 3628800, description: "10! = 3628800" },
    ],
  },
  {
    id: "tabla-de-multiplicar",
    title: "Tabla de multiplicar",
    category: "fundamentos",
    difficulty: "facil",
    functionName: "tablaMultiplicar",
    description:
      "Creá una función que reciba un número y devuelva un array con su tabla de multiplicar del 1 al 10.",
    example: { input: "tablaMultiplicar(3)", output: "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]" },
    starterCode: `function tablaMultiplicar(n) {\n  // tu código acá\n\n}`,
    solution: `function tablaMultiplicar(n) {\n  const resultado = [];\n  for (let i = 1; i <= 10; i++) {\n    resultado.push(n * i);\n  }\n  return resultado;\n}`,
    hints: [
      "Creá un array vacío.",
      "Usá un `for` de 1 a 10 y pusheá `n * i` en cada vuelta.",
    ],
    testCases: [
      { args: [3], expected: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], description: "tabla del 3" },
      { args: [1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], description: "tabla del 1" },
      { args: [7], expected: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70], description: "tabla del 7" },
    ],
  },

  // ============================================
  // CADENAS — Strings
  // ============================================
  {
    id: "contar-vocales",
    title: "Contar vocales",
    category: "cadenas",
    difficulty: "facil",
    functionName: "contarVocales",
    description:
      "Creá una función que reciba un string y devuelva cuántas vocales tiene (a, e, i, o, u). Contá mayúsculas y minúsculas.",
    example: { input: 'contarVocales("hola mundo")', output: "4" },
    starterCode: `function contarVocales(texto) {\n  // tu código acá\n\n}`,
    solution: `function contarVocales(texto) {\n  const vocales = "aeiouAEIOU";\n  let contador = 0;\n  for (const char of texto) {\n    if (vocales.includes(char)) {\n      contador++;\n    }\n  }\n  return contador;\n}`,
    hints: [
      "Definí un string con todas las vocales (incluidas mayúsculas).",
      "Recorré el string carácter por carácter y verificá si está en la lista de vocales.",
    ],
    testCases: [
      { args: ["hola mundo"], expected: 4, description: "hola mundo tiene 4 vocales" },
      { args: ["aeiou"], expected: 5, description: "aeiou tiene 5 vocales" },
      { args: ["xyz"], expected: 0, description: "xyz tiene 0 vocales" },
      { args: [""], expected: 0, description: "string vacío = 0" },
      { args: ["Hola Mundo"], expected: 4, description: "mayúsculas también cuentan" },
    ],
  },
  {
    id: "invertir-string",
    title: "Invertir un string",
    category: "cadenas",
    difficulty: "facil",
    functionName: "invertir",
    description:
      "Creá una función que reciba un string y lo devuelva al revés. No uses `.reverse()`.",
    example: { input: 'invertir("hola")', output: '"aloh"' },
    starterCode: `function invertir(str) {\n  // tu código acá\n\n}`,
    solution: `function invertir(str) {\n  let resultado = "";\n  for (let i = str.length - 1; i >= 0; i--) {\n    resultado += str[i];\n  }\n  return resultado;\n}`,
    hints: [
      "Recorré el string de atrás para adelante.",
      "Usá un `for` que empiece en `str.length - 1` y vaya hasta 0.",
    ],
    testCases: [
      { args: ["hola"], expected: "aloh", description: "hola → aloh" },
      { args: ["abc"], expected: "cba", description: "abc → cba" },
      { args: [""], expected: "", description: "vacío → vacío" },
      { args: ["a"], expected: "a", description: "un carácter = igual" },
    ],
  },
  {
    id: "palindromo",
    title: "Palíndromo",
    category: "cadenas",
    difficulty: "medio",
    functionName: "esPalindromo",
    description:
      "Creá una función que reciba un string y devuelva `true` si es palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda). Ignorá mayúsculas y espacios.",
    example: { input: 'esPalindromo("Anita lava la tina")', output: "true" },
    starterCode: `function esPalindromo(str) {\n  // tu código acá\n\n}`,
    solution: `function esPalindromo(str) {\n  const limpio = str.toLowerCase().replace(/\\s/g, "");\n  const invertido = limpio.split("").reverse().join("");\n  return limpio === invertido;\n}`,
    hints: [
      "Primero limpiá el string: convertí a minúsculas y eliminá espacios.",
      "Compará el string limpio con su versión invertida.",
    ],
    testCases: [
      { args: ["Anita lava la tina"], expected: true, description: "frase palíndromo" },
      { args: ["reconocer"], expected: true, description: "palabra palíndromo" },
      { args: ["hola"], expected: false, description: "hola no es palíndromo" },
      { args: [""], expected: true, description: "vacío es palíndromo" },
    ],
  },
  {
    id: "capitalizar",
    title: "Capitalizar palabras",
    category: "cadenas",
    difficulty: "medio",
    functionName: "capitalizar",
    description:
      "Creá una función que reciba un string y devuelva el mismo string con la primera letra de cada palabra en mayúscula.",
    example: { input: 'capitalizar("hola mundo cruel")', output: '"Hola Mundo Cruel"' },
    starterCode: `function capitalizar(str) {\n  // tu código acá\n\n}`,
    solution: `function capitalizar(str) {\n  return str\n    .split(" ")\n    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))\n    .join(" ");\n}`,
    hints: [
      "Dividí el string en palabras con `.split(' ')`.",
      "Para cada palabra, convertí la primera letra a mayúscula con `.toUpperCase()`.",
      "Uní las palabras de nuevo con `.join(' ')`.",
    ],
    testCases: [
      { args: ["hola mundo cruel"], expected: "Hola Mundo Cruel", description: "3 palabras" },
      { args: ["hello"], expected: "Hello", description: "1 palabra" },
      { args: [""], expected: "", description: "vacío = vacío" },
      { args: ["HELLO WORLD"], expected: "HELLO WORLD", description: "ya mayúsculas" },
    ],
  },
  {
    id: "contar-palabras",
    title: "Contar palabras",
    category: "cadenas",
    difficulty: "medio",
    functionName: "contarPalabras",
    description:
      "Creá una función que reciba un string y devuelva cuántas palabras tiene. Considerá que las palabras están separadas por espacios (ignorá espacios múltiples).",
    example: { input: 'contarPalabras("hola mundo cruel")', output: "3" },
    starterCode: `function contarPalabras(frase) {\n  // tu código acá\n\n}`,
    solution: `function contarPalabras(frase) {\n  const limpia = frase.trim().replace(/\\s+/g, " ");\n  if (limpia === "") return 0;\n  return limpia.split(" ").length;\n}`,
    hints: [
      "Eliminá espacios extra al inicio y final con `.trim()`.",
      "Reemplazá espacios múltiples con uno solo.",
      "Dividí por espacios y contá la cantidad de elementos.",
    ],
    testCases: [
      { args: ["hola mundo cruel"], expected: 3, description: "3 palabras" },
      { args: ["  hola   mundo  "], expected: 2, description: "espacios extra" },
      { args: [""], expected: 0, description: "vacío = 0" },
      { args: ["uno"], expected: 1, description: "1 palabra" },
    ],
  },
  {
    id: "contar-letras",
    title: "Contar letras",
    category: "cadenas",
    difficulty: "dificil",
    functionName: "contarLetras",
    description:
      "Creá una función que reciba un string y devuelva un objeto con la cantidad de veces que aparece cada letra. Ignorá espacios y diferenciá mayúsculas de minúsculas.",
    example: { input: 'contarLetras("hola")', output: "{ h: 1, o: 1, l: 1, a: 1 }" },
    starterCode: `function contarLetras(str) {\n  // tu código acá\n\n}`,
    solution: `function contarLetras(str) {\n  const resultado = {};\n  for (const char of str) {\n    if (char === " ") continue;\n    resultado[char] = (resultado[char] || 0) + 1;\n  }\n  return resultado;\n}`,
    hints: [
      "Creá un objeto vacío.",
      "Recorré cada carácter. Si es espacio, saltalo.",
      "Si la letra ya existe en el objeto, sumá 1. Si no, inicializá en 1.",
    ],
    testCases: [
      { args: ["hola"], expected: { h: 1, o: 1, l: 1, a: 1 }, description: "todas distintas" },
      { args: ["aabb"], expected: { a: 2, b: 2 }, description: "repeticiones" },
      { args: [""], expected: {}, description: "vacío = objeto vacío" },
      { args: ["hola hola"], expected: { h: 2, o: 2, l: 2, a: 2 }, description: "ignora espacios" },
    ],
  },

  // ============================================
  // ARREGLOS — Arrays
  // ============================================
  {
    id: "filtrar-pares",
    title: "Filtrar pares",
    category: "arreglos",
    difficulty: "facil",
    functionName: "filtrarPares",
    description:
      "Creá una función que reciba un array de números y devuelva un nuevo array solo con los números pares.",
    example: { input: "filtrarPares([1, 2, 3, 4, 5, 6])", output: "[2, 4, 6]" },
    starterCode: `function filtrarPares(numeros) {\n  // tu código acá\n\n}`,
    solution: `function filtrarPares(numeros) {\n  return numeros.filter(n => n % 2 === 0);\n}`,
    hints: [
      "Usá `.filter()` para crear un nuevo array.",
      "Un número es par si `n % 2 === 0`.",
    ],
    testCases: [
      { args: [[1, 2, 3, 4, 5, 6]], expected: [2, 4, 6], description: "filtra pares" },
      { args: [[1, 3, 5]], expected: [], description: "ningún par" },
      { args: [[2, 4, 6]], expected: [2, 4, 6], description: "todos pares" },
      { args: [[]], expected: [], description: "array vacío" },
    ],
  },
  {
    id: "duplicar-elementos",
    title: "Duplicar elementos",
    category: "arreglos",
    difficulty: "facil",
    functionName: "duplicar",
    description:
      "Creá una función que reciba un array de números y devuelva un nuevo array con cada elemento multiplicado por 2.",
    example: { input: "duplicar([1, 2, 3])", output: "[2, 4, 6]" },
    starterCode: `function duplicar(numeros) {\n  // tu código acá\n\n}`,
    solution: `function duplicar(numeros) {\n  return numeros.map(n => n * 2);\n}`,
    hints: [
      "Usá `.map()` para transformar cada elemento.",
      "Multiplicá cada número por 2.",
    ],
    testCases: [
      { args: [[1, 2, 3]], expected: [2, 4, 6], description: "1,2,3 → 2,4,6" },
      { args: [[0, -1, 5]], expected: [0, -2, 10], description: "con negativos" },
      { args: [[]], expected: [], description: "vacío" },
    ],
  },
  {
    id: "elemento-mas-grande",
    title: "Elemento más grande",
    category: "arreglos",
    difficulty: "facil",
    functionName: "masGrande",
    description:
      "Creá una función que reciba un array de números y devuelva el número más grande.",
    example: { input: "masGrande([3, 7, 2, 9, 4])", output: "9" },
    starterCode: `function masGrande(numeros) {\n  // tu código acá\n\n}`,
    solution: `function masGrande(numeros) {\n  return Math.max(...numeros);\n}`,
    hints: [
      "Podés usar `Math.max()` con spread operator.",
      "O bien recorrer el array guardando el máximo.",
    ],
    testCases: [
      { args: [[3, 7, 2, 9, 4]], expected: 9, description: "el mayor es 9" },
      { args: [[-1, -5, -2]], expected: -1, description: "negativos" },
      { args: [[42]], expected: 42, description: "un solo elemento" },
    ],
  },
  {
    id: "aplanar-array",
    title: "Aplanar array",
    category: "arreglos",
    difficulty: "medio",
    functionName: "aplanar",
    description:
      "Creá una función que reciba un array de arrays y devuelva un solo array aplanado. Ej: `[[1,2],[3,4]]` → `[1,2,3,4]`.",
    example: { input: "aplanar([[1, 2], [3, 4]])", output: "[1, 2, 3, 4]" },
    starterCode: `function aplanar(arrays) {\n  // tu código acá\n\n}`,
    solution: `function aplanar(arrays) {\n  return arrays.flat();\n}`,
    hints: [
      "Usá `.flat()` para aplanar un nivel.",
      "Si necesitás aplanar todos los niveles, usá `.flat(Infinity)`.",
    ],
    testCases: [
      { args: [[[1, 2], [3, 4]]], expected: [1, 2, 3, 4], description: "2 arrays" },
      { args: [[[1], [2], [3]]], expected: [1, 2, 3], description: "3 arrays" },
      { args: [[]], expected: [], description: "vacío" },
    ],
  },
  {
    id: "eliminar-duplicados",
    title: "Eliminar duplicados",
    category: "arreglos",
    difficulty: "medio",
    functionName: "sinDuplicados",
    description:
      "Creá una función que reciba un array y devuelva un nuevo array sin elementos duplicados.",
    example: { input: "sinDuplicados([1, 2, 2, 3, 4, 4, 5])", output: "[1, 2, 3, 4, 5]" },
    starterCode: `function sinDuplicados(arr) {\n  // tu código acá\n\n}`,
    solution: `function sinDuplicados(arr) {\n  return [...new Set(arr)];\n}`,
    hints: [
      "Un `Set` no permite valores duplicados.",
      "Convertí el array a Set y de vuelta a array con spread.",
    ],
    testCases: [
      { args: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5], description: "duplicados" },
      { args: [[1, 1, 1]], expected: [1], description: "todos iguales" },
      { args: [[1, 2, 3]], expected: [1, 2, 3], description: "sin duplicados" },
    ],
  },
  {
    id: "rotar-array",
    title: "Rotar array",
    category: "arreglos",
    difficulty: "dificil",
    functionName: "rotar",
    description:
      "Creá una función que reciba un array y un número `n`. Rotá el array `n` posiciones a la derecha.",
    example: { input: "rotar([1, 2, 3, 4, 5], 2)", output: "[4, 5, 1, 2, 3]" },
    starterCode: `function rotar(arr, n) {\n  // tu código acá\n\n}`,
    solution: `function rotar(arr, n) {\n  const len = arr.length;\n  const pasos = n % len;\n  return [...arr.slice(len - pasos), ...arr.slice(0, len - pasos)];\n}`,
    hints: [
      "Si n es mayor que la longitud, usá módulo: `n % arr.length`.",
      "Los últimos `n` elementos van al principio, el resto después.",
    ],
    testCases: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3], description: "rotar 2" },
      { args: [[1, 2, 3], 1], expected: [3, 1, 2], description: "rotar 1" },
      { args: [[1, 2, 3], 3], expected: [1, 2, 3], description: "rotar = longitud" },
    ],
  },
  {
    id: "interseccion",
    title: "Intersección de arrays",
    category: "arreglos",
    difficulty: "dificil",
    functionName: "interseccion",
    description:
      "Creá una función que reciba dos arrays y devuelva un nuevo array con los elementos que aparecen en ambos (sin duplicados).",
    example: { input: "interseccion([1, 2, 3, 4], [3, 4, 5, 6])", output: "[3, 4]" },
    starterCode: `function interseccion(arr1, arr2) {\n  // tu código acá\n\n}`,
    solution: `function interseccion(arr1, arr2) {\n  return [...new Set(arr1.filter(el => arr2.includes(el)))];\n}`,
    hints: [
      "Filtrá el primer array quedándote solo con los elementos que están en el segundo.",
      "Usá `Set` para eliminar duplicados.",
    ],
    testCases: [
      { args: [[1, 2, 3, 4], [3, 4, 5, 6]], expected: [3, 4], description: "comunes: 3,4" },
      { args: [[1, 2], [3, 4]], expected: [], description: "sin comunes" },
      { args: [[1, 1, 2], [1, 2, 2]], expected: [1, 2], description: "sin duplicados" },
    ],
  },

  // ============================================
  // LÓGICA — Algoritmos
  // ============================================
  {
    id: "es-primo",
    title: "¿Es primo?",
    category: "logica",
    difficulty: "medio",
    functionName: "esPrimo",
    description:
      "Creá una función que reciba un número y devuelva `true` si es primo, `false` si no.",
    example: { input: "esPrimo(7)", output: "true" },
    starterCode: `function esPrimo(n) {\n  // tu código acá\n\n}`,
    solution: `function esPrimo(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}`,
    hints: [
      "Los números menores a 2 no son primos.",
      "Verificá divisibilidad desde 2 hasta la raíz cuadrada de n.",
    ],
    testCases: [
      { args: [7], expected: true, description: "7 es primo" },
      { args: [4], expected: false, description: "4 no es primo" },
      { args: [1], expected: false, description: "1 no es primo" },
      { args: [2], expected: true, description: "2 es primo" },
      { args: [97], expected: true, description: "97 es primo" },
    ],
  },
  {
    id: "busqueda-binaria",
    title: "Búsqueda binaria",
    category: "logica",
    difficulty: "dificil",
    functionName: "busquedaBinaria",
    description:
      "Creá una función que reciba un array ordenado y un número. Devolvé el índice del número, o -1 si no existe. Usá búsqueda binaria.",
    example: { input: "busquedaBinaria([1, 3, 5, 7, 9, 11], 7)", output: "3" },
    starterCode: `function busquedaBinaria(arr, objetivo) {\n  // tu código acá\n\n}`,
    solution: `function busquedaBinaria(arr, objetivo) {\n  let izq = 0;\n  let der = arr.length - 1;\n  while (izq <= der) {\n    const medio = Math.floor((izq + der) / 2);\n    if (arr[medio] === objetivo) return medio;\n    if (arr[medio] < objetivo) izq = medio + 1;\n    else der = medio - 1;\n  }\n  return -1;\n}`,
    hints: [
      "Tené dos punteros: izquierda y derecha.",
      "En cada paso, compará el elemento del medio con el objetivo.",
    ],
    testCases: [
      { args: [[1, 3, 5, 7, 9, 11], 7], expected: 3, description: "7 está en índice 3" },
      { args: [[1, 3, 5, 7, 9, 11], 1], expected: 0, description: "1 está en índice 0" },
      { args: [[1, 3, 5, 7, 9, 11], 4], expected: -1, description: "4 no existe" },
      { args: [[], 1], expected: -1, description: "array vacío" },
    ],
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    category: "logica",
    difficulty: "facil",
    functionName: "fizzBuzz",
    description:
      "Creá una función que reciba un número n y devuelva un array del 1 al n. Para múltiplos de 3 poné 'Fizz', para múltiplos de 5 'Buzz', y para múltiplos de ambos 'FizzBuzz'.",
    example: { input: "fizzBuzz(5)", output: '[1, 2, "Fizz", 4, "Buzz"]' },
    starterCode: `function fizzBuzz(n) {\n  // tu código acá\n\n}`,
    solution: `function fizzBuzz(n) {\n  const resultado = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) resultado.push("FizzBuzz");\n    else if (i % 3 === 0) resultado.push("Fizz");\n    else if (i % 5 === 0) resultado.push("Buzz");\n    else resultado.push(i);\n  }\n  return resultado;\n}`,
    hints: [
      "Primero verificá si es múltiplo de 15 (3 y 5 a la vez).",
      "Después verificá 3 y 5 por separado.",
    ],
    testCases: [
      { args: [5], expected: [1, 2, "Fizz", 4, "Buzz"], description: "clásico" },
      { args: [15], expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"], description: "con FizzBuzz" },
      { args: [2], expected: [1, 2], description: "sin fizz ni buzz" },
    ],
  },
  {
    id: "fibonacci",
    title: "Fibonacci",
    category: "logica",
    difficulty: "medio",
    functionName: "fibonacci",
    description:
      "Creá una función que reciba un número n y devuelva un array con los primeros n números de la secuencia de Fibonacci.",
    example: { input: "fibonacci(7)", output: "[0, 1, 1, 2, 3, 5, 8]" },
    starterCode: `function fibonacci(n) {\n  // tu código acá\n\n}`,
    solution: `function fibonacci(n) {\n  if (n === 0) return [];\n  if (n === 1) return [0];\n  const seq = [0, 1];\n  for (let i = 2; i < n; i++) {\n    seq.push(seq[i - 1] + seq[i - 2]);\n  }\n  return seq;\n}`,
    hints: [
      "Los dos primeros números son 0 y 1.",
      "Cada número siguiente es la suma de los dos anteriores.",
    ],
    testCases: [
      { args: [7], expected: [0, 1, 1, 2, 3, 5, 8], description: "7 números" },
      { args: [1], expected: [0], description: "solo 0" },
      { args: [0], expected: [], description: "0 números" },
    ],
  },
  {
    id: "agrupar-por-propiedad",
    title: "Agrupar por propiedad",
    category: "objetos",
    difficulty: "medio",
    functionName: "agruparPor",
    description:
      "Creá una función que reciba un array de objetos y una propiedad. Devolvé un objeto donde las claves son los valores de esa propiedad y los valores son arrays con los objetos.",
    example: {
      input: 'agruparPor([{tipo: "a"}, {tipo: "b"}, {tipo: "a"}], "tipo")',
      output: '{ a: [...], b: [...] }',
    },
    starterCode: `function agruparPor(arr, propiedad) {\n  // tu código acá\n\n}`,
    solution: `function agruparPor(arr, propiedad) {\n  return arr.reduce((acc, obj) => {\n    const clave = obj[propiedad];\n    if (!acc[clave]) acc[clave] = [];\n    acc[clave].push(obj);\n    return acc;\n  }, {});\n}`,
    hints: [
      "Usá `.reduce()` para acumular en un objeto.",
      "Para cada objeto, sacá el valor de la propiedad y usalo como clave.",
    ],
    testCases: [
      {
        args: [[{ tipo: "a", v: 1 }, { tipo: "b", v: 2 }, { tipo: "a", v: 3 }], "tipo"],
        expected: { a: [{ tipo: "a", v: 1 }, { tipo: "a", v: 3 }], b: [{ tipo: "b", v: 2 }] },
        description: "agrupa por tipo",
      },
    ],
  },
  {
    id: "diferencia-simetrica",
    title: "Diferencia simétrica",
    category: "arreglos",
    difficulty: "dificil",
    functionName: "diferenciaSimetrica",
    description:
      "Creá una función que reciba dos arrays y devuelva un array con los elementos que están en uno u otro array, pero NO en ambos.",
    example: { input: "diferenciaSimetrica([1, 2, 3], [3, 4, 5])", output: "[1, 2, 4, 5]" },
    starterCode: `function diferenciaSimetrica(arr1, arr2) {\n  // tu código acá\n\n}`,
    solution: `function diferenciaSimetrica(arr1, arr2) {\n  const set1 = new Set(arr1);\n  const set2 = new Set(arr2);\n  const resultado = [];\n  for (const el of set1) {\n    if (!set2.has(el)) resultado.push(el);\n  }\n  for (const el of set2) {\n    if (!set1.has(el)) resultado.push(el);\n  }\n  return resultado;\n}`,
    hints: [
      "Convertí cada array a `Set` para buscar rápido.",
      "Los elementos que están en set1 pero no en set2, y viceversa.",
    ],
    testCases: [
      { args: [[1, 2, 3], [3, 4, 5]], expected: [1, 2, 4, 5], description: "común: 3" },
      { args: [[1, 2], [3, 4]], expected: [1, 2, 3, 4], description: "sin comunes" },
      { args: [[1, 1], [1]], expected: [], description: "todos comunes" },
    ],
  },
];

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((ex) => ex.id === id);
}

export function getExercisesByCategory(category: Category): Exercise[] {
  return exercises.filter((ex) => ex.category === category);
}

export function getExercisesByDifficulty(difficulty: Difficulty): Exercise[] {
  return exercises.filter((ex) => ex.difficulty === difficulty);
}
