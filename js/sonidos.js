/* =========================================================
   SONIDOS
   Se generan con el navegador (Web Audio API). No necesitan
   archivos de audio ni internet. Se pueden desactivar con el
   botón 🔊 de la barra superior (la preferencia se recuerda).
   ========================================================= */
AJ.sonido = (function () {
  var ctx = null;
  var activo = true;
  try { activo = localStorage.getItem('aj-sonido') !== 'no'; } catch (e) { /* sin almacenamiento */ }

  function contexto() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /** Toca una nota: frecuencia (Hz), inicio (s), duración (s), tipo de onda, volumen */
  function nota(f, t, d, tipo, vol) {
    var c = contexto(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = tipo || 'sine';
    o.frequency.value = f;
    var ahora = c.currentTime + t;
    g.gain.setValueAtTime(0.0001, ahora);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, ahora + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ahora + d);
    o.connect(g); g.connect(c.destination);
    o.start(ahora); o.stop(ahora + d + 0.05);
  }

  var sonidos = {
    correcto: function () { nota(660, 0, .15, 'triangle'); nota(990, .1, .25, 'triangle'); },
    intento:  function () { nota(330, 0, .18, 'sine', .12); nota(294, .12, .22, 'sine', .1); },
    clic:     function () { nota(520, 0, .06, 'square', .05); },
    voltear:  function () { nota(420, 0, .08, 'triangle', .08); },
    ruleta:   function () { for (var i = 0; i < 14; i++) nota(700 + (i % 2) * 120, i * 0.2 * (1 + i / 14), .05, 'square', .04); },
    victoria: function () {
      [523, 659, 784, 1046].forEach(function (f, i) { nota(f, i * .13, .3, 'triangle', .2); });
      nota(784, .6, .15, 'triangle', .18); nota(1046, .75, .6, 'triangle', .22);
    }
  };

  return {
    tocar: function (nombre) { if (activo && sonidos[nombre]) { try { sonidos[nombre](); } catch (e) { } } },
    activo: function () { return activo; },
    alternar: function () {
      activo = !activo;
      try { localStorage.setItem('aj-sonido', activo ? 'si' : 'no'); } catch (e) { }
      if (activo) sonidos.clic();
      return activo;
    }
  };
})();
