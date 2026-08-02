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
    description:
      "Creá una función que reciba dos números y devuelva la suma de ambos.",
    example: {
      input: "sumar(2, 3)",
      output: "5",
    },
    starterCode: `function sumar(a, b) {
  // tu código acá

}`,
    solution: `function sumar(a, b) {
  return a + b;
}`,
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
    description:
      "Creá una función que reciba un número y devuelva 'par' o 'impar' según corresponda.",
    example: {
      input: "parImpar(4)",
      output: '"par"',
    },
    starterCode: `function parImpar(numero) {
  // tu código acá

}`,
    solution: `function parImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  }
  return "impar";
}`,
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
    description:
      "Creá una función que reciba tres números y devuelva el mayor.",
    example: {
      input: "mayorDeTres(1, 5, 3)",
      output: "5",
    },
    starterCode: `function mayorDeTres(a, b, c) {
  // tu código acá

}`,
    solution: `function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}`,
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
    description:
      "Creá una función que reciba un número y devuelva su factorial. El factorial de n (n!) es el producto de todos los números enteros desde 1 hasta n. El factorial de 0 es 1.",
    example: {
      input: "factorial(5)",
      output: "120",
    },
    starterCode: `function factorial(n) {
  // tu código acá

}`,
    solution: `function factorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}`,
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
    description:
      "Creá una función que reciba un número y devuelva un array con su tabla de multiplicar del 1 al 10.",
    example: {
      input: "tablaMultiplicar(3)",
      output: "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]",
    },
    starterCode: `function tablaMultiplicar(n) {
  // tu código acá

}`,
    solution: `function tablaMultiplicar(n) {
  const resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(n * i);
  }
  return resultado;
}`,
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
    description:
      "Creá una función que reciba un string y devuelva cuántas vocales tiene (a, e, i, o, u). Contá mayúsculas y minúsculas.",
    example: {
      input: 'contarVocales("hola mundo")',
      output: "4",
    },
    starterCode: `function contarVocales(texto) {
  // tu código acá

}`,
    solution: `function contarVocales(texto) {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (const char of texto) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
}`,
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
    description:
      "Creá una función que reciba un string y lo devuelva al revés. No uses `.reverse()`.",
    example: {
      input: 'invertir("hola")',
      output: '"aloh"',
    },
    starterCode: `function invertir(str) {
  // tu código acá

}`,
    solution: `function invertir(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}`,
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
    description:
      "Creá una función que reciba un string y devuelva `true` si es palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda). Ignorá mayúsculas y espacios.",
    example: {
      input: 'esPalindromo("Anita lava la tina")',
      output: "true",
    },
    starterCode: `function esPalindromo(str) {
  // tu código acá

}`,
    solution: `function esPalindromo(str) {
  const limpio = str.toLowerCase().replace(/\\s/g, "");
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}`,
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
    description:
      "Creá una función que reciba un string y devuelva el mismo string con la primera letra de cada palabra en mayúscula.",
    example: {
      input: 'capitalizar("hola mundo cruel")',
      output: '"Hola Mundo Cruel"',
    },
    starterCode: `function capitalizar(str) {
  // tu código acá

}`,
    solution: `function capitalizar(str) {
  return str
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}`,
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
    description:
      "Creá una función que reciba un string y devuelva cuántas palabras tiene. Considerá que las palabras están separadas por espacios (ignorá espacios múltiples).",
    example: {
      input: 'contarPalabras("hola mundo cruel")',
      output: "3",
    },
    starterCode: `function contarPalabras(frase) {
  // tu código acá

}`,
    solution: `function contarPalabras(frase) {
  const limpia = frase.trim().replace(/\\s+/g, " ");
  if (limpia === "") return 0;
  return limpia.split(" ").length;
}`,
    hints: [
      "Eliminá espacios extra al inicio y final con `.trim()`.",
      "Reemplazá espacios múltiples con uno solo: `.replace(/\\s+/g, ' ')`.",
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
    description:
      "Creá una función que reciba un string y devuelva un objeto con la cantidad de veces que aparece cada letra. Ignorá espacios y diferenciá mayúsculas de minúsculas.",
    example: {
      input: 'contarLetras("hola")',
      output: '{ h: 1, o: 1, l: 1, a: 1 }',
    },
    starterCode: `function contarLetras(str) {
  // tu código acá

}`,
    solution: `function contarLetras(str) {
  const resultado = {};
  for (const char of str) {
    if (char === " ") continue;
    resultado[char] = (resultado[char] || 0) + 1;
  }
  return resultado;
}`,
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
    description:
      "Creá una función que reciba un array de números y devuelva un nuevo array solo con los números pares.",
    example: {
      input: "filtrarPares([1, 2, 3, 4, 5, 6])",
      output: "[2, 4, 6]",
    },
    starterCode: `function filtrarPares(numeros) {
  // tu código acá

}`,
    solution: `function filtrarPares(numeros) {
  return numeros.filter(n => n % 2 === 0);
}`,
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
    description:
      "Creá una función que reciba un array de números y devuelva un nuevo array con cada elemento multiplicado por 2.",
    example: {
      input: "duplicar([1, 2, 3])",
      output: "[2, 4, 6]",
    },
    starterCode: `function duplicar(numeros) {
  // tu código acá

}`,
    solution: `function duplicar(numeros) {
  return numeros.map(n => n * 2);
}`,
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
    description:
      "Creá una función que reciba un array de números y devuelva el número más grande.",
    example: {
      input: "masGrande([3, 7, 2, 9, 4])",
      output: "9",
    },
    starterCode: `function masGrande(numeros) {
  // tu código acá

}`,
    solution: `function masGrande(numeros) {
  return Math.max(...numeros);
}`,
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
    description:
      "Creá una función que reciba un array de arrays y devuelva un solo array aplanado. Ej: `[[1,2],[3,4]]` → `[1,2,3,4]`.",
    example: {
      input: "aplanar([[1, 2], [3, 4]])",
      output: "[1, 2, 3, 4]",
    },
    starterCode: `function aplanar(arrays) {
  // tu código acá

}`,
    solution: `function aplanar(arrays) {
  return arrays.flat();
}`,
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
    description:
      "Creá una función que reciba un array y devuelva un nuevo array sin elementos duplicados.",
    example: {
      input: "sinDuplicados([1, 2, 2, 3, 4, 4, 5])",
      output: "[1, 2, 3, 4, 5]",
    },
    starterCode: `function sinDuplicados(arr) {
  // tu código acá

}`,
    solution: `function sinDuplicados(arr) {
  return [...new Set(arr)];
}`,
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
    description:
      "Creá una función que reciba un array y un número `n`. Rotá el array `n` posiciones a la derecha. Los elementos que salen por la derecha vuelven por la izquierda.",
    example: {
      input: "rotar([1, 2, 3, 4, 5], 2)",
      output: "[4, 5, 1, 2, 3]",
    },
    starterCode: `function rotar(arr, n) {
  // tu código acá

}`,
    solution: `function rotar(arr, n) {
  const len = arr.length;
  const pasos = n % len;
  return [...arr.slice(len - pasos), ...arr.slice(0, len - pasos)];
}`,
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
    description:
      "Creá una función que reciba dos arrays y devuelva un nuevo array con los elementos que aparecen en ambos (sin duplicados).",
    example: {
      input: "interseccion([1, 2, 3, 4], [3, 4, 5, 6])",
      output: "[3, 4]",
    },
    starterCode: `function interseccion(arr1, arr2) {
  // tu código acá

}`,
    solution: `function interseccion(arr1, arr2) {
  return [...new Set(arr1.filter(el => arr2.includes(el)))];
}`,
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
    description:
      "Creá una función que reciba un número y devuelva `true` si es primo, `false` si no. Un número primo solo es divisible por 1 y por sí mismo.",
    example: {
      input: "esPrimo(7)",
      output: "true",
    },
    starterCode: `function esPrimo(n) {
  // tu código acá

}`,
    solution: `function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
    hints: [
      "Los números menores a 2 no son primos.",
      "Verificá divisibilidad desde 2 hasta la raíz cuadrada de n.",
      "Si encontrás un divisor, no es primo.",
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
    description:
      "Creá una función que reciba un array ordenado y un número. Devolvé el índice del número en el array, o -1 si no existe. Usá búsqueda binaria.",
    example: {
      input: "busquedaBinaria([1, 3, 5, 7, 9, 11], 7)",
      output: "3",
    },
    starterCode: `function busquedaBinaria(arr, objetivo) {
  // tu código acá

}`,
    solution: `function busquedaBinaria(arr, objetivo) {
  let izq = 0;
  let der = arr.length - 1;
  while (izq <= der) {
    const medio = Math.floor((izq + der) / 2);
    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) izq = medio + 1;
    else der = medio - 1;
  }
  return -1;
}`,
    hints: [
      "Tené dos punteros: izquierda y derecha.",
      "En cada paso, compará el elemento del medio con el objetivo.",
      "Si el medio es menor, buscá en la mitad derecha. Si es mayor, en la izquierda.",
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
    description:
      "Creá una función que reciba un número n y devuelva un array del 1 al n. Para múltiplos de 3 poné 'Fizz', para múltiplos de 5 'Buzz', y para múltiplos de ambos 'FizzBuzz'. Si no es múltiplo de ninguno, el número mismo.",
    example: {
      input: "fizzBuzz(5)",
      output: '[1, 2, "Fizz", 4, "Buzz"]',
    },
    starterCode: `function fizzBuzz(n) {
  // tu código acá

}`,
    solution: `function fizzBuzz(n) {
  const resultado = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) resultado.push("FizzBuzz");
    else if (i % 3 === 0) resultado.push("Fizz");
    else if (i % 5 === 0) resultado.push("Buzz");
    else resultado.push(i);
  }
  return resultado;
}`,
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
    description:
      "Creá una función que reciba un número n y devuelva un array con los primeros n números de la secuencia de Fibonacci. La secuencia empieza: 0, 1, 1, 2, 3, 5, 8, 13...",
    example: {
      input: "fibonacci(7)",
      output: "[0, 1, 1, 2, 3, 5, 8]",
    },
    starterCode: `function fibonacci(n) {
  // tu código acá

}`,
    solution: `function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}`,
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
    description:
      "Creá una función que reciba un array de objetos y una propiedad. Devolvé un objeto donde las claves son los valores de esa propiedad y los valores son arrays con los objetos que tienen ese valor.",
    example: {
      input: 'agruparPor([{tipo: "a", v: 1}, {tipo: "b", v: 2}, {tipo: "a", v: 3}], "tipo")',
      output: '{ a: [{tipo:"a",v:1}, {tipo:"a",v:3}], b: [{tipo:"b",v:2}] }',
    },
    starterCode: `function agruparPor(arr, propiedad) {
  // tu código acá

}`,
    solution: `function agruparPor(arr, propiedad) {
  return arr.reduce((acc, obj) => {
    const clave = obj[propiedad];
    if (!acc[clave]) acc[clave] = [];
    acc[clave].push(obj);
    return acc;
  }, {});
}`,
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
    description:
      "Creá una función que reciba dos arrays y devuelva un array con los elementos que están en uno u otro array, pero NO en ambos.",
    example: {
      input: "diferenciaSimetrica([1, 2, 3], [3, 4, 5])",
      output: "[1, 2, 4, 5]",
    },
    starterCode: `function diferenciaSimetrica(arr1, arr2) {
  // tu código acá

}`,
    solution: `function diferenciaSimetrica(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const resultado = [];
  for (const el of set1) {
    if (!set2.has(el)) resultado.push(el);
  }
  for (const el of set2) {
    if (!set1.has(el)) resultado.push(el);
  }
  return resultado;
}`,
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
