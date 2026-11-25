/* =========================================================
   PALABRAS REVUELTAS / ADIVINA LA PALABRA
   Formato: palabras: ["MARIPOSA | 🦋 Insecto con alas de colores", ...]
   El niño lee la pista y ordena las letras para formar la palabra.
   ========================================================= */
AJ.registrarJuego('revueltas', {
  nombre: 'Palabras revueltas',
  instrucciones: 'Lee la pista y toca las letras en orden para formar la palabra. Toca una casilla para devolver la letra.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var lista = U.barajar(datos.palabras).slice(0, datos.cantidad || 8).map(function (l) {
      var p = U.partes(l); return { palabra: U.normalizar(p[0]).replace(/[^A-ZÑ]/g, ''), original: p[0], pista: p[1] || '' };
    });
    var k = 0;
    ctx.total(lista.length);

    function jugar() {
      area.innerHTML = '';
      var w = lista[k], letras = w.palabra.split(''), puestas = [], fallos = 0, listo = false;
      var mezcla = U.barajar(letras.map(function (l, i) { return { l: l, i: i } }));
      if (mezcla.map(function (x) { return x.l; }).join('') === w.palabra && letras.length > 1) mezcla.reverse();
      var resp = el('div', { class: 'respuesta-letras' });
      var huecos = letras.map(function (_, i) {
        var h = el('div', { class: 'hueco-letra' });
        h.onclick = function () { devolver(i); };
        resp.appendChild(h); return h;
      });
      var banco = el('div', { class: 'letras-banco' });
      var botones = mezcla.map(function (x) {
        var b = el('button', { class: 'letra-btn' }, x.l);
        b.onclick = function () {
          if (listo || puestas.length >= letras.length) return;
          ctx.sonido('clic');
          puestas.push({ l: x.l, b: b }); b.disabled = true;
          pintar();
          if (puestas.length === letras.length) comprobar();
        };
        banco.appendChild(b); return b;
      });
      function pintar() { huecos.forEach(function (h, i) { h.textContent = puestas[i] ? puestas[i].l : ''; }); }
      function devolver(i) {
        if (listo || !puestas[i]) return;
        puestas.splice(i).forEach(function (p) { p.b.disabled = false; });
        pintar();
      }
      function comprobar() {
        var txt = puestas.map(function (p) { return p.l; }).join('');
        if (txt === w.palabra) {
          listo = true; resp.classList.add('bien');
          ctx.acierto('La palabra es ' + w.original.toUpperCase() + '.');
          ctx.avance();
          ctx.esperar(function () { k++; if (k < lista.length) jugar(); else ctx.terminar(200); }, 2000);
        } else {
          fallos++;
          // Dejamos las letras correctas del comienzo y devolvemos las demás
          var bien = 0; while (bien < txt.length && txt[bien] === w.palabra[bien]) bien++;
          if (fallos >= 2) bien = Math.max(bien, Math.min(letras.length - 1, fallos)); // ayuda progresiva
          puestas.splice(0).forEach(function (p) { p.b.disabled = false; });
          for (var i = 0; i < bien; i++) {
            var b = botones.filter(function (bb) { return !bb.disabled && bb.textContent === w.palabra[i]; })[0];
            if (b) { b.disabled = true; puestas.push({ l: w.palabra[i], b: b }); }
          }
          pintar();
          ctx.fallo(bien ? 'Las primeras ' + bien + ' letras ya están bien. ¡Completa el resto!' : 'Fíjate en la pista y piensa con qué letra empieza.');
        }
      }
      area.appendChild(el('div', { class: 'centro' }, [
        el('div', { class: 'pregunta-grande' }, w.pista),
        el('div', { style: { color: '#5c677d', 'font-weight': '700' } }, 'La palabra tiene ' + letras.length + ' letras'),
        resp, banco,
        el('button', { class: 'btn secundario', onclick: function () { devolver(0); } }, '↩ Borrar todo')
      ]));
    }
    jugar();
  }
});
