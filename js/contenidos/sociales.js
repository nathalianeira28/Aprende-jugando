/* =========================================================
   CIENCIAS SOCIALES · Contenidos por grado (Colombia)
   ========================================================= */
AJ.materia({
  id: 'sociales',
  nombre: 'Ciencias Sociales',
  color: '#e8590c',
  icono: '🌎',
  descripcion: 'Familia, comunidad, Colombia, historia y ciudadanía.',
  temas: {
    1: 'La familia, la escuela, normas de convivencia, oficios, derechos de los niños',
    2: 'El municipio, símbolos patrios, puntos cardinales, transporte, fiestas y tradiciones',
    3: 'El departamento, paisaje rural y urbano, relieve, comunidades indígenas, autoridades',
    4: 'Regiones naturales de Colombia, ríos, pueblos precolombinos, descubrimiento y conquista',
    5: 'Independencia de Colombia, Constitución de 1991, ramas del poder, departamentos y capitales'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'seleccion', titulo: 'Mi familia', icono: '👨‍👩‍👧', descripcion: 'Preguntas sobre los miembros de la familia.', aprende: 'Miembros y relaciones de la familia',
        datos: { preguntas: [
          '👵 :: ¿Quién es la mamá de mi mamá? | Mi abuela | Mi tía | Mi prima || La mamá de mis papás es mi abuela.',
          '👨 :: ¿Quién es el hermano de mi papá? | Mi tío | Mi abuelo | Mi primo || Los hermanos de mis papás son mis tíos.',
          '🧒 :: ¿Quién es el hijo de mi tía? | Mi primo | Mi hermano | Mi sobrino || Los hijos de mis tíos son mis primos.',
          '❤️ :: ¿Qué hacemos en familia? | Nos cuidamos y nos ayudamos | Peleamos siempre | Nada || La familia se cuida, se respeta y se ayuda.',
          '👴 :: ¿Quién es el papá de mi papá? | Mi abuelo | Mi tío | Mi hermano || El papá de mis papás es mi abuelo.',
          '🏠 :: ¿Todas las familias son iguales? | No, hay muchos tipos de familia | Sí, todas son iguales | Solo hay un tipo || Hay familias grandes, pequeñas, con abuelos, con un solo papá o mamá… ¡todas son importantes!'
        ] } },
      { tipo: 'clasificar', titulo: 'Normas de convivencia', icono: '🤝', descripcion: '¿Qué acciones ayudan a convivir?', aprende: 'Normas de convivencia en la escuela y la casa',
        datos: { categorias: ['😊 Ayudan a convivir', '🤔 Debemos cambiarlas'], elementos: ['🙋 Levantar la mano para hablar | 0', '🙏 Decir por favor y gracias | 0', '🧹 Ayudar a ordenar el salón | 0', '🤝 Compartir los juguetes | 0', '🗑️ Botar la basura en la caneca | 0', '😠 Gritar a los compañeros | 1 || Mejor hablamos con calma', '🚫 Empujar en la fila | 1 || Esperamos el turno', '✋ Quitar las cosas a otros | 1 || Pedimos prestado', '📢 Interrumpir a quien habla | 1 || Esperamos que termine'] } },
      { tipo: 'memoria', titulo: 'Memoria de oficios', icono: '🃏', descripcion: 'Une cada oficio con su herramienta.', aprende: 'Oficios y profesiones de la comunidad',
        datos: { cantidad: 6, pares: ['👩‍🏫 Docente | 📚', '👨‍⚕️ Médico | 🩺', '👩‍🚒 Bombera | 🧯', '👨‍🌾 Campesino | 🌽', '👩‍🍳 Cocinera | 🍳', '👨‍🔧 Mecánico | 🔧', '💇 Peluquera | ✂️', '👨‍🎨 Pintor | 🎨'] } },
      { tipo: 'relacionar', titulo: '¿Quién nos ayuda?', icono: '🦸', descripcion: 'Une cada oficio con lo que hace.', aprende: 'Importancia de los oficios en la comunidad',
        datos: { pares: ['👩‍🏫 Docente | Enseña a leer y a escribir', '👨‍⚕️ Médico | Cura a los enfermos', '👩‍🚒 Bombera | Apaga incendios', '👨‍🌾 Campesino | Cultiva los alimentos', '👮 Policía | Cuida la seguridad', '👷 Constructor | Construye casas'] } },
      { tipo: 'vf', titulo: 'Mis derechos', icono: '🧒', descripcion: 'Los derechos de los niños y niñas.', aprende: 'Derechos de los niños y niñas',
        datos: { afirmaciones: [
          '🏫 :: Todos los niños tienen derecho a estudiar. | V || La educación es un derecho.',
          '🎮 :: Los niños tienen derecho a jugar y descansar. | V || El juego es un derecho.',
          '🏥 :: Solo algunos niños tienen derecho a la salud. | F || TODOS los niños tienen derecho a la salud.',
          '📄 :: Todo niño tiene derecho a un nombre y una nacionalidad. | V || Por eso nos registran al nacer.',
          '👷 :: Los niños deben trabajar en lugar de estudiar. | F || Los niños tienen derecho a estudiar y jugar, no a trabajar.',
          '❤️ :: Los niños tienen derecho a ser amados y protegidos. | V || La familia y el Estado deben protegerlos.'
        ] } },
      { tipo: 'ordenar', titulo: 'Mi día', icono: '⏰', descripcion: 'Ordena las actividades del día.', aprende: 'Nociones de tiempo: mañana, tarde y noche',
        datos: { secuencias: [
          { titulo: 'Ordena lo que hago en el día', items: ['⏰ Me despierto', '🚿 Me baño', '🥣 Desayuno', '🏫 Voy a la escuela', '🌙 Me acuesto a dormir'], explica: 'Mañana: despertar, bañarse y desayunar. Luego escuela. En la noche dormimos.' },
          { titulo: 'Ordena: antes y después', items: ['🌅 Mañana', '☀️ Mediodía', '🌇 Tarde', '🌙 Noche'], explica: 'El día empieza en la mañana y termina en la noche.' }
        ] } },
      { tipo: 'sopa', titulo: 'Sopa de mi comunidad', icono: '🔎', descripcion: 'Palabras de la familia y la escuela.', aprende: 'Vocabulario de la familia y la comunidad',
        datos: { palabras: ['FAMILIA | 👨‍👩‍👧', 'ESCUELA | 🏫', 'AMIGO | 🤝', 'BARRIO | 🏘️', 'RESPETO | 🙏', 'CASA | 🏠'] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'seleccion', titulo: 'Símbolos patrios', icono: '🦅', descripcion: 'La bandera, el escudo y el himno.', aprende: 'Símbolos patrios de Colombia',
        datos: { preguntas: [
          '¿Cuáles son los colores de la bandera de Colombia? | Amarillo, azul y rojo | Verde, blanco y rojo | Azul, blanco y azul || El amarillo ocupa la mitad de la bandera.',
          '¿Qué ave aparece en el escudo de Colombia? | El cóndor | El colibrí | El loro || El cóndor de los Andes simboliza la libertad.',
          '¿Cuáles son los símbolos patrios? | La bandera, el escudo y el himno | El sombrero y la ruana | El café y la arepa || Son los tres símbolos de la nación.',
          '¿Qué hacemos cuando suena el himno nacional? | Nos ponemos de pie con respeto | Seguimos jugando | Nos sentamos || Es una muestra de respeto por el país.',
          '¿Qué representa el amarillo de la bandera? | Las riquezas del país | El mar | La sangre || Representa la riqueza de nuestra tierra.',
          '¿Qué representa el azul de la bandera? | Los mares y ríos | El oro | Las montañas || Colombia tiene dos océanos.',
          '¿Qué representa el rojo de la bandera? | La sangre de los héroes | El sol | Las flores || Recuerda a quienes lucharon por la independencia.'
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas de la bandera', icono: '🧩', descripcion: 'Arma la bandera de Colombia.', aprende: 'La bandera y sus colores',
        datos: { tam: 3, imagenes: [{ dibujo: 'bandera', titulo: 'Arma la bandera de Colombia', dato: 'La bandera tiene tres franjas: amarillo (la mitad), azul y rojo.' }] } },
      { tipo: 'seleccion', titulo: 'Puntos cardinales', icono: '🧭', descripcion: 'Norte, sur, oriente y occidente.', aprende: 'Ubicación con los puntos cardinales',
        datos: { preguntas: [
          '🌅 :: ¿Por dónde sale el Sol? | Oriente (Este) | Occidente (Oeste) | Sur || El Sol sale por el oriente.',
          '🌇 :: ¿Por dónde se oculta el Sol? | Occidente (Oeste) | Oriente (Este) | Norte || El Sol se oculta por el occidente.',
          '🧭 :: ¿Cuántos puntos cardinales hay? | 4 | 2 | 6 || Norte, sur, oriente y occidente.',
          '🧭 :: ¿Qué instrumento nos indica el norte? | La brújula | El reloj | El termómetro || La aguja de la brújula señala el norte.',
          '🗺️ :: En un mapa, el norte está normalmente… | Arriba | Abajo | A la izquierda || Los mapas suelen tener el norte arriba.',
          '🌊 :: El mar Caribe está al ___ de Colombia. | Norte | Sur | Occidente || La costa Caribe está al norte.'
        ] } },
      { tipo: 'clasificar', titulo: 'Medios de transporte', icono: '🚌', descripcion: 'Terrestres, acuáticos y aéreos.', aprende: 'Medios de transporte',
        datos: { categorias: ['🛣️ Terrestres', '🌊 Acuáticos', '☁️ Aéreos'], elementos: ['🚌 Bus | 0', '🚲 Bicicleta | 0', '🚂 Tren | 0', '🚡 Metrocable | 0 || Va por cables sobre la tierra', '⛵ Velero | 1', '🚤 Lancha | 1', '🛶 Canoa | 1', '✈️ Avión | 2', '🚁 Helicóptero | 2', '🎈 Globo aerostático | 2'] } },
      { tipo: 'relacionar', titulo: 'Fiestas de Colombia', icono: '🎉', descripcion: 'Une cada fiesta con su ciudad.', aprende: 'Fiestas y tradiciones colombianas',
        datos: { pares: ['🎭 Carnaval de Barranquilla | Barranquilla', '🌸 Feria de las Flores | Medellín', '⚪⚫ Carnaval de Negros y Blancos | Pasto', '🎶 Festival de la Leyenda Vallenata | Valledupar', '💃 Feria de Cali (salsa) | Cali', '🐎 Torneo Internacional del Joropo | Villavicencio'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de mi municipio', icono: '🏛️', descripcion: 'Palabras del municipio y la patria.', aprende: 'El municipio y los símbolos patrios',
        datos: { palabras: ['ALCALDE | Persona que gobierna el municipio', 'BANDERA | Símbolo patrio de tres colores', 'ESCUDO | Símbolo patrio con el cóndor', 'HIMNO | Canción de la patria', 'MUNICIPIO | Territorio con zona urbana y rural', 'CONDOR | Ave del escudo nacional'] } },
      { tipo: 'clasificar', titulo: 'Medios de comunicación', icono: '📻', descripcion: '¿Escrito, sonoro o audiovisual?', aprende: 'Medios de comunicación',
        datos: { categorias: ['📰 Escritos', '📻 Sonoros', '📺 Audiovisuales'], elementos: ['📰 Periódico | 0', '✉️ Carta | 0', '📖 Revista | 0', '📻 Radio | 1', '☎️ Teléfono | 1', '📺 Televisión | 2', '🎬 Cine | 2', '💻 Videollamada | 2'] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'clasificar', titulo: 'Paisaje rural y urbano', icono: '🏙️', descripcion: '¿Campo o ciudad?', aprende: 'Diferencias entre zona rural y urbana',
        datos: { categorias: ['🌾 Rural (campo)', '🏙️ Urbano (ciudad)'], elementos: ['🐄 Potreros con ganado | 0', '🌽 Cultivos de maíz | 0', '🏡 Fincas | 0', '🛤️ Caminos de herradura | 0', '☕ Cafetales | 0', '🏢 Edificios altos | 1', '🚦 Semáforos | 1', '🏬 Centros comerciales | 1', '🚇 Metro | 1', '🛣️ Avenidas con mucho tráfico | 1'] } },
      { tipo: 'relacionar', titulo: 'Formas del relieve', icono: '⛰️', descripcion: 'Une cada forma con su descripción.', aprende: 'Formas del relieve',
        datos: { pares: ['⛰️ Montaña | Gran elevación del terreno', '🏞️ Valle | Tierra baja entre montañas', '🌾 Llanura | Terreno plano y extenso', '🌋 Volcán | Montaña que puede expulsar lava', '🏝️ Isla | Tierra rodeada de agua', '🏜️ Meseta | Terreno plano y alto'] } },
      { tipo: 'seleccion', titulo: 'Comunidades indígenas', icono: '🏹', descripcion: 'Pueblos indígenas de Colombia.', aprende: 'Diversidad cultural: comunidades indígenas',
        datos: { preguntas: [
          '👜 :: ¿Qué comunidad indígena de La Guajira teje coloridas mochilas? | Wayuu | Tikuna | Nasa || Los Wayuu viven en La Guajira y son famosos por sus mochilas.',
          '👒 :: ¿Qué pueblo creó el sombrero vueltiao? | Zenú | Wayuu | Muisca || El sombrero vueltiao es un símbolo cultural de Colombia, creado por los Zenú.',
          '🏔️ :: ¿Qué pueblos viven en la Sierra Nevada de Santa Marta? | Arhuacos, Koguis y Wiwas | Wayuu | Emberá || Son los guardianes de la Sierra Nevada.',
          '🌳 :: ¿En qué región viven los Tikuna? | Amazonía | Caribe | Insular || Viven cerca del río Amazonas.',
          '🗣️ :: ¿Cuántas lenguas indígenas aproximadamente se hablan en Colombia? | Más de 60 | Solo 1 | 5 || Colombia es un país pluriétnico y multicultural.',
          '🤝 :: ¿Cómo debemos tratar a las comunidades indígenas? | Con respeto a su cultura | Ignorándolas | Burlándonos || Todas las culturas son valiosas.'
        ] } },
      { tipo: 'relacionar', titulo: 'Autoridades', icono: '🏛️', descripcion: 'Une cada autoridad con su función.', aprende: 'Autoridades del municipio, el departamento y el país',
        datos: { pares: ['Alcalde | Gobierna el municipio', 'Gobernador | Gobierna el departamento', 'Presidente | Gobierna el país', 'Concejo municipal | Aprueba los acuerdos del municipio', 'Personero | Defiende los derechos de las personas', 'Rector | Dirige el colegio'] } },
      { tipo: 'ordenar', titulo: 'Del barrio al mundo', icono: '🌍', descripcion: 'Ordena de lo más pequeño a lo más grande.', aprende: 'Organización del territorio',
        datos: { secuencias: [
          { titulo: 'Ordena de menor a mayor', items: ['🏠 Casa', '🏘️ Barrio o vereda', '🏙️ Municipio', '🗺️ Departamento', '🏳️ País (Colombia)', '🌎 Continente (América)'], explica: 'Un municipio está dentro de un departamento, y Colombia tiene 32 departamentos.' }
        ] } },
      { tipo: 'memoria', titulo: 'Memoria de artesanías', icono: '🃏', descripcion: 'Une cada pueblo con su artesanía.', aprende: 'Artesanías y cultura de Colombia',
        datos: { cantidad: 5, pares: ['Wayuu | 👜 Mochila', 'Zenú | 👒 Sombrero vueltiao', 'Ráquira (Boyacá) | 🏺 Cerámica', 'Sandoná (Nariño) | 🎩 Sombrero de paja toquilla', 'Guna Dule | 🧵 Molas', 'Pitalito (Huila) | 🚌 Chivas de cerámica'] } },
      { tipo: 'sopa', titulo: 'Sopa del relieve', icono: '🔎', descripcion: 'Encuentra formas del paisaje.', aprende: 'Vocabulario del relieve',
        datos: { palabras: ['MONTAÑA | Elevación alta', 'VALLE | Entre montañas', 'RÍO | Corriente de agua', 'LLANURA | Terreno plano', 'VOLCÁN | Expulsa lava', 'ISLA | Rodeada de agua'] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'identificar', titulo: 'Mapa de las regiones', icono: '🗺️', descripcion: 'Toca cada región natural en el mapa.', aprende: 'Ubicar las 6 regiones naturales de Colombia',
        instrucciones: 'Este es un mapa simplificado de Colombia. Toca la región que se pide.',
        datos: { dibujo: 'colombia', partes: ['caribe | Región Caribe | Al norte, con playas y el mar Caribe', 'pacifica | Región Pacífica | Al occidente, muy lluviosa, frente al océano Pacífico', 'andina | Región Andina | En el centro, con las tres cordilleras; allí está Bogotá', 'orinoquia | Orinoquía | Al oriente, llanos con ganadería', 'amazonia | Amazonía | Al sur, con la selva más grande del mundo', 'insular | Región Insular | Las islas, como San Andrés y Providencia'] } },
      { tipo: 'relacionar', titulo: 'Regiones y sus características', icono: '🌄', descripcion: 'Une cada región con lo que la distingue.', aprende: 'Características de las regiones naturales',
        datos: { pares: ['Región Andina | Montañas, café y las ciudades más pobladas', 'Región Caribe | Playas, vallenato y cumbia', 'Región Pacífica | Mucha lluvia, selva y currulao', 'Orinoquía | Llanos, ganado y joropo', 'Amazonía | Selva húmeda y gran biodiversidad', 'Región Insular | San Andrés, Providencia y el coral'] } },
      { tipo: 'seleccion', titulo: 'Ríos de Colombia', icono: '🏞️', descripcion: 'Los ríos más importantes del país.', aprende: 'Hidrografía de Colombia',
        datos: { preguntas: [
          '¿Cuál es el río más importante de Colombia? | Magdalena | Cauca | Atrato || El Magdalena recorre el país de sur a norte y desemboca en el Caribe.',
          '¿Cuál es uno de los ríos más caudalosos del mundo, ubicado en el Chocó? | Atrato | Magdalena | Sinú || El Atrato es muy caudaloso por las lluvias del Pacífico.',
          '¿En qué mar desemboca el río Magdalena? | Mar Caribe | Océano Pacífico | Río Amazonas || Desemboca en Bocas de Ceniza, Barranquilla.',
          '¿Cuál es el principal afluente del río Magdalena? | Cauca | Meta | Putumayo || El Cauca se une al Magdalena.',
          '¿Qué gran río pasa por Leticia? | Amazonas | Orinoco | Atrato || El Amazonas está en el sur del país.',
          '¿Por qué son importantes los ríos? | Dan agua, alimento y transporte | Solo sirven para nadar | No son importantes || Los ríos son vida para las comunidades.'
        ] } },
      { tipo: 'relacionar', titulo: 'Pueblos precolombinos', icono: '🏺', descripcion: 'Une cada pueblo con lo que lo hizo famoso.', aprende: 'Culturas precolombinas de Colombia',
        datos: { pares: ['Muiscas | Altiplano cundiboyacense y la leyenda de El Dorado', 'Taironas | Ciudad Perdida en la Sierra Nevada', 'Zenúes | Canales para controlar las inundaciones', 'San Agustín | Grandes estatuas de piedra', 'Quimbayas | Orfebrería en oro, como el Poporo Quimbaya'] } },
      { tipo: 'ordenar', titulo: 'Línea de tiempo: la conquista', icono: '📜', descripcion: 'Ordena los hechos de la historia.', aprende: 'Descubrimiento y conquista de América',
        datos: { secuencias: [{ titulo: 'Ordena del más antiguo al más reciente', items: ['1492: Colón llega a América', '1499: Alonso de Ojeda llega a La Guajira', '1525: Se funda Santa Marta', '1533: Se funda Cartagena', '1538: Se funda Bogotá'], explica: 'Santa Marta es la ciudad más antigua de Colombia que aún existe.' }] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas de Colombia', icono: '🧩', descripcion: 'Arma el mapa de las regiones.', aprende: 'Ubicación de las regiones naturales',
        datos: { imagenes: [{ dibujo: 'colombia', titulo: 'Arma el mapa de las regiones de Colombia', dato: 'Colombia tiene 6 regiones naturales: Caribe, Pacífica, Andina, Orinoquía, Amazonía e Insular.' }] } },
      { tipo: 'vf', titulo: 'Geografía de Colombia', icono: '🌎', descripcion: '¿Verdadero o falso?', aprende: 'Datos geográficos de Colombia',
        datos: { afirmaciones: [
          'Colombia tiene costas en dos océanos: Pacífico y Atlántico (mar Caribe). | V || Es el único país de Suramérica con costas en ambos.',
          'La cordillera de los Andes se divide en tres ramas en Colombia. | V || Occidental, Central y Oriental.',
          'La Amazonía está al norte de Colombia. | F || Está al sur.',
          'Bogotá está en la región Andina. | V || En el altiplano cundiboyacense.',
          'San Andrés pertenece a la región Pacífica. | F || Pertenece a la región Insular, en el mar Caribe.',
          'Colombia es uno de los países con mayor biodiversidad del mundo. | V || Tiene muchísimas especies de aves, plantas y anfibios.'
        ] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'ordenar', titulo: 'Línea de tiempo de la Independencia', icono: '📜', descripcion: 'Ordena los hechos históricos.', aprende: 'Proceso de independencia de Colombia',
        datos: { secuencias: [{ titulo: 'Ordena del más antiguo al más reciente', items: ['1781: Revolución de los Comuneros', '1810: Grito de Independencia (20 de julio)', '1816: Reconquista española', '1819: Batalla de Boyacá (7 de agosto)', '1821: Congreso de Cúcuta (Gran Colombia)'], explica: 'El 20 de julio de 1810 empezó el proceso y el 7 de agosto de 1819 se aseguró la independencia.' }] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama de próceres', icono: '🎖️', descripcion: 'Personajes y hechos de la Independencia.', aprende: 'Personajes de la Independencia',
        datos: { palabras: ['BOLIVAR | Simón ___, el Libertador', 'SANTANDER | El "Hombre de las leyes"', 'NARIÑO | Tradujo los Derechos del Hombre', 'BOYACA | Batalla del 7 de agosto de 1819', 'FLORERO | El de Llorente causó la pelea del 20 de julio', 'POLICARPA | ___ Salavarrieta, heroína de la independencia', 'JULIO | Mes del Grito de Independencia'] } },
      { tipo: 'relacionar', titulo: 'Ramas del poder público', icono: '⚖️', descripcion: 'Une cada rama con su función.', aprende: 'Organización del Estado colombiano',
        datos: { columnas: ['Rama o entidad', '¿Qué hace?'], pares: ['Rama Ejecutiva (Presidente) | Gobierna y ejecuta las leyes', 'Rama Legislativa (Congreso) | Hace las leyes', 'Rama Judicial (jueces y cortes) | Administra justicia', 'Registraduría | Organiza las elecciones', 'Procuraduría | Vigila a los servidores públicos', 'Defensoría del Pueblo | Protege los derechos humanos'] } },
      { tipo: 'seleccion', titulo: 'La Constitución de 1991', icono: '📘', descripcion: 'Preguntas sobre nuestra Constitución.', aprende: 'Constitución Política y derechos fundamentales',
        datos: { preguntas: [
          '¿En qué año se escribió la Constitución que rige hoy en Colombia? | 1991 | 1886 | 2001 || Reemplazó a la Constitución de 1886.',
          '¿Quién escribió la Constitución de 1991? | La Asamblea Nacional Constituyente | El presidente solo | Los alcaldes || Fue elegida por voto popular.',
          '¿Qué mecanismo protege los derechos fundamentales cuando son violados? | La acción de tutela | La multa | El himno || Cualquier persona puede presentar una tutela.',
          'La Constitución dice que Colombia es un país… | Pluriétnico y multicultural | De una sola cultura | Sin diversidad || Reconoce indígenas, afrocolombianos, raizales y rom.',
          '¿Cuál es un derecho fundamental? | La vida | Tener carro | Ver televisión || El derecho a la vida es inviolable.',
          '¿Cómo participamos en la democracia? | Votando y participando | Peleando | Sin opinar || El voto es un mecanismo de participación.'
        ] } },
      { tipo: 'memoria', titulo: 'Departamentos y capitales', icono: '🃏', descripcion: 'Une cada departamento con su capital.', aprende: 'Departamentos de Colombia y sus capitales',
        datos: { cantidad: 6, pares: ['Antioquia | Medellín', 'Valle del Cauca | Cali', 'Atlántico | Barranquilla', 'Santander | Bucaramanga', 'Bolívar | Cartagena', 'Nariño | Pasto', 'Boyacá | Tunja', 'Meta | Villavicencio', 'Amazonas | Leticia', 'Magdalena | Santa Marta', 'Caldas | Manizales', 'Huila | Neiva'] } },
      { tipo: 'relacionar', titulo: 'Más departamentos y capitales', icono: '🗺️', descripcion: 'Practica con otros departamentos.', aprende: 'Departamentos de Colombia y sus capitales',
        datos: { pares: ['Cauca | Popayán', 'Tolima | Ibagué', 'Quindío | Armenia', 'Risaralda | Pereira', 'Córdoba | Montería', 'Chocó | Quibdó', 'La Guajira | Riohacha', 'Norte de Santander | Cúcuta', 'Cesar | Valledupar', 'Sucre | Sincelejo'] } },
      { tipo: 'sopa', titulo: 'Sopa de la democracia', icono: '🔎', descripcion: 'Palabras de la ciudadanía.', aprende: 'Vocabulario de democracia y participación',
        datos: { palabras: ['CONGRESO | Hace las leyes', 'PRESIDENTE | Jefe de Estado', 'JUECES | Administran justicia', 'TUTELA | Protege derechos', 'VOTO | Forma de elegir', 'DERECHOS | Los tenemos todos', 'DEBERES | Responsabilidades'] } }
    ]
  }
});
