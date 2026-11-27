/* =========================================================
   MOTOR DE JUEGOS
   Arma la pantalla de cualquier juego (título, instrucciones,
   progreso, aciertos/errores, botones) y le da a cada mecánica
   un objeto "ctx" para reportar aciertos, errores y el final.
   Cada mecánica se registra con AJ.registrarJuego(tipo, {...}).
   ========================================================= */
AJ.juegos = {};

/**
 * Registra una mecánica de juego.
 * def = { nombre: 'Sopa de letras', instrucciones: '...', iniciar: function (area, datos, ctx) {} }
 */
AJ.registrarJuego = function (tipo, def) { AJ.juegos[tipo] = def; };

AJ.motor = (function () {
  var el = function (a, b, c) { return AJ.util.el(a, b, c); };
  var limpiezas = [], temporizadores = [], timerMensaje = null;

  var FELICITAR = ['¡Excelente!', '¡Muy bien!', '¡Respuesta correcta!', '¡Genial!', '¡Lo lograste!', '¡Súper!', '¡Así se hace!'];
  var EMO_BIEN = ['🌟', '🎉', '👏', '😃', '🥳', '💪', '✨'];
  var ANIMAR = ['¡Casi lo consigues!', '¡Sigue intentando!', '¡Tú puedes!', '¡Inténtalo otra vez!', '¡Vas muy bien, sigue!'];
  var EMO_ANIMAR = ['🤔', '💡', '🙂', '🔍'];

  /** Muestra un mensaje flotante de retroalimentación. */
  // El letrero muestra solo el aviso corto (¡Genial!, ¡Casi lo consigues!…).
  // La explicación (detalle) ya no se muestra: no alcanzaba a leerse.
  function mensaje(titulo, detalle, tipo, emoji) {
    var caja = document.getElementById('mensaje');
    caja.className = 'mensaje' + (tipo === 'casi' ? ' casi' : '');
    caja.innerHTML = '';
    caja.appendChild(el('span', { class: 'emo' }, emoji || '🌟'));
    caja.appendChild(el('div', {}, titulo));
    void caja.offsetWidth;
    caja.classList.add('ver');
    clearTimeout(timerMensaje);
    var dura = 1600;
    timerMensaje = setTimeout(function () { caja.classList.remove('ver'); }, dura);
  }

  function ocultarMensaje() { clearTimeout(timerMensaje); var c = document.getElementById('mensaje'); if (c) c.classList.remove('ver'); }

  /** Lluvia de confeti para celebrar. */
  function confeti(cantidad) {
    var zona = document.getElementById('confeti');
    var colores = ['#fa5252', '#fcc419', '#40c057', '#228be6', '#be4bdb', '#ff922b'];
    for (var i = 0; i < (cantidad || 80); i++) {
      var p = document.createElement('i');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colores[i % colores.length];
      p.style.animationDuration = (1.8 + Math.random() * 2) + 's';
      p.style.animationDelay = (Math.random() * .6) + 's';
      zona.appendChild(p);
    }
    setTimeout(function () { zona.innerHTML = ''; }, 4600);
  }

  /** Detiene el juego actual: quita eventos del teclado, temporizadores, etc. */
  function detener() {
    limpiezas.forEach(function (f) { try { f(); } catch (e) { } });
    limpiezas = [];
    temporizadores.forEach(clearTimeout);
    temporizadores = [];
    ocultarMensaje();
  }

  /**
   * Abre un juego en el contenedor indicado.
   * opciones = { juego, materia, grado, alVolver(), alTerminar(resultado) }
   */
  function abrir(contenedor, opciones) {
    detener();
    var juego = opciones.juego, def = AJ.juegos[juego.tipo];
    if (!def) { contenedor.appendChild(el('p', {}, 'Este juego no está disponible.')); return; }

    var estado = { aciertos: 0, errores: 0, total: 0, hecho: 0, terminado: false };

    var txtAciertos = el('span', { class: 'dato ok' }, '✔ Aciertos: 0');
    var txtErrores = el('span', { class: 'dato no' }, '💡 Por mejorar: 0');
    var txtProgreso = el('span', { class: 'dato' }, '');
    var barra = el('div');
    var area = el('div', { class: 'area-juego' });

    var pantalla = el('section', { class: 'juego' }, [
      el('div', { class: 'juego-cabecera' }, [
        el('div', {}, [
          el('h1', {}, (juego.icono ? juego.icono + ' ' : '') + juego.titulo),
          el('div', { class: 'aprende-j' }, '🎯 Aprende: ' + juego.aprende)
        ]),
        el('div', { class: 'derecha' }, [
          el('button', { class: 'btn secundario', onclick: function () { AJ.sonido.tocar('clic'); iniciar(); } }, '🔄 Reiniciar'),
          el('button', { class: 'btn secundario', onclick: function () { AJ.sonido.tocar('clic'); detener(); opciones.alVolver(); } }, '⬅ Volver a los juegos')
        ])
      ]),
      el('div', { class: 'instrucciones' }, [el('span', { class: 'bombillo' }, '💡'), el('span', {}, juego.instrucciones || def.instrucciones)]),
      el('div', { class: 'marcador' }, [txtProgreso, el('div', { class: 'barra-progreso' }, barra), txtAciertos, txtErrores]),
      area
    ]);
    contenedor.appendChild(pantalla);

    function pintar() {
      txtAciertos.textContent = '✔ Aciertos: ' + estado.aciertos;
      txtErrores.textContent = '💡 Por mejorar: ' + estado.errores;
      txtProgreso.textContent = estado.total ? ('📍 ' + Math.min(estado.hecho, estado.total) + ' de ' + estado.total) : '📍 En juego';
      barra.style.width = (estado.total ? Math.min(100, estado.hecho / estado.total * 100) : 0) + '%';
    }

    var ctx = {
      grado: opciones.grado,
      juego: juego,
      el: el,
      /** Cantidad total de retos del juego (para la barra de progreso). */
      total: function (n) { estado.total = n; pintar(); },
      /** Avanza el progreso (por defecto +1). */
      avance: function (k) { estado.hecho = (k === undefined ? estado.hecho + 1 : k); pintar(); },
      /** Respuesta correcta: suma acierto, sonido y mensaje. */
      acierto: function (detalle, silencioso) {
        estado.aciertos++; pintar();
        AJ.sonido.tocar('correcto');
        if (!silencioso) mensaje(AJ.util.uno(FELICITAR), detalle, 'bien', AJ.util.uno(EMO_BIEN));
      },
      /** Respuesta para mejorar: cuenta un intento y muestra una pista amable. */
      fallo: function (detalle, silencioso) {
        estado.errores++; pintar();
        AJ.sonido.tocar('intento');
        if (!silencioso) mensaje(AJ.util.uno(ANIMAR), detalle, 'casi', AJ.util.uno(EMO_ANIMAR));
      },
      mensaje: function (t, d, emoji) { mensaje(t, d, 'bien', emoji); },
      sonido: function (n) { AJ.sonido.tocar(n); },
      /** Temporizador que se cancela solo si el niño sale del juego. */
      esperar: function (fn, ms) { var id = setTimeout(fn, ms); temporizadores.push(id); return id; },
      /** Registra una función de limpieza (por ejemplo, quitar eventos del teclado). */
      alSalir: function (fn) { limpiezas.push(fn); },
      /** Termina el juego y muestra los resultados. */
      terminar: function (espera) {
        if (estado.terminado) return;
        estado.terminado = true;
        estado.hecho = estado.total || estado.hecho; pintar();
        ctx.esperar(function () {
          detener();
          var intentos = estado.aciertos + estado.errores;
          opciones.alTerminar({
            aciertos: estado.aciertos,
            errores: estado.errores,
            porcentaje: intentos ? Math.round(estado.aciertos / intentos * 100) : 100
          });
        }, espera === undefined ? 1400 : espera);
      }
    };

    function iniciar() {
      detener();
      estado = { aciertos: 0, errores: 0, total: 0, hecho: 0, terminado: false };
      area.innerHTML = '';
      pintar();
      try { def.iniciar(area, juego.datos, ctx); }
      catch (e) {
        console.error(e);
        area.appendChild(el('p', { class: 'explicacion' }, 'Ocurrió un problema al cargar este juego. Pulsa Reiniciar.'));
      }
    }
    iniciar();
  }

  return { abrir: abrir, detener: detener, confeti: confeti, mensaje: mensaje };
})();
