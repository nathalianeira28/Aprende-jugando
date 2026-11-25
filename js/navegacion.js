/* =========================================================
   NAVEGACIÓN ENTRE PANTALLAS
   Se usa la dirección con "#" (por ejemplo #g3/matematicas)
   para que funcionen los botones Atrás/Adelante del navegador
   incluso abriendo el archivo directamente (sin servidor).

   #inicio                 Bienvenida
   #grados                 Elegir grado
   #g3                     Materias del grado 3
   #g3/matematicas         Biblioteca de juegos
   #g3/matematicas/2       Juego número 2
   #guia                   Guía para el docente
   ========================================================= */
AJ.nav = (function () {
  var U = AJ.util, el = function (a, b, c) { return U.el(a, b, c); };
  var pantalla, barra, migas;

  function ir(hash) { if (location.hash === '#' + hash) mostrar(); else location.hash = hash; }

  function colorMateria(m) {
    var raiz = document.documentElement.style;
    raiz.setProperty('--color', m ? m.color : '#1c7ed6');
    raiz.setProperty('--color-claro', m ? U.aclarar(m.color, .88) : '#e7f5ff');
  }

  function ponerMigas(lista) {
    migas.innerHTML = '';
    lista.forEach(function (m, i) {
      if (i) migas.appendChild(el('span', { class: 'sep' }, '›'));
      if (i === lista.length - 1) migas.appendChild(el('span', { class: 'actual' }, m[0]));
      else migas.appendChild(el('a', { href: '#' + m[1] }, m[0]));
    });
  }

  function nuevaPantalla(conBarra) {
    AJ.motor.detener();
    pantalla.innerHTML = '';
    barra.classList.toggle('oculto', !conBarra);
    window.scrollTo(0, 0);
  }

  /* ---------- 1. Bienvenida ---------- */
  function bienvenida() {
    nuevaPantalla(false); colorMateria(null);
    var titulo2 = el('span', { class: 'l2' }, 'Jugando'.split('').map(function (l) { return el('span', {}, l); }));
    pantalla.appendChild(el('section', { class: 'bienvenida' }, [
      el('div', {}, [
        el('img', { class: 'logo-grande', src: 'assets/icons/logo-animado.svg', alt: 'Logo Aprende Jugando' }),
        el('h1', { class: 'titulo-app' }, [el('span', { class: 'l1' }, 'Aprende'), titulo2]),
        el('button', { class: 'btn gigante naranja', onclick: function () { AJ.sonido.tocar('clic'); ir('grados'); } }, '▶ COMENZAR'),
        el('div', { class: 'chips' }, [
          el('span', { class: 'chip' }, '🔢 Matemáticas'), el('span', { class: 'chip' }, '📖 Lengua'), el('span', { class: 'chip' }, '🌿 Naturales'),
          el('span', { class: 'chip' }, '🌎 Sociales'), el('span', { class: 'chip' }, '💬 Inglés'), el('span', { class: 'chip' }, '💻 Tecnología'), el('span', { class: 'chip' }, '🎨 Arte')
        ]),
        el('p', { class: 'pie-bienvenida' }, [
          'Funciona sin internet · ',
          el('a', { onclick: function () { ir('guia'); } }, '📋 Guía para el docente')
        ]),
        el('p', { class: 'autora' }, ['✨ Creado por ', el('b', {}, 'Leszlie Nathalia Neira')])
      ]),
      el('div', { class: 'ilustracion-bienvenida', html: AJ.dibujos.bienvenida() })
    ]));
  }

  /* ---------- 2. Grados ---------- */
  function grados() {
    nuevaPantalla(true); colorMateria(null);
    ponerMigas([['Inicio', 'inicio'], ['Elige el grado']]);
    pantalla.appendChild(el('div', { class: 'encabezado' }, [el('span', { class: 'emoji' }, '🎒'), el('h1', {}, '¿En qué grado estamos?'), el('p', {}, 'Cada grado tiene sus propios temas y retos.')]));
    pantalla.appendChild(el('div', { class: 'rejilla-grados' }, AJ.GRADOS.map(function (g, i) {
      var b = el('button', { class: 'tarjeta-grado', style: { 'animation-delay': (i * .07) + 's' }, onclick: function () { AJ.sonido.tocar('clic'); ir('g' + g.n); } }, [
        el('div', { class: 'ilus', html: AJ.dibujos.grado(g.n) }),
        el('h2', {}, g.nombre),
        el('p', {}, g.texto),
        el('span', { class: 'btn' }, 'ENTRAR ➜')
      ]);
      return b;
    })));
  }

  /* ---------- 3. Materias ---------- */
  function materias(g) {
    var G = AJ.GRADOS[g - 1];
    nuevaPantalla(true); colorMateria(null);
    ponerMigas([['Inicio', 'inicio'], ['Grados', 'grados'], [G.nombre]]);
    pantalla.appendChild(el('div', { class: 'encabezado' }, [el('span', { class: 'emoji' }, '📚'), el('h1', {}, 'Materias de ' + G.nombre.toLowerCase()), el('p', {}, 'Elige una materia para ver sus juegos.')]));
    pantalla.appendChild(el('div', { class: 'rejilla-materias' }, AJ.materias.map(function (m, i) {
      var cant = AJ.juegosDe(m.id, g).length;
      return el('button', { class: 'tarjeta-materia', style: { '--c': m.color, 'animation-delay': (i * .06) + 's' }, onclick: function () { AJ.sonido.tocar('clic'); ir('g' + g + '/' + m.id); } }, [
        el('span', { class: 'burbuja' }),
        el('span', { class: 'icono' }, m.icono),
        el('h2', {}, m.nombre),
        el('p', {}, m.descripcion),
        el('div', { class: 'temas' }, '🎯 ' + (m.temas[g] || '')),
        el('div', { class: 'pie' }, [el('span', { class: 'cuenta' }, '🎮 ' + cant + ' juegos'), el('span', { class: 'btn', style: { background: m.color, 'font-size': '.95rem', padding: '.55rem 1rem' } }, 'VER JUEGOS')])
      ]);
    })));
  }

  /* ---------- 4. Biblioteca de juegos ---------- */
  function biblioteca(g, idMateria) {
    var m = AJ.buscarMateria(idMateria), G = AJ.GRADOS[g - 1];
    if (!m) return ir('g' + g);
    nuevaPantalla(true); colorMateria(m);
    ponerMigas([['Inicio', 'inicio'], ['Grados', 'grados'], [G.nombre, 'g' + g], [m.nombre]]);
    pantalla.appendChild(el('div', { class: 'cabecera-biblioteca' }, [
      el('span', { class: 'icono' }, m.icono),
      el('div', {}, [el('h1', {}, m.nombre), el('p', {}, '🎯 Temas: ' + (m.temas[g] || ''))]),
      el('span', { class: 'grado-badge' }, G.nombre + ' grado')
    ]));
    var juegos = AJ.juegosDe(idMateria, g);
    pantalla.appendChild(el('div', { class: 'rejilla-juegos' }, juegos.map(function (j, i) {
      var abrir = function () { AJ.sonido.tocar('clic'); ir('g' + g + '/' + idMateria + '/' + i); };
      return el('article', { class: 'tarjeta-juego', style: { 'animation-delay': (i * .05) + 's' } }, [
        el('div', { class: 'vista', html: AJ.miniatura(j, m.color), onclick: abrir, title: 'Jugar ' + j.titulo }),
        el('div', { class: 'cuerpo' }, [
          el('span', { class: 'tipo' }, AJ.nombreTipo(j.tipo)),
          el('h3', {}, j.titulo),
          el('p', { class: 'desc' }, j.descripcion),
          el('div', { class: 'aprende' }, [el('b', {}, '🎯 Aprende: '), j.aprende]),
          el('div', { class: 'pie' }, [el('span', { class: 'grado' }, '🎒 ' + G.nombre), el('button', { class: 'btn', onclick: abrir }, '▶ JUGAR')])
        ])
      ]);
    })));
  }

  /* ---------- 5. Juego ---------- */
  function juego(g, idMateria, idx) {
    var m = AJ.buscarMateria(idMateria), j = AJ.juegosDe(idMateria, g)[idx], G = AJ.GRADOS[g - 1];
    if (!m || !j) return ir('g' + g + '/' + idMateria);
    nuevaPantalla(true); colorMateria(m);
    ponerMigas([['Inicio', 'inicio'], [G.nombre, 'g' + g], [m.nombre, 'g' + g + '/' + idMateria], [j.titulo]]);
    AJ.motor.abrir(pantalla, {
      juego: j, materia: m, grado: g,
      alVolver: function () { ir('g' + g + '/' + idMateria); },
      alTerminar: function (r) { resultados(g, m, idx, j, r); }
    });
  }

  /* ---------- 6. Resultados ---------- */
  function resultados(g, m, idx, j, r) {
    nuevaPantalla(true); colorMateria(m);
    var estrellas = r.porcentaje >= 90 ? 3 : (r.porcentaje >= 60 ? 2 : 1);
    var titulo = estrellas === 3 ? '¡Excelente! ¡Lo lograste!' : (estrellas === 2 ? '¡Muy bien! ¡Gran trabajo!' : '¡Buen esfuerzo! ¡Sigue practicando!');
    var insignia = estrellas === 3 ? '🏆 Insignia: ¡Campeón de ' + m.nombre + '!' : (estrellas === 2 ? '🥈 Insignia: ¡Gran explorador!' : '🌱 Insignia: ¡Aprendiz valiente!');
    var trofeo = estrellas === 3 ? '🏆' : (estrellas === 2 ? '🎉' : '💪');
    var est = el('div', { class: 'estrellas' });
    for (var i = 0; i < 3; i++) est.appendChild(el('span', { class: i < estrellas ? '' : 'gris', style: { 'animation-delay': (0.3 + i * .25) + 's' } }, '⭐'));
    pantalla.appendChild(el('section', { class: 'resultados' }, [
      el('span', { class: 'trofeo' }, trofeo),
      el('h1', {}, titulo),
      el('p', { style: { 'font-size': '1.2rem', color: '#5c677d', margin: '.2rem 0' } }, j.titulo + ' · ' + m.nombre + ' · ' + AJ.GRADOS[g - 1].nombre),
      est,
      el('div', { class: 'cifras' }, [
        el('div', { class: 'cifra ok' }, [el('b', {}, String(r.aciertos)), 'Aciertos']),
        el('div', { class: 'cifra no' }, [el('b', {}, String(r.errores)), 'Por mejorar']),
        el('div', { class: 'cifra pc' }, [el('b', {}, r.porcentaje + '%'), 'Desempeño'])
      ]),
      el('div', { class: 'insignia' }, insignia),
      el('p', { style: { 'font-size': '1.1rem' } }, '🎯 Practicamos: ' + j.aprende),
      el('div', { class: 'botones-fila' }, [
        el('button', { class: 'btn verde', onclick: function () { AJ.sonido.tocar('clic'); juego(g, m.id, idx); } }, '🔄 VOLVER A JUGAR'),
        el('button', { class: 'btn', onclick: function () { AJ.sonido.tocar('clic'); ir('g' + g + '/' + m.id); } }, '🎮 OTRO JUEGO'),
        el('button', { class: 'btn naranja', onclick: function () { AJ.sonido.tocar('clic'); ir('g' + g); } }, '🏠 VOLVER AL MENÚ')
      ])
    ]));
    AJ.sonido.tocar('victoria');
    AJ.motor.confeti(estrellas === 3 ? 120 : 60);
  }

  /* ---------- 7. Guía para el docente ---------- */
  function guia(gradoActivo) {
    nuevaPantalla(true); colorMateria(null);
    gradoActivo = gradoActivo || 1;
    ponerMigas([['Inicio', 'inicio'], ['Guía para el docente']]);
    var total = 0;
    AJ.materias.forEach(function (m) { for (var g in m.grados) total += m.grados[g].length; });
    var cont = el('section', { class: 'guia' });
    cont.appendChild(el('h1', { style: { 'font-family': 'var(--fuente-titulo)', margin: '0 0 .4rem' } }, '📋 Guía para el docente'));
    cont.appendChild(el('p', { style: { 'font-size': '1.1rem' } }, 'Aprende Jugando reúne ' + total + ' actividades para 7 materias y 5 grados. Los temas siguen los Estándares Básicos de Competencias y los Derechos Básicos de Aprendizaje (DBA) del Ministerio de Educación Nacional de Colombia.'));
    cont.appendChild(el('ul', { style: { 'font-size': '1.05rem', 'line-height': '1.7' } }, [
      el('li', {}, 'Conecte el computador al televisor o video beam y pulse ⛶ Pantalla para verlo en pantalla completa.'),
      el('li', {}, 'Elija grado → materia → juego. Cada tarjeta indica qué se aprende.'),
      el('li', {}, 'Los niños pueden pasar al tablero por turnos o el grupo puede decidir la respuesta en voz alta.'),
      el('li', {}, 'Cuando el niño se equivoca, el juego le explica la respuesta correcta: aproveche ese momento para reforzar el tema.'),
      el('li', {}, 'En Matemáticas los ejercicios cambian cada vez que se juega. El botón 🔊 activa o quita los sonidos.')
    ]));
    var pest = el('div', { class: 'pestanas' }, AJ.GRADOS.map(function (G) {
      return el('button', { class: G.n === gradoActivo ? 'activa' : '', onclick: function () { guia(G.n); } }, G.nombre);
    }));
    cont.appendChild(el('h2', {}, 'Temas y juegos por grado'));
    cont.appendChild(pest);
    var tabla = el('table', {}, [el('tr', {}, [el('th', {}, 'Materia'), el('th', {}, 'Temas del grado'), el('th', {}, 'Juegos (qué se aprende)')])]);
    AJ.materias.forEach(function (m) {
      tabla.appendChild(el('tr', {}, [
        el('td', { style: { 'font-weight': '800', color: m.color, 'white-space': 'nowrap' } }, m.icono + ' ' + m.nombre),
        el('td', {}, m.temas[gradoActivo] || ''),
        el('td', {}, el('ul', { style: { margin: 0, 'padding-left': '1.1rem' } }, AJ.juegosDe(m.id, gradoActivo).map(function (j, i) {
          return el('li', {}, [el('a', { href: '#g' + gradoActivo + '/' + m.id + '/' + i, style: { 'font-weight': '700', color: 'inherit' } }, j.titulo), ': ' + j.aprende]);
        })))
      ]));
    });
    cont.appendChild(tabla);
    pantalla.appendChild(cont);
  }

  /** Lee la dirección (#...) y muestra la pantalla que corresponde. */
  function mostrar() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ''));
    var m;
    if (!h || h === 'inicio') return bienvenida();
    if (h === 'grados') return grados();
    if (h === 'guia') return guia();
    if ((m = h.match(/^g([1-5])$/))) return materias(+m[1]);
    if ((m = h.match(/^g([1-5])\/([a-z]+)$/))) return biblioteca(+m[1], m[2]);
    if ((m = h.match(/^g([1-5])\/([a-z]+)\/(\d+)$/))) return juego(+m[1], m[2], +m[3]);
    bienvenida();
  }

  function iniciar() {
    pantalla = document.getElementById('pantalla');
    barra = document.getElementById('barra');
    migas = document.getElementById('migas');
    window.addEventListener('hashchange', mostrar);
    mostrar();
  }

  return { iniciar: iniciar, ir: ir };
})();
