/* =========================================================
   RESOLVER OPERACIONES  y  LA TIENDA ESCOLAR
   - operaciones: usa un generador de js/generadores.js
       datos: { generador: 'mult3', cantidad: 10 }
   - tienda: compras con dinero colombiano; la dificultad
       cambia según el grado (sumar, multiplicar, vueltas, descuentos).
   El niño escribe la respuesta con el teclado en pantalla
   o con el teclado del computador.
   ========================================================= */
(function () {
  var U = AJ.util;

  /** Compara la respuesta escrita con la correcta (números, decimales con coma o fracciones). */
  function esCorrecta(escrito, correcta) {
    escrito = String(escrito).replace(/\./g, '').replace(',', '.').trim();
    var c = String(correcta);
    if (c.indexOf('/') > 0) {
      var a = escrito.split('/'), b = c.split('/');
      if (a.length !== 2 || !+a[1]) return false;
      return Math.abs(a[0] / a[1] - b[0] / b[1]) < 1e-9;
    }
    return escrito !== '' && Math.abs(parseFloat(escrito) - Number(correcta)) < 1e-6;
  }

  /** Teclado numérico reutilizable. Llama a alEnviar(texto) al pulsar OK. */
  function tecladoNumerico(ctx, opciones, alEnviar) {
    var el = ctx.el, valor = '';
    var pantalla = el('div', { class: 'pantalla-num' }, '');
    var teclas = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
    var extra = opciones.coma ? ',' : (opciones.fraccion ? '/' : '');
    var cont = el('div', { class: 'teclado-num' });
    function pulsar(k) {
      ctx.sonido('clic');
      if (k === '⌫') valor = valor.slice(0, -1);
      else if (k === 'OK') { if (valor) alEnviar(valor); return; }
      else if (valor.length < 9) valor += k;
      pantalla.textContent = valor;
    }
    teclas.concat([extra || '⌫', '0', 'OK']).forEach(function (k) {
      var b = el('button', { class: k === 'OK' ? 'ok' : (k === '⌫' ? 'borrar' : '') }, k);
      b.onclick = function () { pulsar(k); };
      cont.appendChild(b);
    });
    if (extra) { var bb = el('button', { class: 'borrar', style: { 'grid-column': 'span 3' } }, '⌫ Borrar'); bb.onclick = function () { pulsar('⌫'); }; cont.appendChild(bb); }
    var teclado = function (ev) {
      if (/^[0-9]$/.test(ev.key)) pulsar(ev.key);
      else if (ev.key === 'Backspace') pulsar('⌫');
      else if (ev.key === 'Enter') pulsar('OK');
      else if ((ev.key === ',' || ev.key === '.') && opciones.coma) pulsar(',');
      else if (ev.key === '/' && opciones.fraccion) pulsar('/');
    };
    document.addEventListener('keydown', teclado);
    ctx.alSalir(function () { document.removeEventListener('keydown', teclado); });
    return {
      nodos: [pantalla, cont],
      limpiar: function () { valor = ''; pantalla.textContent = ''; },
      quitar: function () { document.removeEventListener('keydown', teclado); }
    };
  }

  /* ---------------- RESOLVER OPERACIONES ---------------- */
  AJ.registrarJuego('operaciones', {
    nombre: 'Resolver operaciones',
    instrucciones: 'Resuelve la operación y escribe tu respuesta con los botones. Luego pulsa OK.',
    iniciar: function (area, datos, ctx) {
      var el = ctx.el, total = datos.cantidad || 8, i = 0, vistos = {};
      ctx.total(total);
      var ejercicios = [];
      for (var t = 0; ejercicios.length < total && t < 300; t++) {
        var g = AJ.generadores.crear(datos.generador);
        if (!vistos[g.texto]) { vistos[g.texto] = 1; ejercicios.push(g); }
      }
      function jugar() {
        area.innerHTML = '';
        var g = ejercicios[i], fallos = 0, listo = false;
        var esFraccion = String(g.respuesta).indexOf('/') > 0;
        var esDecimal = !esFraccion && Number(g.respuesta) % 1 !== 0;
        var tecl = tecladoNumerico(ctx, { coma: esDecimal || datos.coma, fraccion: esFraccion }, function (v) {
          if (listo) return;
          if (esCorrecta(v, g.respuesta)) {
            listo = true; tecl.quitar();
            ctx.acierto(g.explica); ctx.avance();
            siguiente(g.explica);
          } else {
            fallos++;
            if (fallos >= 2) {
              listo = true; tecl.quitar();
              ctx.fallo('La respuesta es ' + (typeof g.respuesta === 'number' ? U.num(g.respuesta) : g.respuesta) + '. ' + g.explica);
              ctx.avance(); siguiente(g.explica, true);
            } else { tecl.limpiar(); ctx.fallo('Revisa tu cuenta con calma e inténtalo otra vez.'); }
          }
        });
        var largo = g.texto.length > 22;
        area.appendChild(el('div', { class: 'centro' }, [
          g.visual ? el('div', { class: 'visual-grande' }, g.visual) : null,
          el('div', { class: largo ? 'pregunta-grande' : 'operacion' }, g.texto + (largo || /[¿?]/.test(g.texto) ? '' : ' = ?')),
          esFraccion ? el('div', { class: 'regla' }, 'Escribe la fracción con la tecla / (ejemplo: 3/4)') : null,
          esDecimal ? el('div', { class: 'regla' }, 'Usa la coma para los decimales (ejemplo: 2,5)') : null,
          tecl.nodos[0], tecl.nodos[1]
        ]));
      }
      function siguiente(explica, mostrada) {
        ctx.esperar(function () { i++; if (i < ejercicios.length) jugar(); else ctx.terminar(200); }, 1500 + Math.min(3500, (explica || '').length * 35) + (mostrada ? 1000 : 0));
      }
      jugar();
    }
  });

  /* ---------------- LA TIENDA ESCOLAR ---------------- */
  var PRODUCTOS = [
    ['🍎', 'manzana', 'manzanas', 600], ['🍌', 'banano', 'bananos', 400], ['🧃', 'jugo', 'jugos', 1200], ['🍪', 'paquete de galletas', 'paquetes de galletas', 900],
    ['✏️', 'lápiz', 'lápices', 800], ['📓', 'cuaderno', 'cuadernos', 3500], ['🖍️', 'caja de colores', 'cajas de colores', 4500], ['📏', 'regla', 'reglas', 1500],
    ['🥪', 'sándwich', 'sándwiches', 2800], ['🍦', 'helado', 'helados', 2000], ['🧀', 'pandebono', 'pandebonos', 1000], ['🥛', 'leche', 'leches', 1800]
  ];

  function rondaTienda(g) {
    var prods = U.barajar(PRODUCTOS).slice(0, 6).map(function (p) {
      var precio = p[3];
      if (g === 1) precio = U.azar(1, 4) * 100;                   // números pequeños
      else if (g === 2) precio = U.azar(3, 19) * 50;              // hasta 1.000
      else if (g === 3) precio = U.azar(2, 9) * 100;              // para multiplicar
      return { e: p[0], uno: p[1], varios: p[2], precio: precio };
    });
    var compra = [], pasos = [];
    function nombre(c) { return c.cant + ' ' + c.p.e + ' ' + (c.cant > 1 ? c.p.varios : c.p.uno); }
    if (g === 1) {
      compra = [{ p: prods[0], cant: 1 }, { p: prods[1], cant: 1 }];
      var t1 = compra[0].p.precio + compra[1].p.precio;
      pasos.push({ q: '¿Cuánto cuestan juntos?', r: t1, explica: U.pesos(compra[0].p.precio) + ' + ' + U.pesos(compra[1].p.precio) + ' = ' + U.pesos(t1) + '. Suma las centenas: ' + (compra[0].p.precio / 100) + ' + ' + (compra[1].p.precio / 100) + ' = ' + (t1 / 100) + ' centenas.' });
    } else if (g === 2) {
      compra = [{ p: prods[0], cant: 1 }, { p: prods[1], cant: 1 }];
      var t2 = compra[0].p.precio + compra[1].p.precio, pago2 = t2 <= 1000 ? 1000 : 2000;
      pasos.push({ q: '¿Cuánto debes pagar?', r: t2, explica: U.pesos(compra[0].p.precio) + ' + ' + U.pesos(compra[1].p.precio) + ' = ' + U.pesos(t2) + '.' });
      pasos.push({ q: 'Pagas con un billete de ' + U.pesos(pago2) + '. ¿Cuánto te devuelven?', r: pago2 - t2, pago: pago2, explica: U.pesos(pago2) + ' − ' + U.pesos(t2) + ' = ' + U.pesos(pago2 - t2) + '.' });
    } else if (g === 3) {
      var c3 = U.azar(2, 5); compra = [{ p: prods[0], cant: c3 }];
      var t3 = c3 * prods[0].precio, pago3 = t3 <= 5000 ? 5000 : 10000;
      pasos.push({ q: '¿Cuánto cuestan ' + c3 + ' ' + prods[0].varios + '?', r: t3, explica: c3 + ' × ' + U.pesos(prods[0].precio) + ' = ' + U.pesos(t3) + '. Multiplicar es sumar el mismo precio ' + c3 + ' veces.' });
      pasos.push({ q: 'Pagas con ' + U.pesos(pago3) + '. ¿Cuánto te devuelven?', r: pago3 - t3, pago: pago3, explica: U.pesos(pago3) + ' − ' + U.pesos(t3) + ' = ' + U.pesos(pago3 - t3) + '.' });
    } else if (g === 4) {
      compra = [{ p: prods[0], cant: U.azar(2, 4) }, { p: prods[1], cant: U.azar(1, 3) }];
      var a = compra[0].cant * compra[0].p.precio, b = compra[1].cant * compra[1].p.precio, t4 = a + b;
      var pago4 = t4 <= 10000 ? 10000 : (t4 <= 20000 ? 20000 : 50000);
      pasos.push({ q: '¿Cuánto es el total de la compra?', r: t4, explica: compra[0].cant + ' × ' + U.pesos(compra[0].p.precio) + ' = ' + U.pesos(a) + '; ' + compra[1].cant + ' × ' + U.pesos(compra[1].p.precio) + ' = ' + U.pesos(b) + '. Total: ' + U.pesos(t4) + '.' });
      pasos.push({ q: 'Pagas con ' + U.pesos(pago4) + '. ¿Cuánto te devuelven?', r: pago4 - t4, pago: pago4, explica: U.pesos(pago4) + ' − ' + U.pesos(t4) + ' = ' + U.pesos(pago4 - t4) + '.' });
    } else {
      var d = U.uno([10, 20, 25, 50]), p5 = prods[0];
      var c5 = U.azar(2, 4); compra = [{ p: p5, cant: c5 }];
      var bruto = c5 * p5.precio, desc = bruto * d / 100, t5 = bruto - desc;
      pasos.push({ q: '¿Cuánto cuestan ' + c5 + ' ' + p5.varios + ' sin descuento?', r: bruto, explica: c5 + ' × ' + U.pesos(p5.precio) + ' = ' + U.pesos(bruto) + '.' });
      pasos.push({ q: 'Hoy hay ' + d + '% de descuento. ¿Cuánto descuentan?', r: desc, explica: d + '% de ' + U.pesos(bruto) + ' = ' + U.pesos(bruto) + ' × ' + d + ' ÷ 100 = ' + U.pesos(desc) + '.' });
      pasos.push({ q: '¿Cuánto pagas al final?', r: t5, explica: U.pesos(bruto) + ' − ' + U.pesos(desc) + ' = ' + U.pesos(t5) + '.' });
    }
    return { prods: prods, compra: compra, texto: 'Compra: ' + compra.map(nombre).join(' y '), pasos: pasos };
  }

  AJ.registrarJuego('tienda', {
    nombre: 'La tienda escolar',
    instrucciones: 'Mira la lista de compras y los precios. Calcula y escribe cuánto debes pagar (y tus vueltas).',
    iniciar: function (area, datos, ctx) {
      var el = ctx.el, g = ctx.grado, rondas = [], total = 0;
      for (var i = 0; i < (datos.rondas || 4); i++) { var r = rondaTienda(g); rondas.push(r); total += r.pasos.length; }
      ctx.total(total);
      var ri = 0, pi = 0;
      function jugar() {
        area.innerHTML = '';
        var r = rondas[ri], paso = r.pasos[pi], fallos = 0, listo = false;
        var enCarrito = r.compra.map(function (c) { return c.p; });
        var estante = el('div', { class: 'estante' }, r.prods.map(function (p) {
          return el('div', { class: 'producto' + (enCarrito.indexOf(p) >= 0 ? ' en-carrito' : '') }, [el('span', { class: 'e' }, p.e), el('div', {}, p.uno), el('div', { class: 'precio' }, U.pesos(p.precio))]);
        }));
        var tecl = tecladoNumerico(ctx, {}, function (v) {
          if (listo) return;
          if (esCorrecta(v, paso.r)) {
            listo = true; tecl.quitar(); ctx.acierto(paso.explica); ctx.avance(); seguir(paso.explica);
          } else if (++fallos >= 2) {
            listo = true; tecl.quitar(); ctx.fallo('Era ' + U.pesos(paso.r) + '. ' + paso.explica); ctx.avance(); seguir(paso.explica, true);
          } else { tecl.limpiar(); ctx.fallo('Revisa los precios y vuelve a calcular.'); }
        });
        area.appendChild(el('div', { class: 'centro' }, [
          estante,
          el('div', { class: 'regla' }, '🛒 ' + r.texto),
          paso.pago ? el('span', { class: 'billete' }, '💵 ' + U.pesos(paso.pago)) : null,
          el('div', { class: 'pregunta-grande' }, paso.q),
          el('div', { style: { display: 'flex', gap: '1rem', 'align-items': 'center' } }, [el('span', { class: 'operacion', style: { 'font-size': '2.4rem' } }, '$'), tecl.nodos[0]]),
          tecl.nodos[1]
        ]));
      }
      function seguir(explica, mostrada) {
        ctx.esperar(function () {
          pi++;
          if (pi >= rondas[ri].pasos.length) { pi = 0; ri++; }
          if (ri < rondas.length) jugar(); else ctx.terminar(200);
        }, 1600 + Math.min(3500, explica.length * 35) + (mostrada ? 1000 : 0));
      }
      jugar();
    }
  });

  AJ.esCorrectaNumerica = esCorrecta;
})();
