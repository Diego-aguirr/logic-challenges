import type { Exercise, Module, Pattern, Category, Difficulty } from "./types";

const exercises: Exercise[] = [
  // =============================================
  // MÓDULO 1 — LÓGICA CON ARRAYS Y FOR (9 ejercicios)
  // =============================================
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
      "Dado un array de strings con nombres de productos, devolvé el mismo array sin modificarlo. Es el primer paso para aprender a recorrer un array.",
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
    solution: `function mostrarProductos(productos) {\n  return productos;\n}`,
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

  // =============================================
  // MÓDULO 2 — MÉTODOS DE JAVASCRIPT (8 ejercicios)
  // =============================================
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
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ],
        expected: [
          { name: "Mouse", stock: 5 },
          { name: "Monitor", stock: 3 },
        ],
        description: "Dos disponibles, uno agotado",
      },
      {
        args: [{ name: "Cable", stock: 0 }],
        expected: [],
        description: "Ninguno disponible",
      },
      {
        args: [],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [{ name: "USB", stock: 10 }],
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
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ],
        expected: true,
        description: "Hay uno agotado",
      },
      {
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 10 },
        ],
        expected: false,
        description: "Ninguno agotado",
      },
      {
        args: [],
        expected: false,
        description: "Array vacío",
      },
      {
        args: [{ name: "Cable", stock: 0 }],
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
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 10 },
          { name: "Monitor", stock: 3 },
        ],
        expected: true,
        description: "Todos disponibles",
      },
      {
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
        ],
        expected: false,
        description: "Uno agotado",
      },
      {
        args: [],
        expected: true,
        description: "Array vacío (every retorna true)",
      },
      {
        args: [{ name: "USB", stock: 1 }],
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
        args: [
          { name: "Mouse", price: 150 },
          { name: "Monitor", price: 3000 },
          { name: "Teclado", price: 800 },
        ],
        expected: [
          { name: "Mouse", price: 150 },
          { name: "Teclado", price: 800 },
          { name: "Monitor", price: 3000 },
        ],
        description: "Orden ascendente por precio",
      },
      {
        args: [{ name: "Mouse", price: 150 }],
        expected: [{ name: "Mouse", price: 150 }],
        description: "Un solo producto",
      },
      {
        args: [],
        expected: [],
        description: "Array vacío",
      },
      {
        args: [
          { name: "A", price: 500 },
          { name: "B", price: 500 },
        ],
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

  // =============================================
  // MÓDULO 3 — OBJETOS (7 ejercicios)
  // =============================================
  {
    id: "info-producto",
    title: "Info del producto",
    module: 3,
    pattern: "propiedades",
    difficulty: "facil",
    functionName: "infoProducto",
    context:
      "Tu página de producto necesita mostrar la información clave. Tenés un objeto con todos los datos del producto y necesitás extraer las propiedades más importantes.",
    description:
      "Dado un objeto producto con id, name, price y stock, devolvé un objeto con las propiedades name y price.",
    example: {
      input:
        'infoProducto({id: 1, name: "Mouse", price: 150, stock: 10})',
      output: '{name: "Mouse", price: 150}',
    },
    restrictions: {
      can: ["✅ notación de punto", "✅ notación de corchetes", "✅ variables (let, const)"],
      cant: ["❌ desestructuración", "❌ Object.keys()", "❌ Object.values()"],
    },
    hints: [
      "¿Cómo accedés al valor de una propiedad con notación de punto?",
      "¿Cómo creás un objeto nuevo con solo algunas propiedades?",
      "¿Necesitás crear un objeto vacío primero y después asignar?",
    ],
    learningObjective:
      "Propiedades de objetos: acceder a valores de un objeto usando notación de punto y crear objetos nuevos con selección manual de propiedades.",
    starterCode: `function infoProducto(producto) {\n  // tu código acá\n\n}`,
    solution: `function infoProducto(producto) {\n  return {\n    name: producto.name,\n    price: producto.price\n  };\n}`,
    testCases: [
      {
        args: [{ id: 1, name: "Mouse", price: 150, stock: 10 }],
        expected: { name: "Mouse", price: 150 },
        description: "Extrae name y price",
      },
      {
        args: [{ id: 5, name: "Monitor", price: 3000, stock: 0 }],
        expected: { name: "Monitor", price: 3000 },
        description: "Otro producto",
      },
      {
        args: [{ id: 99, name: "USB", price: 25, stock: 100 }],
        expected: { name: "USB", price: 25 },
        description: "Producto barato",
      },
    ],
  },
  {
    id: "actualizar-stock",
    title: "Actualizar stock",
    module: 3,
    pattern: "modificar",
    difficulty: "facil",
    functionName: "actualizarStock",
    context:
      "Después de una venta, necesitás actualizar el stock de un producto en tu sistema. El objeto del producto existe y solo cambiás el valor de stock.",
    description:
      "Dado un objeto producto y un nuevo valor de stock, devolvé el mismo objeto con la propiedad stock actualizada.",
    example: {
      input:
        'actualizarStock({id: 1, name: "Mouse", stock: 10}, 7)',
      output: '{id: 1, name: "Mouse", stock: 7}',
    },
    restrictions: {
      can: ["✅ notación de punto", "✅ spread operator", "✅ variables (let, const)"],
      cant: ["❌ Object.assign()", "❌ desestructuración"],
    },
    hints: [
      "¿Cómo cambiás el valor de una propiedad existente en un objeto?",
      "¿Podés usar spread para copiar el objeto y solo sobreescribir stock?",
      "¿Es mejor modificar el original o crear una copia?",
    ],
    learningObjective:
      "Modificar objetos: actualizar el valor de una propiedad existente en un objeto, idealmente creando una copia con spread.",
    starterCode: `function actualizarStock(producto, nuevoStock) {\n  // tu código acá\n\n}`,
    solution: `function actualizarStock(producto, nuevoStock) {\n  return { ...producto, stock: nuevoStock };\n}`,
    testCases: [
      {
        args: [{ id: 1, name: "Mouse", stock: 10 }, 7],
        expected: { id: 1, name: "Mouse", stock: 7 },
        description: "Reduce stock",
      },
      {
        args: [{ id: 2, name: "Teclado", stock: 0 }, 50],
        expected: { id: 2, name: "Teclado", stock: 50 },
        description: "Reabastece producto agotado",
      },
      {
        args: [{ id: 3, name: "Monitor", stock: 5 }, 0],
        expected: { id: 3, name: "Monitor", stock: 0 },
        description: "Agota producto",
      },
    ],
  },
  {
    id: "agregar-descuento",
    title: "Agregar propiedad",
    module: 3,
    pattern: "agregar",
    difficulty: "facil",
    functionName: "agregarDescuento",
    context:
      "Tu sistema de promociones necesita agregar un campo de descuento a cada producto que no tiene uno. Usá spread para agregar la nueva propiedad sin perder las existentes.",
    description:
      "Dado un objeto producto, devolvé un nuevo objeto con todas sus propiedades más una nueva propiedad discount con valor 10.",
    example: {
      input: 'agregarDescuento({name: "Mouse", price: 150})',
      output: '{name: "Mouse", price: 150, discount: 10}',
    },
    restrictions: {
      can: ["✅ spread operator", "✅ variables (let, const)", "✅ notación de punto"],
      cant: ["❌ Object.assign()", "❌ for...in"],
    },
    hints: [
      "¿Cómo copiás todas las propiedades de un objeto con spread?",
      "¿Qué pasa si agregás una propiedad que ya existe con spread?",
      "¿El orden importa al usar spread?",
    ],
    learningObjective:
      "Agregar propiedades: usar spread para copiar un objeto y agregarle una nueva propiedad de forma inmutable.",
    starterCode: `function agregarDescuento(producto) {\n  // tu código acá\n\n}`,
    solution: `function agregarDescuento(producto) {\n  return { ...producto, discount: 10 };\n}`,
    testCases: [
      {
        args: [{ name: "Mouse", price: 150 }],
        expected: { name: "Mouse", price: 150, discount: 10 },
        description: "Agrega descuento",
      },
      {
        args: [{ name: "Monitor", price: 3000, stock: 5 }],
        expected: { name: "Monitor", price: 3000, stock: 5, discount: 10 },
        description: "Producto con más propiedades",
      },
      {
        args: [{ id: 1 }],
        expected: { id: 1, discount: 10 },
        description: "Producto mínimo",
      },
    ],
  },
  {
    id: "extraer-datos",
    title: "Extraer campos",
    module: 3,
    pattern: "desestructuracion",
    difficulty: "medio",
    functionName: "extraerDatos",
    context:
      "Tu API de productos recibe objetos completos pero la UI solo necesita mostrar el nombre y el precio. Usá desestructuración para extraer esos campos de forma elegante.",
    description:
      "Dado un objeto producto, usá desestructuración para extraer name y price, y devolvé un objeto con esos dos campos.",
    example: {
      input:
        'extraerDatos({id: 1, name: "Mouse", price: 150, stock: 10})',
      output: '{name: "Mouse", price: 150}',
    },
    restrictions: {
      can: ["✅ desestructuración", "✅ variables (let, const)", "✅ shorthand properties"],
      cant: ["❌ notación de punto manual", "❌ Object.keys()"],
    },
    hints: [
      "¿Cómo extraés múltiples propiedades de un objeto en una sola línea?",
      "¿Qué sintaxis usás entre las llaves para desestructurar?",
      "¿Cómo devolvés un objeto nuevo con shorthand properties?",
    ],
    learningObjective:
      "Desestructuración de objetos: extraer múltiples propiedades de un objeto en variables individuales de forma concisa.",
    starterCode: `function extraerDatos(producto) {\n  // tu código acá\n\n}`,
    solution: `function extraerDatos(producto) {\n  const { name, price } = producto;\n  return { name, price };\n}`,
    testCases: [
      {
        args: [{ id: 1, name: "Mouse", price: 150, stock: 10 }],
        expected: { name: "Mouse", price: 150 },
        description: "Extrae name y price",
      },
      {
        args: [{ id: 5, name: "Monitor", price: 3000, stock: 0 }],
        expected: { name: "Monitor", price: 3000 },
        description: "Otro producto",
      },
      {
        args: [{ id: 10, name: "USB", price: 25 }],
        expected: { name: "USB", price: 25 },
        description: "Sin stock",
      },
    ],
  },
  {
    id: "fusionar-catalogos",
    title: "Fusionar catálogos",
    module: 3,
    pattern: "spread",
    difficulty: "medio",
    functionName: "fusionarCatalogos",
    context:
      "Tu empresa compró otra tienda y necesitás combinar los dos catálogos de productos en uno solo. Usá el operador spread para fusionar los arrays.",
    description:
      "Dados dos arrays de productos, devolvé un nuevo array que contenga todos los elementos de ambos usando spread.",
    example: {
      input:
        'fusionarCatalogos([{name: "Mouse"}], [{name: "Teclado"}])',
      output: '[{name: "Mouse"}, {name: "Teclado"}]',
    },
    restrictions: {
      can: ["✅ spread operator", "✅ variables (let, const)"],
      cant: ["❌ concat()", "❌ push() dentro de bucle", "❌ for"],
    },
    hints: [
      "¿Cómo combinás dos arrays en uno nuevo con spread?",
      "¿Qué sintaxis usás entre los corchetes?",
      "¿El resultado es un array nuevo o modifica alguno de los originales?",
    ],
    learningObjective:
      "Spread en arrays: combinar dos arrays en uno nuevo usando el operador spread de forma inmutable.",
    starterCode: `function fusionarCatalogos(catalogo1, catalogo2) {\n  // tu código acá\n\n}`,
    solution: `function fusionarCatalogos(catalogo1, catalogo2) {\n  return [...catalogo1, ...catalogo2];\n}`,
    testCases: [
      {
        args: [
          [{ name: "Mouse" }, { name: "Teclado" }],
          [{ name: "Monitor" }, { name: "Webcam" }],
        ],
        expected: [
          { name: "Mouse" },
          { name: "Teclado" },
          { name: "Monitor" },
          { name: "Webcam" },
        ],
        description: "Dos catálogos con 2 cada uno",
      },
      {
        args: [[{ name: "Mouse" }], []],
        expected: [{ name: "Mouse" }],
        description: "Segundo catálogo vacío",
      },
      {
        args: [[], []],
        expected: [],
        description: "Ambos vacíos",
      },
      {
        args: [[{ name: "A" }], [{ name: "B" }]],
        expected: [{ name: "A" }, { name: "B" }],
        description: "Un producto cada uno",
      },
    ],
  },
  {
    id: "carrito-caro",
    title: "Filtrar carrito por precio",
    module: 3,
    pattern: "objetos-array",
    difficulty: "medio",
    functionName: "carritoCaro",
    context:
      "El cliente quiere ver solo los ítems de su carrito que cuestan más de $500 para decidir si los mantiene o los quita antes de pagar.",
    description:
      "Dado un array de objetos {name, price, quantity}, devolvé un nuevo array solo con los ítems donde price > 500 usando un bucle for.",
    example: {
      input:
        'carritoCaro([{name: "Mouse", price: 150, quantity: 1}, {name: "Monitor", price: 3000, quantity: 1}])',
      output: '[{name: "Monitor", price: 3000, quantity: 1}]',
    },
    restrictions: {
      can: ["✅ for", "✅ if", "✅ variables (let, const)", "✅ operadores (>)"],
      cant: ["❌ filter()", "❌ map()", "❌ forEach()", "❌ reduce()"],
    },
    hints: [
      "¿Cómo accedés a la propiedad price de cada objeto en el array?",
      "¿Qué tipo de condición evaluás para saber si es 'caro'?",
      "¿Cómo agregás el objeto completo al array resultado?",
    ],
    learningObjective:
      "Objetos en arrays: combinar bucles for con acceso a propiedades de objetos para filtrar arrays de objetos.",
    starterCode: `function carritoCaro(carrito) {\n  // tu código acá\n\n}`,
    solution: `function carritoCaro(carrito) {\n  const resultado = [];\n  for (let i = 0; i < carrito.length; i++) {\n    if (carrito[i].price > 500) {\n      resultado.push(carrito[i]);\n    }\n  }\n  return resultado;\n}`,
    testCases: [
      {
        args: [
          { name: "Mouse", price: 150, quantity: 1 },
          { name: "Monitor", price: 3000, quantity: 1 },
          { name: "Teclado", price: 800, quantity: 2 },
        ],
        expected: [
          { name: "Monitor", price: 3000, quantity: 1 },
          { name: "Teclado", price: 800, quantity: 2 },
        ],
        description: "Dos ítems caros",
      },
      {
        args: [{ name: "Cable", price: 50, quantity: 3 }],
        expected: [],
        description: "Ninguno caro",
      },
      {
        args: [],
        expected: [],
        description: "Carrito vacío",
      },
      {
        args: [{ name: "Laptop", price: 5000, quantity: 1 }],
        expected: [{ name: "Laptop", price: 5000, quantity: 1 }],
        description: "Un solo ítem caro",
      },
    ],
  },
  {
    id: "direccion-cliente",
    title: "Dirección del cliente",
    module: 3,
    pattern: "objetos-anidados",
    difficulty: "dificil",
    functionName: "direccionCliente",
    context:
      "Tu sistema de envíos necesita generar la dirección completa del cliente para la etiqueta de envío. La dirección está guardada como un objeto anidado dentro del objeto cliente.",
    description:
      "Dado un objeto cliente con una propiedad address anidada {city, street, number}, devolvé un string con el formato: 'Calle [street] [number], [city]'.",
    example: {
      input:
        'direccionCliente({name: "Juan", address: {street: "Av. Libertador", number: 1234, city: "Buenos Aires"}})',
      output: '"Av. Libertador 1234, Buenos Aires"',
    },
    restrictions: {
      can: ["✅ notación de punto encadenada", "✅ template literals", "✅ variables (let, const)"],
      cant: ["❌ desestructuración anidada", "❌ Object.values()"],
    },
    hints: [
      "¿Cómo accedés a una propiedad de un objeto que está dentro de otro?",
      "¿Qué sintaxis usás para acceder a address.street?",
      "¿Cómo concatenás strings con template literals usando backticks?",
    ],
    learningObjective:
      "Objetos anidados: acceder a propiedades de objetos que están dentro de otros objetos usando notación de punto encadenada.",
    starterCode: `function direccionCliente(cliente) {\n  // tu código acá\n\n}`,
    solution: `function direccionCliente(cliente) {\n  return \`\${cliente.address.street} \${cliente.address.number}, \${cliente.address.city}\`;\n}`,
    testCases: [
      {
        args: [
          {
            name: "Juan",
            address: { street: "Av. Libertador", number: 1234, city: "Buenos Aires" },
          },
        ],
        expected: "Av. Libertador 1234, Buenos Aires",
        description: "Dirección completa",
      },
      {
        args: [
          {
            name: "María",
            address: { street: "Calle Falsa", number: 123, city: "Córdoba" },
          },
        ],
        expected: "Calle Falsa 123, Córdoba",
        description: "Otra ciudad",
      },
      {
        args: [
          {
            name: "Pedro",
            address: { street: "San Martín", number: 500, city: "Rosario" },
          },
        ],
        expected: "San Martín 500, Rosario",
        description: "Tercer cliente",
      },
    ],
  },

  // =============================================
  // MÓDULO 4 — FUNCIONES (7 ejercicios)
  // =============================================
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

  // =============================================
  // MÓDULO 5 — JAVASCRIPT MODERNO (15 ejercicios)
  // =============================================
  {
    id: "rest-params-sumar",
    title: "Sumar cantidades variables",
    module: 5,
    pattern: "rest-params",
    difficulty: "facil",
    functionName: "sumarCantidades",
    context:
      "Tu tienda permite crear pedidos con cantidad variable de productos. Necesitás una función que sume todas las cantidades sin saber cuántos argumentos van a llegar.",
    description:
      "Creá una función que reciba N números como argumentos individuales y devuelva la suma total usando rest parameters (...).",
    example: {
      input: "sumarCantidades(10, 20, 30)",
      output: "60",
    },
    restrictions: {
      can: ["✅ rest parameters (...)", "✅ for...of", "✅ variables (let, const)"],
      cant: ["❌ arguments", "❌ apply()", "❌ call()"],
    },
    hints: [
      "¿Cómo capturás todos los argumentos en un solo array?",
      "¿Qué método podés usar para recorrer el array de argumentos?",
      "¿Rest parameters va al final o al inicio de los parámetros?",
    ],
    learningObjective:
      "Rest parameters: capturar un número indefinido de argumentos como un array, útil cuando no sabés cuántos parámetros van a llegar.",
    starterCode: `function sumarCantidades(...args) {\n  // tu código acá\n\n}`,
    solution: `function sumarCantidades(...args) {\n  return args.reduce((total, num) => total + num, 0);\n}`,
    testCases: [
      {
        args: [10, 20, 30],
        expected: 60,
        description: "Tres números",
      },
      {
        args: [5],
        expected: 5,
        description: "Un solo número",
      },
      {
        args: [100, 200, 300, 400, 500],
        expected: 1500,
        description: "Cinco números",
      },
      {
        args: [0, 0, 0],
        expected: 0,
        description: "Ceros",
      },
    ],
  },
  {
    id: "spread-combinar-carritos",
    title: "Combinar carritos de compra",
    module: 5,
    pattern: "spread-array",
    difficulty: "facil",
    functionName: "combinarCarritos",
    context:
      "Un cliente tiene productos en su carrito y encontró más artículos que quiere agregar. Necesitás combinar ambos arrays en uno solo sin mutar los originales.",
    description:
      "Dado dos arrays de productos (strings), devolvé un nuevo array que contenga todos los elementos de ambos usando spread operator (...).",
    example: {
      input: 'combinarCarritos(["Mouse", "Teclado"], ["Monitor", "USB"])',
      output: '["Mouse", "Teclado", "Monitor", "USB"]',
    },
    restrictions: {
      can: ["✅ spread operator (...)", "✅ variables (let, const)"],
      cant: ["❌ concat()", "❌ push()", "❌ for", "❌ apply()"],
    },
    hints: [
      "¿Cómo copiás todos los elementos de un array en otro?",
      "¿Qué operador va antes del nombre del array?",
      "¿El resultado es un array nuevo o modifica los originales?",
    ],
    learningObjective:
      "Spread array: expandir los elementos de un array en otro contexto, creando copias sin mutar los originales.",
    starterCode: `function combinarCarritos(carrito1, carrito2) {\n  // tu código acá\n\n}`,
    solution: `function combinarCarritos(carrito1, carrito2) {\n  return [...carrito1, ...carrito2];\n}`,
    testCases: [
      {
        args: [["Mouse", "Teclado"], ["Monitor", "USB"]],
        expected: ["Mouse", "Teclado", "Monitor", "USB"],
        description: "Dos carritos con 2 productos cada uno",
      },
      {
        args: [["Mouse"], []],
        expected: ["Mouse"],
        description: "Un carrito vacío",
      },
      {
        args: [[], ["Teclado"]],
        expected: ["Teclado"],
        description: "El primero vacío",
      },
      {
        args: [[], []],
        expected: [],
        description: "Ambos vacíos",
      },
    ],
  },
  {
    id: "spread-actualizar-producto",
    title: "Actualizar producto sin mutar",
    module: 5,
    pattern: "spread-object",
    difficulty: "medio",
    functionName: "actualizarProducto",
    context:
      "En React nunca mutás el estado directamente. Necesitás crear una copia del producto con el precio actualizado, sin modificar el original.",
    description:
      "Dado un objeto producto y un nuevo precio, devolvé un nuevo objeto con todas las propiedades del original pero con el precio actualizado, usando spread en objetos.",
    example: {
      input: 'actualizarProducto({id: 1, name: "Mouse", price: 150}, 200)',
      output: '{id: 1, name: "Mouse", price: 200}',
    },
    restrictions: {
      can: ["✅ spread operator (...)", "✅ variables (let, const)"],
      cant: ["❌ Object.assign()", "❌ Object.keys()", "❌ for...in"],
    },
    hints: [
      "¿Cómo copiás todas las propiedades de un objeto en otro?",
      "¿Qué cambia si ponés la propiedad después del spread?",
      "¿El orden importa cuando la propiedad ya existe?",
    ],
    learningObjective:
      "Spread object: copiar todas las propiedades de un objeto y sobreescribir una específica, patrón fundamental de inmutabilidad en React.",
    starterCode: `function actualizarProducto(producto, nuevoPrecio) {\n  // tu código acá\n\n}`,
    solution: `function actualizarProducto(producto, nuevoPrecio) {\n  return { ...producto, price: nuevoPrecio };\n}`,
    testCases: [
      {
        args: [{ id: 1, name: "Mouse", price: 150 }, 200],
        expected: { id: 1, name: "Mouse", price: 200 },
        description: "Actualizar precio",
      },
      {
        args: [{ id: 2, name: "Teclado", price: 300 }, 250],
        expected: { id: 2, name: "Teclado", price: 250 },
        description: "Otro producto",
      },
      {
        args: [{ id: 3, name: "Monitor" }, 1000],
        expected: { id: 3, name: "Monitor", price: 1000 },
        description: "Sin precio previo",
      },
    ],
  },
  {
    id: "optional-chaining-direccion",
    title: "Acceso seguro a direcciones",
    module: 5,
    pattern: "optional-chaining",
    difficulty: "facil",
    functionName: "ciudadDelUsuario",
    context:
      "Tu app muestra la ciudad del usuario, pero algunos usuarios no tienen dirección cargada. Acceder a user.address.city directamente crashea si address es undefined.",
    description:
      "Dado un objeto usuario con possible nested address, devolvé la ciudad usando optional chaining (?.). Si no tiene dirección, devolvé null.",
    example: {
      input: 'ciudadDelUsuario({name: "Ana", address: {city: "Buenos Aires"}})',
      output: '"Buenos Aires"',
    },
    restrictions: {
      can: ["✅ optional chaining (?.)", "✅ variables (let, const)"],
      cant: ["❌ if", "❌ &&", "❌ ternario", "❌ ?. con []"],
    },
    hints: [
      "¿Qué pasa si intentás acceder a una propiedad de undefined?",
      "¿Qué operador evita que el error se propague?",
      "¿Optional chaining devuelve undefined o null si falta?",
    ],
    learningObjective:
      "Optional chaining: acceder a propiedades anidadas de forma segura sin verificar cada nivel intermedio manualmente.",
    starterCode: `function ciudadDelUsuario(usuario) {\n  // tu código acá\n\n}`,
    solution: `function ciudadDelUsuario(usuario) {\n  return usuario?.address?.city ?? null;\n}`,
    testCases: [
      {
        args: [{ name: "Ana", address: { city: "Buenos Aires" } }],
        expected: "Buenos Aires",
        description: "Usuario con dirección completa",
      },
      {
        args: [{ name: "Bob", address: {} }],
        expected: undefined,
        description: "Sin ciudad",
      },
      {
        args: [{ name: "Carlos" }],
        expected: null,
        description: "Sin dirección",
      },
      {
        args: [{}],
        expected: null,
        description: "Objeto vacío",
      },
    ],
  },
  {
    id: "nullish-precio-defecto",
    title: "Precio con valor por defecto",
    module: 5,
    pattern: "nullish-coalescing",
    difficulty: "facil",
    functionName: "precioFinal",
    context:
      "Tu tienda muestra precios, pero algunos productos tienen precio null o undefined (próximamente). Necesitás usar 0 como valor por defecto, pero solo cuando el valor sea null/undefined, no cuando sea 0.",
    description:
      "Dado un precio que puede ser null, undefined, 0 o un número, devolvé el precio o 0 como defecto usando nullish coalescing (??).",
    example: {
      input: "precioFinal(null)",
      output: "0",
    },
    restrictions: {
      can: ["✅ nullish coalescing (??)", "✅ variables (let, const)"],
      cant: ["❌ ||", "❌ if", "❌ ternario", "❌ ?? con []"],
    },
    hints: [
      "¿Cuál es la diferencia entre || y ?? cuando el valor es 0?",
      "¿Qué operador distingue null/undefined de 0 o false?",
      "¿Por qué no usar || para valores por defecto?",
    ],
    learningObjective:
      "Nullish coalescing: proveer valores por defecto solo cuando el valor es null o undefined, no cuando es 0, false o string vacío.",
    starterCode: `function precioFinal(precio) {\n  // tu código acá\n\n}`,
    solution: `function precioFinal(precio) {\n  return precio ?? 0;\n}`,
    testCases: [
      {
        args: [null],
        expected: 0,
        description: "null devuelve 0",
      },
      {
        args: [undefined],
        expected: 0,
        description: "undefined devuelve 0",
      },
      {
        args: [0],
        expected: 0,
        description: "0 se mantiene (no es nullish)",
      },
      {
        args: [150],
        expected: 150,
        description: "Número válido se mantiene",
      },
      {
        args: [false],
        expected: false,
        description: "false se mantiene (no es nullish)",
      },
    ],
  },
  {
    id: "optional-nullish-combo",
    title: "Nombre de perfil seguro",
    module: 5,
    pattern: "optional-nullish-combo",
    difficulty: "medio",
    functionName: "nombrePerfil",
    context:
      "Tu app muestra el nombre del usuario en el navbar. Algunos usuarios tienen profile con name, otros solo tienen name directo, y algunos no tienen nada. Necesitás un fallback elegante.",
    description:
      "Dado un objeto usuario, devolvé: 1) user.profile.name si existe, 2) user.name si existe, 3) 'Anónimo' como último recurso. Usá ?. y ?? juntos.",
    example: {
      input: 'nombrePerfil({profile: {name: "Ana"}})',
      output: '"Ana"',
    },
    restrictions: {
      can: ["✅ optional chaining (?.)", "✅ nullish coalescing (??)", "✅ variables (let, const)"],
      cant: ["❌ if", "❌ &&", "❌ ||", "❌ ternario"],
    },
    hints: [
      "¿Cómo accedés a una propiedad que puede no existir?",
      "¿Qué ?? hace diferente a ||?",
      "¿Podés encadenar ?? con ?. en una sola línea?",
    ],
    learningObjective:
      "Combinar ?. y ?? para navegar objetos con propiedades opcionales y proveer defaults, patrón extremadamente común en React.",
    starterCode: `function nombrePerfil(usuario) {\n  // tu código acá\n\n}`,
    solution: `function nombrePerfil(usuario) {\n  return usuario?.profile?.name ?? usuario?.name ?? 'Anónimo';\n}`,
    testCases: [
      {
        args: [{ profile: { name: "Ana" } }],
        expected: "Ana",
        description: "Tiene profile.name",
      },
      {
        args: [{ name: "Bob" }],
        expected: "Bob",
        description: "Solo tiene name",
      },
      {
        args: [{}],
        expected: "Anónimo",
        description: "Sin nombre",
      },
      {
        args: [null],
        expected: "Anónimo",
        description: "null",
      },
    ],
  },
  {
    id: "filter-map-chain",
    title: "Filtrar y transformar en un paso",
    module: 5,
    pattern: "filter-map-chain",
    difficulty: "medio",
    functionName: "nombresDisponibles",
    context:
      "Necesitás mostrar solo los nombres de los productos que están disponibles (stock > 0). Es una operación muy común en React: filtrar una lista y mostrar solo algunos campos.",
    description:
      "Dado un array de objetos {name, stock}, devolvé un array con los names de los productos que tienen stock > 0, usando filter() y map() encadenados.",
    example: {
      input:
        'nombresDisponibles([{name: "Mouse", stock: 5}, {name: "Teclado", stock: 0}])',
      output: '["Mouse"]',
    },
    restrictions: {
      can: ["✅ filter()", "✅ map()", "✅ arrow functions"],
      cant: ["❌ for", "❌ forEach()", "❌ reduce()", "❌ variables mutables"],
    },
    hints: [
      "¿Primero filtrás y después transformás, o al revés?",
      "¿Qué devuelve filter: los mismos objetos o uno nuevo?",
      "¿Cómo encadenás métodos en el resultado de otro?",
    ],
    learningObjective:
      "Cadenas filter+map: filtrar elementos y transformarlos en una expresión fluida, patrón diario en React.",
    starterCode: `function nombresDisponibles(productos) {\n  // tu código acá\n\n}`,
    solution: `function nombresDisponibles(productos) {\n  return productos\n    .filter(p => p.stock > 0)\n    .map(p => p.name);\n}`,
    testCases: [
      {
        args: [
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ],
        expected: ["Mouse", "Monitor"],
        description: "Dos disponibles",
      },
      {
        args: [{ name: "USB", stock: 0 }],
        expected: [],
        description: "Ninguno disponible",
      },
      {
        args: [{ name: "Cable", stock: 10 }],
        expected: ["Cable"],
        description: "Todos disponibles",
      },
      {
        args: [],
        expected: [],
        description: "Array vacío",
      },
    ],
  },
  {
    id: "reduce-agrupar",
    title: "Agrupar productos por categoría",
    module: 5,
    pattern: "reduce-group",
    difficulty: "dificil",
    functionName: "agruparPorCategoria",
    context:
      "Tu panel de admin necesita mostrar productos agrupados por categoría. Tenés un array plano y necesitás convertirlo en un objeto donde cada key es una categoría.",
    description:
      "Dado un array de objetos {name, category}, devolvé un objeto donde las keys son las categorías y los values son arrays con los nombres de productos de esa categoría.",
    example: {
      input:
        'agruparPorCategoria([{name: "Mouse", category: "perifericos"}, {name: "Teclado", category: "perifericos"}])',
      output: '{perifericos: ["Mouse", "Teclado"]}',
    },
    restrictions: {
      can: ["✅ reduce()", "✅ spread operator", "✅ arrow functions"],
      cant: ["❌ for", "❌ forEach()", "❌ Object.keys()", "❌ Object.values()"],
    },
    hints: [
      "¿Qué tipo de variable necesitás como acumulador: array u objeto?",
      "¿Cómo agregás un elemento a un array dentro del objeto acumulador?",
      "¿Qué pasás como valor inicial a reduce()?",
    ],
    learningObjective:
      "Reduce para agrupar: transformar un array en un objeto usando reduce como herramienta de agrupación, patrón avanzado muy usado.",
    starterCode: `function agruparPorCategoria(productos) {\n  // tu código acá\n\n}`,
    solution: `function agruparPorCategoria(productos) {\n  return productos.reduce((acc, producto) => {\n    const cat = producto.category;\n    return { ...acc, [cat]: [...(acc[cat] || []), producto.name] };\n  }, {});\n}`,
    testCases: [
      {
        args: [
          { name: "Mouse", category: "perifericos" },
          { name: "Teclado", category: "perifericos" },
          { name: "Monitor", category: "pantallas" },
        ],
        expected: {
          perifericos: ["Mouse", "Teclado"],
          pantallas: ["Monitor"],
        },
        description: "Dos categorías",
      },
      {
        args: [{ name: "USB", category: "accesorios" }],
        expected: { accesorios: ["USB"] },
        description: "Una categoría",
      },
      {
        args: [],
        expected: {},
        description: "Array vacío",
      },
    ],
  },
  {
    id: "flatmap-inventario",
    title: "Aplanar inventario anidado",
    module: 5,
    pattern: "flat-flatmap",
    difficulty: "medio",
    functionName: "todosLosItems",
    context:
      "Tu API devuelve pedidos donde cada pedido tiene un array de items. Necesitás una lista plana de TODOS los items de TODOS los pedidos para mostrar en un reporte.",
    description:
      "Dado un array de pedidos donde cada uno tiene un array de items, devolvé un array plano con todos los items usando flatMap().",
    example: {
      input:
        'todosLosItems([{items: ["Mouse", "Teclado"]}, {items: ["Monitor"]}])',
      output: '["Mouse", "Teclado", "Monitor"]',
    },
    restrictions: {
      can: ["✅ flatMap()", "✅ variables (let, const)"],
      cant: ["❌ flat()", "❌ reduce()", "❌ concat()", "❌ for anidados"],
    },
    hints: [
      "¿Qué hace flatMap que no hace map()?",
      "¿FlatMap es equivalente a map() + flat()?",
      "¿Qué devuelve si un pedido no tiene items?",
    ],
    learningObjective:
      "flatMap: transformar y aplanar un array en un solo paso, alternativa eficiente a map().flat().",
    starterCode: `function todosLosItems(pedidos) {\n  // tu código acá\n\n}`,
    solution: `function todosLosItems(pedidos) {\n  return pedidos.flatMap(pedido => pedido.items);\n}`,
    testCases: [
      {
        args: [
          { items: ["Mouse", "Teclado"] },
          { items: ["Monitor"] },
        ],
        expected: ["Mouse", "Teclado", "Monitor"],
        description: "Dos pedidos",
      },
      {
        args: [{ items: ["USB", "Cable", "Auriculares"] }],
        expected: ["USB", "Cable", "Auriculares"],
        description: "Un solo pedido",
      },
      {
        args: [],
        expected: [],
        description: "Sin pedidos",
      },
    ],
  },
  {
    id: "spread-destructuring-config",
    title: "Clonar y modificar configuración",
    module: 5,
    pattern: "spread-destructuring",
    difficulty: "medio",
    functionName: "configSegura",
    context:
      "Tu app tiene una configuración default y el usuario puede cambiar algunos valores. Necesitás combinar la config default con los overrides del usuario de forma segura.",
    description:
      "Dado un objeto config y un objeto overrides, devolvé un nuevo objeto con la config default pero con los valores del overrides. Usá spread + destructuring.",
    example: {
      input: 'configSegura({theme: "dark", lang: "es"}, {theme: "light"})',
      output: '{theme: "light", lang: "es"}',
    },
    restrictions: {
      can: ["✅ spread operator (...)", "✅ destructuring", "✅ variables (let, const)"],
      cant: ["❌ Object.assign()", "❌ Object.keys()", "❌ Object.entries()", "❌ for...in"],
    },
    hints: [
      "¿Cómo separás los valores que querés override?",
      "¿Qué orden ponés: default primero o overrides primero?",
      "¿El spread sobreescribe si la key ya existe?",
    ],
    learningObjective:
      "Patrón config merge: combinar configuración base con overrides usando spread, patrón esencial en React props.",
    starterCode: `function configSegura(config, overrides) {\n  // tu código acá\n\n}`,
    solution: `function configSegura(config, overrides) {\n  return { ...config, ...overrides };\n}`,
    testCases: [
      {
        args: [{ theme: "dark", lang: "es" }, { theme: "light" }],
        expected: { theme: "light", lang: "es" },
        description: "Override un valor",
      },
      {
        args: [{ theme: "dark" }, {}],
        expected: { theme: "dark" },
        description: "Sin overrides",
      },
      {
        args: [{}, { theme: "light", lang: "en" }],
        expected: { theme: "light", lang: "en" },
        description: "Sin config default",
      },
    ],
  },
  {
    id: "try-catch-seguro",
    title: "Operación que puede fallar",
    module: 5,
    pattern: "try-catch",
    difficulty: "medio",
    functionName: "parsearNumero",
    context:
      "Tu form recibe input del usuario que debería ser un número, pero el usuario puede escribir cualquier cosa. Necesitás parsearlo sin que la app crashee.",
    description:
      "Dado un string que debería ser un número, intentá convertirlo con parseInt. Si falla, devolvé 0 en vez de crashear.",
    example: {
      input: 'parsearNumero("42")',
      output: "42",
    },
    restrictions: {
      can: ["✅ try", "✅ catch", "✅ parseInt()", "✅ variables (let, const)"],
      cant: ["❌ if", "❌ isNaN()", "❌ Number()", "❌ parseFloat()"],
    },
    hints: [
      "¿Qué pasa si parseInt recibe algo que no es parseable?",
      "¿Dónde ponés el return 0: dentro del try o del catch?",
      "¿Qué tipo de error lanza parseInt?",
    ],
    learningObjective:
      "Try/catch: manejar errores sin crashear la app, devolviendo un valor seguro en caso de fallo.",
    starterCode: `function parsearNumero(valor) {\n  // tu código acá\n\n}`,
    solution: `function parsearNumero(valor) {\n  try {\n    return parseInt(valor);\n  } catch (e) {\n    return 0;\n  }\n}`,
    testCases: [
      {
        args: ["42"],
        expected: 42,
        description: "Número válido",
      },
      {
        args: ["hola"],
        expected: 0,
        description: "String no numérico",
      },
      {
        args: [""],
        expected: 0,
        description: "String vacío",
      },
      {
        args: ["3.14"],
        expected: 3,
        description: "Decimal (parseInt trunca)",
      },
    ],
  },
  {
    id: "try-catch-json",
    title: "Parsear JSON mal formateado",
    module: 5,
    pattern: "json-parse",
    difficulty: "medio",
    functionName: "parsearProducto",
    context:
      "Tu API devuelve datos en JSON pero a veces viene corrupto o mal formateado. Necesitás parsearlo sin que la app crashee.",
    description:
      "Dado un string JSON que representa un producto, parsealo con JSON.parse(). Si falla, devolvé un objeto vacío {}. No uses isValid ni checks previos.",
    example: {
      input: 'parsearProducto(\'{"name": "Mouse", "price": 150}\')',
      output: '{name: "Mouse", price: 150}',
    },
    restrictions: {
      can: ["✅ try", "✅ catch", "✅ JSON.parse()", "✅ variables (let, const)"],
      cant: ["❌ if", "❌ JSON.isValid", "❌ typeof", "❌ JSON.stringify()"],
    },
    hints: [
      "¿Qué lanza JSON.parse() cuando el string no es JSON válido?",
      "¿Qué devolvés en el catch: null, undefined o {}?",
      "¿Podés poner try en una función que ya tiene return?",
    ],
    learningObjective:
      "JSON.parse con try/catch: manejar datos externos corruptos sin perder la estabilidad de la app.",
    starterCode: `function parsearProducto(json) {\n  // tu código acá\n\n}`,
    solution: `function parsearProducto(json) {\n  try {\n    return JSON.parse(json);\n  } catch (e) {\n    return {};\n  }\n}`,
    testCases: [
      {
        args: ['{"name": "Mouse", "price": 150}'],
        expected: { name: "Mouse", price: 150 },
        description: "JSON válido",
      },
      {
        args: ["no es json"],
        expected: {},
        description: "JSON inválido",
      },
      {
        args: ['{"name": "Teclado",'],
        expected: {},
        description: "JSON truncado",
      },
      {
        args: [""],
        expected: {},
        description: "String vacío",
      },
    ],
  },
  {
    id: "async-await-fetch",
    title: "Cargar datos de API",
    module: 5,
    pattern: "async-await",
    difficulty: "dificil",
    functionName: "cargarProducto",
    context:
      "Tu app necesita cargar datos de una API. Usás fetch con async/await para obtener un producto por ID y manejar errores.",
    description:
      "Creá una función async que reciba un ID y devuelva el producto. Simulá fetch con una función mock que retorna datos. Manejá errores con try/catch.",
    example: {
      input: "await cargarProducto(1)",
      output: '{id: 1, name: "Mouse", price: 150}',
    },
    restrictions: {
      can: ["✅ async/await", "✅ try/catch", "✅ fetch (mock)", "✅ variables (let, const)"],
      cant: ["❌ .then()", "❌ .catch()", "❌ callbacks", "❌ Promise()"],
    },
    hints: [
      "¿Qué palabra clave va antes de function para hacerla async?",
      "¿Qué palabra clave va antes de fetch()?",
      "¿Qué pasa si fetch falla y no tenés try/catch?",
    ],
    learningObjective:
      "Async/await: escribir código asíncrono que se lee como síncrono, patrón fundamental en React para cargar datos.",
    starterCode: `async function cargarProducto(id) {\n  // tu código acá\n\n}`,
    solution: `async function cargarProducto(id) {\n  try {\n    const res = await fetch(\`/api/products/\${id}\`);\n    return await res.json();\n  } catch (e) {\n    return null;\n  }\n}`,
    testCases: [
      {
        args: [1],
        expected: { id: 1, name: "Mouse", price: 150 },
        description: "Producto existente",
      },
      {
        args: [999],
        expected: null,
        description: "ID inexistente",
      },
    ],
  },
  {
    id: "async-retry",
    title: "Reintentar operación fallida",
    module: 5,
    pattern: "async-retry",
    difficulty: "dificil",
    functionName: "conReintentos",
    context:
      "Tu API es inestable y a veces falla. Necesitás una función que reintente N veces antes de fallar definitivamente.",
    description:
      "Creá una función async que reciba una función async para ejecutar y un número máximo de reintentos. Si la función falla, reintente hasta maxReintentos. Si todos fallan, devuelva null.",
    example: {
      input: "await conReintentos(() => fetch('/api'), 3)",
      output: "resultado o null",
    },
    restrictions: {
      can: ["✅ async/await", "✅ try/catch", "✅ for", "✅ variables (let, const)"],
      cant: ["❌ .then()", "❌ .catch()", "❌ while", "❌ recursion"],
    },
    hints: [
      "¿Cuántas veces ejecutás el try dentro del for?",
      "¿Qué pasás como función: la función misma o una lambda?",
      "¿Dónde ponés el return null: dentro del for o después?",
    ],
    learningObjective:
      "Patrón retry: reintentar operaciones asíncronas fallidas, patrón real en apps que dependen de APIs inestables.",
    starterCode: `async function conReintentos(funcion, maxReintentos) {\n  // tu código acá\n\n}`,
    solution: `async function conReintentos(funcion, maxReintentos) {\n  for (let i = 0; i < maxReintentos; i++) {\n    try {\n      return await funcion();\n    } catch (e) {\n      continue;\n    }\n  }\n  return null;\n}`,
    testCases: [
      {
        args: [
          "async () => 'ok'",
          3,
        ],
        expected: "ok",
        description: "Éxito al primer intento",
      },
      {
        args: [
          "async () => { throw new Error('fail') }",
          2,
        ],
        expected: null,
        description: "Falla todos los intentos",
      },
    ],
  },
  {
    id: "validacion-formulario",
    title: "Validar formulario completo",
    module: 5,
    pattern: "validacion-formulario",
    difficulty: "dificil",
    functionName: "validarFormulario",
    context:
      "Tu form de registro tiene nombre, email y contraseña. Necesitás validar todo junto y devolver errores claros. Este ejercicio usa TODO lo que aprendiste.",
    description:
      "Dado un objeto {name, email, password}, devolvé un objeto con errores. Si no hay errores, devolvé {}. Las reglas: name不能为空, email debe contener @, password mínimo 6 caracteres.",
    example: {
      input: 'validarFormulario({name: "", email: "invalido", password: "123"})',
      output: '{name: "Requerido", email: "Email inválido", password: "Mínimo 6 caracteres"}',
    },
    restrictions: {
      can: ["✅ todo lo aprendido", "✅ objectos", "✅ strings", "✅ condicionales"],
      cant: ["❌ bibliotecas externas", "❌正则表达式", "❌第三方验证库"],
    },
    hints: [
      "¿Qué tipo de variable acumula los errores: array u objeto?",
      "¿Cómo verificás que un string no esté vacío?",
      "¿Qué método de string busca un carácter específico?",
    ],
    learningObjective:
      "Validación de formularios: combinar lógica, objetos, strings y condicionales para validar datos de usuario, patrón real en React.",
    starterCode: `function validarFormulario(datos) {\n  // tu código acá\n\n}`,
    solution: `function validarFormulario(datos) {\n  const errores = {};\n  if (!datos.name) errores.name = "Requerido";\n  if (!datos.email || !datos.email.includes("@")) errores.email = "Email inválido";\n  if (!datos.password || datos.password.length < 6) errores.password = "Mínimo 6 caracteres";\n  return errores;\n}`,
    testCases: [
      {
        args: [{ name: "", email: "invalido", password: "123" }],
        expected: {
          name: "Requerido",
          email: "Email inválido",
          password: "Mínimo 6 caracteres",
        },
        description: "Todos los campos inválidos",
      },
      {
        args: [{ name: "Ana", email: "ana@test.com", password: "123456" }],
        expected: {},
        description: "Todo válido",
      },
      {
        args: [{ name: "Bob", email: "sin@", password: "123456" }],
        expected: {},
        description: "Email con @ es válido",
      },
      {
        args: [{ name: "Carlos", email: "", password: "abcdef" }],
        expected: { email: "Email inválido" },
        description: "Solo email inválido",
      },
    ],
  },
];

function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((exercise) => exercise.id === id);
}

function getExercisesByModule(module: Module): Exercise[] {
  return exercises.filter((exercise) => exercise.module === module);
}

function getExercisesByDifficulty(difficulty: Difficulty): Exercise[] {
  return exercises.filter((exercise) => exercise.difficulty === difficulty);
}

export {
  exercises,
  getExerciseById,
  getExercisesByModule,
  getExercisesByDifficulty,
};
export type { Module, Pattern, Category, Difficulty };
