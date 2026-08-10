import type { Exercise } from "../types";

// =============================================
// MÓDULO 4 — FUNCIONES (7 ejercicios)
// =============================================
export const module4: Exercise[] = [
  {
    id: "saludo-personalizado",
    title: "Saludo personalizado",
    module: 4,
    pattern: "parametros",
    difficulty: "facil",
    functionName: "saludar",
    context:
      "Tu tienda envía emails de bienvenida a nuevos clientes. Necesitás una función que reciba el nombre del cliente y devuelva un saludo personalizado.",
    description:
      "Creá una función que reciba un parámetro name y devuelva el string '¡Hola, [name]! Bienvenido a nuestra tienda.'",
    example: {
      input: 'saludar("Carlos")',
      output: '"¡Hola, Carlos! Bienvenido a nuestra tienda."',
    },
    restrictions: {
      can: ["✅ parámetros", "✅ template literals", "✅ return"],
      cant: ["❌ variables globales", "❌ console.log() como retorno"],
    },
    hints: [
      "¿Cómo declarás un parámetro entre paréntesis en la función?",
      "¿Qué sintaxis usás para insertar el parámetro dentro del string?",
      "¿Qué palabra clave usás para devolver el valor?",
    ],
    learningObjective:
      "Parámetros: entender que las funciones reciben datos de entrada a través de parámetros que se usan dentro del cuerpo.",
    starterCode: `function saludar(nombre) {\n  // tu código acá\n\n}`,
    solution: `function saludar(nombre) {\n  return \`¡Hola, \${nombre}! Bienvenido a nuestra tienda.\`;\n}`,
    testCases: [
      {
        args: ["Carlos"],
        expected: "¡Hola, Carlos! Bienvenido a nuestra tienda.",
        description: "Saludo con nombre",
      },
      {
        args: ["María"],
        expected: "¡Hola, María! Bienvenido a nuestra tienda.",
        description: "Otro nombre",
      },
      {
        args: ["A"],
        expected: "¡Hola, A! Bienvenido a nuestra tienda.",
        description: "Un solo carácter",
      },
    ],
  },
  {
    id: "calcular-iva",
    title: "Calcular IVA",
    module: 4,
    pattern: "return",
    difficulty: "facil",
    functionName: "calcularIVA",
    context:
      "Tu sistema de facturación necesita calcular el precio final de un producto incluyendo el IVA (21%). La función recibe el precio sin impuestos y devuelve el precio con IVA.",
    description:
      "Creá una función que reciba un precio y devuelva el precio multiplicado por 1.21 (IVA del 21%).",
    example: {
      input: "calcularIVA(100)",
      output: "121",
    },
    restrictions: {
      can: ["✅ return", "✅ operadores matemáticos", "✅ parámetros"],
      cant: ["❌ console.log()", "❌ variables globales"],
    },
    hints: [
      "¿Qué operación matemática aplicás para sumar el 21%?",
      "¿Qué valor numérico representa sumar IVA a un precio?",
      "¿Necesitás redondear el resultado o lo devolvés tal cual?",
    ],
    learningObjective:
      "Return: entender que una función debe devolver un valor con return para que pueda ser usado por quien la llama.",
    starterCode: `function calcularIVA(precio) {\n  // tu código acá\n\n}`,
    solution: `function calcularIVA(precio) {\n  return precio * 1.21;\n}`,
    testCases: [
      {
        args: [100],
        expected: 121,
        description: "IVA de $100",
      },
      {
        args: [500],
        expected: 605,
        description: "IVA de $500",
      },
      {
        args: [0],
        expected: 0,
        description: "Precio cero",
      },
      {
        args: [1000],
        expected: 1210,
        description: "Precio alto",
      },
    ],
  },
  {
    id: "crear-contador",
    title: "Contador",
    module: 4,
    pattern: "scope",
    difficulty: "medio",
    functionName: "crearContador",
    context:
      "Tu aplicación necesita un contador que mantenga su estado entre llamadas. Cada vez que el cliente hace clic en 'agregar al carrito', el contador de items incrementa.",
    description:
      "Creá una función crearContador que retorne un objeto con dos métodos: increment() que suma 1 al contador interno, y getCount() que devuelve el valor actual.",
    example: {
      input:
        "const c = crearContador(); c.increment(); c.increment(); c.getCount()",
      output: "2",
    },
    restrictions: {
      can: ["✅ closures", "✅ variables (let, const)", "✅ return de objetos"],
      cant: ["❌ variables globales", "❌ clases"],
    },
    hints: [
      "¿Qué es un closure y cómo recuerda una función su contexto?",
      "¿Dónde declarás la variable del contador para que persista?",
      "¿Cómo devolvés un objeto con métodos que usan la variable del contador?",
    ],
    learningObjective:
      "Scope y closures: entender que las funciones pueden recordar variables de su contexto incluso después de que la función padre terminó.",
    starterCode: `function crearContador() {\n  // tu código acá\n\n}`,
    solution: `function crearContador() {\n  let count = 0;\n  return {\n    increment: function() {\n      count++;\n    },\n    getCount: function() {\n      return count;\n    }\n  };\n}`,
    testCases: [
      {
        args: [],
        expected: 0,
        description: "Contador inicia en 0",
      },
      {
        args: ["increment"],
        expected: 1,
        description: "Un incremento",
      },
      {
        args: ["increment", "increment", "increment"],
        expected: 3,
        description: "Tres incrementos",
      },
      {
        args: ["increment", "getCount", "increment", "getCount"],
        expected: 2,
        description: "Interleaving increment y getCount",
      },
    ],
  },
  {
    id: "doble-del-precio",
    title: "Doble del precio",
    module: 4,
    pattern: "arrow",
    difficulty: "facil",
    functionName: "doble",
    context:
      "Tu tienda necesita calcular el doble de un precio para ofrecer promociones de 'comprá uno y llevá dos'. Convertí la función a sintaxis de arrow function.",
    description:
      "Creá una arrow function que reciba un número y devuelva su doble.",
    example: {
      input: "doble(5)",
      output: "10",
    },
    restrictions: {
      can: ["✅ arrow functions", "✅ return implícito"],
      cant: ["❌ function tradicional", "❌ llaves {}", "❌ return explícito"],
    },
    hints: [
      "¿Qué sintaxis tiene una arrow function con un solo parámetro?",
      "¿Cuándo podés omitir las llaves y el return?",
      "¿Qué diferencia hay entre return implícito y explícito?",
    ],
    learningObjective:
      "Arrow functions: escribir funciones de forma concisa usando la sintaxis de flecha, especialmente para funciones simples.",
    starterCode: `const doble = (numero) => {\n  // tu código acá\n\n}`,
    solution: `const doble = (numero) => numero * 2;`,
    testCases: [
      {
        args: [5],
        expected: 10,
        description: "Doble de 5",
      },
      {
        args: [0],
        expected: 0,
        description: "Doble de 0",
      },
      {
        args: [100],
        expected: 200,
        description: "Doble de 100",
      },
      {
        args: [-3],
        expected: -6,
        description: "Doble de número negativo",
      },
    ],
  },
  {
    id: "procesar-productos",
    title: "Procesar cada producto",
    module: 4,
    pattern: "callbacks",
    difficulty: "medio",
    functionName: "procesarProductos",
    context:
      "Tu sistema de reportes necesita procesar cada producto de una lista aplicando una transformación personalizada. En vez de escribir una función para cada caso, pasás la función como parámetro.",
    description:
      "Creá una función que reciba un array y una función callback, y aplique la callback a cada elemento del array, devolviendo un nuevo array con los resultados.",
    example: {
      input:
        'procesarProductos([1, 2, 3], x => x * 2)',
      output: "[2, 4, 6]",
    },
    restrictions: {
      can: ["✅ funciones como parámetros", "✅ for", "✅ push()", "✅ arrow functions"],
      cant: ["❌ map()", "❌ forEach()", "❌ filter()"],
    },
    hints: [
      "¿Cómo recibís una función como parámetro de otra función?",
      "¿Cómo llamás a la función callback pasándole cada elemento?",
      "¿Qué retornás: el array original o uno nuevo?",
    ],
    learningObjective:
      "Callbacks: entender que las funciones pueden recibir otras funciones como parámetros para ser ejecutadas internamente.",
    starterCode: `function procesarProductos(array, callback) {\n  // tu código acá\n\n}`,
    solution: `function procesarProductos(array, callback) {\n  const resultado = [];\n  for (let i = 0; i < array.length; i++) {\n    resultado.push(callback(array[i]));\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [[1, 2, 3], (x: number) => x * 2],
        expected: [2, 4, 6],
        description: "Duplica cada elemento",
      },
      {
        args: [["a", "b", "c"], (x: string) => x.toUpperCase()],
        expected: ["A", "B", "C"],
        description: "Convierte a mayúsculas",
      },
      {
        args: [[], (x: number) => x + 1],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[10, 20, 30], (x: number) => x / 10],
        expected: [1, 2, 3],
        description: "Divide por 10",
      },
    ],
  },
  {
    id: "obtener-operacion",
    title: "Operación guardada",
    module: 4,
    pattern: "funciones-valor",
    difficulty: "dificil",
    functionName: "obtenerOperacion",
    context:
      "Tu calculadora de precios necesita permitir al usuario elegir qué operación aplicar (sumar o restar descuento). La función recibe el tipo de operación y devuelve la función correspondiente.",
    description:
      "Creá una función que reciba un string ('sumar' o 'restar') y devuelva la función que realiza esa operación con un valor. Si es 'sumar', devuelve una función que suma. Si es 'restar', devuelve una función que resta.",
    example: {
      input: 'obtenerOperacion("sumar")(10, 5)',
      output: "15",
    },
    restrictions: {
      can: ["✅ funciones que retornan funciones", "✅ closures", "✅ switch/if"],
      cant: ["❌ operadores ternarios anidados", "❌ eval()"],
    },
    hints: [
      "¿Qué tipo de valor devuelve una función que 'guarda' otra función?",
      "¿Cómo declarás una función dentro de otra función?",
      "¿Qué retorna obtenerOperacion: un número o una función?",
    ],
    learningObjective:
      "Funciones como valor: entender que las funciones pueden ser asignadas a variables y devueltas como valores de retorno.",
    starterCode: `function obtenerOperacion(tipo) {\n  // tu código acá\n\n}`,
    solution: `function obtenerOperacion(tipo) {\n  if (tipo === "sumar") {\n    return (a, b) => a + b;\n  } else if (tipo === "restar") {\n    return (a, b) => a - b;\n  }\n}`,
    testCases: [
      {
        args: ["sumar", 10, 5],
        expected: 15,
        description: "Suma 10 + 5",
      },
      {
        args: ["restar", 10, 5],
        expected: 5,
        description: "Resta 10 - 5",
      },
      {
        args: ["sumar", 0, 0],
        expected: 0,
        description: "Suma con ceros",
      },
      {
        args: ["restar", 100, 200],
        expected: -100,
        description: "Resta con resultado negativo",
      },
    ],
  },
  {
    id: "aplicar-a-todos",
    title: "Aplicar a todos",
    module: 4,
    pattern: "funciones-reciben",
    difficulty: "dificil",
    functionName: "aplicarATodos",
    context:
      "Tu sistema de transformaciones necesita una función genérica que aplique cualquier transformación a todos los elementos de un array. Es como un map() pero hecho por vos.",
    description:
      "Creá una función que reciba un array y una función, y devuelva un nuevo array con la función aplicada a cada elemento. Debe funcionar con cualquier tipo de transformación.",
    example: {
      input:
        'aplicarATodos([1, 2, 3], x => x ** 2)',
      output: "[1, 4, 9]",
    },
    restrictions: {
      can: ["✅ higher-order functions", "✅ for", "✅ push()", "✅ arrow functions"],
      cant: ["❌ map()", "❌ forEach()", "❌ filter()", "❌ reduce()"],
    },
    hints: [
      "¿Qué es una higher-order function y por qué esta función lo es?",
      "¿Cómo iterás sobre el array y aplicás la función a cada elemento?",
      "¿Qué tipo de array devuelves: el mismo o uno nuevo?",
    ],
    learningObjective:
      "Higher-order functions: crear funciones que reciben otras funciones como parámetros y las aplican a colecciones de datos.",
    starterCode: `function aplicarATodos(array, funcion) {\n  // tu código acá\n\n}`,
    solution: `function aplicarATodos(array, funcion) {\n  const resultado = [];\n  for (let i = 0; i < array.length; i++) {\n    resultado.push(funcion(array[i]));\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [[1, 2, 3], (x: number) => x ** 2],
        expected: [1, 4, 9],
        description: "Eleva al cuadrado",
      },
      {
        args: [["hola", "mundo"], (x: string) => x.toUpperCase()],
        expected: ["HOLA", "MUNDO"],
        description: "Convierte a mayúsculas",
      },
      {
        args: [[10, 20, 30], (x: number) => x + 100],
        expected: [110, 120, 130],
        description: "Suma 100 a cada uno",
      },
      {
        args: [[], (x: unknown) => x],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[true, false, true], (x: boolean) => !x],
        expected: [false, true, false],
        description: "Invierte booleanos",
      },
    ],
  },
];
