/* =========================================================
   ENCUENTRA LAS DIFERENCIAS
   Formato: objetos: ['🌳 | árbol', '🏠 | casa', ...]
   Se arman dos escenas iguales y se cambian algunos objetos.
   El niño toca en la escena de la derecha lo que cambió.
   Entrena la observación y el vocabulario.
   ========================================================= */
AJ.registrarJuego('diferencias', {
  nombre: 'Encuentra las diferencias',
  instrucciones: 'Observa las dos imágenes. Toca en la imagen de la DERECHA los objetos que son diferentes.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var objetos = datos.objetos.map(function (l) { var p = U.partes(l); return { e: p[0], n: p[1] || p[0] }; });
    var cols = datos.cols || 5, filas = datos.filas || 3;
    var cuantas = datos.cantidad || Math.min(7, 2 + ctx.grado);
    var rondas = datos.rondas || 2, ronda = 0;
    ctx.total(cuantas * rondas);

    function jugar() {
      area.innerHTML = '';
      var n = cols * filas, izq = [], der = [];
      for (var i = 0; i < n; i++) izq.push(Math.random() < .15 ? null : U.uno(objetos));
      der = izq.slice();
      var cambios = U.barajar(Array.from({ length: n }, function (_, i) { return i; })).slice(0, cuantas);
      cambios.forEach(function (i) {
        var nuevo;
        if (izq[i] === null) nuevo = U.uno(objetos);
        else if (Math.random() < .25) nuevo = null;
        else { do { nuevo = U.uno(objetos); } while (nuevo === izq[i] && objetos.length > 1); }
        der[i] = nuevo;
      });
      var halladas = 0;
      function escena(lista, clicable) {
        var e = el('div', { class: 'dif-escena', style: { 'grid-template-columns': 'repeat(' + cols + ', auto)' } });
        lista.forEach(function (o, i) {
          var c = el('div', { class: 'obj', 'data-i': i }, o ? o.e : '');
          if (clicable) c.onclick = function () { tocar(i); };
          e.appendChild(c);
        });
        return e;
      }
      var A = escena(izq, true), B = escena(der, true);
      function tocar(i) {
        var a = A.children[i], b = B.children[i];
        if (b.classList.contains('hallada')) return;
        if (cambios.indexOf(i) >= 0) {
          a.classList.add('hallada'); b.classList.add('hallada'); halladas++;
          var antes = izq[i] ? izq[i].n : 'nada', despues = der[i] ? der[i].n : 'nada';
          ctx.acierto(antes === 'nada' ? 'Apareció: ' + despues : (despues === 'nada' ? 'Desapareció: ' + antes : antes + ' → ' + despues));
          ctx.avance();
          if (halladas === cuantas) {
            ronda++;
            if (ronda < rondas) ctx.esperar(jugar, 2000); else ctx.terminar(1800);
          }
        } else ctx.fallo('Ahí las dos imágenes son iguales. ¡Observa con atención!');
      }
      area.appendChild(el('div', { class: 'centro' }, [
        el('div', { class: 'regla' }, '🔍 Encuentra ' + cuantas + ' diferencias · Imagen ' + (ronda + 1) + ' de ' + rondas),
        el('div', { class: 'dif-zona' }, [A, B])
      ]));
    }
    jugar();
  }
});
