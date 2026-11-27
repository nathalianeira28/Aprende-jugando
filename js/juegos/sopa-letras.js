/* =========================================================
   SOPA DE LETRAS
   Formato: palabras: ["PERRO | 🐶 animal que ladra", ...]
   La pista (después de |) es opcional y se muestra en la lista.
   El tamaño y las direcciones dependen del grado:
     1° y 2°: horizontal y vertical.
     3° y 4°: también diagonal.
     5°: también al revés.
   Se juega arrastrando el mouse/dedo, o tocando la primera
   y la última letra de la palabra.
   ========================================================= */
AJ.registrarJuego('sopa', {
  nombre: 'Sopa de letras',
  instrucciones: 'Busca las palabras escondidas. Arrastra desde la primera letra hasta la última (o toca la primera y luego la última).',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el, g = ctx.grado;
    var palabras = datos.palabras.map(function (l) {
      var p = U.partes(l);
      return { texto: U.normalizar(p[0]).replace(/[^A-ZÑ]/g, ''), mostrar: p[0], pista: p[1] || '', hallada: false };
    });
    var dirs = [[0, 1], [1, 0]];
    if (g >= 3) dirs.push([1, 1]);
    if (g >= 4) dirs.push([-1, 1]);
    if (g >= 5) dirs.push([0, -1], [-1, 0]);
    var mayor = Math.max.apply(null, palabras.map(function (p) { return p.texto.length; }));
    var tam = Math.max(mayor + 1, datos.tam || (g <= 2 ? 8 : (g <= 4 ? 10 : 11)));

    // ---- Colocar palabras en la cuadrícula ----
    var grid, ok = false;
    for (var intento = 0; intento < 40 && !ok; intento++) {
      if (intento && intento % 10 === 0) tam++;
      grid = [];
      for (var r = 0; r < tam; r++) { grid.push([]); for (var c = 0; c < tam; c++) grid[r].push(''); }
      palabras.forEach(function (p) { p.colocada = false; });
      ok = U.barajar(palabras.slice()).sort(function (a, b) { return b.texto.length - a.texto.length; }).every(colocar);
    }
    // Por seguridad: solo se buscan las palabras que sí quedaron en la cuadrícula
    palabras = palabras.filter(function (p) { return p.colocada; });
    function colocar(p) {
      for (var k = 0; k < 300; k++) {
        var d = U.uno(dirs), L = p.texto.length;
        var r0 = U.azar(0, tam - 1), c0 = U.azar(0, tam - 1);
        var r1 = r0 + d[0] * (L - 1), c1 = c0 + d[1] * (L - 1);
        if (r1 < 0 || r1 >= tam || c1 < 0 || c1 >= tam) continue;
        var cabe = true;
        for (var i = 0; i < L; i++) { var ch = grid[r0 + d[0] * i][c0 + d[1] * i]; if (ch && ch !== p.texto[i]) { cabe = false; break; } }
        if (!cabe) continue;
        for (i = 0; i < L; i++) grid[r0 + d[0] * i][c0 + d[1] * i] = p.texto[i];
        p.colocada = true;
        return true;
      }
      return false;
    }
    var relleno = 'AABCDEEFGHIILMNOOPRSTUUVYZ';
    for (r = 0; r < tam; r++) for (c = 0; c < tam; c++) if (!grid[r][c]) grid[r][c] = relleno[U.azar(0, relleno.length - 1)];

    // ---- Dibujar ----
    var colores = ['#fa5252', '#228be6', '#40c057', '#be4bdb', '#fd7e14', '#15aabf', '#e64980', '#7950f2', '#82c91e', '#fab005'];
    var tabla = el('div', { class: 'sopa', style: { 'grid-template-columns': 'repeat(' + tam + ', auto)', '--tam': tam } });
    var celdas = [];
    for (r = 0; r < tam; r++) {
      celdas.push([]);
      for (c = 0; c < tam; c++) {
        var cel = el('div', { class: 'celda', 'data-r': r, 'data-c': c }, grid[r][c]);
        celdas[r].push(cel); tabla.appendChild(cel);
      }
    }
    var lista = el('ul', { class: 'lista-palabras' });
    palabras.forEach(function (p) { p.li = el('li', {}, [p.mostrar.toUpperCase(), p.pista ? el('small', {}, p.pista) : null]); lista.appendChild(p.li); });
    area.appendChild(el('div', { class: 'sopa-contenedor' }, [tabla, el('div', {}, [el('h3', { style: { margin: '0 0 .6rem' } }, '🔎 Palabras para encontrar'), lista])]));
    ctx.total(palabras.length);

    // ---- Selección ----
    var inicio = null, arrastrando = false, linea = [], halladas = 0;
    function celdaEn(ev) { var x = document.elementFromPoint(ev.clientX, ev.clientY); return x && x.classList.contains('celda') ? x : null; }
    function calcular(a, b) {
      var r0 = +a.dataset.r, c0 = +a.dataset.c, r1 = +b.dataset.r, c1 = +b.dataset.c;
      var dr = Math.sign(r1 - r0), dc = Math.sign(c1 - c0), L = Math.max(Math.abs(r1 - r0), Math.abs(c1 - c0)) + 1;
      if (!(r0 === r1 || c0 === c1 || Math.abs(r1 - r0) === Math.abs(c1 - c0))) return [a];
      var res = [];
      for (var i = 0; i < L; i++) res.push(celdas[r0 + dr * i][c0 + dc * i]);
      return res;
    }
    function marcar(arr) {
      tabla.querySelectorAll('.marcando').forEach(function (x) { x.classList.remove('marcando'); });
      arr.forEach(function (x) { x.classList.add('marcando'); });
      linea = arr;
    }
    function finalizar() {
      var txt = linea.map(function (x) { return x.textContent; }).join('');
      var rev = txt.split('').reverse().join('');
      var p = palabras.filter(function (w) { return !w.hallada && (w.texto === txt || w.texto === rev); })[0];
      if (p) {
        p.hallada = true; halladas++;
        var col = colores[(halladas - 1) % colores.length];
        linea.forEach(function (x) { x.classList.add('encontrada'); x.style.background = col; });
        p.li.classList.add('hecha');
        ctx.acierto(p.mostrar.toUpperCase() + (p.pista ? ': ' + p.pista : ''));
        ctx.avance();
        if (halladas === palabras.length) ctx.terminar(1800);
      } else if (linea.length >= 3) {
        ctx.sonido('intento');
      }
      marcar([]); inicio = null;
    }
    tabla.addEventListener('pointerdown', function (ev) {
      var x = celdaEn(ev); if (!x) return;
      ev.preventDefault();
      if (inicio && x !== inicio) { marcar(calcular(inicio, x)); finalizar(); return; }
      inicio = x; arrastrando = true; marcar([x]);
    });
    tabla.addEventListener('pointermove', function (ev) {
      if (!arrastrando || !inicio) return;
      var x = celdaEn(ev); if (x) marcar(calcular(inicio, x));
    });
    var soltar = function (ev) {
      if (!arrastrando) return;
      arrastrando = false;
      var x = celdaEn(ev);
      if (x && x !== inicio) { marcar(calcular(inicio, x)); finalizar(); }
      // si soltó en la misma letra, queda esperando el segundo toque
    };
    document.addEventListener('pointerup', soltar);
    ctx.alSalir(function () { document.removeEventListener('pointerup', soltar); });
  }
});
