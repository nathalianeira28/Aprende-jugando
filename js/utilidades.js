/* =========================================================
   UTILIDADES GENERALES
   Todo el proyecto usa un único objeto global: AJ (Aprende Jugando).
   No se usan módulos (import/export) para que funcione abriendo
   index.html con doble clic desde el computador o una memoria USB.
   ========================================================= */
var AJ = window.AJ || {};
window.AJ = AJ;

AJ.util = {
  /** Crea un elemento HTML. el('div', {class:'x', onclick: fn}, [hijos]) */
  el: function (etiqueta, atributos, hijos) {
    var e = document.createElement(etiqueta);
    atributos = atributos || {};
    for (var k in atributos) {
      if (!atributos.hasOwnProperty(k)) continue;
      var v = atributos[k];
      if (v === null || v === undefined || v === false) continue;
      if (k.indexOf('on') === 0 && typeof v === 'function') e.addEventListener(k.slice(2), v);
      else if (k === 'html') e.innerHTML = v;
      else if (k === 'text') e.textContent = v;
      else if (k === 'style' && typeof v === 'object') { for (var s in v) e.style.setProperty(s, v[s]); }
      else e.setAttribute(k, v === true ? '' : v);
    }
    if (hijos !== undefined && hijos !== null) {
      if (!Array.isArray(hijos)) hijos = [hijos];
      hijos.forEach(function (h) {
        if (h === null || h === undefined || h === false) return;
        e.appendChild(typeof h === 'string' || typeof h === 'number' ? document.createTextNode(String(h)) : h);
      });
    }
    return e;
  },

  /** Mezcla una copia del arreglo (algoritmo de Fisher-Yates). */
  barajar: function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  },

  /** Entero aleatorio entre min y max (incluidos). */
  azar: function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; },

  /** Elemento aleatorio de un arreglo. */
  uno: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },

  /** Quita tildes y pasa a mayúsculas (conserva la Ñ). Útil para sopas y crucigramas. */
  normalizar: function (txt) {
    return String(txt).toUpperCase()
      .replace(/Ñ/g, '\u0001')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\u0001/g, 'Ñ')
      .trim();
  },

  /** Compara respuestas escritas sin importar tildes, mayúsculas ni espacios extra. */
  igual: function (a, b) {
    var n = function (x) { return AJ.util.normalizar(x).replace(/\s+/g, ' ').replace(',', '.'); };
    return n(a) === n(b);
  },

  /**
   * Lee una línea de datos con formato "a | b | c" y devuelve ['a','b','c'].
   * Así los contenidos se escriben de forma corta y fácil de editar.
   */
  partes: function (linea) { return String(linea).split('|').map(function (s) { return s.trim(); }); },

  /** Formato de dinero colombiano: 1500 -> $1.500 */
  pesos: function (n) { return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); },

  /** Número con separador de miles (12500 -> 12.500) y coma decimal. */
  num: function (n) {
    var s = String(n).split('.');
    s[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return s.join(',');
  },

  /** Escapa texto para insertarlo en HTML o SVG. */
  esc: function (t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  /** Aclara un color hexadecimal (para fondos suaves). */
  aclarar: function (hex, cuanto) {
    var c = hex.replace('#', '');
    var r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
    var f = function (x) { return Math.round(x + (255 - x) * cuanto); };
    return 'rgb(' + f(r) + ',' + f(g) + ',' + f(b) + ')';
  },

  /** Permite arrastrar y soltar con mouse o con el dedo (pantallas táctiles). */
  arrastrable: function (elemento, alSoltar) {
    var inicio = null, clon = null;
    elemento.addEventListener('pointerdown', function (ev) {
      if (elemento.classList.contains('bien')) return;
      inicio = { x: ev.clientX, y: ev.clientY };
      elemento.setPointerCapture && elemento.setPointerCapture(ev.pointerId);
    });
    elemento.addEventListener('pointermove', function (ev) {
      if (!inicio) return;
      var dx = ev.clientX - inicio.x, dy = ev.clientY - inicio.y;
      if (!clon && Math.abs(dx) + Math.abs(dy) > 10) {
        var r = elemento.getBoundingClientRect();
        clon = elemento.cloneNode(true);
        clon.style.cssText = 'position:fixed;z-index:80;pointer-events:none;margin:0;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;transform:rotate(3deg) scale(1.05);';
        document.body.appendChild(clon);
        elemento.classList.add('arrastrando');
        clon._r = r;
      }
      if (clon) {
        clon.style.left = (clon._r.left + dx) + 'px';
        clon.style.top = (clon._r.top + dy) + 'px';
        var bajo = document.elementFromPoint(ev.clientX, ev.clientY);
        document.querySelectorAll('.sobre').forEach(function (x) { x.classList.remove('sobre'); });
        var destino = bajo && bajo.closest('[data-destino]');
        if (destino) destino.classList.add('sobre');
      }
    });
    var terminar = function (ev) {
      if (!inicio) return;
      inicio = null;
      if (clon) {
        clon.remove(); clon = null;
        elemento.classList.remove('arrastrando');
        document.querySelectorAll('.sobre').forEach(function (x) { x.classList.remove('sobre'); });
        var bajo = document.elementFromPoint(ev.clientX, ev.clientY);
        var destino = bajo && bajo.closest('[data-destino]');
        if (destino) alSoltar(destino);
        elemento._arrastrado = true;   // evita que el "click" posterior cuente
        setTimeout(function () { elemento._arrastrado = false; }, 50);
      }
    };
    elemento.addEventListener('pointerup', terminar);
    elemento.addEventListener('pointercancel', function () { inicio = null; if (clon) { clon.remove(); clon = null; elemento.classList.remove('arrastrando'); } });
  }
};
