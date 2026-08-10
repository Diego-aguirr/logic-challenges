import type { Exercise } from "../types";

// =============================================
// MÓDULO 3 — OBJETOS (7 ejercicios)
// =============================================
export const module3: Exercise[] = [
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
        args: [[
          { name: "Mouse", price: 150, quantity: 1 },
          { name: "Monitor", price: 3000, quantity: 1 },
          { name: "Teclado", price: 800, quantity: 2 },
        ]],
        expected: [
          { name: "Monitor", price: 3000, quantity: 1 },
          { name: "Teclado", price: 800, quantity: 2 },
        ],
        description: "Dos ítems caros",
      },
      {
        args: [[{ name: "Cable", price: 50, quantity: 3 }]],
        expected: [],
        description: "Ninguno caro",
      },
      {
        args: [[]],
        expected: [],
        description: "Carrito vacío",
      },
      {
        args: [[{ name: "Laptop", price: 5000, quantity: 1 }]],
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
];
