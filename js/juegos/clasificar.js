/* =========================================================
   CLASIFICAR (arrastrar y soltar en grupos)
   Formato:
     categorias: ['Vertebrados', 'Invertebrados'],
     elementos: ['🐟 Pez | 0 || Tiene columna vertebral', '🐌 Caracol | 1', ...]
   El número indica a qué categoría pertenece (0 = la primera).
   ========================================================= */
AJ.registrarJuego('clasificar', {
  nombre: 'Clasificar',
  instrucciones: 'Arrastra cada ficha al grupo correcto. También puedes tocar la ficha y luego el grupo.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var elementos = U.barajar(datos.elementos.map(function (l) {
      var e = String(l).split('||'), p = U.partes(e[0]);
      return { texto: p[0], cat: +p[1], explica: (e[1] || '').trim() };
    }));
    if (datos.cantidad) elementos = elementos.slice(0, datos.cantidad);
    var elegido = null, hechos = 0;
    ctx.total(elementos.length);

    var cajas = datos.categorias.map(function (c, i) {
      var dentro = el('div', { class: 'dentro' });
      var caja = el('div', { class: 'caja', 'data-destino': 'cat', 'data-cat': i }, [el('h3', {}, c), dentro]);
      caja._dentro = dentro;
      caja.addEventListener('click', function () { if (elegido) soltar(elegido, caja); });
      return caja;
    });
    var banco = el('div', { class: 'banco' });
    elementos.forEach(function (it) {
      it.nodo = el('div', { class: 'ficha' }, it.texto);
      it.nodo.addEventListener('click', function (ev) {
        ev.stopPropagation();
        if (it.nodo._arrastrado || it.hecho) return;
        ctx.sonido('clic');
        banco.querySelectorAll('.elegida').forEach(function (x) { x.classList.remove('elegida'); });
        elegido = it; it.nodo.classList.add('elegida');
      });
      U.arrastrable(it.nodo, function (destino) { if (destino.dataset.destino === 'cat') soltar(it, destino); });
      banco.appendChild(it.nodo);
    });
    function soltar(it, caja) {
      elegido = null; it.nodo.classList.remove('elegida');
      if (+caja.dataset.cat === it.cat) {
        it.hecho = true; hechos++;
        it.nodo.classList.add('bien');
        caja._dentro.appendChild(it.nodo);
        ctx.acierto(it.texto + ' → ' + datos.categorias[it.cat] + (it.explica ? '. ' + it.explica : ''));
        ctx.avance();
        if (hechos === elementos.length) ctx.terminar(1800);
      } else {
        ctx.fallo(it.explica ? 'Piensa otra vez: ' + it.explica : '"' + it.texto + '" no va en ' + datos.categorias[+caja.dataset.cat] + '. ¡Prueba otro grupo!');
      }
    }
    area.appendChild(el('div', { class: 'centro' }, [
      datos.pregunta ? el('div', { class: 'pregunta-grande' }, datos.pregunta) : null,
      banco,
      el('div', { class: 'cajas-clasificar' }, cajas)
    ]));
  }
});
