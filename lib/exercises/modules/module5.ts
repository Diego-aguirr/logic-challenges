import type { Exercise } from "../types";

// =============================================
// MÓDULO 5 — JAVASCRIPT MODERNO (15 ejercicios)
// =============================================
export const module5: Exercise[] = [
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
        expected: null,
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
        args: [[
          { name: "Mouse", stock: 5 },
          { name: "Teclado", stock: 0 },
          { name: "Monitor", stock: 3 },
        ]],
        expected: ["Mouse", "Monitor"],
        description: "Dos disponibles",
      },
      {
        args: [[{ name: "USB", stock: 0 }]],
        expected: [],
        description: "Ninguno disponible",
      },
      {
        args: [[{ name: "Cable", stock: 10 }]],
        expected: ["Cable"],
        description: "Todos disponibles",
      },
      {
        args: [[]],
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
        args: [[
          { name: "Mouse", category: "perifericos" },
          { name: "Teclado", category: "perifericos" },
          { name: "Monitor", category: "pantallas" },
        ]],
        expected: {
          perifericos: ["Mouse", "Teclado"],
          pantallas: ["Monitor"],
        },
        description: "Dos categorías",
      },
      {
        args: [[{ name: "USB", category: "accesorios" }]],
        expected: { accesorios: ["USB"] },
        description: "Una categoría",
      },
      {
        args: [[]],
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
        args: [[
          { items: ["Mouse", "Teclado"] },
          { items: ["Monitor"] },
        ]],
        expected: ["Mouse", "Teclado", "Monitor"],
        description: "Dos pedidos",
      },
      {
        args: [[{ items: ["USB", "Cable", "Auriculares"] }]],
        expected: ["USB", "Cable", "Auriculares"],
        description: "Un solo pedido",
      },
      {
        args: [[]],
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
    solution: `function parsearNumero(valor) {\n  try {\n    const result = parseInt(valor);\n    return result !== result ? 0 : result;\n  } catch (e) {\n    return 0;\n  }\n}`,
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
    solution: `async function cargarProducto(id) {
  // Mock fetch function for testing
  const mockFetch = async (url) => {
    const products = {
      1: { id: 1, name: "Mouse", price: 150 },
      2: { id: 2, name: "Teclado", price: 300 },
    };
    const id = parseInt(url.split('/').pop());
    if (products[id]) {
      return { json: async () => products[id] };
    }
    throw new Error('Not found');
  };
  
  try {
    const res = await mockFetch(\`/api/products/\${id}\`);
    return await res.json();
  } catch (e) {
    return null;
  }
}`,
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
    solution: `async function conReintentos(funcion, maxReintentos) {
  for (let i = 0; i < maxReintentos; i++) {
    try {
      return await funcion();
    } catch (e) {
      continue;
    }
  }
  return null;
}`,
    testCases: [
      {
        args: [
          async () => "ok",
          3,
        ],
        expected: "ok",
        description: "Éxito al primer intento",
      },
      {
        args: [
          async () => {
            throw new Error("fail");
          },
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
      "Dado un objeto {name, email, password}, devolvé un objeto con errores. Si no hay errores, devolvé {}. Las reglas: name no puede estar vacío, email debe contener @, password mínimo 6 caracteres.",
    example: {
      input: 'validarFormulario({name: "", email: "invalido", password: "123"})',
      output: '{name: "Requerido", email: "Email inválido", password: "Mínimo 6 caracteres"}',
    },
    restrictions: {
      can: ["✅ todo lo aprendido", "✅ objectos", "✅ strings", "✅ condicionales"],
      cant: ["❌ bibliotecas externas", "❌ expresiones regulares", "❌ librerías de terceros"],
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
