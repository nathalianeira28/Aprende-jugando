/* =========================================================
   RULETA DE PREGUNTAS
   Formato:
     secciones: {
       'Sumas':  { generador: 'suma1' },                 // preguntas automáticas
       'Formas': ['¿Cuántos lados tiene un triángulo? | 3 | 4 | 5 || Tri = tres', ...]
     },
     rondas: 8
   Se gira la ruleta, cae en un tema y aparece una pregunta.
   ========================================================= */
AJ.registrarJuego('ruleta', {
  nombre: 'Ruleta de preguntas',
  instrucciones: 'Pulsa GIRAR. La ruleta elige un tema y te hace una pregunta. ¡Responde bien para ganar puntos!',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var nombres = Object.keys(datos.secciones);
    var colores = ['#fa5252', '#fab005', '#40c057', '#228be6', '#7950f2', '#f783ac', '#15aabf', '#fd7e14'];
    var bolsas = {};
    nombres.forEach(function (n) { var s = datos.secciones[n]; bolsas[n] = Array.isArray(s) ? U.barajar(s) : []; });
    var rondas = datos.rondas || 8, hechas = 0, giro = 0, girando = false;
    ctx.total(rondas);

    // ---- Dibujo de la ruleta ----
    var N = nombres.length, R = 190, svg = '<svg class="rueda" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">';
    nombres.forEach(function (n, i) {
      var a1 = (i * 360 / N - 90) * Math.PI / 180, a2 = ((i + 1) * 360 / N - 90) * Math.PI / 180, med = ((i + .5) * 360 / N - 90);
      svg += '<path d="M200 200 L' + (200 + R * Math.cos(a1)) + ' ' + (200 + R * Math.sin(a1)) + ' A' + R + ' ' + R + ' 0 ' + (360 / N > 180 ? 1 : 0) + ' 1 ' + (200 + R * Math.cos(a2)) + ' ' + (200 + R * Math.sin(a2)) + ' Z" fill="' + colores[i % colores.length] + '" stroke="#fff" stroke-width="5"/>';
      svg += '<text x="' + (200 + 118 * Math.cos(med * Math.PI / 180)) + '" y="' + (200 + 118 * Math.sin(med * Math.PI / 180)) + '" transform="rotate(' + (med + 90) + ' ' + (200 + 118 * Math.cos(med * Math.PI / 180)) + ' ' + (200 + 118 * Math.sin(med * Math.PI / 180)) + ')" text-anchor="middle" dominant-baseline="middle" font-family="Arial Black,Arial" font-weight="900" font-size="' + (n.length > 10 ? 15 : 19) + '" fill="#fff">' + U.esc(n) + '</text>';
    });
    svg += '<circle cx="200" cy="200" r="30" fill="#fff" stroke="#343a40" stroke-width="5"/></svg>';
    var caja = el('div', { class: 'ruleta-caja', html: '<div class="puntero"></div>' + svg });
    var rueda = caja.querySelector('svg');
    var btnGirar = el('button', { class: 'btn naranja gigante' }, '🎡 GIRAR');
    var zonaPregunta = el('div', { class: 'ruleta-pregunta centro' }, el('div', { class: 'pregunta-grande' }, '¡Gira la ruleta para empezar!'));
    area.appendChild(el('div', { class: 'ruleta-zona' }, [el('div', { class: 'centro' }, [caja, btnGirar]), zonaPregunta]));

    function pregunta(nombre) {
      var s = datos.secciones[nombre];
      if (!Array.isArray(s)) {
        var g = AJ.generadores.crear(s.generador);
        var r = typeof g.respuesta === 'number' ? U.num(g.respuesta) : String(g.respuesta);
        return { visual: g.visual, texto: g.texto + (/[¿?]/.test(g.texto) ? '' : ' = ¿?'), correcta: r, opciones: AJ.generadores.opciones(g.respuesta), explica: g.explica };
      }
      if (!bolsas[nombre].length) bolsas[nombre] = U.barajar(s);
      var e = String(bolsas[nombre].pop()).split('||'), p = U.partes(e[0]), visual = null, texto = p[0];
      if (texto.indexOf('::') >= 0) { var v = texto.split('::'); visual = v[0].trim(); texto = v[1].trim(); }
      return { visual: visual, texto: texto, correcta: p[1], opciones: p.slice(1), explica: (e[1] || '').trim() };
    }

    btnGirar.onclick = function () {
      if (girando) return;
      girando = true; btnGirar.disabled = true;
      var i = U.azar(0, N - 1);
      var base = Math.ceil(giro / 360) * 360 + 360 * 4;
      giro = base - (i + .5) * 360 / N + U.azar(-12, 12) * (1 / N) * 3;
      rueda.style.transform = 'rotate(' + giro + 'deg)';
      ctx.sonido('ruleta');
      zonaPregunta.innerHTML = '';
      zonaPregunta.appendChild(el('div', { class: 'pregunta-grande' }, '🎡 Girando…'));
      ctx.esperar(function () { mostrar(nombres[i]); }, 3300);
    };

    function mostrar(nombre) {
      var q = pregunta(nombre), listo = false;
      zonaPregunta.innerHTML = '';
      zonaPregunta.appendChild(el('div', { class: 'regla' }, '🎯 Tema: ' + nombre));
      if (q.visual) zonaPregunta.appendChild(el('div', { class: 'visual-grande' }, q.visual));
      zonaPregunta.appendChild(el('div', { class: 'pregunta-grande' }, q.texto));
      var ops = el('div', { class: 'opciones' });
      U.barajar(q.opciones).forEach(function (o) {
        var b = el('button', { class: 'opcion' }, o);
        b.onclick = function () {
          if (listo) return; listo = true;
          if (o === q.opciones[0]) { b.classList.add('correcta'); ctx.acierto(q.explica); }
          else {
            b.classList.add('intento');
            ops.querySelectorAll('.opcion').forEach(function (x) { if (x.textContent === q.opciones[0]) x.classList.add('correcta'); });
            ctx.fallo('La respuesta es ' + q.correcta + '. ' + (q.explica || ''));
          }
          hechas++; ctx.avance();
          ctx.esperar(function () {
            if (hechas >= rondas) { ctx.terminar(200); return; }
            girando = false; btnGirar.disabled = false;
            zonaPregunta.appendChild(el('div', { class: 'explicacion' }, '👉 ¡Gira otra vez! Van ' + hechas + ' de ' + rondas + '.'));
          }, 1500 + Math.min(3000, (q.explica || '').length * 30));
        };
        ops.appendChild(b);
      });
      zonaPregunta.appendChild(ops);
    }
  }
});
