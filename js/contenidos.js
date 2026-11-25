/* =========================================================
   REGISTRO DE MATERIAS Y CONTENIDOS
   Cada archivo de js/contenidos/ llama a AJ.materia(...) con
   los juegos de cada grado. Aquí se guardan y se consultan.

   Estructura de un juego:
   {
     tipo: 'sopa',                 // mecánica (ver js/juegos/)
     titulo: 'Sopa de animales',
     descripcion: 'Encuentra los animales escondidos.',
     aprende: 'Vocabulario de animales',   // objetivo de aprendizaje
     icono: '🐾',                  // opcional
     instrucciones: '...',         // opcional (si no, usa las de la mecánica)
     datos: { ... }                // contenido propio del juego
   }
   ========================================================= */
AJ.materias = [];

AJ.GRADOS = [
  { n: 1, nombre: 'Primero', texto: 'Contar, leer y descubrir el mundo' },
  { n: 2, nombre: 'Segundo', texto: 'Sumar, restar y escribir oraciones' },
  { n: 3, nombre: 'Tercero', texto: 'Multiplicar y explorar la naturaleza' },
  { n: 4, nombre: 'Cuarto', texto: 'Fracciones, regiones y el cuerpo humano' },
  { n: 5, nombre: 'Quinto', texto: 'Decimales, historia y la célula' }
];

/**
 * Registra una materia.
 * AJ.materia({ id, nombre, color, icono, descripcion, temas: {1:'...',...}, grados: {1:[juegos], 2:[...], ...} })
 */
AJ.materia = function (m) {
  for (var g in m.grados) {
    m.grados[g].forEach(function (j, i) {
      j.grado = +g;
      j.id = m.id + '-' + g + '-' + i;
      if (!j.datos) j.datos = {};
    });
  }
  AJ.materias.push(m);
};

AJ.buscarMateria = function (id) { return AJ.materias.filter(function (m) { return m.id === id; })[0]; };
AJ.juegosDe = function (idMateria, grado) { var m = AJ.buscarMateria(idMateria); return (m && m.grados[grado]) || []; };

/** Nombre corto de la mecánica para mostrar en la tarjeta. */
AJ.nombreTipo = function (tipo) { return (AJ.juegos[tipo] && AJ.juegos[tipo].nombre) || tipo; };
