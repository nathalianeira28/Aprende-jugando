/* =========================================================
   CIENCIAS NATURALES · Contenidos por grado
   ========================================================= */
AJ.materia({
  id: 'naturales',
  nombre: 'Ciencias Naturales',
  color: '#2f9e44',
  icono: '🌿',
  descripcion: 'El cuerpo, los seres vivos, la materia y el universo.',
  temas: {
    1: 'Partes del cuerpo, los sentidos, seres vivos y no vivos, partes de la planta, higiene',
    2: 'Animales y su alimentación, hábitats, ciclo de vida de la planta, estados del agua',
    3: 'Vertebrados e invertebrados, cadenas alimenticias, estados de la materia, el sistema solar',
    4: 'Sistemas del cuerpo humano, sistema digestivo, mezclas, ecosistemas y adaptaciones',
    5: 'La célula, niveles de organización, electricidad, energía, la Tierra y sus movimientos'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'identificar', titulo: 'Partes del cuerpo', icono: '🧍', descripcion: 'Toca la parte del cuerpo que se pide.', aprende: 'Nombrar las partes del cuerpo humano',
        datos: { dibujo: 'cuerpo', partes: ['cabeza | Cabeza | Allí están los ojos, la nariz y la boca', 'cuello | Cuello | Une la cabeza con el tronco', 'tronco | Tronco | La parte central del cuerpo', 'brazos | Brazos | Sirven para abrazar y cargar', 'manos | Manos | Tienen cinco dedos cada una', 'piernas | Piernas | Nos permiten caminar y correr', 'pies | Pies | Nos sostienen de pie'] } },
      { tipo: 'identificar', titulo: 'Los cinco sentidos', icono: '👀', descripcion: 'Toca el órgano de cada sentido.', aprende: 'Los sentidos y sus órganos',
        datos: { dibujo: 'sentidos', pregunta: 'Toca el órgano del sentido: ', partes: ['ojos | Vista (ojos) | Con los ojos vemos colores y formas', 'orejas | Oído (orejas) | Con los oídos escuchamos sonidos', 'nariz | Olfato (nariz) | Con la nariz sentimos los olores', 'boca | Gusto (lengua) | Con la lengua sentimos sabores: dulce, salado, ácido, amargo', 'piel | Tacto (piel) | Con la piel sentimos si algo es suave, áspero, frío o caliente'] } },
      { tipo: 'clasificar', titulo: '¿Tiene vida o no?', icono: '🌱', descripcion: 'Separa los seres vivos de los no vivos.', aprende: 'Seres vivos y objetos sin vida',
        datos: { categorias: ['Seres vivos', 'No vivos'], elementos: ['🐶 Perro | 0 || Nace, crece, se alimenta y se reproduce', '🌳 Árbol | 0 || Las plantas son seres vivos', '🐟 Pez | 0 || Respira y se alimenta', '👧 Niña | 0 || Las personas somos seres vivos', '🐝 Abeja | 0 || Es un ser vivo', '🌻 Girasol | 0 || Crece y necesita agua', '⛰️ Roca | 1 || No nace ni crece', '🚗 Carro | 1 || Es un objeto hecho por personas', '⚽ Balón | 1 || No se alimenta ni crece', '✏️ Lápiz | 1 || Es un objeto', '💧 Agua | 1 || Es necesaria para la vida, pero no es un ser vivo'] } },
      { tipo: 'identificar', titulo: 'Partes de la planta', icono: '🌻', descripcion: 'Toca cada parte de la planta.', aprende: 'Raíz, tallo, hojas, flor y fruto',
        datos: { dibujo: 'planta', partes: ['raiz | Raíz | Absorbe el agua del suelo y sostiene la planta', 'tallo | Tallo | Sostiene la planta y lleva el agua a las hojas', 'hojas | Hojas | Fabrican el alimento de la planta con la luz del sol', 'flor | Flor | Allí se forman las semillas', 'fruto | Fruto | Protege las semillas'] } },
      { tipo: 'memoria', titulo: 'Memoria: ¿cómo suena?', icono: '🃏', descripcion: 'Une cada animal con su sonido.', aprende: 'Reconocer animales y sus características',
        datos: { cantidad: 6, pares: ['🐄 | Muuu', '🐶 | Guau', '🐱 | Miau', '🐑 | Beee', '🐓 | Quiquiriquí', '🦆 | Cuac', '🐸 | Croac', '🐷 | Oinc'] } },
      { tipo: 'clasificar', titulo: '¿Cómo se mueven los animales?', icono: '🐾', descripcion: 'Clasifica: vuelan, nadan o caminan.', aprende: 'Formas de desplazamiento de los animales',
        datos: { categorias: ['🕊️ Vuelan', '🌊 Nadan', '🦶 Caminan o se arrastran'], elementos: ['🦅 Águila | 0', '🦋 Mariposa | 0', '🐦 Pájaro | 0', '🐟 Pez | 1', '🐬 Delfín | 1', '🐙 Pulpo | 1', '🐴 Caballo | 2', '🐍 Serpiente | 2 || Se arrastra', '🐢 Tortuga de tierra | 2', '🐌 Caracol | 2 || Se arrastra'] } },
      { tipo: 'vf', titulo: 'Cuido mi cuerpo', icono: '🧼', descripcion: 'Hábitos de higiene y salud.', aprende: 'Hábitos de higiene y cuidado del cuerpo',
        datos: { afirmaciones: [
          '🧼 :: Debo lavarme las manos antes de comer. | V || Así eliminamos los gérmenes.',
          '🦷 :: Solo me cepillo los dientes una vez a la semana. | F || Debemos cepillarnos después de cada comida.',
          '🍎 :: Comer frutas y verduras me ayuda a crecer sano. | V || Tienen vitaminas.',
          '😴 :: Dormir bien me da energía para aprender. | V || El cuerpo descansa y crece mientras dormimos.',
          '🍭 :: Es bueno comer muchos dulces todos los días. | F || Muchos dulces dañan los dientes.',
          '🚿 :: Bañarme me ayuda a mantener limpio mi cuerpo. | V || El baño diario es un hábito saludable.'
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas del cuerpo', icono: '🧩', descripcion: 'Arma el cuerpo humano y la planta.', aprende: 'Partes del cuerpo y de la planta',
        datos: { imagenes: [
          { dibujo: 'cuerpo', titulo: 'Arma el cuerpo humano', dato: 'El cuerpo tiene cabeza, tronco y extremidades (brazos y piernas).' },
          { dibujo: 'planta', titulo: 'Arma la planta', dato: 'La planta tiene raíz, tallo, hojas, flores y frutos.' }
        ] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'clasificar', titulo: '¿Qué comen los animales?', icono: '🥩', descripcion: 'Herbívoros, carnívoros y omnívoros.', aprende: 'Clasificación de animales según su alimentación',
        datos: { categorias: ['🌿 Herbívoros (plantas)', '🥩 Carnívoros (carne)', '🍽️ Omnívoros (de todo)'], elementos: ['🐄 Vaca | 0 || Come pasto', '🐰 Conejo | 0 || Come hierbas y zanahorias', '🦒 Jirafa | 0 || Come hojas de árboles', '🐴 Caballo | 0 || Come pasto', '🦁 León | 1 || Caza otros animales', '🦈 Tiburón | 1 || Come peces', '🦅 Águila | 1 || Caza ratones y peces', '🐷 Cerdo | 2 || Come plantas y restos de animales', '🐻 Oso | 2 || Come frutas, miel y peces', '🐔 Gallina | 2 || Come semillas e insectos'] } },
      { tipo: 'clasificar', titulo: 'Clasifica según su hábitat', icono: '🏞️', descripcion: '¿Dónde vive cada animal?', aprende: 'Hábitats acuáticos y terrestres; animales domésticos',
        datos: { categorias: ['🌊 Agua (mar o río)', '🌳 Selva o bosque', '🏡 Granja (domésticos)'], elementos: ['🐠 Pez payaso | 0', '🐳 Ballena | 0', '🦀 Cangrejo | 0', '🐒 Mono | 1', '🐆 Jaguar | 1', '🦜 Guacamaya | 1', '🐄 Vaca | 2', '🐑 Oveja | 2', '🐔 Gallina | 2', '🐐 Cabra | 2'] } },
      { tipo: 'ordenar', titulo: 'Ciclo de vida de la planta', icono: '🌱', descripcion: 'Ordena cómo crece una planta.', aprende: 'Etapas del ciclo de vida de una planta',
        datos: { secuencias: [
          { titulo: 'Ordena el ciclo de vida de la planta', items: ['🌰 Semilla', '🌱 Germina (brota)', '🌿 Planta joven', '🌻 Planta adulta con flor', '🍎 Fruto con semillas'], explica: 'La semilla germina, crece, florece y da frutos con nuevas semillas. ¡El ciclo vuelve a empezar!' },
          { titulo: '¿Qué necesita la planta? Ordena el cuidado', items: ['🕳️ Hacer un hueco en la tierra', '🌰 Poner la semilla', '🟫 Cubrirla con tierra', '💧 Regarla', '☀️ Ponerla al sol'], explica: 'Las plantas necesitan tierra, agua y luz del sol para crecer.' }
        ] } },
      { tipo: 'clasificar', titulo: 'Estados del agua', icono: '💧', descripcion: 'Sólido, líquido o gaseoso.', aprende: 'Estados del agua en la naturaleza',
        datos: { categorias: ['🧊 Sólido', '💧 Líquido', '♨️ Gaseoso'], elementos: ['🧊 Hielo | 0', '❄️ Nieve | 0', '🌨️ Granizo | 0', '🌧️ Lluvia | 1', '🏞️ Agua de río | 1', '🥤 Agua de un vaso | 1', '♨️ Vapor de la olla | 2', '🚿 Vapor de la ducha caliente | 2'] } },
      { tipo: 'ordenar', titulo: 'El ciclo del agua', icono: '🌧️', descripcion: 'Ordena el viaje del agua.', aprende: 'Ciclo del agua: evaporación, condensación, precipitación',
        datos: { secuencias: [
          { titulo: 'Ordena el ciclo del agua', items: ['☀️ El sol calienta el agua del mar', '♨️ El agua se evapora (sube como vapor)', '☁️ El vapor forma nubes (condensación)', '🌧️ Llueve (precipitación)', '🏞️ El agua llega a ríos y mares'], explica: 'Evaporación → condensación → precipitación → el agua vuelve al mar.' }
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas: ciclo de la mariposa', icono: '🦋', descripcion: 'Arma la imagen del ciclo de vida.', aprende: 'Ciclo de vida de los animales',
        datos: { imagenes: [{ dibujo: 'mariposa', titulo: 'Arma el ciclo de vida de la mariposa', dato: 'La mariposa pasa por 4 etapas: huevo, oruga, crisálida y mariposa adulta. Esto se llama metamorfosis.' }] } },
      { tipo: 'vf', titulo: 'El día y la noche', icono: '🌗', descripcion: 'Preguntas sobre el Sol, la Tierra y la Luna.', aprende: 'El Sol, la Luna y el día y la noche',
        datos: { afirmaciones: [
          '☀️ :: El Sol nos da luz y calor. | V || El Sol es una estrella.',
          '🌙 :: La Luna tiene luz propia. | F || La Luna refleja la luz del Sol.',
          '🌍 :: Es de día en la parte de la Tierra que mira al Sol. | V || La otra parte está de noche.',
          '🦉 :: Algunos animales, como el búho, salen de noche. | V || Se llaman animales nocturnos.',
          '⭐ :: El Sol es una estrella. | V || Es la estrella más cercana a la Tierra.',
          '🌚 :: La Tierra está quieta y no gira. | F || La Tierra gira sobre sí misma; por eso hay día y noche.'
        ] } },
      { tipo: 'sopa', titulo: 'Sopa de animales', icono: '🔎', descripcion: 'Encuentra los animales escondidos.', aprende: 'Vocabulario de animales y su clasificación',
        datos: { palabras: ['CONEJO | 🐰 herbívoro', 'VACA | 🐄 herbívoro', 'LEÓN | 🦁 carnívoro', 'TIBURÓN | 🦈 carnívoro', 'OSO | 🐻 omnívoro', 'GALLINA | 🐔 omnívoro'] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'clasificar', titulo: 'Vertebrados e invertebrados', icono: '🦴', descripcion: '¿Tiene columna vertebral?', aprende: 'Clasificación de animales: vertebrados e invertebrados',
        datos: { categorias: ['🦴 Vertebrados (con huesos)', '🐛 Invertebrados (sin huesos)'], elementos: ['🐶 Perro | 0 || Mamífero con esqueleto', '🐟 Pez | 0 || Tiene columna vertebral', '🐍 Serpiente | 0 || Reptil con columna', '🐸 Rana | 0 || Anfibio con columna', '🦜 Loro | 0 || Ave con esqueleto', '🐌 Caracol | 1 || Tiene concha, pero no huesos', '🕷️ Araña | 1 || No tiene columna', '🐙 Pulpo | 1 || Es blando, sin huesos', '🐜 Hormiga | 1 || Insecto sin columna', '〰️ Lombriz | 1 || Cuerpo blando'] } },
      { tipo: 'ordenar', titulo: 'Cadenas alimenticias', icono: '🔗', descripcion: 'Ordena quién se come a quién.', aprende: 'Productores, consumidores y cadenas alimenticias',
        datos: { secuencias: [
          { titulo: 'Cadena del campo (del productor al último consumidor)', items: ['🌿 Pasto', '🦗 Saltamontes', '🐸 Rana', '🐍 Serpiente', '🦅 Águila'], explica: 'El pasto es el productor (hace su alimento con el sol). Los demás son consumidores.' },
          { titulo: 'Cadena del mar', items: ['🌱 Algas', '🦐 Camarón', '🐟 Pez pequeño', '🦈 Tiburón'], explica: 'Las algas producen alimento; el tiburón es el consumidor final.' },
          { titulo: 'Cadena de la sabana', items: ['🌾 Hierba', '🦓 Cebra', '🦁 León'], explica: 'La cebra es herbívora (consumidor primario) y el león carnívoro.' }
        ] } },
      { tipo: 'ordenar', titulo: 'Ciclo de vida de la rana', icono: '🐸', descripcion: 'Ordena las etapas de la metamorfosis.', aprende: 'Metamorfosis de los anfibios',
        datos: { secuencias: [
          { titulo: 'Ciclo de vida de la rana', items: ['🥚 Huevos en el agua', '🐟 Renacuajo con cola', '🦵 Renacuajo con patas', '🐸 Rana adulta'], explica: 'La rana cambia de forma: esto se llama metamorfosis.' },
          { titulo: 'Ciclo de vida de la mariposa', items: ['🥚 Huevo', '🐛 Oruga', '🟢 Crisálida', '🦋 Mariposa'], explica: 'La oruga se encierra en la crisálida y sale convertida en mariposa.' }
        ] } },
      { tipo: 'identificar', titulo: 'Identifica los planetas', icono: '🪐', descripcion: 'Toca el planeta que se nombra.', aprende: 'Los planetas del sistema solar y su orden',
        datos: { dibujo: 'sistemaSolar', partes: ['sol | Sol | Es una estrella: da luz y calor a todos los planetas', 'mercurio | Mercurio | El planeta más cercano al Sol y el más pequeño', 'venus | Venus | El planeta más caliente', 'tierra | Tierra | Nuestro hogar, el único con vida conocida', 'marte | Marte | El planeta rojo', 'jupiter | Júpiter | El planeta más grande', 'saturno | Saturno | Famoso por sus anillos', 'urano | Urano | Gira acostado, de lado', 'neptuno | Neptuno | El más lejano del Sol'] } },
      { tipo: 'clasificar', titulo: 'Estados de la materia', icono: '🧪', descripcion: 'Sólidos, líquidos y gases.', aprende: 'Estados de la materia y sus características',
        datos: { categorias: ['🧱 Sólido (forma fija)', '🥛 Líquido (toma la forma del recipiente)', '🎈 Gaseoso (se expande)'], elementos: ['⛰️ Roca | 0', '🧊 Hielo | 0', '🪑 Silla | 0', '🥛 Leche | 1', '🛢️ Aceite | 1', '🍯 Miel | 1', '💨 Aire | 2', '🎈 Helio del globo | 2', '♨️ Vapor de agua | 2'] } },
      { tipo: 'clasificar', titulo: 'Recursos naturales', icono: '🌎', descripcion: 'Renovables y no renovables.', aprende: 'Recursos naturales renovables y no renovables',
        datos: { categorias: ['♻️ Renovables', '⛏️ No renovables'], elementos: ['☀️ Luz del sol | 0 || No se agota', '🌬️ Viento | 0 || No se agota', '🌳 Árboles | 0 || Se pueden volver a sembrar', '💧 Agua | 0 || Se renueva con el ciclo del agua (¡pero hay que cuidarla!)', '🐟 Peces | 0 || Se reproducen', '🛢️ Petróleo | 1 || Tarda millones de años en formarse', '⚫ Carbón | 1 || Se agota', '🥇 Oro | 1 || Mineral que se agota', '🔥 Gas natural | 1 || Se agota'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de vertebrados', icono: '🐾', descripcion: 'Grupos de animales vertebrados.', aprende: 'Mamíferos, aves, reptiles, anfibios y peces',
        datos: { palabras: ['MAMIFERO | Animal que toma leche de su mamá y tiene pelo', 'AVE | Animal con plumas y pico', 'REPTIL | Animal con escamas que se arrastra o camina, como el lagarto', 'ANFIBIO | Vive en el agua y en la tierra, como la rana', 'PEZ | Vive en el agua y respira por branquias', 'ESCAMAS | Cubren la piel de peces y reptiles', 'PLUMAS | Cubren el cuerpo de las aves'] } },
      { tipo: 'relacionar', titulo: 'Conoce los planetas', icono: '🪐', descripcion: 'Une cada pista con su planeta.', aprende: 'Características de los planetas',
        datos: { pares: ['El planeta rojo | Marte', 'Tiene anillos grandes y brillantes | Saturno', 'El más grande del sistema solar | Júpiter', 'Donde vivimos | Tierra', 'El más cercano al Sol | Mercurio', 'El más caliente | Venus'] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'identificar', titulo: 'El sistema digestivo', icono: '🍽️', descripcion: 'Toca los órganos de la digestión.', aprende: 'Órganos del sistema digestivo',
        datos: { dibujo: 'digestivo', partes: ['boca | Boca | Allí empieza la digestión: los dientes trituran y la saliva ablanda', 'esofago | Esófago | Tubo que lleva el alimento al estómago', 'estomago | Estómago | Mezcla el alimento con jugos gástricos', 'higado | Hígado | Produce la bilis que ayuda a digerir las grasas', 'intestino-delgado | Intestino delgado | Absorbe los nutrientes que pasan a la sangre', 'intestino-grueso | Intestino grueso | Absorbe el agua y forma los desechos'] } },
      { tipo: 'ordenar', titulo: 'El viaje del alimento', icono: '🍎', descripcion: 'Ordena el recorrido de la digestión.', aprende: 'Proceso de la digestión',
        datos: { secuencias: [{ titulo: 'Ordena el recorrido del alimento', items: ['👄 Boca', '🟠 Esófago', '🟣 Estómago', '〰️ Intestino delgado', '🟤 Intestino grueso'], explica: 'Boca → esófago → estómago → intestino delgado (absorbe nutrientes) → intestino grueso (absorbe agua).' }] } },
      { tipo: 'relacionar', titulo: 'Sistemas del cuerpo', icono: '❤️', descripcion: 'Une cada sistema con su función.', aprende: 'Funciones de los sistemas del cuerpo humano',
        datos: { pares: ['Sistema digestivo | Transforma los alimentos en nutrientes', 'Sistema respiratorio | Toma el oxígeno del aire', 'Sistema circulatorio | Lleva la sangre por todo el cuerpo', 'Sistema óseo | Sostiene y protege el cuerpo', 'Sistema muscular | Permite el movimiento', 'Sistema nervioso | Controla y coordina todo el cuerpo'] } },
      { tipo: 'clasificar', titulo: 'Mezclas', icono: '🥤', descripcion: 'Homogéneas y heterogéneas.', aprende: 'Tipos de mezclas',
        datos: { categorias: ['Homogénea (no se ven sus partes)', 'Heterogénea (se ven sus partes)'], elementos: ['🥤 Agua con azúcar | 0 || El azúcar se disuelve', '🧃 Jugo en polvo con agua | 0 || Se ve de un solo color', '☕ Café con leche | 0 || No se distinguen', '🌬️ El aire | 0 || Mezcla de gases', '🥗 Ensalada de frutas | 1 || Se ve cada fruta', '💧 Agua con aceite | 1 || El aceite flota', '🏖️ Arena con piedras | 1 || Se distinguen', '🍲 Sopa de verduras | 1 || Se ven las verduras'] } },
      { tipo: 'seleccion', titulo: 'Ecosistemas y adaptaciones', icono: '🐪', descripcion: '¿Cómo sobreviven los seres vivos?', aprende: 'Ecosistemas y adaptaciones de los seres vivos',
        datos: { preguntas: [
          '🐪 :: ¿Por qué el camello puede vivir en el desierto? | Guarda grasa en su joroba y aguanta sin agua | Porque nada muy bien | Porque come nieve || Su joroba guarda energía y aguanta mucho sin beber.',
          '❄️ :: ¿Para qué le sirve al oso polar su grasa y pelaje grueso? | Para protegerse del frío | Para correr rápido | Para nadar en ríos calientes || Vive en zonas muy frías.',
          '🌵 :: ¿Por qué el cactus tiene espinas en lugar de hojas? | Para perder menos agua | Para atraer abejas | Para crecer rápido || Las espinas evitan que pierda agua en el calor.',
          '🦎 :: El camaleón cambia de color para… | Camuflarse | Bañarse | Respirar || El camuflaje lo protege de sus depredadores.',
          '🐠 :: ¿Qué ecosistema es el arrecife de coral? | Acuático | Terrestre | Aéreo || Está en el mar.',
          '🌿 :: Los páramos de Colombia son importantes porque… | Guardan y producen agua | Son desiertos | No tienen plantas || Los frailejones captan el agua de la niebla.'
        ] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de órganos', icono: '🧠', descripcion: 'Órganos del cuerpo humano.', aprende: 'Órganos principales y su función',
        datos: { palabras: ['CORAZON | Bombea la sangre por todo el cuerpo', 'PULMONES | Toman el oxígeno del aire', 'ESTOMAGO | Mezcla y digiere los alimentos', 'CEREBRO | Controla el pensamiento y el movimiento', 'HIGADO | Produce bilis y limpia la sangre', 'RIÑONES | Filtran la sangre y forman la orina', 'HUESOS | Forman el esqueleto'] } },
      { tipo: 'vf', titulo: 'Fuerza y movimiento', icono: '🧲', descripcion: 'Imanes, fuerzas y máquinas simples.', aprende: 'Fuerzas, imanes y máquinas simples',
        datos: { afirmaciones: [
          '🧲 :: Los imanes atraen objetos de hierro. | V || El hierro es un material magnético.',
          '🧲 :: Un imán atrae el papel y la madera. | F || Solo atrae metales como el hierro y el acero.',
          '⚽ :: Para mover un balón quieto hay que aplicar una fuerza. | V || La fuerza cambia el movimiento.',
          '🍎 :: La gravedad hace que los objetos caigan al suelo. | V || La Tierra atrae los objetos.',
          '👟 :: El rozamiento ayuda a que los zapatos no se resbalen. | V || El rozamiento frena el deslizamiento.',
          '⚖️ :: El balancín (sube y baja) es una palanca. | V || Es una máquina simple.'
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas del cuerpo', icono: '🧩', descripcion: 'Arma el sistema digestivo.', aprende: 'Ubicación de los órganos digestivos',
        datos: { imagenes: [{ dibujo: 'digestivo', titulo: 'Arma el sistema digestivo', dato: 'La digestión transforma los alimentos en nutrientes que la sangre lleva a todo el cuerpo.' }] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'identificar', titulo: 'Partes de la célula', icono: '🔬', descripcion: 'Toca cada parte de la célula animal.', aprende: 'La célula y sus partes',
        datos: { dibujo: 'celula', partes: ['membrana | Membrana celular | Cubre la célula y controla lo que entra y sale', 'citoplasma | Citoplasma | Líquido donde están los organelos', 'nucleo | Núcleo | Controla la célula y guarda la información genética (ADN)', 'mitocondria | Mitocondria | Produce la energía de la célula', 'vacuola | Vacuola | Almacena agua y sustancias'] } },
      { tipo: 'ordenar', titulo: 'Niveles de organización', icono: '🧬', descripcion: 'De lo más pequeño a lo más grande.', aprende: 'Célula, tejido, órgano, sistema, organismo',
        datos: { secuencias: [{ titulo: 'Ordena del más simple al más complejo', items: ['🔬 Célula', '🧫 Tejido', '❤️ Órgano', '🩸 Sistema', '🧍 Organismo'], explica: 'Muchas células forman tejidos; los tejidos forman órganos; los órganos, sistemas; y los sistemas, un organismo.' }] } },
      { tipo: 'clasificar', titulo: 'Conductores y aislantes', icono: '⚡', descripcion: '¿Deja pasar la electricidad?', aprende: 'Materiales conductores y aislantes de la electricidad',
        datos: { categorias: ['⚡ Conductores', '🚫 Aislantes'], elementos: ['🔩 Clavo de hierro | 0 || Los metales conducen', '🥄 Cuchara de metal | 0', '🔌 Cable de cobre | 0 || El cobre es muy buen conductor', '💧 Agua con sal | 0 || ¡Por eso no tocamos enchufes con las manos mojadas!', '🌲 Madera seca | 1', '🧴 Plástico | 1 || Por eso los cables están forrados de plástico', '🧶 Lana | 1', '🧱 Ladrillo | 1', '🎈 Caucho | 1'] } },
      { tipo: 'clasificar', titulo: 'Fuentes de energía', icono: '🔋', descripcion: 'Renovables y no renovables.', aprende: 'Fuentes de energía y su impacto',
        datos: { categorias: ['♻️ Renovables', '🏭 No renovables'], elementos: ['☀️ Solar | 0', '🌬️ Eólica (viento) | 0', '💧 Hidráulica (ríos) | 0 || En Colombia gran parte de la electricidad viene de hidroeléctricas', '🌋 Geotérmica (calor de la Tierra) | 0', '🛢️ Petróleo | 1', '⚫ Carbón | 1', '🔥 Gas natural | 1'] } },
      { tipo: 'seleccion', titulo: 'La Tierra y sus movimientos', icono: '🌍', descripcion: 'Capas de la Tierra, rotación y traslación.', aprende: 'Estructura de la Tierra y sus movimientos',
        datos: { preguntas: [
          '¿Cómo se llama el giro de la Tierra sobre sí misma? | Rotación | Traslación | Erosión || La rotación dura 24 horas y produce el día y la noche.',
          '¿Cuánto tarda la Tierra en dar una vuelta al Sol? | 365 días | 24 horas | 30 días || Ese movimiento se llama traslación.',
          '¿Qué produce el día y la noche? | La rotación | La traslación | La Luna || Al girar, una parte mira al Sol y la otra no.',
          '¿Cuál es la capa más externa de la Tierra, donde vivimos? | Corteza | Manto | Núcleo || La corteza es la capa sólida exterior.',
          '¿Qué capa está en el centro de la Tierra? | Núcleo | Corteza | Atmósfera || El núcleo es la parte más caliente.',
          '¿Qué capa de gases rodea la Tierra? | Atmósfera | Hidrosfera | Manto || La atmósfera contiene el aire que respiramos.'
        ] } },
      { tipo: 'vf', titulo: 'Circuitos eléctricos', icono: '💡', descripcion: '¿Cómo funciona un circuito?', aprende: 'Elementos de un circuito eléctrico',
        datos: { afirmaciones: [
          '🔋 :: Un circuito necesita una fuente de energía, como una pila. | V || La pila da la energía.',
          '💡 :: Si el circuito está abierto, el bombillo se enciende. | F || El circuito debe estar CERRADO para que pase la corriente.',
          '🔌 :: Los cables llevan la corriente eléctrica. | V || Son conductores.',
          '🎚️ :: El interruptor sirve para abrir o cerrar el circuito. | V || Así encendemos y apagamos.',
          '🧴 :: Un cable de plástico sin cobre sirve para conducir electricidad. | F || El plástico es aislante.',
          '🌍 :: Apagar las luces que no usamos ayuda al planeta. | V || Ahorramos energía.'
        ] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de la célula', icono: '🧬', descripcion: 'Vocabulario de la célula y el cuerpo.', aprende: 'Conceptos de biología',
        datos: { palabras: ['CELULA | Unidad más pequeña de los seres vivos', 'NUCLEO | Centro de control de la célula', 'MEMBRANA | Cubierta que protege la célula', 'TEJIDO | Grupo de células iguales que trabajan juntas', 'NEURONA | Célula del sistema nervioso', 'CEREBRO | Órgano que controla el cuerpo', 'ESQUELETO | Conjunto de huesos del cuerpo'] } },
      { tipo: 'sopa', titulo: 'Sopa del sistema nervioso y óseo', icono: '🔎', descripcion: 'Busca huesos y órganos.', aprende: 'Sistema nervioso y sistema óseo',
        datos: { palabras: ['CRÁNEO | Protege el cerebro', 'COLUMNA | Sostiene el cuerpo', 'COSTILLAS | Protegen corazón y pulmones', 'CEREBRO | Centro de control', 'MÉDULA | Lleva mensajes por la columna', 'NERVIOS | Llevan mensajes al cerebro', 'FÉMUR | El hueso más largo'] } }
    ]
  }
});
