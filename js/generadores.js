/* =========================================================
   GENERADORES DE EJERCICIOS DE MATEMÁTICAS
   Crean ejercicios nuevos cada vez que se juega, con la
   dificultad del grado y con una EXPLICACIÓN de la respuesta.
   Cada generador devuelve: { texto, respuesta, explica, visual? }
   ========================================================= */
AJ.generadores = (function () {
  var az = function (a, b) { return AJ.util.azar(a, b); };
  var uno = function (a) { return AJ.util.uno(a); };
  var n = function (x) { return AJ.util.num(x); };
  var nombres = ['Sofía', 'Mateo', 'Valentina', 'Santiago', 'Isabella', 'Samuel', 'Mariana', 'Juan José', 'Luciana', 'Emiliano', 'Salomé', 'Jerónimo'];
  var objetos = ['🍎', '⭐', '🐟', '🎈', '🌸', '🚗', '🐞', '🍓', '⚽', '🐥'];
  // Cada 5 dibujos se pone un separador invisible (​): en el computador se ven
  // todos seguidos, y en el celular bajan de línea en grupos de 5 si no caben.
  function repetir(e, k) { var s = ''; for (var i = 0; i < k; i++) s += (i && i % 5 === 0 ? '​' : '') + e; return s; }
  function mcd(a, b) { return b ? mcd(b, a % b) : a; }
  function dec(x) { return Math.round(x * 100) / 100; }

  var G = {
    /* ---------- PRIMERO ---------- */
    contar: function () {
      var k = az(3, 12), e = uno(objetos);
      return { visual: repetir(e, k), texto: '¿Cuántos hay?', respuesta: k, explica: 'Cuenta uno por uno señalando cada dibujo: hay ' + k + '.' };
    },
    suma1: function () {
      var a = az(1, 9), b = az(1, Math.min(9, 18 - a)), e = uno(objetos);
      return { visual: a + b <= 12 ? repetir(e, a) + ' + ' + repetir(e, b) : null, texto: a + ' + ' + b, respuesta: a + b,
        explica: 'Empieza en ' + a + ' y cuenta ' + b + ' más hacia adelante: llegas a ' + (a + b) + '.' };
    },
    resta1: function () {
      var a = az(4, 18), b = az(1, Math.min(9, a - 1));
      return { texto: a + ' − ' + b, respuesta: a - b, explica: 'Tienes ' + a + ' y quitas ' + b + '. Cuenta hacia atrás ' + b + ' veces: quedan ' + (a - b) + '.' };
    },
    sumaResta1: function () { return Math.random() < .5 ? G.suma1() : G.resta1(); },
    decenas1: function () {
      var d = az(1, 9), u = az(0, 9), x = d * 10 + u;
      return { texto: d + ' decenas y ' + u + ' unidades', respuesta: x, explica: d + ' decenas son ' + (d * 10) + '. Más ' + u + ' unidades: ' + x + '.' };
    },
    vecinos1: function () {
      var x = az(2, 98);
      return Math.random() < .5
        ? { texto: '¿Qué número va después del ' + x + '?', respuesta: x + 1, explica: 'Después del ' + x + ' viene el ' + (x + 1) + ' (uno más).' }
        : { texto: '¿Qué número va antes del ' + x + '?', respuesta: x - 1, explica: 'Antes del ' + x + ' está el ' + (x - 1) + ' (uno menos).' };
    },
    problemas1: function () {
      var p = uno(nombres), a = az(2, 9), b = az(1, 9), e = uno(objetos);
      if (Math.random() < .5) return { visual: repetir(e, a) + ' + ' + repetir(e, b), texto: p + ' tiene ' + a + ' ' + e + ' y le regalan ' + b + ' más. ¿Cuántos tiene ahora?', respuesta: a + b, explica: 'Juntamos: ' + a + ' + ' + b + ' = ' + (a + b) + '.' };
      var t = a + b;
      return { texto: p + ' tenía ' + t + ' ' + e + ' y regaló ' + b + '. ¿Cuántos le quedan?', respuesta: a, explica: 'Quitamos: ' + t + ' − ' + b + ' = ' + a + '.' };
    },

    /* ---------- SEGUNDO ---------- */
    suma2: function () {
      var a = az(15, 489), b = az(12, 499 - Math.min(a, 400));
      return { texto: a + ' + ' + b, respuesta: a + b, explica: 'Suma primero unidades, luego decenas y centenas. Si pasas de 9, llevas 1. ' + a + ' + ' + b + ' = ' + (a + b) + '.' };
    },
    resta2: function () {
      var a = az(40, 900), b = az(11, a - 5);
      return { texto: a + ' − ' + b, respuesta: a - b, explica: 'Resta desde las unidades. Si no alcanza, pide prestado 1 decena. ' + a + ' − ' + b + ' = ' + (a - b) + '. Comprueba: ' + (a - b) + ' + ' + b + ' = ' + a + '.' };
    },
    sumaResta2: function () { return Math.random() < .5 ? G.suma2() : G.resta2(); },
    posicional2: function () {
      var c = az(1, 9), d = az(0, 9), u = az(0, 9);
      return { texto: c + ' centenas, ' + d + ' decenas y ' + u + ' unidades', respuesta: c * 100 + d * 10 + u, explica: c + ' centenas = ' + (c * 100) + ', ' + d + ' decenas = ' + (d * 10) + ', más ' + u + ': ' + (c * 100 + d * 10 + u) + '.' };
    },
    serie2: function () {
      var paso = uno([2, 5, 10, 3, 100]), ini = paso === 100 ? az(1, 4) * 100 : az(1, 30), arr = [];
      for (var i = 0; i < 5; i++) arr.push(ini + paso * i);
      return { texto: arr.slice(0, 4).join(', ') + ', ¿?', respuesta: arr[4], explica: 'La serie avanza de ' + paso + ' en ' + paso + '. ' + arr[3] + ' + ' + paso + ' = ' + arr[4] + '.' };
    },
    sumaRepetida2: function () {
      var a = az(2, 5), b = az(2, 6), partes = [];
      for (var i = 0; i < a; i++) partes.push(b);
      return { texto: partes.join(' + '), respuesta: a * b, explica: 'Es sumar ' + a + ' veces el ' + b + ', es decir, ' + a + ' × ' + b + ' = ' + (a * b) + '.' };
    },
    problemas2: function () {
      var p = uno(nombres), a = az(25, 80), b = az(12, 45);
      var t = uno([
        function () { return { texto: 'En el bus van ' + a + ' niños y suben ' + b + ' más. ¿Cuántos niños van ahora?', respuesta: a + b, explica: a + ' + ' + b + ' = ' + (a + b) + '.' }; },
        function () { return { texto: p + ' tenía ' + (a + b) + ' láminas y regaló ' + b + '. ¿Cuántas le quedan?', respuesta: a, explica: (a + b) + ' − ' + b + ' = ' + a + '.' }; },
        function () { return { texto: 'Un cuaderno cuesta $' + a + '00 y un lápiz $' + b + '0. ¿Cuánto cuestan juntos? (escribe solo el número)', respuesta: a * 100 + b * 10, explica: a * 100 + ' + ' + b * 10 + ' = ' + (a * 100 + b * 10) + ' pesos.' }; }
      ]);
      return t();
    },

    /* ---------- TERCERO ---------- */
    mult3: function () {
      var a = az(2, 9), b = az(2, 10), s = [];
      for (var i = 0; i < Math.min(a, 5); i++) s.push(b);
      return { texto: a + ' × ' + b, respuesta: a * b, explica: a + ' × ' + b + ' = ' + (a * b) + ', porque son ' + a + ' grupos de ' + b + (a <= 5 ? ': ' + s.join(' + ') + '.' : '.') };
    },
    div3: function () {
      var b = az(2, 9), c = az(2, 10), a = b * c;
      return { texto: a + ' ÷ ' + b, respuesta: c, explica: a + ' ÷ ' + b + ' = ' + c + ', porque ' + b + ' × ' + c + ' = ' + a + '.' };
    },
    multDiv3: function () { return Math.random() < .6 ? G.mult3() : G.div3(); },
    fraccionSimple3: function () {
      var f = uno([[2, 'la mitad'], [3, 'la tercera parte'], [4, 'la cuarta parte']]), k = az(2, 10) * f[0];
      return { texto: '¿Cuánto es ' + f[1] + ' de ' + k + '?', respuesta: k / f[0], explica: 'Reparte ' + k + ' en ' + f[0] + ' partes iguales: ' + k + ' ÷ ' + f[0] + ' = ' + (k / f[0]) + '.' };
    },
    perimetro3: function () {
      if (Math.random() < .5) { var l = az(2, 12); return { texto: 'Perímetro de un cuadrado de lado ' + l + ' cm', respuesta: 4 * l, explica: 'El cuadrado tiene 4 lados iguales: ' + l + ' × 4 = ' + (4 * l) + ' cm.' }; }
      var a = az(3, 15), b = az(2, 9);
      return { texto: 'Perímetro de un rectángulo de ' + a + ' cm por ' + b + ' cm', respuesta: 2 * (a + b), explica: 'Se suman los 4 lados: ' + a + ' + ' + b + ' + ' + a + ' + ' + b + ' = ' + (2 * (a + b)) + ' cm.' };
    },
    problemas3: function () {
      var a = az(3, 9), b = az(3, 9), p = uno(nombres);
      var t = uno([
        function () { return { texto: 'Hay ' + a + ' cajas con ' + b + ' lápices cada una. ¿Cuántos lápices hay en total?', respuesta: a * b, explica: a + ' × ' + b + ' = ' + (a * b) + ' lápices.' }; },
        function () { return { texto: p + ' reparte ' + (a * b) + ' dulces entre ' + a + ' amigos por igual. ¿Cuántos recibe cada uno?', respuesta: b, explica: (a * b) + ' ÷ ' + a + ' = ' + b + ', porque ' + a + ' × ' + b + ' = ' + (a * b) + '.' }; },
        function () { return { texto: 'Un paquete trae ' + b + ' galletas. ' + p + ' compra ' + a + ' paquetes y se come 2. ¿Cuántas quedan?', respuesta: a * b - 2, explica: 'Primero ' + a + ' × ' + b + ' = ' + (a * b) + '; luego ' + (a * b) + ' − 2 = ' + (a * b - 2) + '.' }; }
      ]);
      return t();
    },

    /* ---------- CUARTO ---------- */
    combinadas4: function () {
      var a = az(2, 20), b = az(2, 9), c = az(2, 9);
      var t = uno([
        function () { return { texto: a + ' + ' + b + ' × ' + c, respuesta: a + b * c, explica: 'Primero la multiplicación: ' + b + ' × ' + c + ' = ' + (b * c) + '. Luego ' + a + ' + ' + (b * c) + ' = ' + (a + b * c) + '.' }; },
        function () { return { texto: '(' + a + ' + ' + b + ') × ' + c, respuesta: (a + b) * c, explica: 'Primero el paréntesis: ' + a + ' + ' + b + ' = ' + (a + b) + '. Luego ' + (a + b) + ' × ' + c + ' = ' + ((a + b) * c) + '.' }; },
        function () { var x = b * c + az(1, 20); return { texto: x + ' − ' + b + ' × ' + c, respuesta: x - b * c, explica: 'Primero ' + b + ' × ' + c + ' = ' + (b * c) + '. Luego ' + x + ' − ' + (b * c) + ' = ' + (x - b * c) + '.' }; },
        function () { var d = b * c; return { texto: d + ' ÷ ' + b + ' + ' + a, respuesta: c + a, explica: 'Primero la división: ' + d + ' ÷ ' + b + ' = ' + c + '. Luego ' + c + ' + ' + a + ' = ' + (c + a) + '.' }; }
      ]);
      return t();
    },
    multGrande4: function () {
      var a = az(12, 99), b = az(2, 9);
      return { texto: a + ' × ' + b, respuesta: a * b, explica: 'Multiplica por partes: ' + (Math.floor(a / 10) * 10) + ' × ' + b + ' = ' + (Math.floor(a / 10) * 10 * b) + ' y ' + (a % 10) + ' × ' + b + ' = ' + (a % 10 * b) + '. Suma: ' + (a * b) + '.' };
    },
    divGrande4: function () {
      var b = az(2, 9), c = az(12, 99), a = b * c;
      return { texto: a + ' ÷ ' + b, respuesta: c, explica: a + ' ÷ ' + b + ' = ' + c + '. Comprueba: ' + c + ' × ' + b + ' = ' + a + '.' };
    },
    fraccionDe4: function () {
      var d = uno([2, 3, 4, 5, 6, 8, 10]), nu = az(1, d - 1), k = d * az(2, 9);
      return { texto: nu + '/' + d + ' de ' + k, respuesta: k / d * nu, explica: 'Divide ' + k + ' entre ' + d + ' = ' + (k / d) + ', y multiplica por ' + nu + ': ' + (k / d * nu) + '.' };
    },
    equivalente4: function () {
      var d = uno([2, 3, 4, 5]), nu = az(1, d - 1), m = az(2, 5);
      return { texto: nu + '/' + d + ' = ¿?/' + (d * m), respuesta: nu * m, explica: 'El denominador se multiplicó por ' + m + ' (' + d + ' × ' + m + ' = ' + (d * m) + '), así que el numerador también: ' + nu + ' × ' + m + ' = ' + (nu * m) + '.' };
    },
    area4: function () {
      var a = az(3, 15), b = az(2, 12);
      return { texto: 'Área de un rectángulo de ' + a + ' m por ' + b + ' m', respuesta: a * b, explica: 'Área = base × altura = ' + a + ' × ' + b + ' = ' + (a * b) + ' m².' };
    },
    problemas4: function () {
      var p = uno(nombres), a = az(2, 5), pr = az(15, 40) * 100, l = az(5, 12) * 100;
      var t = uno([
        function () { return { texto: p + ' compra ' + a + ' cuadernos de $' + n(pr) + ' y un lápiz de $' + n(l) + '. ¿Cuánto paga en total?', respuesta: a * pr + l, explica: a + ' × ' + n(pr) + ' = ' + n(a * pr) + '; más ' + n(l) + ' = ' + n(a * pr + l) + ' pesos.' }; },
        function () { var e = az(4, 9) * 4; return { texto: 'En un salón hay ' + e + ' estudiantes. Las 3/4 partes traen lonchera. ¿Cuántos traen lonchera?', respuesta: e / 4 * 3, explica: e + ' ÷ 4 = ' + (e / 4) + '; ' + (e / 4) + ' × 3 = ' + (e / 4 * 3) + '.' }; },
        function () { var b = az(3, 8), c = az(10, 25); return { texto: 'Un bus hace ' + b + ' viajes al día y en cada uno lleva ' + c + ' pasajeros. ¿Cuántos pasajeros lleva en 2 días?', respuesta: b * c * 2, explica: b + ' × ' + c + ' = ' + (b * c) + ' por día; × 2 días = ' + (b * c * 2) + '.' }; }
      ]);
      return t();
    },

    /* ---------- QUINTO ---------- */
    decimales5: function () {
      var a = dec(az(10, 999) / 10), b = dec(az(10, 499) / 100);
      if (Math.random() < .5) return { texto: n(a) + ' + ' + n(b), respuesta: dec(a + b), explica: 'Alinea las comas y suma: ' + n(a) + ' + ' + n(b) + ' = ' + n(dec(a + b)) + '.' };
      var x = dec(a + b);
      return { texto: n(x) + ' − ' + n(b), respuesta: a, explica: 'Alinea las comas y resta: ' + n(x) + ' − ' + n(b) + ' = ' + n(a) + '.' };
    },
    multDecimal5: function () {
      var a = dec(az(11, 99) / 10), b = az(2, 9);
      return { texto: n(a) + ' × ' + b, respuesta: dec(a * b), explica: 'Multiplica sin la coma: ' + Math.round(a * 10) + ' × ' + b + ' = ' + Math.round(a * 10 * b) + '. Luego pon 1 cifra decimal: ' + n(dec(a * b)) + '.' };
    },
    sumaFracciones5: function () {
      if (Math.random() < .5) {
        var d = az(3, 12), a = az(1, d - 2), b = az(1, d - a - 1);
        return { texto: a + '/' + d + ' + ' + b + '/' + d, respuesta: (a + b) + '/' + d, explica: 'Mismo denominador: se suman los numeradores (' + a + ' + ' + b + ' = ' + (a + b) + ') y el denominador queda igual: ' + (a + b) + '/' + d + '.' };
      }
      var d1 = uno([2, 3, 4]), d2 = d1 * 2, x = az(1, d1 - 1), y = az(1, d2 - 1), num = x * 2 + y;
      return { texto: x + '/' + d1 + ' + ' + y + '/' + d2, respuesta: num + '/' + d2, explica: 'Convierte ' + x + '/' + d1 + ' en ' + (x * 2) + '/' + d2 + '. Luego ' + (x * 2) + '/' + d2 + ' + ' + y + '/' + d2 + ' = ' + num + '/' + d2 + '.' };
    },
    restaFracciones5: function () {
      var d = az(4, 12), a = az(3, d), b = az(1, a - 1);
      return { texto: a + '/' + d + ' − ' + b + '/' + d, respuesta: (a - b) + '/' + d, explica: 'Mismo denominador: se restan los numeradores (' + a + ' − ' + b + ' = ' + (a - b) + '): ' + (a - b) + '/' + d + '.' };
    },
    simplificar5: function () {
      var a = az(1, 5), b = az(a + 1, 9); var g = mcd(a, b); a /= g; b /= g; var m = az(2, 6);
      return { texto: 'Simplifica ' + (a * m) + '/' + (b * m), respuesta: a + '/' + b, explica: 'Divide arriba y abajo entre ' + m + ': ' + (a * m) + ' ÷ ' + m + ' = ' + a + ' y ' + (b * m) + ' ÷ ' + m + ' = ' + b + '.' };
    },
    porcentaje5: function () {
      var p = uno([10, 20, 25, 50, 75]), k = uno([20, 40, 60, 80, 100, 200, 400, 1000]);
      return { texto: p + '% de ' + n(k), respuesta: k * p / 100, explica: p + '% significa ' + p + ' de cada 100. ' + n(k) + ' × ' + p + ' ÷ 100 = ' + n(k * p / 100) + '.' };
    },
    problemas5: function () {
      var p = uno(nombres);
      var t = uno([
        function () { var pr = az(2, 8) * 10000, d = uno([10, 20, 25, 50]); return { texto: 'Una camiseta cuesta $' + n(pr) + ' y tiene ' + d + '% de descuento. ¿Cuánto se paga?', respuesta: pr - pr * d / 100, explica: 'Descuento: ' + d + '% de ' + n(pr) + ' = ' + n(pr * d / 100) + '. Se paga ' + n(pr) + ' − ' + n(pr * d / 100) + ' = ' + n(pr - pr * d / 100) + '.' }; },
        function () { var km = dec(az(11, 49) / 10), d = az(2, 6); return { texto: p + ' corre ' + n(km) + ' km cada día durante ' + d + ' días. ¿Cuántos km corre en total?', respuesta: dec(km * d), explica: n(km) + ' × ' + d + ' = ' + n(dec(km * d)) + ' km.' }; },
        function () { var k = az(2, 4), pr = az(18, 45) * 100, pago = 20000; return { texto: p + ' compra ' + k + ' kg de fruta a $' + n(pr) + ' el kilo y paga con $20.000. ¿Cuánto le devuelven?', respuesta: pago - k * pr, explica: 'Gasta ' + k + ' × ' + n(pr) + ' = ' + n(k * pr) + '. Vueltas: 20.000 − ' + n(k * pr) + ' = ' + n(pago - k * pr) + '.' }; },
        function () { var a = az(3, 7), b = az(2, 5), c = az(10, 30); return { texto: 'Una caja tiene ' + a + ' filas de ' + b + ' bombones. ¿Cuántos bombones hay en ' + c + ' cajas?', respuesta: a * b * c, explica: a + ' × ' + b + ' = ' + (a * b) + ' por caja; ' + (a * b) + ' × ' + c + ' = ' + (a * b * c) + '.' }; }
      ]);
      return t();
    },
    promedio5: function () {
      var k = 4, arr = [], s = 0, prom = az(5, 9) * 1;
      for (var i = 0; i < k - 1; i++) { var v = az(2, 10); arr.push(v); s += v; }
      var ultimo = prom * k - s; if (ultimo < 1 || ultimo > 10) return G.promedio5();
      arr.push(ultimo);
      return { texto: 'Promedio de ' + arr.join(', '), respuesta: prom, explica: 'Suma: ' + arr.join(' + ') + ' = ' + (prom * k) + '. Divide entre ' + k + ': ' + prom + '.' };
    }
  };

  return {
    /** Crea un ejercicio con el generador indicado. */
    crear: function (nombre) {
      if (!G[nombre]) throw new Error('Generador desconocido: ' + nombre);
      return G[nombre]();
    },
    existe: function (nombre) { return !!G[nombre]; },
    /** Crea opciones de respuesta cercanas (distractores) para selección múltiple. */
    opciones: function (respuesta) {
      var ops = [String(respuesta)];
      if (typeof respuesta === 'string' && respuesta.indexOf('/') > 0) {
        var p = respuesta.split('/').map(Number);
        [[p[0] + 1, p[1]], [p[0], p[1] + 1], [Math.max(1, p[0] - 1), p[1]], [p[0] * 2, p[1] * 2 + 1]].forEach(function (x) {
          var s = x[0] + '/' + x[1]; if (ops.indexOf(s) < 0 && ops.length < 4) ops.push(s);
        });
      } else {
        var r = Number(respuesta), paso = Math.abs(r) >= 1000 ? 100 : (Math.abs(r) >= 100 ? 10 : (r % 1 !== 0 ? 0.1 : 1));
        var cand = [r + paso, r - paso, r + 2 * paso, r + 10 * paso, r - 2 * paso, r + 3 * paso];
        cand.forEach(function (c) { c = Math.round(c * 100) / 100; if (c >= 0 && ops.indexOf(String(c)) < 0 && ops.length < 4) ops.push(String(c)); });
      }
      return ops.map(function (o) { return o.indexOf('/') > 0 ? o : AJ.util.num(o); });
    }
  };
})();
