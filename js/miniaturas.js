/* =========================================================
   MINIATURAS (imágenes de vista previa de cada juego)
   Cada miniatura se dibuja en SVG según el TIPO de juego y usa
   el CONTENIDO real del juego (sus palabras, emojis, números),
   por eso no hay dos tarjetas con la misma imagen.
   ========================================================= */
AJ.miniatura = (function () {
  var W = 320, H = 200;
  var u = function () { return AJ.util; };

  function svg(contenido, color) {
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="' + W + '" height="' + H + '" fill="' + u().aclarar(color, .85) + '"/>' +
      '<circle cx="290" cy="20" r="60" fill="' + color + '" opacity=".12"/><circle cx="20" cy="190" r="50" fill="' + color + '" opacity=".12"/>' +
      contenido + '</svg>';
  }
  function t(x, y, texto, tam, color, extra) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + tam + '" text-anchor="middle" dominant-baseline="central" font-family="Arial Black,Arial,sans-serif" font-weight="900" fill="' + (color || '#343a40') + '" ' + (extra || '') + '>' + u().esc(texto) + '</text>';
  }
  function caja(x, y, w, h, relleno, borde, r) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r === undefined ? 10 : r) + '" fill="' + relleno + '" stroke="' + (borde || 'none') + '" stroke-width="3"/>';
  }
  function corto(txt, n) { txt = String(txt); return txt.length > n ? txt.slice(0, n - 1) + '…' : txt; }
  function primerEmoji(txt) {
    var m = String(txt || '').match(/(\p{Extended_Pictographic}(️)?(‍\p{Extended_Pictographic}(️)?)*)/u);
    return m ? m[0] : null;
  }

  var tipos = {
    sopa: function (j, c) {
      var palabras = (j.datos.palabras || []).map(function (p) { return u().normalizar(u().partes(p)[0]).replace(/\s/g, ''); });
      var letras = 'ABCDEFGHIJLMNOPRSTUV';
      var filas = 5, cols = 8, s = caja(40, 18, 240, 164, '#fff', c, 14);
      var grid = [];
      for (var f = 0; f < filas; f++) { grid.push([]); for (var k = 0; k < cols; k++) grid[f].push(letras[(f * 7 + k * 3 + palabras.length) % letras.length]); }
      var p1 = (palabras[0] || 'SOPA').slice(0, cols), p2 = (palabras[1] || 'LETRAS').slice(0, filas);
      for (var i = 0; i < p1.length; i++) grid[1][i] = p1[i];
      for (i = 0; i < p2.length; i++) grid[i][cols - 1] = p2[i];
      s += caja(48, 48 + 1 * 0, Math.max(28, p1.length * 28), 28, '#ffe066', 'none', 14);
      s += caja(48 + (cols - 1) * 28, 22, 28, Math.max(28, p2.length * 30), u().aclarar(c, .5), 'none', 14);
      for (f = 0; f < filas; f++) for (k = 0; k < cols; k++) s += t(62 + k * 28, 36 + f * 30, grid[f][k], 17);
      return s;
    },
    crucigrama: function (j, c) {
      var items = (j.datos.palabras || []).map(function (p) { return u().normalizar(u().partes(p)[0]); });
      var a = (items[0] || 'CRUCI').slice(0, 7), b = (items[1] || 'GRAMA').slice(0, 5);
      var cruce = Math.max(0, b.indexOf(a[1])); var s = '', T = 30, x0 = 55, y0 = 25;
      for (var i = 0; i < a.length; i++) { s += caja(x0 + i * T, y0 + 2 * T, T - 3, T - 3, '#fff', '#343a40', 4); if (i < 3) s += t(x0 + i * T + 13, y0 + 2 * T + 14, a[i], 16); }
      for (i = 0; i < b.length; i++) { if (i === 2) continue; s += caja(x0 + T, y0 + i * T, T - 3, T - 3, '#fff', '#343a40', 4); }
      s += t(x0 + T + 13, y0 + 14, '1', 11, c);
      s += caja(x0 + a.length * T + 8, 40, 68, 110, '#fff', c, 10) + t(x0 + a.length * T + 42, 62, 'Pistas', 12, c);
      for (i = 0; i < 4; i++) s += '<rect x="' + (x0 + a.length * T + 16) + '" y="' + (80 + i * 16) + '" width="' + (50 - i * 6) + '" height="6" rx="3" fill="#ced4da"/>';
      return s;
    },
    memoria: function (j, c) {
      var p = u().partes((j.datos.pares || ['🙂|🙂'])[0]);
      var s = '';
      for (var f = 0; f < 2; f++) for (var k = 0; k < 4; k++) {
        var x = 30 + k * 68, y = 24 + f * 80, abierta = (f === 0 && k === 1) || (f === 1 && k === 2);
        s += caja(x, y, 58, 70, abierta ? '#fff' : c, abierta ? c : 'none', 12);
        if (abierta) {
          var txt = f === 0 ? p[0] : p[1];
          s += t(x + 29, y + 35, corto(txt, 5), primerEmoji(txt) ? 30 : (txt.length > 3 ? 13 : 22));
        } else s += t(x + 29, y + 35, '?', 26, '#fff');
      }
      return s;
    },
    seleccion: function (j, c) {
      var preguntas = j.datos.preguntas || [];
      var primera = preguntas.length ? u().partes(String(preguntas[0]).split('||')[0]) : ['¿?', 'A', 'B', 'C'];
      if (!preguntas.length && j.datos.generador) {
        // Ejemplo real creado con el mismo generador del juego
        var g = AJ.generadores.crear(j.datos.generador);
        var ops = AJ.generadores.opciones(g.respuesta);
        primera = [g.texto].concat(ops);
      }
      if (primera[0].indexOf('::') >= 0) primera[0] = primera[0].split('::')[1].trim();
      var icono = j.icono || primerEmoji(primera[0]) || '❓';
      var s = caja(20, 16, 280, 62, '#fff', c, 16) + t(56, 47, icono, 34) + t(180, 47, corto(primera[0].replace(/\p{Extended_Pictographic}/gu, '').trim() || '¿Cuál es?', 20), 14);
      var ops = [primera[1], primera[2], primera[3] || '…'];
      var orden = [1, 0, 2];
      for (var i = 0; i < 3; i++) {
        var op = ops[orden[i]], ok = orden[i] === 0, y = 90 + i * 34;
        s += caja(40, y, 240, 28, ok ? '#d3f9d8' : '#fff', ok ? '#2f9e44' : '#ced4da', 14) + t(160, y + 14, corto(op, 22), 14, ok ? '#2b8a3e' : '#495057');
        if (ok) s += t(262, y + 14, '✓', 16, '#2f9e44');
      }
      return s;
    },
    lectura: function (j, c) {
      var s = caja(30, 14, 150, 172, '#fff', c, 10) + t(105, 36, j.icono || '📖', 28);
      for (var i = 0; i < 7; i++) s += '<rect x="45" y="' + (62 + i * 16) + '" width="' + (120 - (i % 3) * 18) + '" height="7" rx="3" fill="#ced4da"/>';
      s += caja(195, 40, 100, 34, '#fff', '#ced4da', 12) + t(245, 57, '¿Quién?', 13);
      s += caja(195, 84, 100, 34, '#d3f9d8', '#2f9e44', 12) + t(245, 101, '¿Qué?', 13, '#2b8a3e');
      s += caja(195, 128, 100, 34, '#fff', '#ced4da', 12) + t(245, 145, '¿Dónde?', 13);
      return s;
    },
    completar: function (j, c) {
      var p = u().partes(String((j.datos.preguntas || ['El ___ | sol'])[0]).split('||')[0]);
      var visual = p[0].indexOf('::') >= 0 ? p[0].split('::')[0].trim() : '';
      var frase = p[0].split('::').pop().trim().split('___');
      if (visual) return caja(20, 18, 280, 92, '#fff', c, 16) + t(70, 64, primerEmoji(visual) || visual, 40) +
        t(200, 64, corto(frase[0], 9) + '__' + corto(frase[1] || '', 6), 20) +
        caja(30, 125, 80, 46, c, 'none', 14) + t(70, 148, corto(p[1], 7), 16, '#fff') +
        caja(120, 125, 80, 46, '#fff', '#ced4da', 14) + t(160, 148, corto(p[2] || '…', 7), 16) +
        caja(210, 125, 80, 46, '#fff', '#ced4da', 14) + t(250, 148, corto(p[3] || '…', 7), 16);
      var s = caja(20, 30, 280, 70, '#fff', c, 16);
      s += t(160, 65, corto(frase[0], 16) + ' ____ ' + corto(frase[1] || '', 10), 15);
      s += caja(30, 122, 80, 46, c, 'none', 14) + t(70, 145, corto(p[1], 7), 16, '#fff');
      s += caja(120, 122, 80, 46, '#fff', '#ced4da', 14) + t(160, 145, corto(p[2] || '…', 7), 16);
      s += caja(210, 122, 80, 46, '#fff', '#ced4da', 14) + t(250, 145, corto(p[3] || '…', 7), 16);
      return s;
    },
    vf: function (j, c) {
      var p = u().partes((j.datos.afirmaciones || ['¿Verdadero o falso? | V'])[0]);
      var s = caja(20, 16, 280, 70, '#fff', c, 16) + t(50, 51, j.icono || '🤔', 30) + t(180, 51, corto(p[0], 22), 13);
      s += caja(40, 104, 110, 72, '#40c057', 'none', 18) + t(95, 130, '✔', 26, '#fff') + t(95, 158, 'VERDADERO', 12, '#fff');
      s += caja(170, 104, 110, 72, '#ff922b', 'none', 18) + t(225, 130, '✖', 26, '#fff') + t(225, 158, 'FALSO', 13, '#fff');
      return s;
    },
    relacionar: function (j, c) {
      var pares = (j.datos.pares || []).slice(0, 3).map(u().partes);
      var s = '', der = [2, 0, 1];
      for (var i = 0; i < 3 && i < pares.length; i++) {
        var y = 25 + i * 56;
        s += caja(20, y, 110, 42, '#fff', c, 12) + t(75, y + 21, corto(pares[i][0], 9), primerEmoji(pares[i][0]) ? 26 : 14);
        s += caja(190, 25 + der[i] * 56, 110, 42, '#fff', '#ced4da', 12) + t(245, 25 + der[i] * 56 + 21, corto(pares[der[i]] ? pares[der[i]][1] : '', 10), primerEmoji(pares[der[i]] ? pares[der[i]][1] : '') ? 26 : 13);
      }
      if (pares.length) s += '<path d="M130 ' + 46 + ' C160 46 160 ' + (25 + 2 * 56 + 21) + ' 190 ' + (25 + 2 * 56 + 21) + '" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/>';
      return s;
    },
    ordenar: function (j, c) {
      var sec = (j.datos.secuencias || [{ items: ['1', '2', '3'] }])[0].items.slice(0, 4);
      var s = '', n = sec.length, w = (280 - (n - 1) * 14) / n;
      sec.forEach(function (it, i) {
        var x = 20 + i * (w + 14);
        s += caja(x, 60, w, 80, '#fff', c, 14) + t(x + w / 2, 96, corto(it, 6), primerEmoji(it) ? 30 : 14);
        s += '<circle cx="' + (x + 8) + '" cy="62" r="13" fill="' + c + '"/>' + t(x + 8, 63, String(i + 1), 13, '#fff');
        if (i < n - 1) s += t(x + w + 7, 100, '›', 22, '#868e96');
      });
      s += t(160, 168, '1 → 2 → 3', 15, c);
      return s;
    },
    clasificar: function (j, c) {
      var cats = (j.datos.categorias || ['A', 'B']).slice(0, 2);
      var items = (j.datos.elementos || []).slice(0, 3).map(function (x) { return u().partes(x)[0]; });
      var s = '';
      cats.forEach(function (cat, i) {
        var x = 25 + i * 150;
        s += '<path d="M' + x + ' 110 L' + (x + 120) + ' 110 L' + (x + 108) + ' 185 L' + (x + 12) + ' 185 Z" fill="' + (i ? '#fff' : u().aclarar(c, .5)) + '" stroke="' + c + '" stroke-width="4"/>' + t(x + 60, 150, corto(cat.split('(')[0].trim(), 13), 12);
      });
      items.forEach(function (it, i) {
        var e = primerEmoji(it);
        s += caja(30 + i * 92, 25, 80, 50, '#fff', '#ced4da', 14) + t(70 + i * 92, 50, e || corto(it, 8), e ? 26 : 13);
      });
      return s;
    },
    revueltas: function (j, c) {
      var p = u().normalizar(u().partes((j.datos.palabras || ['JUEGO'])[0])[0]).replace(/\s/g, '').slice(0, 6);
      var mezcla = p.split('').reverse(), n = mezcla.length, w = 40, x0 = 160 - (n * (w + 6)) / 2;
      var s = '';
      mezcla.forEach(function (l, i) { s += '<g transform="rotate(' + ((i % 2 ? 1 : -1) * 8) + ' ' + (x0 + i * (w + 6) + 20) + ' 60)">' + caja(x0 + i * (w + 6), 40, w, w, c, 'none', 10) + t(x0 + i * (w + 6) + 20, 60, l, 22, '#fff') + '</g>'; });
      for (var i = 0; i < n; i++) s += caja(x0 + i * (w + 6), 120, w, w, '#fff', '#ced4da', 10) + (i < 2 ? t(x0 + i * (w + 6) + 20, 140, p[i], 22) : '');
      s += t(160, 102, '⬇', 18, '#868e96');
      return s;
    },
    ruleta: function (j, c) {
      var cols = ['#fa5252', '#fab005', '#40c057', '#228be6', '#7950f2', '#f783ac'], s = '';
      for (var i = 0; i < 6; i++) {
        var a1 = (i * 60 - 90) * Math.PI / 180, a2 = ((i + 1) * 60 - 90) * Math.PI / 180;
        s += '<path d="M110 105 L' + (110 + 78 * Math.cos(a1)) + ' ' + (105 + 78 * Math.sin(a1)) + ' A78 78 0 0 1 ' + (110 + 78 * Math.cos(a2)) + ' ' + (105 + 78 * Math.sin(a2)) + ' Z" fill="' + cols[i] + '" stroke="#fff" stroke-width="3"/>';
      }
      s += '<circle cx="110" cy="105" r="16" fill="#fff"/>' + t(110, 106, j.icono || '?', 16);
      s += '<path d="M98 14 L122 14 L110 36 Z" fill="#343a40"/>';
      var secciones = Object.keys(j.datos.secciones || {}).slice(0, 3);
      secciones.forEach(function (sec, k) { s += caja(205, 45 + k * 40, 100, 30, '#fff', cols[k], 12) + t(255, 60 + k * 40, corto(sec, 11), 11); });
      return s;
    },
    rompecabezas: function (j, c) {
      var nombre = (j.datos.imagenes || [{ dibujo: 'figuras' }])[0].dibujo;
      var img = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(AJ.dibujos[nombre]());
      return '<defs><clipPath id="cp' + nombre + '"><rect x="85" y="15" width="150" height="150" rx="8"/></clipPath></defs>' +
        '<image href="' + img + '" x="85" y="15" width="150" height="150" preserveAspectRatio="xMidYMid slice" clip-path="url(#cp' + nombre + ')"/>' +
        '<path d="M135 15 V165 M185 15 V165 M85 65 H235 M85 115 H235" stroke="#fff" stroke-width="4"/>' +
        caja(185, 115, 50, 50, c, 'none', 4) +
        '<g transform="translate(250 125) rotate(15)">' + caja(-25, -25, 50, 50, '#fff', c, 6) + t(0, 0, '🧩', 26) + '</g>';
    },
    operaciones: function (j, c) {
      var ej = null;
      try { ej = AJ.generadores.crear(j.datos.generador, j.grado); } catch (e) { }
      var txt = ej ? ej.texto : '2 + 3';
      var s = caja(20, 25, 280, 80, '#fff', c, 18) + t(160, 65, corto(txt + ' = ?', 18), txt.length > 12 ? 22 : 32, c);
      var teclas = ['1', '2', '3', '4', '5', '6'];
      teclas.forEach(function (k, i) { s += caja(60 + i * 35, 128, 30, 30, '#f1f3f5', '#ced4da', 8) + t(75 + i * 35, 143, k, 14); });
      s += caja(115, 165, 90, 24, '#40c057', 'none', 12) + t(160, 177, 'OK', 13, '#fff');
      return s;
    },
    tienda: function (j, c) {
      var prods = ['🍎', '🥛', '✏️', '📓', '🍌', '🧃'];
      var s = '<path d="M20 50 L300 50 L285 20 L35 20 Z" fill="' + c + '"/>' + t(160, 36, 'TIENDA', 15, '#fff');
      for (var i = 0; i < 6; i++) {
        var x = 30 + (i % 3) * 90, y = 62 + Math.floor(i / 3) * 66;
        s += caja(x, y, 80, 58, '#fff', '#dee2e6', 12) + t(x + 25, y + 29, prods[i], 26) + t(x + 58, y + 29, '$' + (i + 2) * (j.grado > 2 ? 100 : 1), 11, '#2f9e44');
      }
      return s;
    },
    laberinto: function (j, c) {
      var s = '', camino = { '0,0': 1, '0,1': 1, '1,1': 1, '2,1': 1, '2,2': 1, '2,3': 1, '3,3': 1, '4,3': 1 };
      var vals = (j.datos.correctos || ['2', '4', '6', '8']).concat(j.datos.incorrectos || ['3', '5']);
      for (var f = 0; f < 4; f++) for (var k = 0; k < 5; k++) {
        var x = 55 + k * 44, y = 15 + f * 44, en = camino[k + ',' + f];
        s += caja(x, y, 40, 40, en ? u().aclarar(c, .55) : '#fff', en ? c : '#dee2e6', 8);
        if (!(k === 0 && f === 0) && !(k === 4 && f === 3)) s += t(x + 20, y + 20, corto(vals[(f * 5 + k) % vals.length], 4), 11);
      }
      s += t(75, 35, '🐰', 24) + t(251, 167, '⭐', 24);
      return s;
    },
    diferencias: function (j, c) {
      var objs = (j.datos.objetos || ['🌳', '🏠', '☀️', '🐶']).slice(0, 4);
      var s = caja(15, 25, 135, 150, '#fff', c, 14) + caja(170, 25, 135, 150, '#fff', c, 14);
      var pos = [[50, 70], [110, 70], [50, 135], [110, 135]];
      pos.forEach(function (p, i) {
        s += t(p[0], p[1], objs[i % objs.length], 32);
        s += t(p[0] + 155, p[1], i === 3 ? objs[(i + 1) % objs.length] : objs[i % objs.length], 32);
      });
      s += '<circle cx="265" cy="135" r="26" fill="none" stroke="#fa5252" stroke-width="5"/>';
      return s;
    },
    identificar: function (j, c) {
      var nombre = j.datos.dibujo;
      var img = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(AJ.dibujos[nombre]());
      return '<image href="' + img + '" x="20" y="12" width="280" height="176" preserveAspectRatio="xMidYMid meet"/>' +
        '<g transform="translate(250 140)"><circle r="26" fill="#fff" fill-opacity=".6" stroke="#343a40" stroke-width="7"/><line x1="18" y1="18" x2="40" y2="40" stroke="#343a40" stroke-width="10" stroke-linecap="round"/></g>' +
        caja(18, 14, 90, 30, c, 'none', 15) + t(63, 29, '¿Dónde?', 13, '#fff');
    },
    teclado: function (j, c) {
      var fila = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U'], s = '';
      var pal = u().normalizar((j.datos.palabras || ['HOLA'])[0]).slice(0, 8);
      s += caja(60, 20, 200, 50, '#fff', c, 14) + t(160, 45, pal, 24, c);
      for (var f = 0; f < 3; f++) for (var k = 0; k < 7; k++) {
        var x = 32 + k * 38 + f * 10, y = 90 + f * 34, letra = ['QWERTYU', 'ASDFGHJ', 'ZXCVBNM'][f][k];
        var sig = letra === pal[0];
        s += caja(x, y, 32, 28, sig ? '#ffd43b' : '#fff', '#ced4da', 6) + t(x + 16, y + 14, letra, 12);
      }
      return s;
    }
  };
  tipos.identificar_partes = tipos.identificar;

  return function (juego, color) {
    var dibujar = tipos[juego.mini || juego.tipo] || tipos.seleccion;
    try { return svg(dibujar(juego, color), color); }
    catch (e) { return svg(t(160, 100, juego.icono || '🎮', 70), color); }
  };
})();
