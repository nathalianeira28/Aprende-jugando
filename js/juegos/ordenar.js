/* =========================================================
   ORDENAR SECUENCIAS
   Formato:
     secuencias: [
       { titulo: 'Ciclo de vida de la planta', items: ['🌰 Semilla', '🌱 Germina', ...], explica: '...' },
       ...
     ]
   Los items se escriben EN EL ORDEN CORRECTO; el juego los mezcla.
   El niño toca (o arrastra) cada ficha a su casilla y pulsa COMPROBAR.
   ========================================================= */
AJ.registrarJuego('ordenar', {
  nombre: 'Ordenar',
  instrucciones: 'Toca las fichas en el orden correcto (o arrástralas a las casillas). Luego pulsa COMPROBAR.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var secuencias = datos.enOrden ? datos.secuencias.slice() : U.barajar(datos.secuencias);
    if (datos.cantidad) secuencias = secuencias.slice(0, datos.cantidad);
    var k = 0;
    ctx.total(secuencias.length);

    function jugar() {
      area.innerHTML = '';
      var s = secuencias[k], n = s.items.length, intentosRonda = 0;
      var colocadas = new Array(n).fill(null);
      var banco = el('div', { class: 'banco', 'data-destino': 'banco' });
      var casillas = el('div', { class: 'casillas' });
      var slots = [];
      for (var i = 0; i < n; i++) {
        var slot = el('div', { class: 'casilla', 'data-destino': 'slot', 'data-i': i }, el('span', { class: 'n' }, String(i + 1)));
        slot.addEventListener('click', (function (idx) { return function () { quitar(idx); }; })(i));
        slots.push(slot); casillas.appendChild(slot);
        if (i < n - 1 && !datos.sinFlechas) casillas.appendChild(el('span', { class: 'flecha-orden' }, '➜'));
      }
      var fichas = U.barajar(s.items.map(function (t, i) { return { texto: t, pos: i }; }));
      // Evita que salga ya ordenado
      if (fichas.every(function (f, i) { return f.pos === i; }) && n > 1) fichas.reverse();
      fichas.forEach(function (f) {
        f.nodo = el('div', { class: 'ficha' }, f.texto);
        f.nodo.addEventListener('click', function () { if (f.nodo._arrastrado) return; if (f.nodo.parentNode === banco) poner(f, colocadas.indexOf(null)); else quitar(+f.nodo.parentNode.dataset.i); });
        U.arrastrable(f.nodo, function (destino) {
          if (destino.dataset.destino === 'slot') poner(f, +destino.dataset.i);
          else if (destino.dataset.destino === 'banco') { var idx = colocadas.indexOf(f); if (idx >= 0) quitar(idx); }
        });
        banco.appendChild(f.nodo);
      });
      function poner(f, idx) {
        if (idx < 0 || f.nodo.classList.contains('bien')) return;
        ctx.sonido('clic');
        var anterior = colocadas.indexOf(f);
        if (anterior >= 0) colocadas[anterior] = null;
        if (colocadas[idx] && colocadas[idx] !== f) { var otra = colocadas[idx]; if (otra.nodo.classList.contains('bien')) return; colocadas[idx] = null; banco.appendChild(otra.nodo); }
        colocadas[idx] = f; slots[idx].appendChild(f.nodo);
        btn.disabled = colocadas.indexOf(null) >= 0;
      }
      function quitar(idx) {
        var f = colocadas[idx];
        if (!f || f.nodo.classList.contains('bien')) return;
        colocadas[idx] = null; banco.appendChild(f.nodo);
        btn.disabled = true;
      }
      var btn = el('button', { class: 'btn verde', disabled: true }, '✔ Comprobar');
      btn.onclick = function () {
        var bien = 0;
        colocadas.forEach(function (f, i) {
          if (f && f.pos === i) { bien++; f.nodo.classList.add('bien'); slots[i].classList.add('bien'); }
        });
        if (bien === n) {
          ctx.acierto(s.explica || '¡Orden correcto!');
          ctx.avance();
          btn.disabled = true;
          ctx.esperar(function () { k++; if (k < secuencias.length) jugar(); else ctx.terminar(200); }, 2000 + Math.min(3000, (s.explica || '').length * 30));
        } else {
          intentosRonda++;
          colocadas.forEach(function (f, i) { if (f && f.pos !== i) { colocadas[i] = null; banco.appendChild(f.nodo); } });
          btn.disabled = true;
          ctx.fallo('Tienes ' + bien + ' de ' + n + ' en su lugar (en verde). Ordena las demás.' + (intentosRonda >= 2 && s.pista ? ' Pista: ' + s.pista : ''));
        }
      };
      area.appendChild(el('div', { class: 'centro' }, [
        el('div', { class: 'pregunta-grande' }, s.titulo),
        s.ayuda ? el('div', { class: 'regla' }, s.ayuda) : null,
        casillas, banco, btn
      ]));
    }
    jugar();
  }
});
