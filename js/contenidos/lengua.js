/* =========================================================
   LENGUA CASTELLANA · Contenidos por grado
   ========================================================= */
AJ.materia({
  id: 'lengua',
  nombre: 'Lengua Castellana',
  color: '#e03131',
  icono: '📖',
  descripcion: 'Leer, escribir, ortografía y comprensión.',
  temas: {
    1: 'Vocales y consonantes, sílabas, formar palabras, oraciones cortas',
    2: 'Sílabas trabadas, singular y plural, masculino y femenino, orden alfabético, mayúsculas',
    3: 'Sustantivo, adjetivo y verbo; sinónimos y antónimos; partes del cuento; la fábula; mb y mp',
    4: 'Palabras agudas, graves y esdrújulas; sujeto y predicado; puntuación; tipos de texto',
    5: 'Tiempos verbales, conectores, figuras literarias, tilde diacrítica, géneros literarios'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'seleccion', titulo: '¿Con qué vocal empieza?', icono: '🅰️', descripcion: 'Mira el dibujo y elige la vocal inicial.', aprende: 'Reconocer las vocales A, E, I, O, U',
        datos: { preguntas: [
          '🐝 :: ¿Con qué vocal empieza ABEJA? | A | E | O || A-be-ja empieza con A.',
          '🐘 :: ¿Con qué vocal empieza ELEFANTE? | E | A | I || E-le-fan-te empieza con E.',
          '🏝️ :: ¿Con qué vocal empieza ISLA? | I | U | E || Is-la empieza con I.',
          '🐻 :: ¿Con qué vocal empieza OSO? | O | U | A || O-so empieza con O.',
          '🍇 :: ¿Con qué vocal empieza UVAS? | U | O | I || U-vas empieza con U.',
          '🦅 :: ¿Con qué vocal empieza ÁGUILA? | A | O | E || Á-gui-la empieza con A.',
          '👁️ :: ¿Con qué vocal empieza OJO? | O | A | U || O-jo empieza con O.',
          '⭐ :: ¿Con qué vocal empieza ESTRELLA? | E | I | A || Es-tre-lla empieza con E.',
          '🦄 :: ¿Con qué vocal empieza UNICORNIO? | U | I | O || U-ni-cor-nio empieza con U.',
          '⛪ :: ¿Con qué vocal empieza IGLESIA? | I | E | A || I-gle-sia empieza con I.'
        ] } },
      { tipo: 'completar', titulo: 'Completa la sílaba', icono: '🧩', descripcion: 'Elige la sílaba que falta en la palabra.', aprende: 'Formar palabras con sílabas (ma, pa, sa, la, ta…)',
        datos: { preguntas: [
          '🐱 :: GA___ | TO | SA | LO || GA-TO',
          '🦆 :: PA___ | TO | SO | LA || PA-TO',
          '🌙 :: LU___ | NA | MA | SA || LU-NA',
          '🏠 :: CA___ | SA | MA | TA || CA-SA',
          '🍲 :: ___PA | SO | LO | TO || SO-PA',
          '🪑 :: ___LLA | SI | MI | PI || SI-LLA',
          '🐭 :: RA___ | TÓN | MÓN | SÓN || RA-TÓN',
          '👞 :: ZA___TO | PA | MA | LA || ZA-PA-TO',
          '🦋 :: MARI___SA | PO | LO | SO || MA-RI-PO-SA',
          '🍅 :: TO___TE | MA | PA | SA || TO-MA-TE'
        ] } },
      { tipo: 'memoria', titulo: 'Memoria: dibujo y palabra', icono: '🃏', descripcion: 'Une cada dibujo con su palabra.', aprende: 'Leer palabras sencillas',
        datos: { cantidad: 6, pares: ['🐶 | PERRO', '🐱 | GATO', '🏠 | CASA', '🌙 | LUNA', '☀️ | SOL', '🐸 | RANA', '🍎 | MANZANA', '🦆 | PATO', '🌳 | ÁRBOL', '🐟 | PEZ'] } },
      { tipo: 'revueltas', titulo: 'Palabras revueltas', icono: '🔤', descripcion: 'Ordena las letras para formar la palabra.', aprende: 'Escribir palabras cortas letra por letra',
        datos: { cantidad: 7, palabras: ['SOL | ☀️ Nos da luz y calor', 'MESA | 🍽️ Allí comemos', 'PATO | 🦆 Hace cuac cuac', 'LUNA | 🌙 Sale de noche', 'MAMÁ | 👩 La que nos cuida', 'OSO | 🐻 Animal grande y peludo', 'PELOTA | ⚽ Juguete redondo', 'NIDO | 🐦 Casa de los pájaros', 'DEDO | ☝️ Tenemos diez en las manos'] } },
      { tipo: 'sopa', titulo: 'Sopa de letras', icono: '🔎', descripcion: 'Encuentra palabras con M, P, S y L.', aprende: 'Reconocer palabras con m, p, s, l',
        datos: { palabras: ['MESA | 🍽️', 'PELO | 💇', 'SOPA | 🍲', 'LUNA | 🌙', 'PATO | 🦆', 'OSO | 🐻'] } },
      { tipo: 'ordenar', titulo: 'Arma la oración', icono: '🧱', descripcion: 'Ordena las palabras para formar una oración.', aprende: 'Formar oraciones con mayúscula y punto',
        datos: { secuencias: [
          { titulo: 'Arma la oración 🐱', items: ['El', 'gato', 'toma', 'leche.'], explica: 'Empieza con mayúscula (El) y termina con punto.' },
          { titulo: 'Arma la oración 👩', items: ['Mi', 'mamá', 'me', 'ama.'], explica: 'Mi mamá me ama.' },
          { titulo: 'Arma la oración ⚽', items: ['Los', 'niños', 'juegan', 'fútbol.'], explica: '¿Quién? Los niños. ¿Qué hacen? Juegan fútbol.' },
          { titulo: 'Arma la oración 🌙', items: ['La', 'luna', 'sale', 'de', 'noche.'], explica: 'La oración tiene sentido y termina en punto.' },
          { titulo: 'Arma la oración 🐦', items: ['El', 'pájaro', 'vuela', 'alto.'], explica: 'El pájaro vuela alto.' }
        ] } },
      { tipo: 'lectura', titulo: 'Lectura: El gato Tito', icono: '🐈', descripcion: 'Lee el cuento corto y responde.', aprende: 'Comprensión de lectura literal',
        datos: { tituloLectura: '🐈 El gato Tito', lectura: 'Tito es un gato gris.\nTito vive en una casa con Ana.\nA Tito le gusta tomar leche y dormir al sol.\nUn día Tito subió a un árbol y Ana lo ayudó a bajar.', preguntas: [
          '¿De qué color es Tito? | Gris | Negro | Blanco || El cuento dice: "Tito es un gato gris".',
          '¿Con quién vive Tito? | Con Ana | Con Pepe | Solo || Tito vive en una casa con Ana.',
          '¿Qué le gusta tomar a Tito? | Leche | Jugo | Agua || A Tito le gusta tomar leche.',
          '¿A dónde subió Tito? | A un árbol | A la mesa | Al techo || Un día Tito subió a un árbol.'
        ] } },
      { tipo: 'clasificar', titulo: 'Vocales y consonantes', icono: '🔠', descripcion: 'Separa las vocales de las consonantes.', aprende: 'Diferenciar vocales y consonantes',
        datos: { categorias: ['Vocales', 'Consonantes'], elementos: ['A | 0', 'E | 0', 'I | 0', 'O | 0', 'U | 0', 'M | 1', 'P | 1', 'S | 1', 'L | 1', 'T | 1', 'N | 1', 'D | 1'] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'completar', titulo: 'Sílabas trabadas', icono: '🎈', descripcion: 'Completa con BL, BR, PL, PR, TR, GL…', aprende: 'Sílabas trabadas (bl, br, pl, pr, fl, gl, gr, tr, dr)',
        datos: { preguntas: [
          '🍽️ :: ___ATO | PL | BL | PR || PLA-TO se escribe con PL.',
          '🎈 :: ___OBO | GL | GR | BL || GLO-BO se escribe con GL.',
          '🚂 :: ___EN | TR | DR | TL || TREN se escribe con TR.',
          '🌸 :: ___OR | FL | FR | PL || FLOR se escribe con FL.',
          '🐉 :: ___AGÓN | DR | TR | BR || DRA-GÓN se escribe con DR.',
          '🦗 :: ___ILLO | GR | GL | BR || GRI-LLO se escribe con GR.',
          '👚 :: ___USA | BL | BR | PL || BLU-SA se escribe con BL.',
          '🥦 :: ___ÓCOLI | BR | BL | PR || BRÓ-CO-LI se escribe con BR.',
          '🍓 :: ___ESA | FR | FL | TR || FRE-SA se escribe con FR.',
          '📖 :: LI___O | BR | BL | DR || LI-BRO se escribe con BR.'
        ] } },
      { tipo: 'relacionar', titulo: 'Singular y plural', icono: '👥', descripcion: 'Une cada palabra con su plural.', aprende: 'Formar el plural (‑s, ‑es, z → ces)',
        datos: { columnas: ['Uno (singular)', 'Varios (plural)'], pares: ['flor | flores || Termina en consonante: se agrega -es', 'lápiz | lápices || La z cambia a c: lápices', 'pez | peces || La z cambia a c: peces', 'camión | camiones || Se agrega -es', 'casa | casas || Termina en vocal: se agrega -s', 'árbol | árboles || Se agrega -es', 'ratón | ratones || Se agrega -es', 'niño | niños || Termina en vocal: se agrega -s'] } },
      { tipo: 'clasificar', titulo: 'Masculino y femenino', icono: '👦👧', descripcion: 'Clasifica las palabras con EL o LA.', aprende: 'Género de los sustantivos (el / la)',
        datos: { categorias: ['Masculino (el)', 'Femenino (la)'], elementos: ['niño | 0', 'niña | 1', 'gato | 0', 'mesa | 1', 'sol | 0', 'luna | 1', 'árbol | 0', 'flor | 1', 'libro | 0', 'escuela | 1', 'lápiz | 0', 'nube | 1'] } },
      { tipo: 'ordenar', titulo: 'Orden alfabético', icono: '🔤', descripcion: 'Ordena las palabras como en el diccionario.', aprende: 'Ordenar palabras alfabéticamente',
        datos: { secuencias: [
          { titulo: 'Ordena de la A a la Z', items: ['ardilla', 'burro', 'conejo', 'delfín', 'elefante'], explica: 'Fíjate en la primera letra: a, b, c, d, e.' },
          { titulo: 'Ordena de la A a la Z', items: ['gato', 'hormiga', 'iguana', 'jirafa', 'koala'], explica: 'g, h, i, j, k.' },
          { titulo: 'Ordena de la A a la Z', items: ['mango', 'naranja', 'pera', 'sandía', 'uva'], explica: 'm, n, p, s, u.' },
          { titulo: 'Ordena de la A a la Z', items: ['casa', 'cometa', 'cuaderno', 'cuchara'], explica: 'Si empiezan igual, mira la segunda letra: ca, co, cua, cuc.' }
        ] } },
      { tipo: 'vf', titulo: 'Uso de mayúsculas', icono: '🔠', descripcion: '¿Cuándo usamos mayúscula?', aprende: 'Reglas básicas de las mayúsculas',
        datos: { afirmaciones: [
          'Los nombres de personas se escriben con mayúscula: Juan, Ana. | V || Los nombres propios llevan mayúscula.',
          'Después de un punto se escribe con minúscula. | F || Después de punto se escribe con MAYÚSCULA.',
          'Una oración empieza con mayúscula. | V || Toda oración empieza con mayúscula.',
          'Los nombres de ciudades como Cali se escriben con mayúscula. | V || Cali, Bogotá y Medellín son nombres propios.',
          'La palabra "perro" siempre se escribe con mayúscula. | F || "perro" es un nombre común: va en minúscula, salvo al iniciar oración.',
          'El nombre de tu mascota se escribe con mayúscula: Firulais. | V || Es un nombre propio.',
          'Los días de la semana se escriben con mayúscula: Lunes. | F || En español se escriben con minúscula: lunes, martes.'
        ] } },
      { tipo: 'lectura', titulo: 'Lectura: La fiesta de Lucía', icono: '🎂', descripcion: 'Lee y responde preguntas.', aprende: 'Comprensión de lectura: personajes, lugar y hechos',
        datos: { tituloLectura: '🎂 La fiesta de Lucía', lectura: 'El sábado Lucía cumplió ocho años. Su abuela preparó un pastel de chocolate y sus amigos llegaron al parque con globos de colores.\nJugaron a la lleva y a saltar lazo. Cuando empezó a llover, todos corrieron a la casa de Lucía y allí cantaron el cumpleaños feliz.\nLucía dijo que fue el mejor día del año.', preguntas: [
          '¿Cuántos años cumplió Lucía? | Ocho | Siete | Nueve || El texto dice que cumplió ocho años.',
          '¿Quién preparó el pastel? | La abuela | La mamá | Lucía || Su abuela preparó un pastel de chocolate.',
          '¿Dónde empezó la fiesta? | En el parque | En la escuela | En la playa || Los amigos llegaron al parque.',
          '¿Por qué corrieron a la casa? | Porque empezó a llover | Porque estaban cansados | Porque era de noche || Cuando empezó a llover, todos corrieron a la casa.',
          '¿Cómo se sintió Lucía? | Feliz | Triste | Enojada || Dijo que fue el mejor día del año.'
        ] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de animales', icono: '🐮', descripcion: 'Completa con nombres de animales.', aprende: 'Escritura correcta de palabras',
        datos: { palabras: ['GATO | Animal que maúlla 🐱', 'VACA | Nos da leche 🐄', 'PATO | Ave que nada y dice cuac 🦆', 'OVEJA | Nos da lana 🐑', 'PERRO | Ladra y cuida la casa 🐶', 'GALLO | Canta en la mañana: ¡quiquiriquí! 🐓', 'CABALLO | Animal que relincha 🐴'] } },
      { tipo: 'sopa', titulo: 'Sopa de sílabas trabadas', icono: '🔎', descripcion: 'Busca palabras con BR, PL, FL, GL, TR.', aprende: 'Leer palabras con sílabas trabadas',
        datos: { palabras: ['BRAZO | 💪', 'PLATO | 🍽️', 'FLOR | 🌸', 'GLOBO | 🎈', 'TREN | 🚂', 'CLAVO | 🔨', 'FRESA | 🍓'] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'clasificar', titulo: 'Sustantivo, adjetivo o verbo', icono: '🏷️', descripcion: 'Clasifica cada palabra.', aprende: 'Clases de palabras: sustantivo, adjetivo, verbo',
        datos: { categorias: ['Sustantivo (nombra)', 'Adjetivo (describe)', 'Verbo (acción)'], elementos: [
          'casa | 0 || Nombra un lugar', 'perro | 0 || Nombra un animal', 'Camila | 0 || Nombra a una persona', 'montaña | 0 || Nombra una cosa',
          'bonito | 1 || Dice cómo es algo', 'alto | 1 || Describe el tamaño', 'feliz | 1 || Describe cómo se siente alguien', 'rojo | 1 || Describe el color',
          'correr | 2 || Es una acción', 'cantar | 2 || Es una acción', 'escribir | 2 || Es una acción', 'saltar | 2 || Es una acción'] } },
      { tipo: 'relacionar', titulo: 'Sinónimos', icono: '🤝', descripcion: 'Une las palabras que significan lo mismo.', aprende: 'Sinónimos: palabras con igual significado',
        datos: { pares: ['feliz | contento', 'bonito | hermoso', 'rápido | veloz', 'empezar | comenzar', 'enojado | furioso', 'hablar | conversar', 'grande | enorme', 'regalo | obsequio'] } },
      { tipo: 'memoria', titulo: 'Memoria de antónimos', icono: '🃏', descripcion: 'Encuentra las palabras contrarias.', aprende: 'Antónimos: palabras de significado opuesto',
        datos: { cantidad: 6, pares: ['alto | bajo', 'día | noche', 'frío | caliente', 'abrir | cerrar', 'alegre | triste', 'rápido | lento', 'subir | bajar', 'lleno | vacío'] } },
      { tipo: 'ordenar', titulo: 'Inicio, nudo y desenlace', icono: '📚', descripcion: 'Ordena las partes de cada cuento.', aprende: 'Estructura del cuento',
        datos: { sinFlechas: false, secuencias: [
          { ayuda: '1 Inicio ➜ 2 Nudo (problema) ➜ 3 Desenlace (final)', titulo: 'Cuento: La hormiga y la paloma', items: ['Una hormiga fue a tomar agua al río.', 'La corriente la arrastró y una paloma le lanzó una hoja.', 'La hormiga subió a la hoja y se salvó.'], explica: 'presenta al personaje. Nudo: el problema. Desenlace: cómo termina.' },
          { ayuda: '1 Inicio ➜ 2 Nudo (problema) ➜ 3 Desenlace (final)', titulo: 'Cuento: El perrito perdido', items: ['Max era un perrito que vivía en una granja.', 'Un día persiguió una mariposa y se perdió en el bosque.', 'Siguió el olor del pan de la granja y volvió a casa.'], explica: 'Primero conocemos a Max, luego se pierde y al final regresa.' },
          { ayuda: '1 Inicio ➜ 2 Nudo (problema) ➜ 3 Desenlace (final)', titulo: 'Cuento: La semilla de Juan', items: ['Juan sembró una semilla en el patio.', 'Pasaron días sin lluvia y la planta empezó a secarse.', 'Juan la regó cada tarde y creció un girasol.'], explica: 'El problema (nudo) se resuelve en el desenlace.' }
        ] } },
      { tipo: 'lectura', titulo: 'Fábula: La liebre y la tortuga', icono: '🐢', descripcion: 'Lee la fábula y descubre su enseñanza.', aprende: 'La fábula y su moraleja',
        datos: { tituloLectura: '🐢 La liebre y la tortuga (fábula de Esopo)', lectura: 'Una liebre se burlaba de la tortuga por ser tan lenta. La tortuga, cansada de las burlas, la retó a una carrera.\nLa liebre salió muy rápido y, al ver que llevaba mucha ventaja, se acostó a dormir bajo un árbol.\nLa tortuga siguió caminando sin detenerse, paso a paso. Cuando la liebre despertó, corrió con todas sus fuerzas, pero la tortuga ya había cruzado la meta.', preguntas: [
          '¿Por qué la tortuga retó a la liebre? | Porque se burlaba de ella | Porque quería un premio | Porque estaba aburrida || La liebre se burlaba de su lentitud.',
          '¿Qué hizo la liebre durante la carrera? | Se durmió bajo un árbol | Ayudó a la tortuga | Se perdió || Al ver su ventaja se acostó a dormir.',
          '¿Quién ganó la carrera? | La tortuga | La liebre | Empataron || La tortuga cruzó primero la meta.',
          '¿Cuál es la moraleja? | Con constancia se llega a la meta | El más rápido siempre gana | Dormir es importante || La fábula enseña que el esfuerzo constante vence al exceso de confianza.',
          '¿Por qué es una fábula? | Tiene animales que hablan y deja una enseñanza | Es una noticia | Es un poema con rimas || Las fábulas tienen animales como personajes y una moraleja.'
        ] } },
      { tipo: 'completar', titulo: '¿MB o MP?', icono: '✏️', descripcion: 'Completa con la ortografía correcta.', aprende: 'Antes de B y P se escribe M',
        datos: { preguntas: [
          '🌾 :: ca___o | mp | np || Antes de P siempre va M: campo.',
          '👨 :: ho___re | mb | nb || Antes de B siempre va M: hombre.',
          '🥁 :: ta___or | mb | nb || Antes de B siempre va M: tambor.',
          '🧽 :: li___io | mp | np || Antes de P siempre va M: limpio.',
          '🛒 :: co___rar | mp | np || Antes de P siempre va M: comprar.',
          '🎩 :: so___rero | mb | nb || Antes de B siempre va M: sombrero.',
          '🦟 :: zu___ido | mb | nb || Antes de B siempre va M: zumbido.',
          '⏱️ :: tie___o | mp | np || Antes de P siempre va M: tiempo.'
        ] } },
      { tipo: 'sopa', titulo: 'Sopa de verbos', icono: '🔎', descripcion: 'Encuentra palabras que indican acciones.', aprende: 'Reconocer verbos (acciones)',
        datos: { palabras: ['CORRER | 🏃', 'SALTAR | 🤸', 'LEER | 📖', 'CANTAR | 🎤', 'JUGAR | ⚽', 'DORMIR | 😴', 'NADAR | 🏊'] } },
      { tipo: 'crucigrama', titulo: 'Partes del libro', icono: '📕', descripcion: 'Resuelve el crucigrama del libro.', aprende: 'Partes de un libro',
        datos: { palabras: ['PORTADA | Cara de adelante del libro, con el título', 'TITULO | Nombre del libro', 'AUTOR | Persona que escribió el libro', 'PAGINA | Cada una de las hojas numeradas', 'INDICE | Lista de capítulos con su página', 'LOMO | Parte donde se unen las hojas', 'ILUSTRADOR | Persona que hace los dibujos'] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'clasificar', titulo: 'Agudas, graves y esdrújulas', icono: '🔊', descripcion: 'Clasifica según la sílaba más fuerte.', aprende: 'Clasificación de palabras por el acento',
        datos: { categorias: ['Aguda (última sílaba)', 'Grave (penúltima)', 'Esdrújula (antepenúltima)'], elementos: [
          'can-CIÓN | 0 || Fuerza en la última sílaba', 'ca-MIÓN | 0 || Fuerza en la última sílaba', 're-LOJ | 0 || Fuerza en la última', 'ca-FÉ | 0 || Fuerza en la última',
          'ÁR-bol | 1 || Fuerza en la penúltima', 'LÁ-piz | 1 || Fuerza en la penúltima', 'CA-sa | 1 || Fuerza en la penúltima', 'ME-sa | 1 || Fuerza en la penúltima',
          'MÚ-si-ca | 2 || Fuerza en la antepenúltima; las esdrújulas siempre llevan tilde', 'PÁ-ja-ro | 2 || Esdrújula: siempre tilde', 'te-LÉ-fo-no | 2 || Esdrújula', 'BRÚ-ju-la | 2 || Esdrújula'] } },
      { tipo: 'seleccion', titulo: 'Sujeto y predicado', icono: '🧩', descripcion: 'Encuentra quién realiza la acción.', aprende: 'Partes de la oración: sujeto y predicado',
        datos: { preguntas: [
          'En "Los niños juegan fútbol", ¿cuál es el SUJETO? | Los niños | juegan fútbol | fútbol || El sujeto es quien hace la acción: los niños.',
          'En "Mi abuela cocina arepas", ¿cuál es el PREDICADO? | cocina arepas | Mi abuela | arepas || El predicado dice lo que hace el sujeto.',
          'En "El río Magdalena atraviesa Colombia", ¿cuál es el SUJETO? | El río Magdalena | atraviesa Colombia | Colombia || ¿Quién atraviesa? El río Magdalena.',
          'En "Las mariposas vuelan entre las flores", ¿cuál es el VERBO? | vuelan | mariposas | flores || El verbo es el núcleo del predicado: vuelan.',
          'En "Andrés lee un libro de dinosaurios", ¿cuál es el SUJETO? | Andrés | lee un libro | dinosaurios || Andrés es quien lee.',
          'En "Ayer llovió mucho en Bogotá", ¿cuál es el verbo? | llovió | Bogotá | mucho || Llovió es la acción.'
        ] } },
      { tipo: 'seleccion', titulo: 'Signos de puntuación', icono: '❗', descripcion: 'Elige el signo correcto.', aprende: 'Uso del punto, la coma, interrogación y exclamación',
        datos: { preguntas: [
          '___Qué día es hoy? | ¿ | ¡ | . || Las preguntas empiezan con ¿ y terminan con ?',
          '___Qué alegría verte! | ¡ | ¿ | , || Las exclamaciones empiezan con ¡ y terminan con !',
          'Compré mangos___ peras, uvas y fresas. | , | . | ? || La coma separa los elementos de una lista.',
          'Mañana iré al parque___ | . | , | ¡ || El punto final cierra la oración.',
          'Querida abuela___ te extraño mucho. | , | ? | ¡ || Después del saludo en una carta se usa coma (o dos puntos).',
          '¿Cuándo vienes___ | ? | ! | , || Si empieza con ¿ debe terminar con ?'
        ] } },
      { tipo: 'relacionar', titulo: 'Tipos de texto', icono: '📰', descripcion: 'Une cada texto con su tipo.', aprende: 'Propósito de los tipos de texto',
        datos: { pares: ['Receta para hacer arepas | Instructivo (explica pasos)', 'Había una vez un dragón… | Narrativo (cuenta una historia)', 'Noticia del periódico | Informativo (da a conocer hechos)', 'Poema con rimas | Lírico (expresa sentimientos)', 'Anuncio de un jugo | Publicitario (convence de comprar)', 'Carta a un amigo | Epistolar (comunica un mensaje)'] } },
      { tipo: 'lectura', titulo: 'Lectura: Los colibríes', icono: '🐦', descripcion: 'Texto informativo con preguntas de inferencia.', aprende: 'Comprensión literal e inferencial',
        datos: { tituloLectura: '🐦 Los colibríes', lectura: 'Colombia es el país con más especies de colibríes del mundo. Estas aves pequeñas pueden batir sus alas hasta 80 veces por segundo, por eso parecen quedarse quietas en el aire.\nSe alimentan del néctar de las flores y, al pasar de una flor a otra, llevan el polen. Así ayudan a que nazcan nuevas plantas.\nComo gastan mucha energía, necesitan comer muchas veces al día.', preguntas: [
          '¿Qué país tiene más especies de colibríes? | Colombia | Brasil | México || Lo dice la primera oración.',
          '¿De qué se alimentan los colibríes? | Del néctar de las flores | De semillas | De insectos grandes || Se alimentan del néctar.',
          '¿Por qué parecen quedarse quietos en el aire? | Porque mueven las alas muy rápido | Porque flotan | Porque son muy livianos || Baten sus alas hasta 80 veces por segundo.',
          '¿Por qué son importantes para las plantas? | Porque llevan el polen de flor en flor | Porque comen hojas | Porque riegan las plantas || Al llevar polen ayudan a que nazcan plantas.',
          '¿Qué tipo de texto es? | Informativo | Cuento | Poema || Da información real sobre un tema.'
        ] } },
      { tipo: 'revueltas', titulo: 'Palabras de la biblioteca', icono: '🔤', descripcion: 'Descubre la palabra con la pista.', aprende: 'Vocabulario de la lectura y la escritura',
        datos: { palabras: ['BIBLIOTECA | 🏛️ Lugar donde se prestan libros', 'DICCIONARIO | 📕 Libro con el significado de las palabras', 'PÁRRAFO | 📄 Conjunto de oraciones sobre una misma idea', 'NARRADOR | 🗣️ Quien cuenta la historia', 'PERSONAJE | 🦸 Quien participa en un cuento', 'TÍTULO | 🏷️ Nombre de un texto', 'ORACIÓN | ✍️ Palabras con sentido completo'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama literario', icono: '📝', descripcion: 'Palabras del mundo de los textos.', aprende: 'Elementos de los textos narrativos y poéticos',
        datos: { palabras: ['VERSO | Cada línea de un poema', 'ESTROFA | Grupo de versos', 'RIMA | Sonido igual al final de los versos', 'NARRADOR | Voz que cuenta la historia', 'PERSONAJE | Quien realiza las acciones en un cuento', 'AUTOR | Persona que escribe un texto', 'TITULO | Nombre de una obra'] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'clasificar', titulo: 'Tiempos verbales', icono: '⏳', descripcion: '¿Pasado, presente o futuro?', aprende: 'Tiempos del verbo',
        datos: { categorias: ['Pasado', 'Presente', 'Futuro'], elementos: [
          'Ayer jugué fútbol | 0 || "jugué" ya ocurrió', 'Leímos un cuento | 0 || "leímos" ya pasó', 'Ella cantó en el acto | 0 || "cantó" es pasado',
          'Ahora estudio inglés | 1 || "estudio" pasa ahora', 'Mi perro come | 1 || "come" es presente', 'Nosotros escribimos | 1 || Presente',
          'Mañana viajaré | 2 || "viajaré" ocurrirá después', 'Ustedes ganarán | 2 || "ganarán" es futuro', 'Pintaremos el mural | 2 || Futuro'] } },
      { tipo: 'completar', titulo: 'Conectores', icono: '🔗', descripcion: 'Elige el conector que une las ideas.', aprende: 'Uso de conectores (pero, porque, entonces, además…)',
        datos: { preguntas: [
          'Quería salir a jugar, ___ estaba lloviendo. | pero | porque | además || "pero" une ideas que se oponen.',
          'No fui a clase ___ estaba enfermo. | porque | pero | sin embargo || "porque" explica la causa.',
          'Estudié mucho, ___ saqué buena nota. | por eso | aunque | pero || "por eso" indica consecuencia.',
          'Me gusta leer; ___, me gusta escribir. | además | pero | porque || "además" agrega una idea.',
          '___ hacía frío, salimos al parque. | Aunque | Porque | Entonces || "Aunque" presenta una dificultad que no impide la acción.',
          'Primero lavé las frutas y ___ las corté. | luego | pero | porque || "luego" indica orden en el tiempo.'
        ] } },
      { tipo: 'relacionar', titulo: 'Figuras literarias', icono: '🎭', descripcion: 'Une cada frase con su figura literaria.', aprende: 'Comparación, metáfora, personificación e hipérbole',
        datos: { pares: ['Tus ojos brillan como luceros | Comparación || Usa la palabra "como"', 'El viento cantaba entre los árboles | Personificación || Da acciones humanas a algo que no es persona', 'Te lo he dicho un millón de veces | Hipérbole || Exagera', 'Tus dientes son perlas | Metáfora || Compara sin usar "como"'] } },
      { tipo: 'seleccion', titulo: 'Tilde diacrítica', icono: '✒️', descripcion: '¿Con tilde o sin tilde?', aprende: 'Tilde diacrítica (él/el, tú/tu, mí/mi, sí/si, más/mas)',
        datos: { preguntas: [
          '___ llegó temprano a la escuela. | Él | El || "Él" con tilde es un pronombre (reemplaza a una persona).',
          '___ perro ladra mucho. | El | Él || "El" sin tilde es un artículo, acompaña al sustantivo.',
          '¿___ vienes a la fiesta? | Tú | Tu || "Tú" con tilde es pronombre personal.',
          'Me gusta ___ cuaderno nuevo. | tu | tú || "tu" sin tilde indica posesión.',
          'Ese regalo es para ___. | mí | mi || "mí" con tilde es pronombre.',
          '___ llueve, no saldremos. | Si | Sí || "Si" sin tilde expresa condición.',
          'Quiero ___ jugo, por favor. | más | mas || "más" con tilde indica cantidad.'
        ] } },
      { tipo: 'clasificar', titulo: 'Géneros literarios', icono: '📚', descripcion: 'Lírico, narrativo o dramático.', aprende: 'Géneros literarios',
        datos: { categorias: ['Lírico', 'Narrativo', 'Dramático'], elementos: ['Poema | 0 || Expresa sentimientos en verso', 'Canción | 0 || Lírico: versos para cantar', 'Copla | 0 || Estrofa popular', 'Cuento | 1 || Narra una historia', 'Novela | 1 || Narración larga', 'Fábula | 1 || Narración con moraleja', 'Leyenda | 1 || Narración tradicional', 'Obra de teatro | 2 || Se representa con actores', 'Guion de títeres | 2 || Diálogos para representar'] } },
      { tipo: 'lectura', titulo: 'Lectura: El agua es vida', icono: '💧', descripcion: 'Identifica la idea principal y los argumentos.', aprende: 'Idea principal y texto argumentativo',
        datos: { tituloLectura: '💧 El agua es vida', lectura: 'Debemos cuidar el agua porque sin ella no hay vida. Aunque gran parte del planeta está cubierto de agua, solo una pequeña parte es dulce y apta para beber.\nEn Colombia tenemos páramos que funcionan como fábricas de agua, pero la contaminación y la minería los ponen en peligro.\nPor eso, cerrar la llave mientras nos cepillamos, reutilizar el agua y proteger los ríos son acciones que todos podemos hacer.', preguntas: [
          '¿Cuál es la idea principal del texto? | Debemos cuidar el agua | Colombia tiene páramos | El planeta es grande || Todo el texto argumenta por qué y cómo cuidar el agua.',
          '¿Por qué dice el autor que debemos cuidar el agua? | Porque sin ella no hay vida | Porque es azul | Porque es gratis || Es el primer argumento.',
          '¿Qué funciona como "fábrica de agua"? | Los páramos | Las ciudades | Los océanos || Lo dice el segundo párrafo.',
          '¿Qué pone en peligro a los páramos? | La contaminación y la minería | La lluvia | Los animales || Lo menciona el texto.',
          '¿Qué tipo de texto es? | Argumentativo | Narrativo | Lírico || Da razones para convencer al lector.'
        ] } },
      { tipo: 'sopa', titulo: 'Sopa literaria', icono: '🔎', descripcion: 'Encuentra términos de literatura.', aprende: 'Vocabulario literario',
        datos: { palabras: ['METÁFORA | Comparación sin "como"', 'ESTROFA | Grupo de versos', 'LEYENDA | Relato tradicional', 'NOVELA | Narración extensa', 'FÁBULA | Relato con moraleja', 'MITO | Relato sobre dioses y el origen del mundo', 'POEMA | Texto en verso'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama gramatical', icono: '🧠', descripcion: 'Conceptos de gramática.', aprende: 'Categorías gramaticales',
        datos: { palabras: ['SINONIMO | Palabra que significa lo mismo que otra', 'ANTONIMO | Palabra de significado contrario', 'VERBO | Palabra que expresa una acción', 'ADJETIVO | Palabra que describe al sustantivo', 'SUSTANTIVO | Palabra que nombra personas, animales o cosas', 'PRONOMBRE | Palabra que reemplaza al sustantivo: él, ella, nosotros', 'ADVERBIO | Palabra que indica modo, tiempo o lugar: rápido, ayer, aquí'] } }
    ]
  }
});
