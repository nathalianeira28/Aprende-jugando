/* =========================================================
   LABERINTO EDUCATIVO
   Formato:
     regla: 'Pisa solo los números PARES',
     correctos:   ['2', '14', '36 | 36 termina en 6, es par', ...],
     incorrectos: ['7 | 7 es impar', '15', ...]
   El camino a la meta solo se puede recorrer pisando casillas
   que cumplen la regla. Con "|" se agrega una explicación.
   ========================================================= */
AJ.registrarJuego('laberinto', {
  nombre: 'Laberinto',
  instrucciones: 'Lleva al conejo 🐰 hasta la estrella ⭐. Solo puedes pisar las casillas que cumplen la regla. Toca una casilla vecina (o usa las flechas del teclado).',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var filas = datos.filas || (ctx.grado <= 2 ? 4 : 5), cols = datos.cols || (ctx.grado <= 2 ? 5 : 6);
    var rondas = datos.rondas || 2, ronda = 0;
    var leer = function (l) { var p = U.partes(l); return { t: p[0], e: p[1] || '' }; };
    var buenos = datos.correctos.map(leer), malos = datos.incorrectos.map(leer);

    /** Camino aleatorio desde (0,0) hasta la esquina opuesta, con algunas vueltas. */
    function camino() {
      for (var intento = 0; intento < 200; intento++) {
        var r = 0, c = 0, ruta = [[0, 0]], visto = { '0,0': 1 };
        for (var paso = 0; paso < 200 && !(r === filas - 1 && c === cols - 1); paso++) {
          var opciones = [[0, 1], [1, 0], [0, 1], [1, 0], [-1, 0], [0, -1]].filter(function (d) {
            var nr = r + d[0], nc = c + d[1];
            if (nr < 0 || nc < 0 || nr >= filas || nc >= cols || visto[nr + ',' + nc]) return false;
            // No tocar el camino ya hecho por los lados (para que sea un solo camino claro)
            var vecinosEnRuta = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(function (v) { return visto[(nr + v[0]) + ',' + (nc + v[1])]; }).length;
            return vecinosEnRuta === 1;
          });
          if (!opciones.length) break;
          var d = U.uno(opciones); r += d[0]; c += d[1];
          visto[r + ',' + c] = 1; ruta.push([r, c]);
        }
        if (r === filas - 1 && c === cols - 1) return ruta;
      }
      // Respaldo: camino en forma de escalera
      var res = [[0, 0]]; r = 0; c = 0;
      while (r < filas - 1 || c < cols - 1) { if (c < cols - 1 && (r === filas - 1 || Math.random() < .5)) c++; else r++; res.push([r, c]); }
      return res;
    }

    var posicion, ruta, enRuta, casillas, contenido, teclado;
    var pasosTotales = 0;
    function jugar() {
      area.innerHTML = '';
      ruta = camino(); enRuta = {};
      ruta.forEach(function (p, i) { enRuta[p[0] + ',' + p[1]] = i; });
      if (ronda === 0) { pasosTotales = 0; }
      ctx.total(rondas);
      var bolsaB = U.barajar(buenos), bolsaM = U.barajar(malos), ib = 0, im = 0;
      contenido = {}; casillas = {};
      var tabla = el('div', { class: 'laberinto', style: { 'grid-template-columns': 'repeat(' + cols + ', auto)' } });
      for (var r = 0; r < filas; r++) for (var c = 0; c < cols; c++) {
        var k = r + ',' + c, val;
        if (k === '0,0') val = { t: '🐰' };
        else if (r === filas - 1 && c === cols - 1) val = { t: '⭐', meta: true };
        else if (enRuta[k] !== undefined) val = Object.assign({ bueno: true }, bolsaB[ib++ % bolsaB.length]);
        else val = Object.assign({ bueno: false }, bolsaM[im++ % bolsaM.length]);
        contenido[k] = val;
        var b = el('button', { class: 'casa' + (val.meta ? ' meta' : '') }, val.t);
        b.onclick = (function (rr, cc) { return function () { mover(rr, cc); }; })(r, c);
        casillas[k] = b; tabla.appendChild(b);
      }
      posicion = [0, 0];
      casillas['0,0'].classList.add('jugador');
      area.appendChild(el('div', { class: 'centro' }, [el('div', { class: 'regla' }, '📏 Regla: ' + datos.regla), tabla,
        el('div', { style: { color: '#5c677d' } }, 'Laberinto ' + (ronda + 1) + ' de ' + rondas)]));
      marcarVecinas();
    }
    function vecinas() {
      var r = posicion[0], c = posicion[1];
      return [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]].filter(function (p) { return p[0] >= 0 && p[1] >= 0 && p[0] < filas && p[1] < cols; });
    }
    function marcarVecinas() {
      Object.keys(casillas).forEach(function (k) { casillas[k].classList.remove('vecina'); });
      vecinas().forEach(function (p) { var b = casillas[p[0] + ',' + p[1]]; if (!b.classList.contains('pisada') && !b.classList.contains('tropiezo')) b.classList.add('vecina'); });
    }
    function mover(r, c) {
      var esVecina = vecinas().some(function (p) { return p[0] === r && p[1] === c; });
      if (!esVecina) return;
      var k = r + ',' + c, v = contenido[k], b = casillas[k];
      if (b.classList.contains('pisada') || b.classList.contains('tropiezo')) {
        if (b.classList.contains('pisada')) irA(r, c);
        return;
      }
      if (v.meta || v.bueno) {
        ctx.acierto('', true);
        b.classList.add('pisada');
        irA(r, c);
        if (v.meta) {
          ctx.avance();
          ctx.mensaje('¡Llegaste a la meta!', 'Seguiste la regla: ' + datos.regla, '🏁');
          ronda++;
          if (ronda < rondas) ctx.esperar(jugar, 2200); else ctx.terminar(1800);
        }
      } else {
        b.classList.add('tropiezo');
        ctx.fallo(v.e ? v.e : '"' + v.t + '" no cumple la regla: ' + datos.regla);
      }
      marcarVecinas();
    }
    function irA(r, c) {
      var ant = casillas[posicion[0] + ',' + posicion[1]];
      ant.classList.remove('jugador');
      if (ant.textContent === '🐰') ant.textContent = contenido[posicion[0] + ',' + posicion[1]].t === '🐰' ? '' : contenido[posicion[0] + ',' + posicion[1]].t;
      posicion = [r, c];
      var b = casillas[r + ',' + c];
      b.classList.add('jugador'); b.textContent = '🐰';
      marcarVecinas();
    }
    teclado = function (ev) {
      var m = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[ev.key];
      if (m) { ev.preventDefault(); mover(posicion[0] + m[0], posicion[1] + m[1]); }
    };
    document.addEventListener('keydown', teclado);
    ctx.alSalir(function () { document.removeEventListener('keydown', teclado); });
    jugar();
  }
});
