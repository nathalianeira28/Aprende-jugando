/* =========================================================
   ARTE Y CREATIVIDAD · Contenidos por grado
   ========================================================= */
AJ.materia({
  id: 'arte',
  nombre: 'Arte y Creatividad',
  color: '#c2255c',
  icono: '🎨',
  descripcion: 'Colores, formas, música, danza y artistas.',
  temas: {
    1: 'Colores primarios, figuras básicas, tipos de línea, observación',
    2: 'Colores secundarios y mezclas, simetría, patrones, instrumentos musicales',
    3: 'Colores cálidos y fríos, familias de instrumentos, ritmo, materiales de arte',
    4: 'Círculo cromático, colores complementarios, artistas colombianos, danzas regionales',
    5: 'Perspectiva, géneros de la pintura, arte precolombino, música colombiana, teatro'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'clasificar', titulo: 'Colores primarios', icono: '🎨', descripcion: 'Separa los colores primarios.', aprende: 'Colores primarios: rojo, azul y amarillo',
        datos: { categorias: ['⭐ Primarios', '🎨 Otros colores'], elementos: ['🔴 Rojo | 0 || No se obtiene mezclando otros colores', '🔵 Azul | 0 || Es primario', '🟡 Amarillo | 0 || Es primario', '🟢 Verde | 1 || Sale de mezclar azul + amarillo', '🟠 Naranja | 1 || Sale de mezclar rojo + amarillo', '🟣 Morado | 1 || Sale de mezclar rojo + azul', '🟤 Café | 1 || Sale de mezclar varios colores'] } },
      { tipo: 'memoria', titulo: 'Memoria de colores', icono: '🃏', descripcion: 'Une cada objeto con su color.', aprende: 'Reconocer y nombrar colores',
        datos: { cantidad: 6, pares: ['🍓 | rojo', '🍌 | amarillo', '🐸 | verde', '🌊 | azul', '🍊 | naranja', '🍇 | morado', '☁️ | blanco', '🐻 | café'] } },
      { tipo: 'seleccion', titulo: 'Figuras a mi alrededor', icono: '🔷', descripcion: '¿Qué figura tiene cada objeto?', aprende: 'Figuras geométricas en los objetos',
        datos: { preguntas: [
          '🍕 :: ¿Qué figura tiene una porción de pizza? | Triángulo | Círculo | Cuadrado || Tiene 3 lados: es un triángulo.',
          '⚽ :: ¿Qué figura tiene un balón visto de frente? | Círculo | Triángulo | Rectángulo || Es redondo: círculo.',
          '🚪 :: ¿Qué figura tiene una puerta? | Rectángulo | Círculo | Triángulo || Dos lados largos y dos cortos.',
          '🍪 :: ¿Qué figura tiene una galleta redonda? | Círculo | Cuadrado | Triángulo || Es redonda.',
          '🖼️ :: ¿Qué figura tiene un cuadro con 4 lados iguales? | Cuadrado | Círculo | Triángulo || 4 lados iguales: cuadrado.',
          '⛺ :: ¿Qué figura tiene la carpa vista de frente? | Triángulo | Cuadrado | Círculo || Tiene forma de triángulo.'
        ] } },
      { tipo: 'relacionar', titulo: 'Tipos de línea', icono: '〰️', descripcion: 'Une cada línea con su nombre.', aprende: 'Tipos de línea en el dibujo',
        datos: { pares: ['➖ | Línea recta', '〰️ | Línea ondulada', '⚡ | Línea quebrada (zigzag)', '🌀 | Espiral', '⭕ | Línea curva cerrada'] } },
      { tipo: 'diferencias', titulo: 'Encuentra las diferencias', icono: '🔍', descripcion: 'Observa con atención las dos imágenes.', aprende: 'Observación y atención visual',
        datos: { cantidad: 3, objetos: ['🌳 | árbol', '🏠 | casa', '☀️ | sol', '🌸 | flor', '🐶 | perro', '🐱 | gato', '🦋 | mariposa', '🎈 | globo'] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas de figuras', icono: '🧩', descripcion: 'Arma la imagen de las figuras.', aprende: 'Formas y colores',
        datos: { imagenes: [{ dibujo: 'figuras', titulo: 'Arma las figuras geométricas', dato: 'Círculo rojo, cuadrado azul, triángulo verde y rectángulo amarillo.' }] } },
      { tipo: 'seleccion', titulo: 'Completa el patrón', icono: '🔁', descripcion: '¿Qué color o figura sigue?', aprende: 'Patrones de color y forma',
        datos: { preguntas: [
          '🔴🟡🔴🟡🔴 :: ¿Qué sigue? | 🟡 | 🔴 | 🔵 || Rojo, amarillo, rojo, amarillo…',
          '🔵🔵🟢🔵🔵🟢🔵🔵 :: ¿Qué sigue? | 🟢 | 🔵 | 🔴 || Dos azules y un verde.',
          '⭐🌙⭐🌙⭐ :: ¿Qué sigue? | 🌙 | ⭐ | ☀️ || Estrella, luna…',
          '🟥🔺🟥🔺🟥 :: ¿Qué sigue? | 🔺 | 🟥 | 🟢 || Cuadrado, triángulo…',
          '🌸🌸🍃🌸🌸🍃🌸 :: ¿Qué sigue? | 🌸 | 🍃 | 🌳 || Flor, flor, hoja…'
        ] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'seleccion', titulo: 'Combina colores', icono: '🖌️', descripcion: '¿Qué color sale de la mezcla?', aprende: 'Colores secundarios a partir de mezclas',
        datos: { preguntas: [
          '🔴 + 🟡 :: ¿Qué color sale al mezclar rojo y amarillo? | 🟠 Naranja | 🟢 Verde | 🟣 Morado || Rojo + amarillo = naranja.',
          '🔵 + 🟡 :: ¿Qué color sale al mezclar azul y amarillo? | 🟢 Verde | 🟠 Naranja | 🟤 Café || Azul + amarillo = verde.',
          '🔴 + 🔵 :: ¿Qué color sale al mezclar rojo y azul? | 🟣 Morado | 🟢 Verde | 🟠 Naranja || Rojo + azul = morado (violeta).',
          '⚪ + 🔴 :: ¿Qué sale al mezclar blanco y rojo? | Rosado | Morado | Negro || El blanco aclara los colores.',
          '⚫ + 🔵 :: ¿Qué sale al mezclar negro y azul? | Azul oscuro | Azul claro | Amarillo || El negro oscurece los colores.',
          '🟢 :: ¿Qué colores mezclo para obtener verde? | Azul y amarillo | Rojo y azul | Rojo y amarillo || Verde = azul + amarillo.'
        ] } },
      { tipo: 'memoria', titulo: 'Memoria de mezclas', icono: '🃏', descripcion: 'Une cada mezcla con su resultado.', aprende: 'Colores primarios y secundarios',
        datos: { cantidad: 3, pares: ['🔴 + 🟡 | 🟠', '🔵 + 🟡 | 🟢', '🔴 + 🔵 | 🟣'] } },
      { tipo: 'vf', titulo: 'La simetría', icono: '🦋', descripcion: '¿Es simétrico o no?', aprende: 'Simetría en la naturaleza y en el arte',
        datos: { afirmaciones: [
          '🦋 :: La mariposa es simétrica: sus dos alas son iguales. | V || Si la doblamos por la mitad, coinciden.',
          '😀 :: Una carita feliz es simétrica. | V || Un lado es igual al otro.',
          '❤️ :: El corazón dibujado es simétrico. | V || Sus dos mitades son iguales.',
          '🖐️ :: Una figura es simétrica si sus dos mitades son diferentes. | F || Simetría = dos mitades iguales, como en un espejo.',
          '⭐ :: La estrella tiene simetría. | V || Tiene varios ejes de simetría.',
          '🌙 :: La simetría se ve como el reflejo en un espejo. | V || Un lado refleja al otro.'
        ] } },
      { tipo: 'relacionar', titulo: 'Instrumentos musicales', icono: '🎸', descripcion: 'Une cada instrumento con su nombre.', aprende: 'Reconocer instrumentos musicales',
        datos: { pares: ['🥁 | Tambor', '🎸 | Guitarra', '🎺 | Trompeta', '🎻 | Violín', '🎹 | Piano', '🎷 | Saxofón'] } },
      { tipo: 'diferencias', titulo: 'Diferencias musicales', icono: '🔍', descripcion: 'Encuentra lo que cambió.', aprende: 'Observación y vocabulario de instrumentos',
        datos: { cantidad: 4, objetos: ['🥁 | tambor', '🎸 | guitarra', '🎺 | trompeta', '🎻 | violín', '🎹 | piano', '🎷 | saxofón', '🎵 | nota musical', '🎤 | micrófono'] } },
      { tipo: 'seleccion', titulo: 'Patrones y secuencias', icono: '🔁', descripcion: 'Completa los patrones.', aprende: 'Crear y continuar patrones',
        datos: { preguntas: [
          '🔴🔵🟡🔴🔵🟡🔴🔵 :: ¿Qué sigue? | 🟡 | 🔴 | 🔵 || Patrón de 3 colores.',
          '🟢🟢🔺🟢🟢🔺🟢🟢 :: ¿Qué sigue? | 🔺 | 🟢 | 🔵 || Dos círculos y un triángulo.',
          '👏🦶👏🦶👏 :: ¿Qué sigue? | 🦶 | 👏 | 🎵 || Palma, pie, palma, pie…',
          '🌞🌞🌧️🌞🌞🌧️🌞 :: ¿Qué sigue? | 🌞 | 🌧️ | ❄️ || Sol, sol, lluvia…',
          '🟥🟧🟨🟥🟧 :: ¿Qué sigue? | 🟨 | 🟥 | 🟩 || Rojo, naranja, amarillo…'
        ] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'clasificar', titulo: 'Colores cálidos y fríos', icono: '🔥', descripcion: 'Clasifica según la sensación.', aprende: 'Colores cálidos y colores fríos',
        datos: { categorias: ['🔥 Cálidos (como el fuego)', '❄️ Fríos (como el agua)'], elementos: ['🔴 Rojo | 0', '🟠 Naranja | 0', '🟡 Amarillo | 0', '🌅 Atardecer | 0 || Tiene colores cálidos', '🔵 Azul | 1', '🟢 Verde | 1', '🟣 Violeta | 1', '🌊 Mar | 1 || Tiene colores fríos'] } },
      { tipo: 'clasificar', titulo: 'Familias de instrumentos', icono: '🎻', descripcion: 'Cuerda, viento o percusión.', aprende: 'Familias de instrumentos (incluidos los colombianos)',
        datos: { categorias: ['🎸 Cuerda', '🎺 Viento', '🥁 Percusión'], elementos: ['🎸 Guitarra | 0', '🎻 Violín | 0', 'Tiple colombiano | 0 || Tiene 12 cuerdas', 'Arpa llanera | 0', '🎺 Trompeta | 1', 'Flauta | 1', 'Gaita (Caribe) | 1 || Se sopla; es de los Montes de María', '🥁 Tambor | 2', 'Maracas | 2 || Se sacuden', 'Guacharaca | 2 || Se raspa; típica del vallenato'] } },
      { tipo: 'seleccion', titulo: 'Ritmo y sonido', icono: '🎵', descripcion: 'Completa los patrones rítmicos.', aprende: 'Ritmo, sonidos largos y cortos',
        datos: { preguntas: [
          '👏👏🦶👏👏🦶👏👏 :: ¿Qué sigue en el ritmo? | 🦶 | 👏 | 🎤 || Dos palmas y un pisotón.',
          '🔊🔈🔊🔈🔊 :: Fuerte, suave… ¿qué sigue? | 🔈 | 🔊 | 🔇 || Fuerte y suave se alternan.',
          '🐘 :: El sonido de un elefante es… | Grave (gruesa) | Agudo (delgado) | Silencioso || Los sonidos graves son gruesos.',
          '🐦 :: El canto de un pajarito es… | Agudo | Grave | Ruidoso || Los sonidos agudos son delgados.',
          '🎵 :: El silencio en la música es… | Un momento sin sonido | Un ruido fuerte | Un instrumento || El silencio también hace parte del ritmo.'
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas cromático', icono: '🧩', descripcion: 'Arma el círculo de colores.', aprende: 'Organización de los colores',
        datos: { tam: 3, imagenes: [{ dibujo: 'circuloCromatico', titulo: 'Arma el círculo cromático', dato: 'En el círculo cromático los colores cálidos están de un lado y los fríos del otro.' }] } },
      { tipo: 'crucigrama', titulo: 'Materiales de arte', icono: '🖌️', descripcion: 'Crucigrama del taller de arte.', aprende: 'Materiales y herramientas del arte',
        datos: { palabras: ['PINCEL | Sirve para pintar con témpera', 'PALETA | Tabla para mezclar colores', 'LIENZO | Tela donde pintan los artistas', 'ACUARELA | Pintura que se mezcla con agua', 'CABALLETE | Soporte para el cuadro', 'CRAYOLA | Color de cera', 'ARCILLA | Barro para modelar'] } },
      { tipo: 'diferencias', titulo: 'Encuentra las diferencias', icono: '🔍', descripcion: 'Taller de arte: ¿qué cambió?', aprende: 'Observación detallada',
        datos: { cantidad: 5, objetos: ['🎨 | paleta', '🖌️ | pincel', '🖍️ | crayola', '✏️ | lápiz', '📏 | regla', '✂️ | tijeras', '🖼️ | cuadro', '🧶 | lana'] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'relacionar', titulo: 'Colores complementarios', icono: '🎨', descripcion: 'Une cada color con su opuesto.', aprende: 'Colores complementarios en el círculo cromático',
        datos: { pares: ['🔴 Rojo | 🟢 Verde || Están opuestos en el círculo cromático', '🔵 Azul | 🟠 Naranja || Son complementarios', '🟡 Amarillo | 🟣 Violeta || Son complementarios'] } },
      { tipo: 'seleccion', titulo: 'Teoría del color', icono: '🌈', descripcion: 'Preguntas sobre el círculo cromático.', aprende: 'Círculo cromático: primarios, secundarios, complementarios',
        datos: { preguntas: [
          '¿Cuál es el complementario del azul? | Naranja | Verde | Rojo || Azul y naranja están opuestos en el círculo cromático.',
          '¿Cuántos colores primarios hay? | 3 | 2 | 6 || Rojo, azul y amarillo.',
          '¿Qué son los colores terciarios? | Mezcla de un primario y un secundario | Colores grises | Solo el negro || Ejemplo: amarillo + verde = verde amarillento.',
          '¿Qué pasa si pongo juntos dos complementarios? | Se resaltan mucho | Se borran | Se vuelven grises || Por eso se usan para llamar la atención.',
          '¿Qué color agregamos para oscurecer un color? | Negro | Blanco | Amarillo || El negro oscurece; el blanco aclara.',
          'Los colores secundarios son… | Naranja, verde y morado | Rojo, azul y amarillo | Blanco y negro || Salen de mezclar dos primarios.'
        ] } },
      { tipo: 'relacionar', titulo: 'Artistas colombianos', icono: '👩‍🎨', descripcion: 'Une cada artista con su obra o estilo.', aprende: 'Artistas plásticos colombianos',
        datos: { pares: ['Fernando Botero | Figuras voluminosas (gruesas)', 'Alejandro Obregón | Cóndores, barracudas y el mar Caribe', 'Débora Arango | Pintora que retrató a la mujer y la sociedad', 'Omar Rayo | Figuras geométricas en blanco y negro', 'Edgar Negret | Esculturas de metal pintado'] } },
      { tipo: 'relacionar', titulo: 'Danzas de Colombia', icono: '💃', descripcion: 'Une cada danza con su región.', aprende: 'Danzas tradicionales de las regiones',
        datos: { pares: ['Cumbia | Región Caribe', 'Joropo | Los Llanos (Orinoquía)', 'Bambuco | Región Andina', 'Currulao | Región Pacífica', 'Sanjuanero | Huila y Tolima', 'Calypso | San Andrés (Insular)'] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas cromático', icono: '🧩', descripcion: 'Arma el círculo cromático de 12 colores.', aprende: 'Círculo cromático',
        datos: { tam: 4, imagenes: [{ dibujo: 'circuloCromatico', titulo: 'Arma el círculo cromático', dato: 'Los colores que están uno frente al otro son complementarios, como el rojo y el verde.' }] } },
      { tipo: 'diferencias', titulo: 'Encuentra las diferencias', icono: '🔍', descripcion: 'Fiesta colombiana: ¿qué cambió?', aprende: 'Observación detallada',
        datos: { cantidad: 6, objetos: ['💃 | bailarina', '🕺 | bailarín', '🎺 | trompeta', '🥁 | tambor', '🎭 | máscara', '🎉 | fiesta', '🌺 | flor', '👒 | sombrero'] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'seleccion', titulo: 'La perspectiva', icono: '🛤️', descripcion: 'Cómo dibujar la profundidad.', aprende: 'Perspectiva: horizonte y punto de fuga',
        datos: { preguntas: [
          '🛤️ :: En un dibujo, los objetos lejanos se ven… | Más pequeños | Más grandes | Del mismo tamaño || Así creamos sensación de profundidad.',
          '🌅 :: ¿Cómo se llama la línea donde parece que el cielo toca la tierra? | Línea de horizonte | Línea curva | Diagonal || Va a la altura de los ojos.',
          '📍 :: ¿Cómo se llama el punto donde parecen juntarse las líneas paralelas? | Punto de fuga | Punto final | Punto medio || Como los rieles del tren a lo lejos.',
          '🏔️ :: Los objetos lejanos se pintan con colores… | Más claros y suaves | Más fuertes | Negros || Esto se llama perspectiva atmosférica.',
          '🏙️ :: ¿Qué da la perspectiva a un dibujo? | Sensación de profundidad | Más colores | Sonido || Hace que el dibujo parezca tener volumen y distancia.'
        ] } },
      { tipo: 'clasificar', titulo: 'Géneros de la pintura', icono: '🖼️', descripcion: 'Retrato, paisaje o bodegón.', aprende: 'Géneros pictóricos',
        datos: { categorias: ['🧑 Retrato', '🏞️ Paisaje', '🍎 Bodegón'], elementos: ['🧑 La cara de una persona | 0', '👨‍👩‍👧 Una familia posando | 0', '🤳 Un autorretrato | 0 || El artista se pinta a sí mismo', '🏞️ Montañas y un río | 1', '🌊 El mar al atardecer | 1', '🌳 Un bosque | 1', '🍎 Frutas sobre una mesa | 2 || Objetos quietos', '🏺 Una vasija con flores | 2', '🍷 Botellas y copas | 2'] } },
      { tipo: 'vf', titulo: 'Arte precolombino', icono: '🏺', descripcion: 'El arte de nuestros antepasados.', aprende: 'Arte precolombino de Colombia',
        datos: { afirmaciones: [
          '🏛️ :: El Museo del Oro está en Bogotá. | V || Guarda miles de piezas de orfebrería precolombina.',
          '🗿 :: San Agustín (Huila) es famoso por sus estatuas de piedra. | V || Es Patrimonio de la Humanidad.',
          '🏺 :: El Poporo Quimbaya es una pieza de orfebrería en oro. | V || Lo hizo la cultura Quimbaya.',
          '💻 :: Los pueblos precolombinos pintaban con computador. | F || Usaban pigmentos naturales, oro, barro y piedra.',
          '🌀 :: Tierradentro (Cauca) tiene tumbas subterráneas pintadas. | V || Llamadas hipogeos.',
          '🥇 :: La balsa muisca representa la leyenda de El Dorado. | V || Está en el Museo del Oro.'
        ] } },
      { tipo: 'relacionar', titulo: 'Música colombiana', icono: '🪕', descripcion: 'Une cada género con sus instrumentos.', aprende: 'Géneros musicales colombianos y sus instrumentos',
        datos: { pares: ['Vallenato | Acordeón, caja y guacharaca', 'Cumbia | Gaitas, tambores y maracas', 'Joropo | Arpa, cuatro y maracas', 'Bambuco | Tiple, bandola y guitarra', 'Currulao | Marimba de chonta y cununos', 'Salsa caleña | Timbales, piano y trompetas'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama del teatro', icono: '🎭', descripcion: 'Elementos del teatro.', aprende: 'Elementos del teatro',
        datos: { palabras: ['ESCENARIO | Lugar donde actúan los actores', 'GUION | Texto con los diálogos de la obra', 'ACTOR | Persona que representa un personaje', 'VESTUARIO | Ropa que usan los personajes', 'TELON | Cortina que se abre al empezar la obra', 'PUBLICO | Personas que ven la obra', 'DIRECTOR | Persona que dirige la obra'] } },
      { tipo: 'memoria', titulo: 'Grandes artistas', icono: '🃏', descripcion: 'Une cada artista con su obra.', aprende: 'Artistas universales y sus obras',
        datos: { cantidad: 6, pares: ['Leonardo da Vinci | La Mona Lisa', 'Vincent van Gogh | La noche estrellada', 'Frida Kahlo | Autorretratos', 'Pablo Picasso | Guernica', 'Miguel Ángel | Capilla Sixtina', 'Fernando Botero | Figuras voluminosas'] } },
      { tipo: 'diferencias', titulo: 'Encuentra las diferencias', icono: '🔍', descripcion: 'En el teatro: ¿qué cambió?', aprende: 'Observación detallada',
        datos: { cantidad: 7, objetos: ['🎭 | máscaras', '🎬 | claqueta', '👑 | corona', '🎩 | sombrero', '⭐ | estrella', '🎤 | micrófono', '💡 | luz', '🎟️ | boleto'] } }
    ]
  }
});
