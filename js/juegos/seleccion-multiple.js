/* =========================================================
   SELECCIÓN MÚLTIPLE  (también: Completar, Comprensión lectora,
   Verdadero o falso, Identificar imágenes, Adivina la palabra)

   Formato de cada pregunta (en los archivos de contenidos):
     "visual :: pregunta | correcta | opción2 | opción3 || explicación"
   - "visual ::" es opcional (emojis grandes que acompañan la pregunta).
   - La primera opción SIEMPRE es la correcta (el juego las mezcla).
   - "___" dentro de la pregunta se muestra como un espacio a completar.
   ========================================================= */
(function () {
  var U = AJ.util;

  /** Convierte una línea de texto en un objeto pregunta. */
  function leer(linea) {
    var partesExp = String(linea).split('||');
    var p = U.partes(partesExp[0]);
    var visual = null, texto = p[0];
    if (texto.indexOf('::') >= 0) { var v = texto.split('::'); visual = v[0].trim(); texto = v[1].trim(); }
    return { visual: visual, texto: texto, correcta: p[1], opciones: p.slice(1).filter(Boolean), explica: (partesExp[1] || '').trim() };
  }

  /** Arma la lista de preguntas a partir de los datos o de un generador matemático. */
  function preparar(datos) {
    var lista;
    if (datos.generador) {
      lista = [];
      var vistos = {};
      for (var i = 0, intentos = 0; lista.length < (datos.cantidad || 8) && intentos < 200; intentos++) {
        var g = AJ.generadores.crear(datos.generador);
        var clave = g.texto + "|" + (g.visual || "") + "|" + g.respuesta;
        if (vistos[clave]) continue;
        vistos[clave] = 1;
        var resp = typeof g.respuesta === 'number' ? U.num(g.respuesta) : String(g.respuesta);
        var ops = AJ.generadores.opciones(g.respuesta);
        lista.push({ visual: g.visual, texto: g.texto + (datos.sinIgual || /[¿?]/.test(g.texto) ? '' : ' = ¿?'), correcta: resp, opciones: ops, explica: g.explica });
      }
      return lista;
    }
    lista = (datos.preguntas || []).map(leer);
    if (!datos.enOrden) lista = U.barajar(lista);
    if (datos.cantidad) lista = lista.slice(0, datos.cantidad);
    return lista;
  }

  function mostrarTexto(el, texto, relleno) {
    var cont = el('div', { class: 'pregunta-grande' });
    var partes = texto.split('___');
    partes.forEach(function (t, i) {
      cont.appendChild(document.createTextNode(t));
      if (i < partes.length - 1) cont.appendChild(el('span', { class: 'hueco' }, relleno || ' ? '));
    });
    return cont;
  }

  function seleccion(area, datos, ctx) {
    var el = ctx.el, preguntas = preparar(datos), i = 0;
    ctx.total(preguntas.length);

    var lectura = datos.lectura ? el('div', { class: 'lectura' }, [
      datos.tituloLectura ? el('h3', { style: { margin: '0 0 .4rem' } }, datos.tituloLectura) : null,
      el('div', { html: U.esc(datos.lectura).replace(/\n/g, '<br>') })
    ]) : null;

    function mostrar() {
      area.innerHTML = '';
      var q = preguntas[i], fallos = 0, bloqueado = false;
      var zona = el('div', { class: 'centro' });
      if (lectura) zona.appendChild(lectura);
      if (q.visual) zona.appendChild(el('div', { class: 'visual-grande' }, q.visual));
      var enunciado = mostrarTexto(el, q.texto);
      zona.appendChild(enunciado);
      var cajaOps = el('div', { class: 'opciones' });
      U.barajar(q.opciones).forEach(function (op) {
        var b = el('button', { class: 'opcion' }, op);
        b.addEventListener('click', function () {
          if (bloqueado || b.disabled) return;
          if (op === q.opciones[0]) { // la primera opción es la correcta (exacta, con tildes)
            bloqueado = true;
            b.classList.add('correcta');
            if (q.texto.indexOf('___') >= 0) { var h = enunciado.querySelector('.hueco'); if (h) h.textContent = op; }
            ctx.acierto(q.explica);
            siguiente(q.explica);
          } else {
            fallos++;
            b.classList.add('intento'); b.disabled = true;
            if (fallos >= 2 || q.opciones.length <= 2) {
              bloqueado = true;
              cajaOps.querySelectorAll('.opcion').forEach(function (x) { if (x.textContent === q.opciones[0]) x.classList.add('correcta'); });
              ctx.fallo('La respuesta es: ' + q.correcta + '. ' + (q.explica || ''));
              siguiente(q.explica, true);
            } else {
              ctx.fallo(datos.pistaAlFallar === false ? 'Lee otra vez con calma.' : 'Mira bien y elige otra opción.');
            }
          }
        });
        cajaOps.appendChild(b);
      });
      zona.appendChild(cajaOps);
      area.appendChild(zona);
    }

    function siguiente(explica, mostrada) {
      ctx.avance();
      var espera = 1300 + (explica ? Math.min(3500, explica.length * 35) : 0) + (mostrada ? 900 : 0);
      ctx.esperar(function () {
        i++;
        if (i < preguntas.length) mostrar(); else ctx.terminar(200);
      }, espera);
    }
    mostrar();
  }

  AJ.registrarJuego('seleccion', { nombre: 'Selección múltiple', instrucciones: 'Lee la pregunta y toca la respuesta correcta.', iniciar: seleccion });
  AJ.registrarJuego('completar', { nombre: 'Completar', instrucciones: 'Elige la palabra o número que completa correctamente.', iniciar: seleccion });
  AJ.registrarJuego('lectura', { nombre: 'Comprensión de lectura', instrucciones: 'Lee el texto con atención y responde las preguntas.', iniciar: function (a, d, c) { d.enOrden = true; seleccion(a, d, c); } });

  /* ---------------- VERDADERO O FALSO ----------------
     Formato: "afirmación | V || explicación"  (V = verdadero, F = falso) */
  AJ.registrarJuego('vf', {
    nombre: 'Verdadero o falso',
    instrucciones: 'Lee cada frase y decide si es VERDADERA o FALSA.',
    iniciar: function (area, datos, ctx) {
      var el = ctx.el;
      var lista = U.barajar((datos.afirmaciones || []).map(function (l) {
        var e = String(l).split('||'), p = U.partes(e[0]);
        var visual = null, texto = p[0];
        if (texto.indexOf('::') >= 0) { var v = texto.split('::'); visual = v[0].trim(); texto = v[1].trim(); }
        return { visual: visual, texto: texto, v: /^v/i.test(p[1]), explica: (e[1] || '').trim() };
      }));
      if (datos.cantidad) lista = lista.slice(0, datos.cantidad);
      var i = 0;
      ctx.total(lista.length);
      function mostrar() {
        area.innerHTML = '';
        var q = lista[i], listo = false;
        var responder = function (valor, boton) {
          if (listo) return; listo = true;
          if (valor === q.v) { boton.classList.add('correcta'); ctx.acierto(q.explica); }
          else { boton.classList.add('intento'); ctx.fallo('Es ' + (q.v ? 'VERDADERO' : 'FALSO') + '. ' + q.explica); }
          ctx.avance();
          ctx.esperar(function () { i++; if (i < lista.length) mostrar(); else ctx.terminar(200); }, 1800 + Math.min(3500, q.explica.length * 35));
        };
        var bV = el('button', { class: 'opcion', style: { 'font-size': '1.8rem' } }, '✔ VERDADERO');
        var bF = el('button', { class: 'opcion', style: { 'font-size': '1.8rem' } }, '✖ FALSO');
        bV.onclick = function () { responder(true, bV); };
        bF.onclick = function () { responder(false, bF); };
        area.appendChild(el('div', { class: 'centro' }, [
          q.visual ? el('div', { class: 'visual-grande' }, q.visual) : null,
          el('div', { class: 'pregunta-grande' }, q.texto),
          el('div', { class: 'opciones', style: { 'max-width': '700px' } }, [bV, bF])
        ]));
      }
      mostrar();
    }
  });
})();
