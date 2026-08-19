import type { Exercise } from "../types";

// =============================================
// MÓDULO 1 — LÓGICA CON ARRAYS Y FOR (9 ejercicios)
// =============================================
export const module1: Exercise[] = [
  {
    id: "recorrer-mostrar-productos",
    title: "Mostrar productos",
    module: 1,
    pattern: "recorrer",
    difficulty: "facil",
    functionName: "mostrarProductos",
    context:
      "En tu tienda online necesitás generar una lista de todos los productos disponibles para mostrar en la página principal. Cada producto está guardado como nombre en un array y debés recorrerlo completo.",
    description:
      "Dado un array de strings con nombres de productos, devolvé un nuevo array con los mismos elementos usando un bucle for. Es el primer paso para aprender a recorrer un array.",
    example: {
      input: 'mostrarProductos(["Mouse", "Teclado", "Monitor"])',
      output: '["Mouse", "Teclado", "Monitor"]',
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ map()", "❌ filter()", "❌ reduce()", "❌ forEach()", "❌ sort()"],
    },
    hints: [
      "¿Qué tipo de bucle podés usar para recorrer cada elemento del array?",
      "¿Necesitás modificar algo o solo devolver el array original?",
      "¿Qué variable usás para guardar el resultado final?",
    ],
    learningObjective:
      "Patrón recorrer: aprender a iterar sobre un array con un bucle for y acceder a cada elemento por su índice.",
    starterCode: `function mostrarProductos(productos) {\n  // tu código acá\n\n}`,
    solution: `function mostrarProductos(productos) {
  const resultado = [];
  for (let i = 0; i < productos.length; i++) {
    resultado.push(productos[i]);
  }
  return resultado;
}`,
    testCases: [
      {
        args: [["Mouse", "Teclado", "Monitor"]],
        expected: ["Mouse", "Teclado", "Monitor"],
        description: "Array con 3 productos",
      },
      {
        args: [["Auriculares"]],
        expected: ["Auriculares"],
        description: "Array con un solo producto",
      },
      {
        args: [[]],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [["Mouse", "Teclado", "Monitor", "Auriculares", "Webcam"]],
        expected: ["Mouse", "Teclado", "Monitor", "Auriculares", "Webcam"],
        description: "Array con 5 productos",
      },
    ],
  },
  {
    id: "contar-con-stock",
    title: "Contar productos con stock",
    module: 1,
    pattern: "contar",
    difficulty: "facil",
    functionName: "contarConStock",
    context:
      "El gerente de depósito necesita saber cuántos productos tienen stock disponible para planificar reposiciones. Tenés un array con las cantidades en stock de cada producto.",
    description:
      "Dado un array de números que representa el stock de cada producto, contá cuántos tienen stock mayor a 0.",
    example: {
      input: "contarConStock([10, 0, 5, 0, 8, 3, 0])",
      output: "4",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ map()", "❌ filter()", "❌ reduce()", "❌ forEach()", "❌ some()", "❌ every()"],
    },
    hints: [
      "¿Necesitás una variable contador que empiece en 0?",
      "¿Qué condición evalúa si un producto tiene stock?",
      "¿Dónde incrementás el contador, dentro o fuera del if?",
    ],
    learningObjective:
      "Patrón contar: acumular una cantidad usando un contador y una condición dentro de un bucle.",
    starterCode: `function contarConStock(stock) {\n  // tu código acá\n\n}`,
    solution: `function contarConStock(stock) {\n  let contador = 0;\n  for (let i = 0; i < stock.length; i++) {\n    if (stock[i] > 0) {\n      contador++;\n    }\n  }\n  return contador;\n}`,
    testCases: [
      {
        args: [[10, 0, 5, 0, 8, 3, 0]],
        expected: 4,
        description: "4 productos con stock",
      },
      {
        args: [[0, 0, 0]],
        expected: 0,
        description: "Ninguno con stock",
      },
      {
        args: [[5, 10, 15]],
        expected: 3,
        description: "Todos con stock",
      },
      {
        args: [[0]],
        expected: 0,
        description: "Un solo producto sin stock",
      },
      {
        args: [[]],
        expected: 0,
        description: "Array vacío",
      },
    ],
  },
  {
    id: "precio-mas-alto",
    title: "Producto más caro",
    module: 1,
    pattern: "maximo",
    difficulty: "facil",
    functionName: "precioMasAlto",
    context:
      "Tu sistema de precios necesita identificar cuál es el producto más caro del catálogo para mostrarlo como destacado. Tenés un array con los precios de todos los productos.",
    description:
      "Dado un array de números con precios, encontrá el valor máximo sin usar Math.max ni sort.",
    example: {
      input: "precioMasAlto([1500, 3000, 2500, 5000, 1200])",
      output: "5000",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ Math.max()", "❌ sort()", "❌ map()", "❌ reduce()", "❌ Math.min()"],
    },
    hints: [
      "¿Podés asumir que el primer elemento es el máximo y después comparar con los demás?",
      "¿Qué operador comparás en cada iteración del bucle?",
      "Si encontrás un número mayor, ¿qué hacés con tu variable máxima?",
    ],
    learningObjective:
      "Patrón máximo: recorrer un array manteniendo una variable con el valor más alto encontrado hasta el momento.",
    starterCode: `function precioMasAlto(precios) {\n  // tu código acá\n\n}`,
    solution: `function precioMasAlto(precios) {\n  let maximo = precios[0];\n  for (let i = 1; i < precios.length; i++) {\n    if (precios[i] > maximo) {\n      maximo = precios[i];\n    }\n  }\n  return maximo;\n}`,
    testCases: [
      {
        args: [[1500, 3000, 2500, 5000, 1200]],
        expected: 5000,
        description: "Precio máximo al final",
      },
      {
        args: [[5000, 3000, 2500, 1500, 1200]],
        expected: 5000,
        description: "Precio máximo al inicio",
      },
      {
        args: [[2500]],
        expected: 2500,
        description: "Un solo precio",
      },
      {
        args: [[-100, -50, -200]],
        expected: -50,
        description: "Precios negativos (devolución)",
      },
      {
        args: [[100, 100, 100]],
        expected: 100,
        description: "Todos iguales",
      },
    ],
  },
  {
    id: "producto-existe",
    title: "¿Existe el producto?",
    module: 1,
    pattern: "buscar",
    difficulty: "facil",
    functionName: "productoExiste",
    context:
      "Cuando un cliente busca un producto en tu tienda, necesitás verificar si ese nombre existe en tu catálogo antes de mostrar resultados.",
    description:
      "Dado un array de strings con nombres de productos y un nombre a buscar, devolvé true si existe o false si no.",
    example: {
      input: 'productoExiste(["Mouse", "Teclado", "Monitor"], "Teclado")',
      output: "true",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ includes()", "❌ find()", "❌ some()", "❌ indexOf()", "❌ map()", "❌ filter()"],
    },
    hints: [
      "¿Qué tipo de valor devolvés cuando encontrás lo que buscás?",
      "¿Y si terminás el bucle sin encontrar nada?",
      "¿Qué operador comparás para saber si dos strings son iguales?",
    ],
    learningObjective:
      "Patrón buscar: recorrer un array buscando un valor específico y devolver un booleano indicando si se encontró.",
    starterCode: `function productoExiste(productos, nombre) {\n  // tu código acá\n\n}`,
    solution: `function productoExiste(productos, nombre) {\n  for (let i = 0; i < productos.length; i++) {\n    if (productos[i] === nombre) {\n      return true;\n    }\n  }\n  return false;\n}`,
    testCases: [
      {
        args: [["Mouse", "Teclado", "Monitor"], "Teclado"],
        expected: true,
        description: "El producto existe",
      },
      {
        args: [["Mouse", "Teclado", "Monitor"], "Webcam"],
        expected: false,
        description: "El producto no existe",
      },
      {
        args: [[], "Mouse"],
        expected: false,
        description: "Array vacío",
      },
      {
        args: [["Mouse"], "Mouse"],
        expected: true,
        description: "Un solo producto que coincide",
      },
      {
        args: [["mouse", "MOUSE"], "Mouse"],
        expected: false,
        description: "Diferencia entre mayúsculas y minúsculas",
      },
    ],
  },
  {
    id: "aplicar-descuento",
    title: "Aplicar descuento",
    module: 1,
    pattern: "transformar",
    difficulty: "medio",
    functionName: "aplicarDescuento",
    context:
      "Es Black Friday y necesitás calcular los nuevos precios de todos los productos aplicando un 10% de descuento. Tenés un array con los precios originales y debés generar uno nuevo con los precios descontados.",
    description:
      "Dado un array de números con precios, devolvé un nuevo array con cada precio multiplicado por 0.9 (10% de descuento). No modifiqués el array original.",
    example: {
      input: "aplicarDescuento([100, 250, 80])",
      output: "[90, 225, 72]",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===, *)"],
      cant: ["❌ map()", "❌ forEach()", "❌ reduce()", "❌ filter()"],
    },
    hints: [
      "¿Necesitás crear un array nuevo o podés modificar el original?",
      "¿Qué operación matemática aplicás en cada elemento?",
      "¿Cómo agregás el resultado al array nuevo en cada iteración?",
    ],
    learningObjective:
      "Patrón transformar: crear un nuevo array a partir de otro, aplicando una operación a cada elemento con un bucle for.",
    starterCode: `function aplicarDescuento(precios) {\n  // tu código acá\n\n}`,
    solution: `function aplicarDescuento(precios) {\n  const resultado = [];\n  for (let i = 0; i < precios.length; i++) {\n    resultado.push(precios[i] * 0.9);\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [[100, 250, 80, 500, 150]],
        expected: [90, 225, 72, 450, 135],
        description: "Descuento del 10%",
      },
      {
        args: [[1000]],
        expected: [900],
        description: "Un solo precio",
      },
      {
        args: [[]],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [[0, 10, 100]],
        expected: [0, 9, 90],
        description: "Incluye precio cero",
      },
    ],
  },
  {
    id: "filtrar-por-categoria",
    title: "Filtrar por categoría",
    module: 1,
    pattern: "filtrar",
    difficulty: "medio",
    functionName: "filtrarPorCategoria",
    context:
      "Tu tienda tiene productos organizados por categorías. El cliente quiere ver solo los productos de tecnología, así que necesitás filtrar el catálogo completo.",
    description:
      "Dado un array de objetos {name, category}, devolvé un array nuevo solo con los objetos cuya category sea igual al parámetro dado.",
    example: {
      input:
        'filtrarPorCategoria([{name: "Mouse", category: "tecnologia"}, {name: "Remera", category: "ropa"}], "tecnologia")',
      output: '[{name: "Mouse", category: "tecnologia"}]',
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ filter()", "❌ map()", "❌ forEach()", "❌ reduce()"],
    },
    hints: [
      "¿Qué tipo de condición evaluás en cada objeto del array?",
      "¿Cómo accedés a la propiedad category de cada objeto?",
      "¿Qué hacés con los elementos que cumplen la condición?",
    ],
    learningObjective:
      "Patrón filtrar: recorrer un array de objetos y construir un nuevo array seleccionando solo los que cumplen una condición.",
    starterCode: `function filtrarPorCategoria(productos, categoria) {\n  // tu código acá\n\n}`,
    solution: `function filtrarPorCategoria(productos, categoria) {\n  const resultado = [];\n  for (let i = 0; i < productos.length; i++) {\n    if (productos[i].category === categoria) {\n      resultado.push(productos[i]);\n    }\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [
          [
            { name: "Mouse", category: "tecnologia" },
            { name: "Remera", category: "ropa" },
            { name: "Teclado", category: "tecnologia" },
          ],
          "tecnologia",
        ],
        expected: [
          { name: "Mouse", category: "tecnologia" },
          { name: "Teclado", category: "tecnologia" },
        ],
        description: "Filtra tecnología",
      },
      {
        args: [
          [
            { name: "Mouse", category: "tecnologia" },
            { name: "Remera", category: "ropa" },
          ],
          "libreria",
        ],
        expected: [],
        description: "No hay productos en esa categoría",
      },
      {
        args: [[], "tecnologia"],
        expected: [],
        description: "Array vacío",
      },
    ],
  },
  {
    id: "productos-caros",
    title: "Nombres de productos caros",
    module: 1,
    pattern: "combinar",
    difficulty: "medio",
    functionName: "productosCaros",
    context:
      "El equipo de marketing quiere mostrar un banner con los nombres de los productos premium (precio mayor a $1000). Necesitás extraer solo los nombres de los productos caros del catálogo.",
    description:
      "Dado un array de objetos {name, price}, devolvé un array con los names de los objetos cuyo price sea mayor a 1000.",
    example: {
      input:
        'productosCaros([{name: "Mouse", price: 150}, {name: "Monitor", price: 3000}])',
      output: '["Monitor"]',
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ filter()", "❌ map()", "❌ forEach()", "❌ reduce()"],
    },
    hints: [
      "¿Tenés que filtrar primero y después extraer el nombre, o todo junto?",
      "¿Qué condición evalúa si un producto es 'caro'?",
      "¿Cómo accedés a la propiedad name de cada objeto?",
    ],
    learningObjective:
      "Patrón combinar: combinar filtrado y transformación en un solo bucle, seleccionando elementos y extrayendo una propiedad específica.",
    starterCode: `function productosCaros(productos) {\n  // tu código acá\n\n}`,
    solution: `function productosCaros(productos) {\n  const resultado = [];\n  for (let i = 0; i < productos.length; i++) {\n    if (productos[i].price > 1000) {\n      resultado.push(productos[i].name);\n    }\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [
          [
            { name: "Mouse", price: 150 },
            { name: "Monitor", price: 3000 },
            { name: "Teclado Gamer", price: 1500 },
            { name: "Cable USB", price: 20 },
          ],
        ],
        expected: ["Monitor", "Teclado Gamer"],
        description: "Dos productos caros",
      },
      {
        args: [
          [
            { name: "Mouse", price: 150 },
            { name: "Cable", price: 20 },
          ],
        ],
        expected: [],
        description: "Ninguno mayor a 1000",
      },
      {
        args: [[{ name: "Laptop", price: 5000 }]],
        expected: ["Laptop"],
        description: "Un solo producto caro",
      },
    ],
  },
  {
    id: "total-carrito",
    title: "Total del carrito",
    module: 1,
    pattern: "acumular",
    difficulty: "medio",
    functionName: "totalCarrito",
    context:
      "Un cliente tiene varios productos en su carrito de compras y necesitás calcular el total a pagar multiplicando el precio de cada producto por la cantidad que lleva.",
    description:
      "Dado un array de objetos {name, price, quantity}, calculá la suma total de price * quantity para todos los elementos.",
    example: {
      input:
        'totalCarrito([{name: "Mouse", price: 100, quantity: 2}, {name: "Teclado", price: 200, quantity: 1}])',
      output: "400",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===, *, +)"],
      cant: ["❌ reduce()", "❌ map()", "❌ forEach()", "❌ filter()"],
    },
    hints: [
      "¿Qué variable acumula el total y con qué valor inicializás?",
      "¿Cómo calculás el subtotal de cada producto (price * quantity)?",
      "¿Dónde sumás el subtotal al acumulador?",
    ],
    learningObjective:
      "Patrón acumular: recorrer un array acumulando un valor en cada iteración, sumando resultados parciales al total.",
    starterCode: `function totalCarrito(carrito) {\n  // tu código acá\n\n}`,
    solution: `function totalCarrito(carrito) {\n  let total = 0;\n  for (let i = 0; i < carrito.length; i++) {\n    total += carrito[i].price * carrito[i].quantity;\n  }\n  return total;\n}`,
    testCases: [
      {
        args: [
          [
            { name: "Mouse", price: 100, quantity: 2 },
            { name: "Teclado", price: 200, quantity: 1 },
          ],
        ],
        expected: 400,
        description: "Dos productos",
      },
      {
        args: [[{ name: "Laptop", price: 5000, quantity: 1 }]],
        expected: 5000,
        description: "Un solo producto",
      },
      {
        args: [[]],
        expected: 0,
        description: "Carrito vacío",
      },
      {
        args: [
          [
            { name: "Auriculares", price: 300, quantity: 3 },
            { name: "Cable", price: 50, quantity: 4 },
          ],
        ],
        expected: 1100,
        description: "Múltiples cantidades",
      },
    ],
  },
  {
    id: "precio-mas-bajo",
    title: "Producto más barato",
    module: 1,
    pattern: "minimo",
    difficulty: "medio",
    functionName: "precioMasBajo",
    context:
      "Tu sistema de ofertas necesita encontrar el producto más barato del catálogo para destacarlo como 'mejor precio'. Tenés un array con los precios.",
    description:
      "Dado un array de números con precios, encontrá el valor mínimo sin usar Math.min ni sort.",
    example: {
      input: "precioMasBajo([1500, 3000, 2500, 500, 1200])",
      output: "500",
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>, <, ===)"],
      cant: ["❌ Math.min()", "❌ sort()", "❌ map()", "❌ reduce()", "❌ Math.max()"],
    },
    hints: [
      "¿Podés asumir que el primer elemento es el mínimo y comparar con los demás?",
      "¿Qué operador usás para comparar si un número es menor que otro?",
      "¿Qué hacés cuando encontrás un número menor al mínimo actual?",
    ],
    learningObjective:
      "Patrón mínimo: recorrer un array manteniendo una variable con el valor más bajo encontrado hasta el momento.",
    starterCode: `function precioMasBajo(precios) {\n  // tu código acá\n\n}`,
    solution: `function precioMasBajo(precios) {\n  let minimo = precios[0];\n  for (let i = 1; i < precios.length; i++) {\n    if (precios[i] < minimo) {\n      minimo = precios[i];\n    }\n  }\n  return minimo;\n}`,
    testCases: [
      {
        args: [[1500, 3000, 2500, 500, 1200]],
        expected: 500,
        description: "Precio mínimo al final",
      },
      {
        args: [[500, 3000, 2500, 1500, 1200]],
        expected: 500,
        description: "Precio mínimo al inicio",
      },
      {
        args: [[2500]],
        expected: 2500,
        description: "Un solo precio",
      },
      {
        args: [[100, 100, 100]],
        expected: 100,
        description: "Todos iguales",
      },
      {
        args: [[-100, -50, -200]],
        expected: -200,
        description: "Precios negativos",
      },
    ],
  },
];
