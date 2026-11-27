/* =========================================================
   CRUCIGRAMA
   Formato: palabras: ["CORAZON | Órgano que bombea la sangre", ...]
   El crucigrama se arma automáticamente cruzando las palabras.
   Cada palabra se revisa sola cuando el niño la completa.
   ========================================================= */
AJ.registrarJuego('crucigrama', {
  nombre: 'Crucigrama',
  instrucciones: 'Lee las pistas y escribe las palabras en las casillas. Toca una casilla para empezar a escribir.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var entrada = datos.palabras.map(function (l) {
      var p = U.partes(l); return { palabra: U.normalizar(p[0]).replace(/[^A-ZÑ]/g, ''), pista: p[1] || '' };
    });

    // ---------- 1. Generar la distribución ----------
    function generar(orden) {
      var celdas = {}, puestas = [];
      function letra(r, c) { return celdas[r + ',' + c] ? celdas[r + ',' + c].l : null; }
      function poner(w, r, c, dir) {
        for (var i = 0; i < w.palabra.length; i++) {
          var rr = r + (dir === 'v' ? i : 0), cc = c + (dir === 'h' ? i : 0), k = rr + ',' + cc;
          if (!celdas[k]) celdas[k] = { l: w.palabra[i], dirs: {} };
          celdas[k].dirs[dir] = true;
        }
        puestas.push({ w: w, r: r, c: c, dir: dir });
      }
      function valida(pal, r, c, dir) {
        var dr = dir === 'v' ? 1 : 0, dc = dir === 'h' ? 1 : 0, cruces = 0;
        if (letra(r - dr, c - dc) || letra(r + dr * pal.length, c + dc * pal.length)) return -1;
        for (var i = 0; i < pal.length; i++) {
          var rr = r + dr * i, cc = c + dc * i, l = letra(rr, cc);
          if (l) { if (l !== pal[i] || celdas[rr + ',' + cc].dirs[dir]) return -1; cruces++; }
          else if (letra(rr + dc, cc + dr) || letra(rr - dc, cc - dr)) return -1;
        }
        return cruces;
      }
      poner(orden[0], 0, 0, 'h');
      var pendientes = orden.slice(1);
      for (var pasada = 0; pasada < 3; pasada++) {
        pendientes = pendientes.filter(function (w) {
          var mejores = [], max = 0;
          Object.keys(celdas).forEach(function (k) {
            var rc = k.split(',').map(Number), cel = celdas[k];
            for (var i = 0; i < w.palabra.length; i++) {
              if (w.palabra[i] !== cel.l) continue;
              ['h', 'v'].forEach(function (dir) {
                if (cel.dirs[dir]) return;
                var r = rc[0] - (dir === 'v' ? i : 0), c = rc[1] - (dir === 'h' ? i : 0);
                var x = valida(w.palabra, r, c, dir);
                if (x > 0) { if (x > max) { max = x; mejores = []; } if (x === max) mejores.push([r, c, dir]); }
              });
            }
          });
          if (!mejores.length) return true;
          var m = U.uno(mejores); poner(w, m[0], m[1], m[2]); return false;
        });
      }
      return { celdas: celdas, puestas: puestas };
    }
    // Se prueban varias distribuciones y se elige la que pone más palabras y,
    // entre esas, la más compacta (así cabe mejor en la pantalla del celular).
    function medida(res) {
      var rs = [], cs = [];
      Object.keys(res.celdas).forEach(function (k) { var rc = k.split(',').map(Number); rs.push(rc[0]); cs.push(rc[1]); });
      return Math.max(Math.max.apply(null, rs) - Math.min.apply(null, rs), Math.max.apply(null, cs) - Math.min.apply(null, cs));
    }
    var mejor = null;
    for (var t = 0; t < 60; t++) {
      var orden = U.barajar(entrada);
      orden.sort(function (a, b) { return b.palabra.length - a.palabra.length + (Math.random() - .5) * 3; });
      var res = generar(orden);
      res.medida = medida(res);
      if (!mejor || res.puestas.length > mejor.puestas.length || (res.puestas.length === mejor.puestas.length && res.medida < mejor.medida)) mejor = res;
    }

    // ---------- 2. Normalizar coordenadas y numerar ----------
    var minR = Infinity, minC = Infinity, maxR = -Infinity, maxC = -Infinity;
    Object.keys(mejor.celdas).forEach(function (k) { var rc = k.split(',').map(Number); minR = Math.min(minR, rc[0]); minC = Math.min(minC, rc[1]); maxR = Math.max(maxR, rc[0]); maxC = Math.max(maxC, rc[1]); });
    var filas = maxR - minR + 1, cols = maxC - minC + 1;
    var palabras = mejor.puestas.map(function (p) { return { palabra: p.w.palabra, pista: p.w.pista, r: p.r - minR, c: p.c - minC, dir: p.dir, celdas: [], resuelta: false, avisada: '' }; });
    palabras.sort(function (a, b) { return a.r - b.r || a.c - b.c; });
    var numeros = {}, n = 0;
    palabras.forEach(function (p) { var k = p.r + ',' + p.c; if (!numeros[k]) numeros[k] = ++n; p.num = numeros[k]; });

    // ---------- 3. Dibujar ----------
    var tabla = el('div', { class: 'cruci', style: { 'grid-template-columns': 'repeat(' + cols + ', auto)', '--cols': cols } });
    var mapa = {};
    for (var r = 0; r < filas; r++) for (var c = 0; c < cols; c++) {
      var k = (r + minR) + ',' + (c + minC);
      if (mejor.celdas[k]) {
        var inp = el('input', { maxlength: 1, 'data-r': r, 'data-c': c, autocomplete: 'off', 'aria-label': 'Letra' });
        var caja = el('div', { class: 'c letra' }, [numeros[r + ',' + c] ? el('span', { class: 'num' }, numeros[r + ',' + c]) : null, inp]);
        mapa[r + ',' + c] = { caja: caja, inp: inp, letra: mejor.celdas[k].l, palabras: [] };
        tabla.appendChild(caja);
      } else tabla.appendChild(el('div', { class: 'c' }));
    }
    palabras.forEach(function (p) {
      for (var i = 0; i < p.palabra.length; i++) {
        var m = mapa[(p.r + (p.dir === 'v' ? i : 0)) + ',' + (p.c + (p.dir === 'h' ? i : 0))];
        p.celdas.push(m); m.palabras.push(p);
      }
    });
    function listaPistas(dir, titulo) {
      var ps = palabras.filter(function (p) { return p.dir === dir; });
      if (!ps.length) return null;
      return el('div', {}, [el('h3', {}, titulo), el('ol', {}, ps.map(function (p) {
        p.li = el('li', {}, [el('b', {}, p.num + '. '), p.pista + ' (' + p.palabra.length + ' letras)']);
        p.li.style.cursor = 'pointer';
        p.li.onclick = function () { dirActual = p.dir; p.celdas[0].inp.focus(); };
        return p.li;
      }))]);
    }
    var ayuda = el('button', { class: 'btn naranja', style: { 'font-size': '.95rem' } }, '💡 Ayuda: una letra');
    area.appendChild(el('div', { class: 'cruci-contenedor' }, [
      tabla,
      el('div', { class: 'pistas' }, [listaPistas('h', '➡ Horizontales'), listaPistas('v', '⬇ Verticales'), ayuda])
    ]));
    ctx.total(palabras.length);

    // ---------- 4. Escribir y revisar ----------
    var dirActual = 'h', resueltas = 0;
    function mover(m, paso) {
      var r = +m.inp.dataset.r, c = +m.inp.dataset.c;
      var sig = mapa[(r + (dirActual === 'v' ? paso : 0)) + ',' + (c + (dirActual === 'h' ? paso : 0))];
      if (sig) sig.inp.focus();
    }
    function revisar(p) {
      if (p.resuelta) return;
      var escrito = p.celdas.map(function (m) { return U.normalizar(m.inp.value || ' '); }).join('');
      if (escrito.indexOf(' ') >= 0) return; // aún incompleta
      if (escrito === p.palabra) {
        p.resuelta = true; resueltas++;
        p.celdas.forEach(function (m) { m.caja.classList.remove('revisar'); m.caja.classList.add('ok'); m.inp.readOnly = true; });
        p.li.classList.add('ok');
        ctx.acierto(p.palabra + ': ' + p.pista);
        ctx.avance();
        if (resueltas === palabras.length) ctx.terminar(1800);
      } else if (p.avisada !== escrito) {
        p.avisada = escrito;
        p.celdas.forEach(function (m, i) { if (U.normalizar(m.inp.value) !== p.palabra[i]) m.caja.classList.add('revisar'); });
        ctx.fallo('Revisa la palabra ' + p.num + ': ' + p.pista);
      }
    }
    Object.keys(mapa).forEach(function (k) {
      var m = mapa[k];
      m.inp.addEventListener('focus', function () {
        if (!m.palabras.some(function (p) { return p.dir === dirActual; })) dirActual = m.palabras[0].dir;
        m.inp.select();
      });
      m.inp.addEventListener('click', function () {
        if (m.palabras.length > 1 && document.activeElement === m.inp && m._ya) dirActual = dirActual === 'h' ? 'v' : 'h';
        m._ya = true;
      });
      m.inp.addEventListener('blur', function () { m._ya = false; });
      m.inp.addEventListener('input', function () {
        m.inp.value = U.normalizar(m.inp.value).replace(/[^A-ZÑ]/g, '').slice(-1);
        m.caja.classList.remove('revisar');
        m.palabras.forEach(revisar);
        if (m.inp.value) mover(m, 1);
      });
      m.inp.addEventListener('keydown', function (ev) {
        if (ev.key === 'Backspace' && !m.inp.value) { mover(m, -1); }
        else if (ev.key === 'ArrowRight') { dirActual = 'h'; mover(m, 1); ev.preventDefault(); }
        else if (ev.key === 'ArrowLeft') { dirActual = 'h'; mover(m, -1); ev.preventDefault(); }
        else if (ev.key === 'ArrowDown') { dirActual = 'v'; mover(m, 1); ev.preventDefault(); }
        else if (ev.key === 'ArrowUp') { dirActual = 'v'; mover(m, -1); ev.preventDefault(); }
      });
    });
    ayuda.onclick = function () {
      var vacias = Object.keys(mapa).map(function (k) { return mapa[k]; }).filter(function (m) { return U.normalizar(m.inp.value) !== m.letra; });
      if (!vacias.length) return;
      var m = U.uno(vacias);
      m.inp.value = m.letra; m.caja.classList.remove('revisar');
      m.palabras.forEach(revisar);
    };
    var primera = palabras[0] && palabras[0].celdas[0];
    if (primera) ctx.esperar(function () { primera.inp.focus(); }, 100);
  }
});
