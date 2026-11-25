/* =========================================================
   DIBUJOS SVG
   Ilustraciones hechas con código (no son imágenes externas),
   por eso funcionan sin internet y se ven nítidas en el televisor.
   Los dibujos con atributos data-parte se usan en los juegos
   "Identifica" (el niño toca la parte que se le pide).
   ========================================================= */
AJ.dibujos = {};

/* ---------- Ilustración de la pantalla de bienvenida ----------
   Búho profesor sobre una pila de libros, con un arcoíris y las 7
   materias flotando alrededor. Tiene animaciones suaves (CSS). */
AJ.dibujos.bienvenida = function () {
  var cx = 300, cy = 300;
  function estrellita(x, y, r, c) {
    return '<path d="M' + x + ' ' + (y - r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + 'Z" fill="' + c + '"/>';
  }
  // Las 7 materias, en el mismo orden y color que la app
  var materias = [['🔢', '#1c7ed6'], ['📖', '#e03131'], ['🌿', '#2f9e44'], ['🌎', '#e8590c'], ['💬', '#7048e8'], ['💻', '#0c8599'], ['🎨', '#c2255c']];
  var burbujas = '';
  materias.forEach(function (m, i) {
    var ang = (195 + i * 25) * Math.PI / 180, x = cx + 230 * Math.cos(ang), y = cy + 230 * Math.sin(ang);
    burbujas += '<g class="flota" style="animation-delay:' + (i * 0.35) + 's">' +
      '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="36" fill="#fff" stroke="' + m[1] + '" stroke-width="6"/>' +
      '<text x="' + x.toFixed(1) + '" y="' + (y + 12).toFixed(1) + '" font-size="34" text-anchor="middle">' + m[0] + '</text></g>';
  });
  // Arcoíris (medio círculo detrás del búho)
  var colores = ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#4dabf7', '#9775fa'], arco = '';
  colores.forEach(function (c, i) {
    var r = 182 - i * 11;
    arco += '<path d="M' + (cx - r) + ' ' + cy + ' A' + r + ' ' + r + ' 0 0 1 ' + (cx + r) + ' ' + cy + '" fill="none" stroke="' + c + '" stroke-width="11" stroke-linecap="round"/>';
  });

  return '' +
  '<svg viewBox="0 0 600 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Búho profesor sobre libros, rodeado de las materias">' +
  '<style>' +
  '.flota{animation:flotar 3.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
  '@keyframes flotar{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}' +
  '.ojos{animation:parpadeo 5s infinite;transform-box:fill-box;transform-origin:center}' +
  '@keyframes parpadeo{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}' +
  '.brillo{animation:brillar 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
  '@keyframes brillar{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.6);opacity:.6}}' +
  '</style>' +
  // Fondo suave
  '<circle cx="300" cy="290" r="240" fill="#fff3bf"/>' +
  '<circle cx="300" cy="290" r="195" fill="#ffec99" opacity=".55"/>' +
  // Arcoíris y burbujas de materias
  '<g opacity=".95">' + arco + '</g>' +
  '<path d="M' + (cx - 230) + ' ' + cy + ' A230 230 0 0 1 ' + (cx + 230) + ' ' + cy + '" fill="none" stroke="#ced4da" stroke-width="3" stroke-dasharray="4 10" stroke-linecap="round"/>' +
  burbujas +
  // Pila de libros
  '<g>' +
  '<rect x="150" y="470" width="300" height="38" rx="8" fill="#2f9e44"/><rect x="160" y="476" width="280" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="150" y="470" width="22" height="38" rx="6" fill="#2b8a3e"/>' +
  '<rect x="172" y="434" width="262" height="38" rx="8" fill="#e03131"/><rect x="182" y="440" width="242" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="412" y="434" width="22" height="38" rx="6" fill="#c92a2a"/>' +
  '<rect x="188" y="398" width="228" height="38" rx="8" fill="#1c7ed6"/><rect x="198" y="404" width="208" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="188" y="398" width="22" height="38" rx="6" fill="#1864ab"/>' +
  '<text x="300" y="429" text-anchor="middle" font-size="17" font-weight="900" fill="#fff" font-family="Arial Black,Arial">A B C</text>' +
  '</g>' +
  // Búho
  '<g>' +
  // patas
  '<g fill="#fd7e14"><ellipse cx="262" cy="398" rx="9" ry="7"/><ellipse cx="276" cy="400" rx="9" ry="7"/><ellipse cx="324" cy="400" rx="9" ry="7"/><ellipse cx="338" cy="398" rx="9" ry="7"/></g>' +
  // cuerpo
  '<ellipse cx="300" cy="300" rx="104" ry="104" fill="#a9703f"/>' +
  // alas
  '<ellipse cx="203" cy="315" rx="30" ry="62" fill="#8c5a2b" transform="rotate(18 203 315)"/>' +
  '<ellipse cx="397" cy="315" rx="30" ry="62" fill="#8c5a2b" transform="rotate(-18 397 315)"/>' +
  // barriga con plumitas
  '<ellipse cx="300" cy="335" rx="64" ry="62" fill="#ffe8cc"/>' +
  '<path d="M270 320 q8 9 16 0 M298 320 q8 9 16 0 M284 342 q8 9 16 0 M312 342 q8 9 16 0 M270 364 q8 9 16 0 M298 364 q8 9 16 0" stroke="#e8b98a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
  // orejitas
  '<path d="M222 222 L232 180 L258 212 Z" fill="#8c5a2b"/><path d="M378 222 L368 180 L342 212 Z" fill="#8c5a2b"/>' +
  // cara
  '<ellipse cx="300" cy="262" rx="88" ry="58" fill="#f5d0a9"/>' +
  // ojos (parpadean)
  '<g class="ojos">' +
  '<circle cx="263" cy="258" r="35" fill="#fff" stroke="#8c5a2b" stroke-width="5"/><circle cx="337" cy="258" r="35" fill="#fff" stroke="#8c5a2b" stroke-width="5"/>' +
  '<circle cx="268" cy="262" r="17" fill="#212529"/><circle cx="332" cy="262" r="17" fill="#212529"/>' +
  '<circle cx="274" cy="255" r="6" fill="#fff"/><circle cx="338" cy="255" r="6" fill="#fff"/>' +
  '</g>' +
  // pico y mejillas
  '<path d="M288 288 L312 288 L300 310 Z" fill="#fd7e14" stroke="#e8590c" stroke-width="2" stroke-linejoin="round"/>' +
  '<circle cx="226" cy="294" r="12" fill="#ff8787" opacity=".6"/><circle cx="374" cy="294" r="12" fill="#ff8787" opacity=".6"/>' +
  // birrete
  '<rect x="252" y="196" width="96" height="24" rx="4" fill="#212529"/>' +
  '<polygon points="300,158 396,184 300,210 204,184" fill="#343a40"/>' +
  '<circle cx="300" cy="184" r="5" fill="#fcc419"/>' +
  '<path d="M300 184 L378 196 L380 236" stroke="#fcc419" stroke-width="4" fill="none" stroke-linecap="round"/>' +
  '<path d="M372 234 L388 234 L384 258 L376 258 Z" fill="#fcc419"/>' +
  // lápiz en el ala derecha
  '<g transform="translate(415 318) rotate(28)"><rect x="-9" y="-78" width="18" height="96" fill="#fcc419" stroke="#e67700" stroke-width="3"/><rect x="-9" y="-92" width="18" height="16" rx="4" fill="#f783ac"/><rect x="-9" y="-78" width="18" height="7" fill="#adb5bd"/><path d="M-9 18 L0 40 L9 18 Z" fill="#ffd8a8" stroke="#e67700" stroke-width="3" stroke-linejoin="round"/><path d="M-3 32 L0 40 L3 32 Z" fill="#343a40"/></g>' +
  '</g>' +
  // destellos
  '<g class="brillo">' + estrellita(92, 380, 16, '#fcc419') + '</g>' +
  '<g class="brillo" style="animation-delay:.8s">' + estrellita(510, 382, 13, '#f783ac') + '</g>' +
  '<g class="brillo" style="animation-delay:1.5s">' + estrellita(470, 450, 10, '#4dabf7') + '</g>' +
  '<g class="brillo" style="animation-delay:.4s">' + estrellita(122, 460, 10, '#69db7c') + '</g>' +
  '</svg>';
};

/* ---------- Ilustraciones de las tarjetas de grado ---------- */
AJ.dibujos.grado = function (n) {
  var temas = {
    1: { c1: '#ffe066', c2: '#fab005', a: '🐥', b: '✏️', c: '🍎', d: '1 2 3' },
    2: { c1: '#8ce99a', c2: '#2f9e44', a: '🐢', b: '📚', c: '🌻', d: 'a b c' },
    3: { c1: '#74c0fc', c2: '#1c7ed6', a: '🦉', b: '🔬', c: '🌎', d: '3×4' },
    4: { c1: '#b197fc', c2: '#7048e8', a: '🐬', b: '🧭', c: '🎨', d: '½ ¾' },
    5: { c1: '#ff8787', c2: '#e03131', a: '🦁', b: '🚀', c: '💻', d: '0,5' }
  }[n];
  return '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="300" height="180" fill="' + temas.c1 + '"/>' +
    '<circle cx="250" cy="20" r="70" fill="#fff" opacity=".25"/><circle cx="30" cy="170" r="60" fill="#fff" opacity=".25"/>' +
    '<text x="150" y="132" font-size="120" font-weight="900" text-anchor="middle" fill="' + temas.c2 + '" opacity=".35" font-family="Arial Black,Arial">' + n + '°</text>' +
    '<text x="150" y="118" font-size="78" text-anchor="middle">' + temas.a + '</text>' +
    '<text x="62" y="80" font-size="40" text-anchor="middle">' + temas.b + '</text>' +
    '<text x="238" y="150" font-size="40" text-anchor="middle">' + temas.c + '</text>' +
    '<text x="225" y="58" font-size="24" font-weight="900" text-anchor="middle" fill="#fff" font-family="Arial Black,Arial">' + temas.d + '</text>' +
    '</svg>';
};

/* ---------- Partes del computador ---------- */
AJ.dibujos.computador = function () {
  return '<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">' +
  '<rect x="0" y="300" width="520" height="80" fill="#e9c46a" opacity=".35"/>' +
  // monitor
  '<g data-parte="monitor"><rect x="120" y="30" width="250" height="170" rx="14" fill="#343a40"/><rect x="134" y="44" width="222" height="142" rx="6" fill="#74c0fc"/><circle cx="200" cy="100" r="22" fill="#ffe066"/><path d="M134 186 L200 130 L250 170 L300 120 L356 186 Z" fill="#69db7c"/><rect x="230" y="200" width="30" height="40" fill="#495057"/><rect x="190" y="236" width="110" height="14" rx="7" fill="#495057"/></g>' +
  // cámara web
  '<g data-parte="camara"><rect x="225" y="14" width="40" height="18" rx="9" fill="#212529"/><circle cx="245" cy="23" r="6" fill="#4dabf7"/></g>' +
  // CPU
  '<g data-parte="cpu"><rect x="400" y="80" width="90" height="220" rx="12" fill="#495057"/><rect x="412" y="100" width="66" height="10" rx="4" fill="#868e96"/><rect x="412" y="120" width="66" height="10" rx="4" fill="#868e96"/><circle cx="445" cy="260" r="12" fill="#51cf66" stroke="#2b8a3e" stroke-width="3"/></g>' +
  // parlantes
  '<g data-parte="parlante"><rect x="40" y="140" width="55" height="110" rx="12" fill="#5c677d"/><circle cx="67" cy="175" r="15" fill="#212529"/><circle cx="67" cy="222" r="20" fill="#212529"/></g>' +
  // teclado
  '<g data-parte="teclado"><rect x="120" y="270" width="240" height="70" rx="10" fill="#adb5bd"/>' +
  (function () { var s = ''; for (var f = 0; f < 3; f++) for (var c = 0; c < 10; c++) s += '<rect x="' + (130 + c * 22.5) + '" y="' + (278 + f * 18) + '" width="18" height="13" rx="3" fill="#f8f9fa"/>'; return s; })() +
  '</g>' +
  // mouse
  '<g data-parte="mouse"><path d="M378 290 q0 -32 22 -32 q22 0 22 32 l0 22 q0 22 -22 22 q-22 0 -22 -22 z" fill="#dee2e6" stroke="#868e96" stroke-width="3"/><line x1="400" y1="258" x2="400" y2="285" stroke="#868e96" stroke-width="3"/></g>' +
  '</svg>';
};

/* ---------- Partes de la planta ---------- */
AJ.dibujos.planta = function () {
  return '<svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">' +
  '<rect width="400" height="250" fill="#e7f5ff"/><rect y="250" width="400" height="170" fill="#c08457"/>' +
  '<circle cx="340" cy="60" r="34" fill="#ffd43b"/>' +
  '<g data-parte="raiz"><path d="M200 250 L200 320 M200 270 L160 330 M200 270 L245 335 M200 300 L175 380 M200 300 L230 390 M160 330 L135 360 M245 335 L275 360" stroke="#f1e3c8" stroke-width="9" fill="none" stroke-linecap="round"/></g>' +
  '<g data-parte="tallo"><rect x="190" y="110" width="20" height="142" rx="8" fill="#2f9e44"/></g>' +
  '<g data-parte="hojas"><path d="M200 200 q-80 -10 -95 -60 q60 -5 95 60 z" fill="#51cf66" stroke="#2b8a3e" stroke-width="4"/><path d="M200 170 q80 -5 100 -55 q-62 -8 -100 55 z" fill="#51cf66" stroke="#2b8a3e" stroke-width="4"/></g>' +
  '<g data-parte="flor">' +
  [0, 60, 120, 180, 240, 300].map(function (a) { return '<ellipse cx="200" cy="72" rx="16" ry="34" fill="#f783ac" transform="rotate(' + a + ' 200 100)"/>'; }).join('') +
  '<circle cx="200" cy="100" r="20" fill="#fcc419"/></g>' +
  '<g data-parte="fruto"><circle cx="120" cy="225" r="22" fill="#fa5252"/><path d="M120 203 q6 -10 14 -10" stroke="#2b8a3e" stroke-width="4" fill="none"/><line x1="140" y1="214" x2="190" y2="195" stroke="#2f9e44" stroke-width="6"/></g>' +
  '</svg>';
};

/* ---------- Partes del cuerpo ---------- */
AJ.dibujos.cuerpo = function () {
  var piel = '#ffc9a3', ropa = '#4dabf7', pant = '#5c7cfa';
  return '<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">' +
  '<rect width="400" height="460" fill="#fff9db"/>' +
  '<g data-parte="cabeza"><circle cx="200" cy="80" r="52" fill="' + piel + '"/><path d="M148 70 q10 -55 52 -52 q45 0 52 52 q-25 -22 -52 -18 q-30 -2 -52 18z" fill="#5f3dc4"/><circle cx="182" cy="82" r="6" fill="#212529"/><circle cx="218" cy="82" r="6" fill="#212529"/><path d="M182 105 q18 14 36 0" stroke="#c92a2a" stroke-width="5" fill="none" stroke-linecap="round"/></g>' +
  '<g data-parte="cuello"><rect x="186" y="128" width="28" height="22" fill="' + piel + '"/></g>' +
  '<g data-parte="tronco"><rect x="145" y="148" width="110" height="140" rx="22" fill="' + ropa + '"/></g>' +
  '<g data-parte="brazos"><rect x="104" y="155" width="36" height="120" rx="18" fill="' + ropa + '" transform="rotate(12 122 155)"/><rect x="260" y="155" width="36" height="120" rx="18" fill="' + ropa + '" transform="rotate(-12 278 155)"/></g>' +
  '<g data-parte="manos"><circle cx="96" cy="285" r="22" fill="' + piel + '"/><circle cx="304" cy="285" r="22" fill="' + piel + '"/></g>' +
  '<g data-parte="piernas"><rect x="152" y="282" width="42" height="120" rx="16" fill="' + pant + '"/><rect x="206" y="282" width="42" height="120" rx="16" fill="' + pant + '"/></g>' +
  '<g data-parte="pies"><ellipse cx="165" cy="412" rx="32" ry="17" fill="#e03131"/><ellipse cx="235" cy="412" rx="32" ry="17" fill="#e03131"/></g>' +
  '</svg>';
};

/* ---------- Los cinco sentidos (cara + mano) ---------- */
AJ.dibujos.sentidos = function () {
  var piel = '#ffc9a3';
  return '<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg">' +
  '<rect width="460" height="380" fill="#fff4e6"/>' +
  '<ellipse cx="190" cy="190" rx="130" ry="150" fill="' + piel + '"/>' +
  '<path d="M62 160 q10 -130 128 -125 q120 0 130 125 q-40 -80 -130 -75 q-90 -2 -128 75z" fill="#862e9c"/>' +
  '<g data-parte="orejas"><ellipse cx="58" cy="200" rx="22" ry="38" fill="#ffa8a8"/><ellipse cx="322" cy="200" rx="22" ry="38" fill="#ffa8a8"/></g>' +
  '<g data-parte="ojos"><ellipse cx="140" cy="170" rx="26" ry="20" fill="#fff"/><circle cx="140" cy="170" r="12" fill="#1c7ed6"/><ellipse cx="240" cy="170" rx="26" ry="20" fill="#fff"/><circle cx="240" cy="170" r="12" fill="#1c7ed6"/></g>' +
  '<g data-parte="nariz"><path d="M190 185 q-22 50 0 55 q22 -5 0 -55z" fill="#ff8787"/></g>' +
  '<g data-parte="boca"><path d="M140 268 q50 40 100 0 q-50 15 -100 0z" fill="#c92a2a"/><path d="M165 280 q25 12 50 0" stroke="#ff8787" stroke-width="7" fill="none"/></g>' +
  '<g data-parte="piel"><path d="M355 300 l0 -85 q0 -10 10 -10 q10 0 10 10 l0 60 l0 -75 q0 -10 10 -10 q10 0 10 10 l0 75 l0 -68 q0 -10 10 -10 q10 0 10 10 l0 68 l0 -50 q0 -10 10 -10 q10 0 10 10 l0 75 q0 45 -40 50 q-40 0 -50 -50z" fill="' + piel + '" stroke="#e8590c" stroke-width="3"/></g>' +
  '</svg>';
};

/* ---------- Sistema solar ---------- */
AJ.dibujos.sistemaSolar = function () {
  var planetas = [
    ['mercurio', 105, 7, '#adb5bd'], ['venus', 140, 11, '#ffd8a8'], ['tierra', 180, 12, '#4dabf7'], ['marte', 218, 9, '#fa5252'],
    ['jupiter', 275, 28, '#e8a87c'], ['saturno', 350, 22, '#ffe066'], ['urano', 415, 16, '#99e9f2'], ['neptuno', 470, 15, '#4263eb']
  ];
  var s = '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg"><rect width="520" height="220" fill="#1a1b41"/>';
  for (var i = 0; i < 40; i++) s += '<circle cx="' + (i * 53 % 520) + '" cy="' + (i * 37 % 220) + '" r="1.5" fill="#fff" opacity=".7"/>';
  s += '<g data-parte="sol"><circle cx="0" cy="110" r="72" fill="#ffd43b"/><circle cx="0" cy="110" r="84" fill="#ffd43b" opacity=".3"/></g>';
  planetas.forEach(function (p) {
    s += '<g data-parte="' + p[0] + '">';
    if (p[0] === 'saturno') s += '<ellipse cx="' + p[1] + '" cy="110" rx="' + (p[2] * 1.9) + '" ry="7" fill="none" stroke="#f08c00" stroke-width="4"/>';
    s += '<circle cx="' + p[1] + '" cy="110" r="' + p[2] + '" fill="' + p[3] + '"/>';
    if (p[0] === 'tierra') s += '<path d="M' + (p[1] - 6) + ' 104 q6 3 4 8 q6 2 7 -6" fill="#51cf66"/>';
    s += '<circle cx="' + p[1] + '" cy="110" r="' + (p[2] + 12) + '" fill="transparent"/></g>';
  });
  return s + '</svg>';
};

/* ---------- Mapa simplificado de las regiones naturales de Colombia ---------- */
AJ.dibujos.colombia = function () {
  var reg = {
    caribe:    ['#ffd43b', '95,70 150,40 215,15 262,22 250,60 215,90 190,120 140,135 105,122'],
    pacifica:  ['#38d9a9', '105,122 140,135 120,200 110,260 95,320 62,352 40,332 55,270 72,200 84,150'],
    andina:    ['#ff922b', '140,135 190,120 215,90 250,60 265,112 250,170 225,232 190,292 150,342 95,320 110,260 120,200'],
    orinoquia: ['#a9e34b', '250,60 300,98 372,140 372,212 300,232 225,232 250,170 265,112'],
    amazonia:  ['#40c057', '225,232 300,232 372,212 362,282 322,302 302,402 272,470 252,420 200,372 150,342 190,292']
  };
  var s = '<svg viewBox="0 0 420 490" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="490" fill="#d0ebff"/>' +
    '<text x="20" y="470" font-size="16" fill="#1864ab" font-family="Arial">Océano Pacífico</text>' +
    '<text x="250" y="18" font-size="15" fill="#1864ab" font-family="Arial">Mar Caribe</text>';
  for (var k in reg) s += '<g data-parte="' + k + '"><polygon points="' + reg[k][1] + '" fill="' + reg[k][0] + '" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></g>';
  s += '<g data-parte="insular"><circle cx="40" cy="40" r="9" fill="#f783ac" stroke="#fff" stroke-width="2"/><circle cx="56" cy="58" r="6" fill="#f783ac" stroke="#fff" stroke-width="2"/><circle cx="20" cy="300" r="6" fill="#f783ac" stroke="#fff" stroke-width="2"/><circle cx="40" cy="45" r="26" fill="transparent"/><circle cx="20" cy="300" r="18" fill="transparent"/></g>';
  s += '<circle cx="178" cy="210" r="6" fill="#c92a2a"/><text x="186" y="214" font-size="13" font-weight="bold" fill="#343a40" font-family="Arial">Bogotá</text>';
  return s + '</svg>';
};

/* ---------- La célula animal ---------- */
AJ.dibujos.celula = function () {
  return '<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="340" fill="#f3f0ff"/>' +
  '<g data-parte="citoplasma"><ellipse cx="230" cy="170" rx="190" ry="135" fill="#e5dbff"/></g>' +
  '<g data-parte="membrana"><ellipse cx="230" cy="170" rx="190" ry="135" fill="none" stroke="#9c36b5" stroke-width="16"/></g>' +
  '<g data-parte="nucleo"><circle cx="230" cy="165" r="55" fill="#7048e8"/><circle cx="242" cy="155" r="18" fill="#4c2ea8"/></g>' +
  '<g data-parte="mitocondria"><ellipse cx="110" cy="130" rx="38" ry="18" fill="#ff922b" transform="rotate(-20 110 130)"/><path d="M82 136 q10 -14 18 0 q10 14 18 0 q10 -14 18 0" stroke="#d9480f" stroke-width="4" fill="none" transform="rotate(-20 110 130)"/><ellipse cx="350" cy="225" rx="34" ry="16" fill="#ff922b" transform="rotate(25 350 225)"/></g>' +
  '<g data-parte="vacuola"><circle cx="340" cy="110" r="22" fill="#a5d8ff"/><circle cx="140" cy="230" r="17" fill="#a5d8ff"/></g>' +
  '</svg>';
};

/* ---------- Sistema digestivo ---------- */
AJ.dibujos.digestivo = function () {
  return '<svg viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="460" fill="#fff4e6"/>' +
  '<path d="M120 20 q60 -20 120 0 q20 60 -10 100 l40 40 q30 40 20 290 l-220 0 q-10 -250 20 -290 l40 -40 q-30 -40 -10 -100z" fill="#ffe3e3" stroke="#ffa8a8" stroke-width="4"/>' +
  '<g data-parte="boca"><path d="M150 70 q30 22 60 0 q-30 10 -60 0z" fill="#c92a2a" stroke="#c92a2a" stroke-width="6"/></g>' +
  '<g data-parte="esofago"><path d="M180 80 L180 200" stroke="#f08c00" stroke-width="16" stroke-linecap="round"/></g>' +
  '<g data-parte="higado"><path d="M95 205 q40 -30 95 -10 q-10 40 -60 45 q-30 0 -35 -35z" fill="#a61e4d"/></g>' +
  '<g data-parte="estomago"><path d="M182 200 q60 -15 75 30 q10 50 -45 55 q-30 0 -25 -30 q20 5 22 -20 q0 -20 -27 -20z" fill="#f783ac" stroke="#d6336c" stroke-width="3"/></g>' +
  '<g data-parte="intestino-grueso"><path d="M110 400 L110 300 Q110 280 130 280 L240 280 Q260 280 260 300 L260 400" fill="none" stroke="#e8590c" stroke-width="22" stroke-linecap="round"/></g>' +
  '<g data-parte="intestino-delgado"><path d="M140 310 q20 -15 40 0 q20 15 40 0 M140 340 q20 -15 40 0 q20 15 40 0 M140 370 q20 -15 40 0 q20 15 40 0" fill="none" stroke="#ffa94d" stroke-width="12" stroke-linecap="round"/></g>' +
  '</svg>';
};

/* ---------- Círculo cromático ---------- */
AJ.dibujos.circuloCromatico = function () {
  var colores = ['#fa5252', '#fd7e14', '#fab005', '#fcc419', '#94d82d', '#40c057', '#12b886', '#15aabf', '#228be6', '#4c6ef5', '#7950f2', '#be4bdb'];
  var s = '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#fff"/>';
  colores.forEach(function (c, i) {
    var a1 = (i * 30 - 105) * Math.PI / 180, a2 = ((i + 1) * 30 - 105) * Math.PI / 180;
    s += '<path d="M200 200 L' + (200 + 175 * Math.cos(a1)) + ' ' + (200 + 175 * Math.sin(a1)) + ' A175 175 0 0 1 ' + (200 + 175 * Math.cos(a2)) + ' ' + (200 + 175 * Math.sin(a2)) + ' Z" fill="' + c + '" stroke="#fff" stroke-width="4"/>';
  });
  return s + '<circle cx="200" cy="200" r="60" fill="#fff"/><text x="200" y="210" text-anchor="middle" font-size="26" font-weight="900" font-family="Arial" fill="#343a40">COLORES</text></svg>';
};

/* ---------- Bandera de Colombia ---------- */
AJ.dibujos.bandera = function () {
  return '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#e7f5ff"/>' +
  '<rect x="40" y="20" width="12" height="370" rx="6" fill="#868e96"/>' +
  '<rect x="52" y="40" width="310" height="110" fill="#fcc419"/><rect x="52" y="150" width="310" height="55" fill="#1c7ed6"/><rect x="52" y="205" width="310" height="55" fill="#e03131"/>' +
  '<text x="207" y="320" text-anchor="middle" font-size="30" font-weight="900" font-family="Arial" fill="#343a40">COLOMBIA</text>' +
  '<text x="207" y="355" text-anchor="middle" font-size="18" font-family="Arial" fill="#495057">Amarillo · Azul · Rojo</text></svg>';
};

/* ---------- Figuras geométricas ---------- */
AJ.dibujos.figuras = function () {
  return '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#fff9db"/>' +
  '<g data-parte="circulo"><circle cx="100" cy="100" r="70" fill="#fa5252"/></g>' +
  '<g data-parte="cuadrado"><rect x="230" y="35" width="130" height="130" fill="#228be6"/></g>' +
  '<g data-parte="triangulo"><polygon points="100,220 30,360 170,360" fill="#40c057"/></g>' +
  '<g data-parte="rectangulo"><rect x="215" y="245" width="160" height="90" fill="#fab005"/></g>' +
  '</svg>';
};

/* ---------- Ciclo de vida de la mariposa (para rompecabezas) ---------- */
AJ.dibujos.mariposa = function () {
  return '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#ebfbee"/>' +
  '<circle cx="200" cy="200" r="130" fill="none" stroke="#adb5bd" stroke-width="6" stroke-dasharray="14 10"/>' +
  '<text x="200" y="85" text-anchor="middle" font-size="60">🥚</text><text x="200" y="110" text-anchor="middle" font-size="18" font-weight="bold" font-family="Arial">1. Huevo</text>' +
  '<text x="330" y="215" text-anchor="middle" font-size="60">🐛</text><text x="330" y="240" text-anchor="middle" font-size="18" font-weight="bold" font-family="Arial">2. Oruga</text>' +
  '<line x1="200" y1="282" x2="200" y2="294" stroke="#5c940d" stroke-width="4"/><ellipse cx="200" cy="322" rx="17" ry="30" fill="#94d82d" stroke="#5c940d" stroke-width="4"/><text x="200" y="375" text-anchor="middle" font-size="18" font-weight="bold" font-family="Arial">3. Crisálida</text>' +
  '<text x="70" y="215" text-anchor="middle" font-size="60">🦋</text><text x="70" y="240" text-anchor="middle" font-size="18" font-weight="bold" font-family="Arial">4. Mariposa</text>' +
  '</svg>';
};

/** Devuelve el SVG como imagen de fondo (para cortar el rompecabezas en piezas). */
AJ.dibujos.comoImagen = function (nombre) {
  return 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(AJ.dibujos[nombre]()) + '")';
};
