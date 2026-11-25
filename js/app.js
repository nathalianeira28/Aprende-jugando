/* =========================================================
   APP: arranque de la aplicación
   - Botones de la barra superior (inicio, guía, sonido, pantalla completa)
   - Decoración del fondo
   - Inicia la navegación
   ========================================================= */
(function () {
  function decorarFondo() {
    var fondo = document.getElementById('fondo-decorativo');
    var simbolos = ['★', '1', '+', 'A', '✎', '●', '▲', '3', 'b', '×', '♪', '■', '7', '?', 'ñ', '½'];
    var colores = ['#f03e3e', '#1c7ed6', '#2f9e44', '#f59f00', '#7048e8', '#d6336c', '#1098ad'];
    for (var i = 0; i < 22; i++) {
      var s = document.createElement('span');
      s.textContent = simbolos[i % simbolos.length];
      s.style.left = ((i * 37) % 100) + 'vw';
      s.style.top = ((i * 53) % 100) + 'vh';
      s.style.fontSize = (1.8 + (i % 4)) + 'rem';
      s.style.color = colores[i % colores.length];
      s.style.animationDelay = (i * 0.4) + 's';
      fondo.appendChild(s);
    }
  }

  function botonSonido() {
    var b = document.getElementById('btn-sonido');
    var pintar = function () { b.classList.toggle('apagado', !AJ.sonido.activo()); b.firstChild.textContent = AJ.sonido.activo() ? '🔊' : '🔈'; };
    b.addEventListener('click', function () { AJ.sonido.alternar(); pintar(); });
    pintar();
  }

  function botonPantalla() {
    document.getElementById('btn-pantalla').addEventListener('click', function () {
      var d = document;
      if (!d.fullscreenElement) { (d.documentElement.requestFullscreen || d.documentElement.webkitRequestFullscreen || function () { }).call(d.documentElement); }
      else { (d.exitFullscreen || d.webkitExitFullscreen).call(d); }
    });
  }

  function iniciar() {
    decorarFondo();
    botonSonido();
    botonPantalla();
    document.getElementById('btn-logo').addEventListener('click', function () { AJ.nav.ir('inicio'); });
    document.getElementById('btn-guia').addEventListener('click', function () { AJ.nav.ir('guia'); });
    AJ.nav.iniciar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
