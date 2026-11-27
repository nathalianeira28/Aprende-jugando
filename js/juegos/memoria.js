/* =========================================================
   MEMORIA DE PAREJAS
   Formato: pares: ["🐶 | dog", "3 × 4 | 12", ...]
   Cada par se convierte en dos cartas distintas que se
   corresponden (imagen-palabra, operación-resultado, etc.).
   ========================================================= */
AJ.registrarJuego('memoria', {
  nombre: 'Memoria de parejas',
  instrucciones: 'Voltea dos cartas. Si se corresponden, ¡encontraste una pareja! Recuerda dónde está cada carta.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var soloEmoji = /^(\p{Extended_Pictographic}|️|‍|\s)+$/u;
    var pares = U.barajar(datos.pares).slice(0, datos.cantidad || 6).map(function (l, i) {
      var p = U.partes(l); return { a: p[0], b: p[1], id: i };
    });
    var cartas = [];
    pares.forEach(function (p) {
      cartas.push({ texto: p.a, id: p.id, par: p });
      cartas.push({ texto: p.b, id: p.id, par: p });
    });
    cartas = U.barajar(cartas);
    var n = cartas.length, cols = n <= 8 ? 4 : (n <= 12 ? 6 : 8);
    // En el celular se usan menos columnas (ver estilos.css) para que las cartas queden grandes
    var colsMovil = n <= 12 ? 3 : 4;
    var tablero = el('div', { class: 'tablero-memoria', style: { '--cols': cols, '--cols-movil': colsMovil, 'max-width': (cols * 160) + 'px' } });
    var abiertas = [], bloqueo = false, encontradas = 0, desaciertos = 0;
    ctx.total(pares.length);

    cartas.forEach(function (c) {
      var frente = el('div', { class: 'cara frente' + (soloEmoji.test(c.texto) ? ' emoji' : '') }, c.texto);
      var b = el('button', { class: 'carta', 'aria-label': 'Carta' }, el('div', { class: 'interior' }, [el('div', { class: 'cara reverso' }, '?'), frente]));
      b.addEventListener('click', function () {
        if (bloqueo || b.classList.contains('volteada') || b.classList.contains('pareja')) return;
        ctx.sonido('voltear');
        b.classList.add('volteada');
        abiertas.push({ b: b, c: c });
        if (abiertas.length === 2) {
          bloqueo = true;
          var x = abiertas[0], y = abiertas[1];
          if (x.c.id === y.c.id) {
            ctx.esperar(function () {
              x.b.classList.add('pareja'); y.b.classList.add('pareja');
              encontradas++;
              ctx.acierto(x.c.par.a + '  =  ' + x.c.par.b);
              ctx.avance();
              abiertas = []; bloqueo = false;
              if (encontradas === pares.length) ctx.terminar(1800);
            }, 450);
          } else {
            desaciertos++;
            // Equivocarse es normal en la memoria: solo cuenta "por mejorar"
            // cuando hay más intentos fallidos que parejas.
            if (desaciertos > pares.length) ctx.fallo('', true);
            ctx.esperar(function () {
              x.b.classList.remove('volteada'); y.b.classList.remove('volteada');
              abiertas = []; bloqueo = false;
            }, 1100);
          }
        }
      });
      tablero.appendChild(b);
    });
    area.appendChild(tablero);
  }
});
