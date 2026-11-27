/* =========================================================
   APRENDE A USAR EL TECLADO
   Formato: palabras: ['MAMA', 'SOL', 'CASA 123', ...]
   Se muestra la palabra y se ilumina la tecla que sigue.
   Se puede escribir con el teclado real o tocando el virtual.
   ========================================================= */
AJ.registrarJuego('teclado', {
  nombre: 'Aprende el teclado',
  instrucciones: 'Escribe la palabra con el teclado del computador. La tecla amarilla es la que sigue. También puedes tocar las teclas de la pantalla.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var lista = (datos.enOrden ? datos.palabras.slice() : U.barajar(datos.palabras)).slice(0, datos.cantidad || 8).map(function (w) { return U.normalizar(w); });
    var filas = ['1234567890', 'QWERTYUIOP', 'ASDFGHJKLÑ', 'ZXCVBNM'];
    var k = 0, pos = 0, errores = 0, listo = false;
    ctx.total(lista.length);
    var objetivo = el('div', { class: 'objetivo-teclado' });
    var teclas = {};
    var virtual = el('div', { class: 'teclado-virtual' }, filas.map(function (f) {
      return el('div', { class: 'fila' }, f.split('').map(function (l) {
        var b = el('button', {}, l); b.onclick = function () { escribir(l); }; teclas[l] = b; return b;
      }));
    }).concat([el('div', { class: 'fila' }, [(function () { var b = el('button', { class: 'espacio' }, 'ESPACIO'); b.onclick = function () { escribir(' '); }; teclas[' '] = b; return b; })()])]));
    var consejo = el('div', { class: 'regla' }, '');
    area.appendChild(el('div', { class: 'centro' }, [consejo, objetivo, virtual]));

    function pintar() {
      var w = lista[k];
      objetivo.innerHTML = '';
      // Cada palabra va en su propio grupo para que, en pantallas angostas,
      // la frase baje de línea entre palabras y nunca en medio de una.
      var grupo = null;
      w.split('').forEach(function (l, i) {
        var letra = el('span', { class: i < pos ? 'hecha' : (i === pos ? 'sig' : '') }, l === ' ' ? '  ' : l);
        if (l === ' ') { grupo = null; objetivo.appendChild(letra); objetivo.appendChild(document.createTextNode('​')); return; }
        if (!grupo) { grupo = el('span', { class: 'palabra-teclado' }); objetivo.appendChild(grupo); }
        grupo.appendChild(letra);
      });
      Object.keys(teclas).forEach(function (t) { teclas[t].classList.remove('siguiente'); });
      var sig = w[pos];
      if (sig !== undefined && teclas[sig]) teclas[sig].classList.add('siguiente');
      consejo.textContent = sig === ' ' ? '⌨️ Pulsa la barra ESPACIADORA (la tecla larga de abajo)' :
        (/[0-9]/.test(sig || '') ? '⌨️ Los números están en la fila de arriba del teclado' : '⌨️ Busca la letra ' + (sig || '') + ' · Palabra ' + (k + 1) + ' de ' + lista.length);
    }
    function escribir(l) {
      if (listo) return;
      var w = lista[k];
      if (l === w[pos]) {
        ctx.sonido('clic'); pos++;
        if (pos >= w.length) {
          listo = true;
          ctx.acierto('Escribiste ' + w + ' correctamente.');
          ctx.avance();
          ctx.esperar(function () { k++; pos = 0; listo = false; if (k < lista.length) pintar(); else ctx.terminar(200); }, 1500);
        }
        pintar();
      } else {
        errores++;
        // Un error de tecla cuenta como "por mejorar" sin interrumpir con mensajes
        ctx.fallo('', true);
        var b = teclas[l]; if (b) { b.style.background = '#ffe8cc'; setTimeout(function () { b.style.background = ''; }, 300); }
      }
    }
    var fisico = function (ev) {
      if (ev.ctrlKey || ev.altKey || ev.metaKey) return;
      var l = ev.key === ' ' ? ' ' : U.normalizar(ev.key);
      if (l.length === 1) { ev.preventDefault(); escribir(l); }
    };
    document.addEventListener('keydown', fisico);
    ctx.alSalir(function () { document.removeEventListener('keydown', fisico); });
    pintar();
  }
});
