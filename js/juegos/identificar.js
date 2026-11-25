/* =========================================================
   IDENTIFICA LAS PARTES (en un dibujo)
   Formato:
     dibujo: 'computador',
     partes: ['monitor | Monitor | Muestra las imágenes y textos', ...]
   El primer valor es el data-parte del dibujo (js/dibujos.js),
   luego el nombre que se muestra y una explicación.
   El juego pide una parte y el niño la toca en el dibujo.
   ========================================================= */
AJ.registrarJuego('identificar', {
  nombre: 'Identifica las partes',
  instrucciones: 'Lee qué parte se pide y tócala en el dibujo.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var partes = U.barajar(datos.partes.map(function (l) { var p = U.partes(l); return { id: p[0], nombre: p[1], explica: p[2] || '' }; }));
    var k = 0, fallos = 0, ocupado = false;
    ctx.total(partes.length);
    var dibujo = el('div', { class: 'dibujo', html: AJ.dibujos[datos.dibujo]() });
    var pide = el('div', { class: 'pregunta-grande' });
    var halladas = el('div', { class: 'etiquetas-halladas' }, el('h3', { style: { margin: '0 0 .3rem' } }, '✅ Ya encontraste:'));
    area.appendChild(el('div', { class: 'centro' }, [pide, el('div', { class: 'identificar' }, [dibujo, halladas])]));

    function preguntar() { fallos = 0; pide.textContent = '👉 ' + (datos.pregunta || 'Toca: ') + partes[k].nombre.toUpperCase(); }
    var ids = partes.map(function (p) { return p.id; });
    dibujo.querySelectorAll('[data-parte]').forEach(function (g) {
      g.addEventListener('click', function () {
        if (ocupado || k >= partes.length) return;
        var id = g.getAttribute('data-parte'), p = partes[k];
        if (id === p.id) {
          ocupado = true;
          g.classList.add('hallada');
          ctx.acierto(p.nombre + (p.explica ? ': ' + p.explica : ''));
          ctx.avance();
          halladas.appendChild(el('div', {}, '✔ ' + p.nombre));
          k++;
          ctx.esperar(function () { ocupado = false; if (k < partes.length) preguntar(); else ctx.terminar(200); }, 1400 + Math.min(3000, p.explica.length * 30));
        } else {
          fallos++;
          var otra = partes.filter(function (x) { return x.id === id; })[0];
          var pista = otra ? 'Eso es: ' + otra.nombre + '. ' : (ids.indexOf(id) < 0 ? '' : '');
          if (fallos >= 2) {
            var correcta = dibujo.querySelector('[data-parte="' + p.id + '"]');
            correcta.style.animation = 'latido .6s 4';
            ctx.esperar(function () { correcta.style.animation = ''; }, 2600);
            ctx.fallo(pista + 'Mira la parte que se mueve: ese es el ' + p.nombre.toLowerCase() + '.');
          } else ctx.fallo(pista + 'Busca: ' + p.nombre + '. ' + (p.explica || ''));
        }
      });
    });
    preguntar();
  }
});
