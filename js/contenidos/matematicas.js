/* =========================================================
   MATEMÁTICAS · Contenidos por grado
   Basado en los Estándares Básicos de Competencias y DBA (MEN).
   Muchos juegos usan "generador": los ejercicios cambian cada vez.
   ========================================================= */
AJ.materia({
  id: 'matematicas',
  nombre: 'Matemáticas',
  color: '#1c7ed6',
  icono: '🔢',
  descripcion: 'Números, operaciones, figuras y problemas.',
  temas: {
    1: 'Contar, números hasta 100, sumas y restas sencillas, figuras planas',
    2: 'Números hasta 1.000, valor posicional, sumas y restas llevando, series, la hora',
    3: 'Tablas de multiplicar, división exacta, mitad/tercio/cuarto, perímetro y medidas',
    4: 'Operaciones combinadas, fracciones equivalentes, área, ángulos y problemas',
    5: 'Fracciones, decimales, porcentajes, promedio y problemas de varios pasos'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'operaciones', titulo: 'Cuenta los objetos', icono: '🍎', descripcion: 'Cuenta los dibujos y escribe cuántos hay.', aprende: 'Contar objetos hasta 12',
        datos: { generador: 'contar', cantidad: 8 } },
      { tipo: 'tienda', titulo: 'La tienda escolar', icono: '🛒', descripcion: 'Compra en la tienda y suma los precios.', aprende: 'Sumar precios con centenas ($100, $200…)',
        datos: { rondas: 4 } },
      { tipo: 'operaciones', titulo: 'Sumas y restas hasta 20', icono: '➕', descripcion: 'Resuelve sumas y restas sencillas.', aprende: 'Sumar y restar números hasta 20',
        datos: { generador: 'sumaResta1', cantidad: 10 } },
      { tipo: 'memoria', titulo: 'Memoria numérica', icono: '🃏', descripcion: 'Une cada grupo de dibujos con su número.', aprende: 'Relacionar cantidad y número',
        datos: { cantidad: 6, pares: ['⭐⭐⭐ | 3', '🐟🐟🐟🐟🐟 | 5', '🎈🎈 | 2', '🌸🌸🌸🌸🌸🌸🌸 | 7', '🚗🚗🚗🚗 | 4', '🐞🐞🐞🐞🐞🐞 | 6', '🍓🍓🍓🍓🍓🍓🍓🍓 | 8', '⚽ | 1', '🐥🐥🐥🐥🐥🐥🐥🐥🐥 | 9'] } },
      { tipo: 'ordenar', titulo: 'Ordena los números', icono: '🔢', descripcion: 'Pon los números de menor a mayor.', aprende: 'Comparar y ordenar números hasta 100',
        datos: { secuencias: [
          { titulo: 'De menor a mayor', items: ['3', '8', '12', '15', '20'], explica: '3 es el más pequeño y 20 el más grande.' },
          { titulo: 'De menor a mayor', items: ['19', '24', '42', '57', '75'], explica: 'Mira primero las decenas: 1, 2, 4, 5, 7.' },
          { titulo: 'De menor a mayor', items: ['30', '36', '63', '66', '90'], explica: '36 tiene 3 decenas y 63 tiene 6 decenas, por eso 36 es menor.' },
          { titulo: 'Cuenta de 10 en 10', items: ['10', '20', '30', '40', '50', '60'], explica: 'Cada número tiene una decena más: 10, 20, 30…' },
          { titulo: 'De mayor a menor', items: ['89', '71', '54', '45', '18'], explica: 'De mayor a menor: empezamos por el que tiene más decenas.' }
        ] } },
      { tipo: 'seleccion', titulo: '¿Cuál es mayor?', icono: '🐊', descripcion: 'Elige el número mayor o menor.', aprende: 'Comparar números: mayor, menor, igual',
        datos: { preguntas: [
          '¿Cuál número es MAYOR? | 45 | 38 | 29 || 45 tiene 4 decenas; 38 solo tiene 3.',
          '¿Cuál número es MENOR? | 16 | 61 | 26 || 16 tiene 1 decena, es el menor.',
          '¿Cuál número es MAYOR? | 72 | 27 | 70 || 72 tiene 7 decenas y 2 unidades, más que 70.',
          '🍎🍎🍎🍎 y 🍎🍎🍎🍎🍎🍎 :: ¿Qué grupo tiene MÁS manzanas? | El de 6 | El de 4 | Son iguales || 6 es mayor que 4.',
          '¿Qué número está entre 49 y 51? | 50 | 48 | 52 || Contamos: 49, 50, 51.',
          '¿Cuál número es MENOR? | 9 | 19 | 90 || 9 no tiene decenas, solo 9 unidades.',
          '¿Cuál es el número más grande de dos cifras? | 99 | 90 | 100 || 99 es el mayor con dos cifras; 100 ya tiene tres.',
          '⚽⚽⚽ y ⚽⚽⚽ :: ¿Cómo son los grupos? | Iguales | El primero es mayor | El segundo es mayor || Ambos tienen 3 balones.'
        ] } },
      { tipo: 'laberinto', titulo: 'Laberinto: amigos del 10', icono: '🐰', descripcion: 'Avanza pisando sumas que dan 10.', aprende: 'Parejas de números que suman 10',
        datos: { regla: 'Pisa solo las sumas que dan 10',
          correctos: ['5 + 5', '7 + 3', '6 + 4', '8 + 2', '9 + 1', '10 + 0', '4 + 6', '3 + 7', '2 + 8', '1 + 9'],
          incorrectos: ['5 + 4 | 5 + 4 = 9, no da 10', '6 + 3 | 6 + 3 = 9', '7 + 4 | 7 + 4 = 11', '8 + 3 | 8 + 3 = 11', '2 + 6 | 2 + 6 = 8', '9 + 2 | 9 + 2 = 11', '4 + 4 | 4 + 4 = 8', '3 + 5 | 3 + 5 = 8', '6 + 6 | 6 + 6 = 12', '1 + 7 | 1 + 7 = 8'] } },
      { tipo: 'ruleta', titulo: 'Ruleta matemática', icono: '🎡', descripcion: 'Gira y responde retos de números.', aprende: 'Sumar, restar, decenas y vecinos de un número',
        datos: { rondas: 8, secciones: { 'Sumas': { generador: 'suma1' }, 'Restas': { generador: 'resta1' }, 'Antes y después': { generador: 'vecinos1' }, 'Decenas': { generador: 'decenas1' } } } },
      { tipo: 'identificar', titulo: 'Figuras geométricas', icono: '🔺', descripcion: 'Toca la figura que se nombra.', aprende: 'Reconocer círculo, cuadrado, triángulo y rectángulo',
        datos: { dibujo: 'figuras', partes: ['circulo | Círculo | Es redondo, no tiene lados ni esquinas', 'cuadrado | Cuadrado | Tiene 4 lados iguales', 'triangulo | Triángulo | Tiene 3 lados y 3 esquinas', 'rectangulo | Rectángulo | Tiene 4 lados: 2 largos y 2 cortos'] } },
      { tipo: 'seleccion', titulo: 'Problemas de la vida diaria', icono: '🧒', descripcion: 'Lee y resuelve pequeños problemas.', aprende: 'Resolver problemas de juntar y quitar',
        datos: { generador: 'problemas1', cantidad: 6 } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'operaciones', titulo: 'Completa la operación', icono: '✍️', descripcion: 'Sumas llevando y restas prestando.', aprende: 'Sumar y restar con números hasta 1.000',
        datos: { generador: 'sumaResta2', cantidad: 8 } },
      { tipo: 'tienda', titulo: 'La tienda escolar', icono: '🛒', descripcion: 'Suma los precios y calcula tus vueltas.', aprende: 'Sumar precios y calcular vueltas',
        datos: { rondas: 4 } },
      { tipo: 'operaciones', titulo: 'Centenas, decenas y unidades', icono: '🧱', descripcion: 'Arma el número con su valor posicional.', aprende: 'Valor posicional hasta 999',
        datos: { generador: 'posicional2', cantidad: 8 } },
      { tipo: 'seleccion', titulo: 'Series numéricas', icono: '🔁', descripcion: 'Descubre qué número sigue.', aprende: 'Series de 2 en 2, 3 en 3, 5 en 5, 10 en 10 y 100 en 100',
        datos: { generador: 'serie2', cantidad: 8, sinIgual: true } },
      { tipo: 'clasificar', titulo: 'Pares e impares', icono: '⚖️', descripcion: 'Separa los números pares de los impares.', aprende: 'Reconocer números pares e impares',
        datos: { categorias: ['Pares', 'Impares'], elementos: ['14 | 0 || Termina en 4: es par', '23 | 1 || Termina en 3: es impar', '8 | 0 || 8 se reparte en 2 grupos iguales de 4', '37 | 1 || Termina en 7: es impar', '50 | 0 || Termina en 0: es par', '61 | 1 || Termina en 1: es impar', '96 | 0 || Termina en 6: es par', '15 | 1 || Termina en 5: es impar', '42 | 0 || Termina en 2: es par', '79 | 1 || Termina en 9: es impar'] } },
      { tipo: 'relacionar', titulo: '¿Qué hora es?', icono: '🕒', descripcion: 'Une cada reloj con la hora que marca.', aprende: 'Leer la hora en punto y la media hora',
        datos: { porRonda: 4, pares: ['🕐 | 1:00 (la una en punto)', '🕒 | 3:00 (las tres en punto)', '🕕 | 6:00 (las seis en punto)', '🕘 | 9:00 (las nueve en punto)', '🕜 | 1:30 (la una y media)', '🕟 | 4:30 (las cuatro y media)', '🕢 | 7:30 (las siete y media)', '🕛 | 12:00 (las doce en punto)'] } },
      { tipo: 'ruleta', titulo: 'Ruleta matemática', icono: '🎡', descripcion: 'Gira y resuelve el reto que salga.', aprende: 'Sumas, restas, series y suma repetida',
        datos: { rondas: 8, secciones: { 'Sumas': { generador: 'suma2' }, 'Restas': { generador: 'resta2' }, 'Series': { generador: 'serie2' }, 'Suma repetida': { generador: 'sumaRepetida2' } } } },
      { tipo: 'laberinto', titulo: 'Laberinto de los pares', icono: '🐰', descripcion: 'Llega a la meta pisando números pares.', aprende: 'Números pares (terminan en 0, 2, 4, 6, 8)',
        datos: { regla: 'Pisa solo los números PARES',
          correctos: ['12', '24', '36', '48', '50', '62', '74', '86', '98', '100', '210', '332'],
          incorrectos: ['13 | 13 termina en 3: es impar', '25 | 25 termina en 5: es impar', '37 | 37 termina en 7: es impar', '41 | 41 termina en 1: es impar', '59 | 59 termina en 9: es impar', '63 | 63 es impar', '77 | 77 es impar', '85 | 85 es impar', '99 | 99 es impar', '101 | 101 termina en 1: es impar'] } },
      { tipo: 'seleccion', titulo: 'Problemas para pensar', icono: '🧠', descripcion: 'Resuelve problemas de sumas y restas.', aprende: 'Resolver problemas con números hasta 1.000',
        datos: { generador: 'problemas2', cantidad: 6 } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'operaciones', titulo: 'Tablas de multiplicar', icono: '✖️', descripcion: 'Practica las tablas del 2 al 10.', aprende: 'Tablas de multiplicar del 2 al 10',
        datos: { generador: 'mult3', cantidad: 10 } },
      { tipo: 'memoria', titulo: 'Memoria de las tablas', icono: '🃏', descripcion: 'Une cada multiplicación con su resultado.', aprende: 'Memorizar productos de las tablas',
        datos: { cantidad: 6, pares: ['6 × 7 | 42', '8 × 4 | 32', '9 × 3 | 27', '7 × 7 | 49', '5 × 8 | 40', '6 × 9 | 54', '3 × 4 | 12', '8 × 8 | 64', '7 × 9 | 63', '4 × 6 | 24'] } },
      { tipo: 'operaciones', titulo: 'Divisiones exactas', icono: '➗', descripcion: 'Reparte en partes iguales.', aprende: 'División como reparto (usando las tablas)',
        datos: { generador: 'div3', cantidad: 8 } },
      { tipo: 'tienda', titulo: 'La tienda escolar', icono: '🛒', descripcion: 'Compra varios productos iguales y calcula vueltas.', aprende: 'Multiplicar precios y restar para dar vueltas',
        datos: { rondas: 4 } },
      { tipo: 'seleccion', titulo: 'Mitad, tercio y cuarto', icono: '🍕', descripcion: 'Calcula partes de una cantidad.', aprende: 'Fracciones sencillas de una cantidad',
        datos: { generador: 'fraccionSimple3', cantidad: 8, sinIgual: true } },
      { tipo: 'laberinto', titulo: 'Laberinto de la tabla del 3', icono: '🐰', descripcion: 'Avanza pisando múltiplos de 3.', aprende: 'Múltiplos de 3 (la tabla del 3)',
        datos: { regla: 'Pisa solo los números de la tabla del 3',
          correctos: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30'],
          incorrectos: ['10 | 10 no está en la tabla del 3', '14 | 3 × 4 = 12 y 3 × 5 = 15: el 14 no está', '20 | 20 no está en la tabla del 3', '8 | 8 no está en la tabla del 3', '16 | 16 no está en la tabla del 3', '25 | 25 está en la tabla del 5, no del 3', '11 | 11 no está', '22 | 22 no está en la tabla del 3', '13 | 13 no está', '26 | 26 no está'] } },
      { tipo: 'clasificar', titulo: '¿Con qué se mide?', icono: '📏', descripcion: 'Clasifica según la unidad de medida.', aprende: 'Unidades de longitud, masa y capacidad',
        datos: { categorias: ['Longitud (m, cm)', 'Masa (kg, g)', 'Capacidad (litros)'], elementos: [
          '📏 El largo de un lápiz | 0 || La longitud se mide en centímetros', '🚪 La altura de una puerta | 0 || Se mide en metros', '🛣️ La distancia a la escuela | 0 || Se mide en metros o kilómetros',
          '🍉 El peso de una sandía | 1 || El peso (masa) se mide en kilogramos', '🐶 El peso de un perro | 1 || Se mide en kilogramos', '🍬 El peso de un dulce | 1 || Se mide en gramos',
          '🥛 La leche de una caja | 2 || Los líquidos se miden en litros', '🛁 El agua de una tina | 2 || Se mide en litros', '🧃 Un jugo | 2 || Se mide en litros o mililitros'] } },
      { tipo: 'ruleta', titulo: 'Ruleta de retos', icono: '🎡', descripcion: 'Tablas, divisiones, perímetros y problemas.', aprende: 'Multiplicación, división y perímetro',
        datos: { rondas: 8, secciones: { 'Tablas': { generador: 'mult3' }, 'Divisiones': { generador: 'div3' }, 'Perímetro': { generador: 'perimetro3' }, 'Problemas': { generador: 'problemas3' } } } },
      { tipo: 'seleccion', titulo: 'Problemas de multiplicar y repartir', icono: '🧠', descripcion: 'Lee con cuidado y resuelve.', aprende: 'Problemas de multiplicación y división',
        datos: { generador: 'problemas3', cantidad: 6 } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'operaciones', titulo: 'Operaciones combinadas', icono: '🧮', descripcion: 'Primero × y ÷, después + y −.', aprende: 'Orden de las operaciones y uso del paréntesis',
        datos: { generador: 'combinadas4', cantidad: 8 } },
      { tipo: 'tienda', titulo: 'La tienda escolar', icono: '🛒', descripcion: 'Compra varios productos y calcula el total y las vueltas.', aprende: 'Problemas con dinero en varios pasos',
        datos: { rondas: 4 } },
      { tipo: 'seleccion', titulo: 'Fracción de una cantidad', icono: '🍫', descripcion: 'Calcula 3/4 de 20, 2/5 de 30…', aprende: 'Calcular la fracción de una cantidad',
        datos: { generador: 'fraccionDe4', cantidad: 8 } },
      { tipo: 'memoria', titulo: 'Fracciones equivalentes', icono: '🃏', descripcion: 'Une fracciones que valen lo mismo.', aprende: 'Fracciones equivalentes',
        datos: { cantidad: 6, pares: ['1/2 | 2/4', '1/3 | 2/6', '3/4 | 6/8', '2/5 | 4/10', '1/4 | 3/12', '2/3 | 8/12', '3/5 | 9/15'] } },
      { tipo: 'operaciones', titulo: 'Completa la fracción equivalente', icono: '🟰', descripcion: 'Encuentra el numerador que falta.', aprende: 'Amplificar fracciones',
        datos: { generador: 'equivalente4', cantidad: 8 } },
      { tipo: 'clasificar', titulo: 'Clasifica los ángulos', icono: '📐', descripcion: 'Agudos, rectos y obtusos.', aprende: 'Tipos de ángulos según su medida',
        datos: { categorias: ['Agudo (menos de 90°)', 'Recto (90°)', 'Obtuso (más de 90°)'], elementos: [
          '30° | 0 || 30° es menor que 90°', '45° | 0 || 45° es menor que 90°', '75° | 0 || 75° es menor que 90°', '90° | 1 || Exactamente 90°: ángulo recto',
          '📐 Esquina de un cuaderno | 1 || Las esquinas de un cuaderno forman 90°', '120° | 2 || 120° es mayor que 90°', '150° | 2 || 150° es mayor que 90°', '100° | 2 || 100° es mayor que 90°', '60° | 0 || 60° es menor que 90°'] } },
      { tipo: 'ordenar', titulo: 'Ordena las fracciones', icono: '🍰', descripcion: 'Ordena de menor a mayor.', aprende: 'Comparar fracciones',
        datos: { secuencias: [
          { titulo: 'De menor a mayor (mismo denominador)', items: ['1/8', '3/8', '5/8', '7/8'], explica: 'Con el mismo denominador, es mayor la que tiene mayor numerador.' },
          { titulo: 'De menor a mayor (mismo numerador)', items: ['1/10', '1/6', '1/4', '1/2'], explica: 'Con numerador 1, entre más partes se divide la unidad, más pequeño es cada pedazo.' },
          { titulo: 'De menor a mayor', items: ['1/4', '1/2', '3/4', '1'], explica: '1/4 < 2/4 (=1/2) < 3/4 < 4/4 (=1).' },
          { titulo: 'De menor a mayor', items: ['2/9', '4/9', '7/9', '9/9'], explica: '9/9 es igual a una unidad completa.' }
        ] } },
      { tipo: 'operaciones', titulo: 'Área del rectángulo', icono: '⬛', descripcion: 'Multiplica base por altura.', aprende: 'Calcular el área de rectángulos',
        datos: { generador: 'area4', cantidad: 6 } },
      { tipo: 'laberinto', titulo: 'Laberinto de múltiplos de 4', icono: '🐰', descripcion: 'Pisa solo números de la tabla del 4.', aprende: 'Múltiplos de un número',
        datos: { regla: 'Pisa solo los MÚLTIPLOS DE 4',
          correctos: ['8', '12', '16', '20', '24', '28', '32', '36', '40', '44', '48'],
          incorrectos: ['10 | 10 ÷ 4 no es exacto', '14 | 14 ÷ 4 no es exacto', '18 | 18 ÷ 4 no es exacto', '22 | 22 no es múltiplo de 4', '26 | 26 no es múltiplo de 4', '30 | 30 ÷ 4 no es exacto', '34 | 34 no es múltiplo de 4', '38 | 38 no es múltiplo de 4', '42 | 42 no es múltiplo de 4', '15 | 15 es impar'] } },
      { tipo: 'seleccion', titulo: 'Problemas de varios pasos', icono: '🧠', descripcion: 'Problemas con dinero, fracciones y más.', aprende: 'Resolver problemas en dos pasos',
        datos: { generador: 'problemas4', cantidad: 6 } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'operaciones', titulo: 'Suma y resta de decimales', icono: '🔟', descripcion: 'Opera con números decimales.', aprende: 'Sumar y restar decimales alineando la coma',
        datos: { generador: 'decimales5', cantidad: 8 } },
      { tipo: 'operaciones', titulo: 'Suma de fracciones', icono: '➕', descripcion: 'Suma fracciones homogéneas y heterogéneas.', aprende: 'Sumar fracciones',
        datos: { generador: 'sumaFracciones5', cantidad: 8 } },
      { tipo: 'tienda', titulo: 'La tienda con descuentos', icono: '🏷️', descripcion: 'Calcula precios con descuento.', aprende: 'Porcentajes y descuentos en compras',
        datos: { rondas: 3 } },
      { tipo: 'operaciones', titulo: 'Calcula el porcentaje', icono: '％', descripcion: '10%, 25%, 50%, 75% de una cantidad.', aprende: 'Calcular porcentajes',
        datos: { generador: 'porcentaje5', cantidad: 8 } },
      { tipo: 'memoria', titulo: 'Fracción, decimal y porcentaje', icono: '🃏', descripcion: 'Une las formas de escribir la misma cantidad.', aprende: 'Equivalencia entre fracción, decimal y porcentaje',
        datos: { cantidad: 6, pares: ['1/2 | 50%', '1/4 | 0,25', '3/4 | 75%', '1/10 | 0,1', '1/5 | 20%', '3/10 | 0,3', '2/5 | 0,4', '0,9 | 90%'] } },
      { tipo: 'ordenar', titulo: 'Ordena los decimales', icono: '📊', descripcion: 'De menor a mayor.', aprende: 'Comparar números decimales',
        datos: { secuencias: [
          { titulo: 'De menor a mayor', items: ['0,05', '0,3', '0,45', '0,7', '1,2'], explica: 'Compara primero las unidades, luego las décimas y después las centésimas.' },
          { titulo: 'De menor a mayor', items: ['2,09', '2,1', '2,15', '2,5', '2,51'], explica: '2,1 = 2,10 es mayor que 2,09.' },
          { titulo: 'De menor a mayor', items: ['0,125', '0,25', '0,5', '0,75', '1'], explica: '0,25 = 1/4, 0,5 = 1/2 y 0,75 = 3/4.' },
          { titulo: 'De mayor a menor', items: ['9,9', '9,09', '0,99', '0,9', '0,09'], explica: '9,9 tiene 9 décimas; 9,09 solo 0 décimas.' }
        ] } },
      { tipo: 'laberinto', titulo: 'Laberinto decimal', icono: '🐰', descripcion: 'Pisa números mayores que 0,5.', aprende: 'Comparar decimales con 0,5 (un medio)',
        datos: { regla: 'Pisa solo números MAYORES que 0,5',
          correctos: ['0,6', '0,75', '0,9', '0,51', '1,2', '0,8', '0,55', '2,1', '0,99', '0,7'],
          incorrectos: ['0,45 | 0,45 es menor que 0,50', '0,09 | 0,09 es menor que 0,5', '0,3 | 0,3 es menor que 0,5', '0,25 | 0,25 es la mitad de 0,5', '0,5 | 0,5 es IGUAL, no mayor', '0,49 | 0,49 es menor que 0,50', '0,1 | 0,1 es menor', '0,05 | 0,05 es menor', '0,4 | 0,4 es menor que 0,5', '0,15 | 0,15 es menor'] } },
      { tipo: 'ruleta', titulo: 'Ruleta de quinto', icono: '🎡', descripcion: 'Decimales, fracciones, porcentajes y promedio.', aprende: 'Repaso de operaciones de quinto',
        datos: { rondas: 10, secciones: { 'Decimales': { generador: 'multDecimal5' }, 'Fracciones': { generador: 'restaFracciones5' }, 'Simplificar': { generador: 'simplificar5' }, 'Porcentajes': { generador: 'porcentaje5' }, 'Promedio': { generador: 'promedio5' } } } },
      { tipo: 'vf', titulo: 'Geometría: ¿verdadero o falso?', icono: '📦', descripcion: 'Polígonos, área y volumen.', aprende: 'Propiedades de figuras, área y volumen',
        datos: { afirmaciones: [
          'Un hexágono tiene 6 lados. | V || Hexa significa seis.',
          'El volumen de un cubo de 2 cm de lado es 8 cm³. | V || 2 × 2 × 2 = 8 cm³.',
          'Un triángulo puede tener dos ángulos rectos. | F || Los ángulos de un triángulo suman 180°; dos rectos ya suman 180°.',
          'El área de un cuadrado de 5 m de lado es 20 m². | F || Área = 5 × 5 = 25 m². 20 m es su perímetro.',
          'Los ángulos de un triángulo suman 180°. | V || Siempre suman 180°.',
          'Un pentágono tiene 5 lados. | V || Penta significa cinco.',
          'Un rombo tiene 4 lados iguales. | V || El rombo tiene sus 4 lados de igual medida.',
          'El perímetro es el espacio que hay dentro de una figura. | F || Eso es el área. El perímetro es la medida del borde.'
        ] } },
      { tipo: 'seleccion', titulo: 'Problemas de varios pasos', icono: '🧠', descripcion: 'Descuentos, distancias y compras.', aprende: 'Resolver problemas de varios pasos',
        datos: { generador: 'problemas5', cantidad: 6 } }
    ]
  }
});
