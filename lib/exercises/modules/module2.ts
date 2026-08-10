import type { Exercise } from "../types";

// =============================================
// MÓDULO 2 — MÉTODOS DE JAVASCRIPT (8 ejercicios)
// =============================================
export const module2: Exercise[] = [
  {
    id: "descuento-con-map",
    title: "Precios con descuento",
    module: 2,
    pattern: "map",
    difficulty: "facil",
    functionName: "descuentoConMap",
    context:
      "Ahora que conocés el método map(), aplicá un 15% de descuento a todos los precios del catálogo de forma elegante y concisa.",
    description:
      "Dado un array de números con precios, devolvé un nuevo array con cada precio con 15% de descuento usando el método map().",
    example: {
      input: "descuentoConMap([100, 200, 300])",
      output: "[85, 170, 255]",
    },
    restrictions: {
      can: ["✅ map()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ filter()"],
    },
    hints: [
      "¿Qué método transforma cada elemento de un array en uno nuevo?",
      "¿Qué return necesitás dentro del callback de map?",
      "¿Cuántos elementos tiene el array resultante comparado con el original?",
    ],
    learningObjective:
      "Método map: transformar cada elemento de un array aplicando una función, devolviendo un nuevo array del mismo tamaño.",
    starterCode: `function descuentoConMap(precios) {\n  // tu código acá\n\n}`,
    solution: `function descuentoConMap(precios) {\n  return precios.map(precio => precio * 0.85);\n}`,
    testCases: [
      {
        args: [[100, 200, 300]],
        expected: [85, 170, 255],
        description: "Descuento del 15%",
      },
      {
        args: [[1000]],
        expected: [850],
        description: "Un solo precio",
      },
      {
        args: [[]],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[0, 50, 500]],
        expected: [0, 42.5, 425],
        description: "Incluye precio cero",
      },
    ],
  },
  {
    id: "disponibles-filter",
    title: "Productos disponibles",
    module: 2,
    pattern: "filter",
    difficulty: "facil",
    functionName: "disponibles",
    context:
      "Tu tienda online solo debe mostrar productos que tengan stock disponible. Usá el método filter() para generar la lista de productos disponibles.",
    description:
      "Dado un array de objetos {name, stock}, devolvé un nuevo array solo con los objetos donde stock > 0 usando filter().",
    example: {
      input:
        'disponibles([{name: "Mouse", stock: 5}, {name: "Teclado", stock: 0}])',
      output: '[{name: "Mouse", stock: 5}]',
    },
    restrictions: {
      can: ["✅ filter()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ map()"],
    },
    hints: [
      "¿Qué método selecciona elementos que cumplen una condición?",
      "¿Qué expresión retorna true o false para indicar si un producto está disponible?",
      "¿El array resultante puede ser más chico que el original?",
    ],
    learningObjective:
      "Método filter: seleccionar elementos de un array que cumplen una condición, devolviendo un nuevo array (puede ser más chico).",
    starterCode: `function disponibles(productos) {\n  // tu código acá\n\n}`,
    solution: `function disponibles(productos) {\n  return productos.filter(producto => producto.stock > 0);\n}`,
    testCases: [
      {
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ]],
        expected: [
          { name: "Mouse", stock: 5 },
          { name: "Monitor", stock: 3 },
        ],
        description: "Dos disponibles, uno agotado",
      },
      {
        args: [[{ name: "Cable", stock: 0 }]],
        expected: [],
        description: "Ninguno disponible",
      },
      {
        args: [[]],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[{ name: "USB", stock: 10 }]],
        expected: [{ name: "USB", stock: 10 }],
        description: "Todos disponibles",
      },
    ],
  },
  {
    id: "buscar-producto-find",
    title: "Buscar producto por nombre",
    module: 2,
    pattern: "find",
    difficulty: "facil",
    functionName: "buscarProducto",
    context:
      "Un cliente escribe el nombre de un producto en la barra de búsqueda y necesitás devolver el primer producto que coincida exactamente con el nombre.",
    description:
      "Dado un array de objetos {name, price} y un nombre a buscar, devolvé el primer objeto cuyo name coincida usando find().",
    example: {
      input:
        'buscarProducto([{name: "Mouse", price: 150}, {name: "Teclado", price: 300}], "Teclado")',
      output: '{name: "Teclado", price: 300}',
    },
    restrictions: {
      can: ["✅ find()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ filter()", "❌ map()"],
    },
    hints: [
      "¿Qué método devuelve el PRIMERO que cumple la condición?",
      "¿Qué retorna find() si no encuentra nada?",
      "¿Qué expresión comparás en el callback?",
    ],
    learningObjective:
      "Método find: buscar el primer elemento de un array que cumple una condición, devolviendo el elemento o undefined.",
    starterCode: `function buscarProducto(productos, nombre) {\n  // tu código acá\n\n}`,
    solution: `function buscarProducto(productos, nombre) {\n  return productos.find(producto => producto.name === nombre);\n}`,
    testCases: [
      {
        args: [
          [
            { name: "Mouse", price: 150 },
            { name: "Teclado", price: 300 },
            { name: "Monitor", price: 2000 },
          ],
          "Teclado",
        ],
        expected: { name: "Teclado", price: 300 },
        description: "Producto encontrado",
      },
      {
        args: [
          [
            { name: "Mouse", price: 150 },
            { name: "Teclado", price: 300 },
          ],
          "Webcam",
        ],
        expected: undefined,
        description: "Producto no encontrado",
      },
      {
        args: [[{ name: "Mouse", price: 150 }], "Mouse"],
        expected: { name: "Mouse", price: 150 },
        description: "Un solo producto que coincide",
      },
    ],
  },
  {
    id: "hay-agotados-some",
    title: "¿Hay productos agotados?",
    module: 2,
    pattern: "some",
    difficulty: "medio",
    functionName: "hayAgotados",
    context:
      "El sistema de inventario necesita alertar si hay al menos un producto agotado. Usá some() para verificar rápidamente.",
    description:
      "Dado un array de objetos {name, stock}, devolvé true si AL MENOS UNO tiene stock igual a 0 usando some().",
    example: {
      input:
        'hayAgotados([{name: "Mouse", stock: 5}, {name: "Teclado", stock: 0}])',
      output: "true",
    },
    restrictions: {
      can: ["✅ some()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ filter()", "❌ every()"],
    },
    hints: [
      "¿Qué método devuelve true si AL MENOS UNO cumple la condición?",
      "¿Qué expresión retorna true cuando un producto está agotado?",
      "¿some() retorna un booleano o un elemento?",
    ],
    learningObjective:
      "Método some: verificar si al menos un elemento del array cumple una condición, devolviendo true o false.",
    starterCode: `function hayAgotados(productos) {\n  // tu código acá\n\n}`,
    solution: `function hayAgotados(productos) {\n  return productos.some(producto => producto.stock === 0);\n}`,
    testCases: [
      {
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ]],
        expected: true,
        description: "Hay uno agotado",
      },
      {
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 10 },
        ]],
        expected: false,
        description: "Ninguno agotado",
      },
      {
        args: [[]],
        expected: false,
        description: "Array vacío",
      },
      {
        args: [[{ name: "Cable", stock: 0 }]],
        expected: true,
        description: "Un solo producto agotado",
      },
    ],
  },
  {
    id: "todos-disponibles-every",
    title: "¿Todos disponibles?",
    module: 2,
    pattern: "every",
    difficulty: "medio",
    functionName: "todosDisponibles",
    context:
      "Para procesar un pedido mayorista, necesitás verificar que TODOS los productos tengan stock suficiente antes de confirmar la venta.",
    description:
      "Dado un array de objetos {name, stock}, devolvé true si TODOS tienen stock mayor a 0 usando every().",
    example: {
      input:
        'todosDisponibles([{name: "Mouse", stock: 5}, {name: "Teclado", stock: 10}])',
      output: "true",
    },
    restrictions: {
      can: ["✅ every()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ filter()", "❌ some()"],
    },
    hints: [
      "¿Qué método retorna true solo si TODOS cumplen la condición?",
      "¿Qué expresión retorna true cuando un producto SÍ está disponible?",
      "¿Qué pasa si el array está vacío? ¿Qué retorna every()?",
    ],
    learningObjective:
      "Método every: verificar si todos los elementos del array cumple una condición, devolviendo true o false.",
    starterCode: `function todosDisponibles(productos) {\n  // tu código acá\n\n}`,
    solution: `function todosDisponibles(productos) {\n  return productos.every(producto => producto.stock > 0);\n}`,
    testCases: [
      {
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 10 },
          { name: "Monitor", stock: 3 },
        ]],
        expected: true,
        description: "Todos disponibles",
      },
      {
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
        ]],
        expected: false,
        description: "Uno agotado",
      },
      {
        args: [[]],
        expected: true,
        description: "Array vacío (every retorna true)",
      },
      {
        args: [[{ name: "USB", stock: 1 }]],
        expected: true,
        description: "Un solo producto disponible",
      },
    ],
  },
  {
    id: "total-con-reduce",
    title: "Calcular total",
    module: 2,
    pattern: "reduce",
    difficulty: "medio",
    functionName: "totalConReduce",
    context:
      "Tu sistema de facturación necesita calcular el total de una compra sumando el precio de cada ítem. Usá reduce() para hacerlo de forma concisa.",
    description:
      "Dado un array de números con precios, devolvé la suma de todos usando reduce().",
    example: {
      input: "totalConReduce([100, 200, 300, 150])",
      output: "750",
    },
    restrictions: {
      can: ["✅ reduce()", "✅ arrow functions", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ map()"],
    },
    hints: [
      "¿Qué dos parámetros recibe el callback de reduce (acumulador y elemento actual)?",
      "¿Con qué valor inicializás el acumulador?",
      "¿Qué retornás en cada iteración del callback?",
    ],
    learningObjective:
      "Método reduce: acumular todos los elementos de un array en un solo valor (número, objeto, etc.) usando un acumulador.",
    starterCode: `function totalConReduce(precios) {\n  // tu código acá\n\n}`,
    solution: `function totalConReduce(precios) {\n  return precios.reduce((acum, precio) => acum + precio, 0);\n}`,
    testCases: [
      {
        args: [[100, 200, 300, 150]],
        expected: 750,
        description: "Suma de 4 precios",
      },
      {
        args: [[500]],
        expected: 500,
        description: "Un solo precio",
      },
      {
        args: [[]],
        expected: 0,
        description: "Array vacío",
      },
      {
        args: [[0, 10, 20]],
        expected: 30,
        description: "Incluye cero",
      },
    ],
  },
  {
    id: "ordenar-por-precio",
    title: "Ordenar por precio",
    module: 2,
    pattern: "sort",
    difficulty: "medio",
    functionName: "ordenarPorPrecio",
    context:
      "Tu tienda necesita mostrar los productos ordenados de menor a mayor precio para que el cliente pueda encontrar las mejores ofertas fácilmente.",
    description:
      "Dado un array de objetos {name, price}, devolvé un nuevo array ordenado por price de menor a mayor usando sort(). No modifiqués el array original.",
    example: {
      input:
        'ordenarPorPrecio([{name: "Mouse", price: 150}, {name: "Monitor", price: 3000}, {name: "Teclado", price: 800}])',
      output:
        '[{name: "Mouse", price: 150}, {name: "Teclado", price: 800}, {name: "Monitor", price: 3000}]',
    },
    restrictions: {
      can: ["✅ sort()", "✅ arrow functions", "✅ spread operator", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ forEach()", "❌ map()"],
    },
    hints: [
      "¿Qué método ordena los elementos de un array?",
      "¿Qué retorna tu función de comparación para que a < b vaya primero?",
      "¿Cómo copiás el array antes de ordenarlo para no modificar el original?",
    ],
    learningObjective:
      "Método sort: ordenar los elementos de un array según una función de comparación personalizada.",
    starterCode: `function ordenarPorPrecio(productos) {\n  // tu código acá\n\n}`,
    solution: `function ordenarPorPrecio(productos) {\n  return [...productos].sort((a, b) => a.price - b.price);\n}`,
    testCases: [
      {
        args: [[
          { name: "Mouse", price: 150 },
          { name: "Monitor", price: 3000 },
          { name: "Teclado", price: 800 },
        ]],
        expected: [
          { name: "Mouse", price: 150 },
          { name: "Teclado", price: 800 },
          { name: "Monitor", price: 3000 },
        ],
        description: "Orden ascendente por precio",
      },
      {
        args: [[{ name: "Mouse", price: 150 }]],
        expected: [{ name: "Mouse", price: 150 }],
        description: "Un solo producto",
      },
      {
        args: [[]],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[
          { name: "A", price: 500 },
          { name: "B", price: 500 },
        ]],
        expected: [
          { name: "A", price: 500 },
          { name: "B", price: 500 },
        ],
        description: "Precios iguales",
      },
    ],
  },
  {
    id: "esta-en-catalogo",
    title: "¿Está en el catálogo?",
    module: 2,
    pattern: "includes",
    difficulty: "facil",
    functionName: "estaEnCatalogo",
    context:
      "Cuando un cliente busca un producto por nombre exacto, tu sistema necesita verificar rápidamente si ese nombre está en la lista de productos del catálogo.",
    description:
      "Dado un array de strings con nombres de productos y un nombre a buscar, devolvé true o false usando includes().",
    example: {
      input: 'estaEnCatalogo(["Mouse", "Teclado", "Monitor"], "Teclado")',
      output: "true",
    },
    restrictions: {
      can: ["✅ includes()", "✅ variables (let, const)"],
      cant: ["❌ for", "❌ find()", "❌ some()", "❌ indexOf()", "❌ filter()"],
    },
    hints: [
      "¿Qué método booleano verifica si un array contiene un elemento?",
      "¿Qué tipo de valor retorna includes(): booleano o elemento?",
      "¿Qué pasa si el elemento no está en el array?",
    ],
    learningObjective:
      "Método includes: verificar si un array contiene un elemento específico de forma directa y concisa.",
    starterCode: `function estaEnCatalogo(productos, nombre) {\n  // tu código acá\n\n}`,
    solution: `function estaEnCatalogo(productos, nombre) {\n  return productos.includes(nombre);\n}`,
    testCases: [
      {
        args: [["Mouse", "Teclado", "Monitor"], "Teclado"],
        expected: true,
        description: "Producto encontrado",
      },
      {
        args: [["Mouse", "Teclado", "Monitor"], "Webcam"],
        expected: false,
        description: "Producto no encontrado",
      },
      {
        args: [[], "Mouse"],
        expected: false,
        description: "Array vacío",
      },
      {
        args: [["mouse", "MOUSE"], "Mouse"],
        expected: false,
        description: "Diferencia de mayúsculas",
      },
    ],
  },

];
