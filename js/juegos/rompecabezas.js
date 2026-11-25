/* =========================================================
   ROMPECABEZAS
   Formato:
     imagenes: [{ dibujo: 'planta', titulo: 'Partes de la planta',
                  dato: 'La raíz absorbe el agua del suelo...' }, ...]
   "dibujo" es el nombre de un dibujo de js/dibujos.js.
   El niño intercambia piezas tocando dos de ellas.
   Al terminar aparece un dato para aprender sobre la imagen.
   ========================================================= */
AJ.registrarJuego('rompecabezas', {
  nombre: 'Rompecabezas',
  instrucciones: 'Toca dos piezas para cambiarlas de lugar hasta armar la imagen. Mira el modelo pequeño como guía.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var imagenes = datos.imagenes, k = 0;
    var tam = datos.tam || (ctx.grado <= 2 ? 3 : 4);
    ctx.total(imagenes.length);

    function jugar() {
      area.innerHTML = '';
      var img = imagenes[k], fondo = AJ.dibujos.comoImagen(img.dibujo);
      var total = tam * tam, orden = [];
      for (var i = 0; i < total; i++) orden.push(i);
      do { orden = U.barajar(orden); } while (orden.every(function (v, i) { return v === i; }));
      var tablero = el('div', { class: 'puzzle', style: { 'grid-template-columns': 'repeat(' + tam + ', 1fr)' } });
      var elegida = null, resuelto = false;

      function pintar() {
        tablero.innerHTML = '';
        orden.forEach(function (pieza, pos) {
          var x = pieza % tam, y = Math.floor(pieza / tam);
          var b = el('button', { class: 'pieza' + (pieza === pos ? ' en-sitio' : ''), 'aria-label': 'Pieza', style: {
            'background-image': fondo, 'background-size': (tam * 100) + '% ' + (tam * 100) + '%',
            'background-position': (x * 100 / (tam - 1)) + '% ' + (y * 100 / (tam - 1)) + '%', 'background-color': '#fff' } });
          b.onclick = function () { tocar(pos, b); };
          tablero.appendChild(b);
        });
      }
      function tocar(pos, b) {
        if (resuelto) return;
        if (elegida === null) { elegida = pos; b.classList.add('elegida'); ctx.sonido('clic'); return; }
        if (elegida === pos) { elegida = null; b.classList.remove('elegida'); return; }
        var a = elegida; elegida = null;
        var antes = (orden[a] === a ? 1 : 0) + (orden[pos] === pos ? 1 : 0);
        var t = orden[a]; orden[a] = orden[pos]; orden[pos] = t;
        var despues = (orden[a] === a ? 1 : 0) + (orden[pos] === pos ? 1 : 0);
        if (despues > antes) ctx.acierto('', true); else ctx.fallo('', true);
        pintar();
        if (orden.every(function (v, i) { return v === i; })) {
          resuelto = true;
          tablero.classList.add('resuelto');
          ctx.avance();
          ctx.mensaje('¡Rompecabezas armado!', img.dato, '🧩');
          ctx.sonido('victoria');
          info.appendChild(el('div', { class: 'explicacion' }, '📚 ' + img.dato));
          ctx.esperar(function () { k++; if (k < imagenes.length) jugar(); else ctx.terminar(300); }, 4500);
        }
      }
      pintar();
      var info = el('div', { class: 'centro', style: { 'max-width': '360px' } }, [
        el('div', { style: { 'font-weight': '800' } }, '👀 Modelo'),
        el('img', { class: 'puzzle-guia', src: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(AJ.dibujos[img.dibujo]()), alt: 'Modelo' }),
        el('div', { style: { color: '#5c677d' } }, 'Imagen ' + (k + 1) + ' de ' + imagenes.length)
      ]);
      area.appendChild(el('div', { class: 'centro' }, [
        el('div', { class: 'pregunta-grande' }, img.titulo),
        el('div', { class: 'ruleta-zona' }, [tablero, info])
      ]));
    }
    jugar();
  }
});
