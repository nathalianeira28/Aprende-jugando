/* =========================================================
   RELACIONAR (unir columnas)
   Formato: pares: ["🐶 | dog", "Bogotá | Cundinamarca", ...]
   Opcional "|| explicación" al final de cada par.
   El niño toca un elemento de la izquierda y luego su pareja
   de la derecha (o arrastra uno sobre el otro).
   ========================================================= */
AJ.registrarJuego('relacionar', {
  nombre: 'Relacionar',
  instrucciones: 'Toca un elemento de la izquierda y luego su pareja de la derecha. También puedes arrastrarlo.',
  iniciar: function (area, datos, ctx) {
    var U = AJ.util, el = ctx.el;
    var soloEmoji = /^(\p{Extended_Pictographic}|️|‍|\s)+$/u;
    var todos = U.barajar(datos.pares);
    var porRonda = datos.porRonda || 5;
    var rondas = [];
    for (var i = 0; i < todos.length; i += porRonda) rondas.push(todos.slice(i, i + porRonda));
    if (rondas.length > 1 && rondas[rondas.length - 1].length < 3) { var ult = rondas.pop(); rondas[rondas.length - 1] = rondas[rondas.length - 1].concat(ult); }
    var ronda = 0, emparejados = 0, total = todos.length;
    ctx.total(total);

    function contenido(txt) { return soloEmoji.test(txt) ? el('span', { class: 'grande' }, txt) : el('span', {}, txt); }

    function jugarRonda() {
      area.innerHTML = '';
      var pares = rondas[ronda].map(function (l, i) {
        var e = String(l).split('||'), p = U.partes(e[0]);
        return { a: p[0], b: p[1], id: i, explica: (e[1] || '').trim() };
      });
      var elegido = null, hechos = 0;
      var izq = el('div', { class: 'col' }), der = el('div', { class: 'col' });

      function crear(p, lado) {
        var f = el('div', { class: 'ficha', 'data-id': p.id, 'data-lado': lado, 'data-destino': '1' }, contenido(lado === 'a' ? p.a : p.b));
        f.addEventListener('click', function () { if (!f._arrastrado) tocar(f); });
        U.arrastrable(f, function (destino) { if (destino !== f) { elegir(f); tocar(destino); } });
        return f;
      }
      function elegir(f) {
        area.querySelectorAll('.elegida').forEach(function (x) { x.classList.remove('elegida'); });
        elegido = f; f.classList.add('elegida');
      }
      function tocar(f) {
        if (f.classList.contains('bien')) return;
        ctx.sonido('clic');
        if (!elegido || elegido.dataset.lado === f.dataset.lado) { elegir(f); return; }
        var otro = elegido; elegido = null;
        otro.classList.remove('elegida');
        var p = pares[+f.dataset.id];
        if (otro.dataset.id === f.dataset.id) {
          hechos++; emparejados++;
          [otro, f].forEach(function (x) { x.classList.add('bien'); x.appendChild(el('span', { class: 'numero' }, String(emparejados))); });
          ctx.acierto(p.a + ' → ' + p.b + (p.explica ? '. ' + p.explica : ''));
          ctx.avance();
          if (hechos === pares.length) {
            ronda++;
            if (ronda < rondas.length) ctx.esperar(jugarRonda, 1800);
            else ctx.terminar(1800);
          }
        } else {
          var a = otro.dataset.lado === 'a' ? otro : f;
          var pa = pares[+a.dataset.id];
          ctx.fallo('Esa no es la pareja de "' + pa.a + '". ¡Busca otra!');
        }
      }
      U.barajar(pares).forEach(function (p) { izq.appendChild(crear(p, 'a')); });
      U.barajar(pares).forEach(function (p) { der.appendChild(crear(p, 'b')); });
      var titulos = datos.columnas || ['', ''];
      area.appendChild(el('div', { class: 'relacionar' }, [
        titulos[0] ? el('h3', { style: { margin: 0, 'text-align': 'center' } }, titulos[0]) : null,
        titulos[1] ? el('h3', { style: { margin: 0, 'text-align': 'center' } }, titulos[1]) : null,
        izq, der
      ]));
    }
    jugarRonda();
  }
});
