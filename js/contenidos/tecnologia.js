/* =========================================================
   TECNOLOGÍA E INFORMÁTICA · Contenidos por grado
   ========================================================= */
AJ.materia({
  id: 'tecnologia',
  nombre: 'Tecnología e Informática',
  color: '#0c8599',
  icono: '💻',
  descripcion: 'El computador, el teclado, internet seguro y pensamiento lógico.',
  temas: {
    1: 'Objetos naturales y artificiales, partes del computador, usos de los objetos, el teclado',
    2: 'Herramientas, aparatos eléctricos, dispositivos tecnológicos, cuidado del equipo, letras y números',
    3: 'Dispositivos de entrada y salida, archivos y carpetas, íconos, internet seguro, secuencias lógicas',
    4: 'Hardware y software, atajos de teclado, contraseñas seguras, algoritmos, el procesador de texto',
    5: 'Historia de los inventos, huella digital y ciberacoso, extensiones de archivo, programación'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'identificar', titulo: 'Partes del computador', icono: '🖥️', descripcion: 'Toca cada parte del computador.', aprende: 'Partes básicas del computador',
        datos: { dibujo: 'computador', partes: ['monitor | Monitor (pantalla) | Muestra las imágenes y las letras', 'teclado | Teclado | Sirve para escribir letras y números', 'mouse | Mouse (ratón) | Sirve para señalar y hacer clic', 'cpu | CPU (torre) | Es el cerebro del computador', 'parlante | Parlante | Por allí sale el sonido', 'camara | Cámara web | Sirve para hacer videollamadas'] } },
      { tipo: 'clasificar', titulo: 'Natural o artificial', icono: '🌳', descripcion: '¿Lo hizo la naturaleza o las personas?', aprende: 'Objetos naturales y artificiales (tecnológicos)',
        datos: { categorias: ['🌿 Natural', '🏭 Artificial (hecho por personas)'], elementos: ['🌳 Árbol | 0', '🌞 Sol | 0', '🐚 Concha de mar | 0', '🍎 Manzana | 0', '⛰️ Montaña | 0', '✏️ Lápiz | 1', '💻 Computador | 1', '🚲 Bicicleta | 1', '📱 Celular | 1', '🪑 Silla | 1 || La hicieron con madera, que es natural, pero la silla es artificial'] } },
      { tipo: 'relacionar', titulo: '¿Para qué sirve?', icono: '✂️', descripcion: 'Une cada objeto con su uso.', aprende: 'Usos de los objetos tecnológicos',
        datos: { pares: ['✂️ Tijeras | Cortar papel', '🖍️ Colores | Pintar', '📞 Teléfono | Hablar con alguien lejos', '💡 Bombillo | Iluminar', '🧹 Escoba | Barrer', '🔨 Martillo | Clavar puntillas'] } },
      { tipo: 'teclado', titulo: 'Mis primeras teclas', icono: '⌨️', descripcion: 'Busca las letras en el teclado.', aprende: 'Ubicar las vocales y letras en el teclado',
        datos: { enOrden: true, palabras: ['A', 'E', 'I', 'O', 'U', 'SOL', 'MAMA', 'PAPA', 'LUNA'] } },
      { tipo: 'vf', titulo: 'Uso bien el computador', icono: '🧑‍💻', descripcion: 'Normas para usar el computador.', aprende: 'Cuidado y buen uso del computador',
        datos: { afirmaciones: [
          '🍫 :: Puedo comer y beber junto al computador. | F || Si se riega algo, se puede dañar.',
          '🧼 :: Debo tener las manos limpias para usar el computador. | V || Así cuidamos el teclado y el mouse.',
          '🔌 :: Puedo jugar con los cables y enchufes. | F || Es peligroso: puede dar corriente.',
          '🪑 :: Debo sentarme derecho frente a la pantalla. | V || Una buena postura cuida la espalda.',
          '⏱️ :: Debo descansar los ojos después de un rato. | V || Mira lejos y parpadea.',
          '💥 :: Golpear el teclado lo hace funcionar mejor. | F || Las teclas se presionan suavemente.'
        ] } },
      { tipo: 'rompecabezas', titulo: 'Rompecabezas del computador', icono: '🧩', descripcion: 'Arma el computador.', aprende: 'Partes del computador',
        datos: { imagenes: [{ dibujo: 'computador', titulo: 'Arma el computador', dato: 'El computador tiene monitor, teclado, mouse, CPU y parlantes. Cada parte tiene una función.' }] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'clasificar', titulo: 'Herramientas', icono: '🔧', descripcion: '¿Dónde se usa cada herramienta?', aprende: 'Herramientas y sus usos',
        datos: { categorias: ['🍳 Cocina', '🔨 Construcción', '🌱 Jardín'], elementos: ['🥄 Cuchara | 0', '🔪 Cuchillo | 0 || ¡Solo lo usan los adultos!', '🍳 Sartén | 0', '🔨 Martillo | 1', '⛏️ Pica | 1', '🔧 Llave inglesa | 1', '🧤 Guantes de jardín | 2', '✂️ Tijeras de podar | 2', '🚿 Regadera | 2'] } },
      { tipo: 'clasificar', titulo: '¿Funciona con electricidad?', icono: '🔌', descripcion: 'Clasifica los aparatos del hogar.', aprende: 'Aparatos eléctricos y no eléctricos',
        datos: { categorias: ['⚡ Usa electricidad', '🚫 No usa electricidad'], elementos: ['📺 Televisor | 0', '🧊 Nevera | 0', '💡 Lámpara | 0', '📱 Celular | 0 || Usa la energía de su batería', '🧺 Lavadora | 0', '🚲 Bicicleta | 1', '✂️ Tijeras | 1', '🧹 Escoba | 1', '📏 Regla | 1'] } },
      { tipo: 'memoria', titulo: 'Dispositivos tecnológicos', icono: '🃏', descripcion: 'Une cada dispositivo con su nombre.', aprende: 'Reconocer dispositivos tecnológicos',
        datos: { cantidad: 6, pares: ['📱 | Celular', '🖨️ | Impresora', '💻 | Portátil', '📷 | Cámara', '🎧 | Audífonos', '🖱️ | Mouse', '⌨️ | Teclado', '📺 | Televisor'] } },
      { tipo: 'teclado', titulo: 'Letras y números', icono: '⌨️', descripcion: 'Escribe palabras y números.', aprende: 'Ubicar letras y números en el teclado',
        datos: { palabras: ['CASA', 'PERRO', 'GATO', '123', '2 Y 3', 'ESCUELA', '10', 'AMIGO'] } },
      { tipo: 'seleccion', titulo: 'Cuido el computador', icono: '🖥️', descripcion: 'Elige la acción correcta.', aprende: 'Cuidado de los equipos tecnológicos',
        datos: { preguntas: [
          '¿Cómo se apaga correctamente el computador? | Desde el botón Inicio → Apagar | Desenchufándolo | Golpeándolo || Así se guardan los cambios y no se daña.',
          '¿Qué hacemos si el computador no funciona? | Avisar a un adulto | Desarmarlo | Echarle agua || Un adulto o el docente puede ayudar.',
          '¿Cómo limpiamos la pantalla? | Con un paño suave y seco | Con agua y jabón | Con papel de lija || La pantalla es delicada.',
          '¿Dónde debemos poner el portátil? | En una mesa firme | En el piso | En la cama con cobijas || Debe tener espacio para enfriarse.',
          '¿Qué debemos hacer con las manos antes de usar el teclado? | Lavarlas | Untarlas de crema | Nada || Las manos limpias cuidan el teclado.'
        ] } },
      { tipo: 'sopa', titulo: 'Sopa tecnológica', icono: '🔎', descripcion: 'Busca partes del computador.', aprende: 'Vocabulario del computador',
        datos: { palabras: ['TECLADO | ⌨️', 'MOUSE | 🖱️', 'PANTALLA | 🖥️', 'PARLANTE | 🔊', 'CABLE | 🔌', 'IMPRESORA | 🖨️'] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'clasificar', titulo: 'Entrada, salida y almacenamiento', icono: '🖨️', descripcion: '¿Qué hace cada dispositivo?', aprende: 'Dispositivos de entrada, salida y almacenamiento',
        datos: { categorias: ['⬅️ Entrada (meten información)', '➡️ Salida (muestran información)', '💾 Almacenamiento (guardan)'], elementos: ['⌨️ Teclado | 0', '🖱️ Mouse | 0', '🎤 Micrófono | 0', '📷 Cámara web | 0', '🖥️ Monitor | 1', '🖨️ Impresora | 1', '🔊 Parlantes | 1', '🎧 Audífonos | 1', '💾 Memoria USB | 2', '💿 Disco duro | 2'] } },
      { tipo: 'clasificar', titulo: 'Organiza los archivos', icono: '📁', descripcion: 'Guarda cada archivo en su carpeta.', aprende: 'Organizar archivos en carpetas',
        datos: { pregunta: 'Arrastra cada archivo a la carpeta correcta', categorias: ['📁 Fotos', '📁 Música', '📁 Tareas'], elementos: ['🖼️ playa.jpg | 0 || .jpg es una imagen', '🖼️ cumpleaños.png | 0 || .png es una imagen', '🎵 cumbia.mp3 | 1 || .mp3 es audio', '🎵 himno.mp3 | 1', '📄 tarea-sociales.docx | 2 || .docx es un documento de texto', '📄 cuento.docx | 2', '📊 notas.xlsx | 2 || .xlsx es una hoja de cálculo'] } },
      { tipo: 'ordenar', titulo: 'Crea una carpeta', icono: '🗂️', descripcion: 'Ordena los pasos.', aprende: 'Crear y nombrar carpetas en el computador',
        datos: { secuencias: [
          { titulo: 'Ordena los pasos para crear una carpeta', items: ['🖱️ Clic derecho en el escritorio', '➕ Elegir "Nuevo"', '📁 Elegir "Carpeta"', '⌨️ Escribir el nombre', '↩️ Presionar Enter'], explica: 'Así creamos una carpeta para organizar nuestros archivos.' },
          { titulo: 'Ordena los pasos para guardar un trabajo', items: ['✍️ Escribir el trabajo', '📂 Ir a Archivo', '💾 Elegir Guardar', '🏷️ Ponerle nombre', '✅ Clic en Guardar'], explica: 'Es importante guardar para no perder el trabajo.' }
        ] } },
      { tipo: 'vf', titulo: 'Internet seguro', icono: '🛡️', descripcion: 'Normas para navegar seguros.', aprende: 'Normas básicas de seguridad en internet',
        datos: { afirmaciones: [
          '🔑 :: Puedo compartir mi contraseña con cualquier persona. | F || La contraseña es secreta; solo la saben tus papás.',
          '🏠 :: Debo dar mi dirección a personas que conocí por internet. | F || Nunca demos datos personales a desconocidos.',
          '👨‍👩‍👧 :: Si algo en internet me da miedo, se lo cuento a un adulto. | V || Siempre podemos pedir ayuda.',
          '🤝 :: Debo tratar con respeto a los demás en internet. | V || Las reglas de respeto también aplican en internet.',
          '📸 :: Puedo enviar fotos mías a desconocidos. | F || Las fotos son información personal.',
          '🎁 :: Si un mensaje dice que gané un premio, debo dar clic rápido. | F || Puede ser un engaño. Pregunta a un adulto.'
        ] } },
      { tipo: 'relacionar', titulo: 'Íconos del computador', icono: '🗑️', descripcion: 'Une cada ícono con su función.', aprende: 'Íconos y elementos del escritorio',
        datos: { pares: ['🗑️ Papelera de reciclaje | Guarda los archivos borrados', '📁 Carpeta | Organiza los archivos', '🌐 Navegador | Sirve para entrar a internet', '💾 Guardar | Guarda el trabajo', '🖨️ Imprimir | Pasa el documento al papel', '🔍 Buscar | Encuentra archivos o información'] } },
      { tipo: 'seleccion', titulo: 'Secuencias lógicas', icono: '🧠', descripcion: '¿Qué sigue en la secuencia?', aprende: 'Patrones y secuencias lógicas',
        datos: { preguntas: [
          '🔴🔵🔴🔵🔴 :: ¿Qué sigue? | 🔵 | 🔴 | 🟢 || El patrón se repite: rojo, azul.',
          '⭐⭐🌙⭐⭐🌙⭐⭐ :: ¿Qué sigue? | 🌙 | ⭐ | ☀️ || Dos estrellas y una luna.',
          '1, 3, 5, 7 :: ¿Qué número sigue? | 9 | 8 | 10 || Sumamos 2 cada vez.',
          '🐶🐱🐭🐶🐱 :: ¿Qué sigue? | 🐭 | 🐶 | 🐱 || El patrón es perro, gato, ratón.',
          '🔺🔺🟦🔺🔺🟦🔺 :: ¿Qué sigue? | 🔺 | 🟦 | 🟢 || Dos triángulos y un cuadrado.',
          'A, C, E, G :: ¿Qué letra sigue? | I | H | J || Saltamos una letra: A (b) C (d) E (f) G (h) I.'
        ] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'clasificar', titulo: 'Hardware y software', icono: '💽', descripcion: '¿Se puede tocar o es un programa?', aprende: 'Diferencia entre hardware y software',
        datos: { categorias: ['🖐️ Hardware (se puede tocar)', '💿 Software (programas)'], elementos: ['🖥️ Monitor | 0', '⌨️ Teclado | 0', '🖱️ Mouse | 0', '💾 Memoria USB | 0', '🖨️ Impresora | 0', '📝 Procesador de texto | 1', '🌐 Navegador de internet | 1', '🎮 Videojuego | 1', '⚙️ Sistema operativo | 1', '🎨 Programa de dibujo | 1'] } },
      { tipo: 'relacionar', titulo: 'Atajos de teclado', icono: '⌨️', descripcion: 'Une cada atajo con lo que hace.', aprende: 'Atajos de teclado básicos',
        datos: { pares: ['Ctrl + C | Copiar', 'Ctrl + V | Pegar', 'Ctrl + X | Cortar', 'Ctrl + Z | Deshacer', 'Ctrl + S | Guardar', 'Ctrl + P | Imprimir'] } },
      { tipo: 'clasificar', titulo: 'Contraseñas seguras', icono: '🔐', descripcion: '¿Es segura o fácil de adivinar?', aprende: 'Crear contraseñas seguras',
        datos: { categorias: ['✅ Segura', '⚠️ Fácil de adivinar'], elementos: ['M1Perr0#Toby! | 0 || Mezcla mayúsculas, números y símbolos', 'Luna$Azul2024 | 0 || Larga y con símbolos', 'Gat0Verde&Sol | 0 || Combina varios tipos de caracteres', '123456 | 1 || Es la contraseña más usada del mundo', 'contraseña | 1 || Es muy fácil de adivinar', 'Tu nombre | 1 || Cualquiera puede adivinarla', '111111 | 1 || Solo números repetidos', 'abc123 | 1 || Muy corta y común'] } },
      { tipo: 'ordenar', titulo: 'Algoritmos de la vida diaria', icono: '🤖', descripcion: 'Ordena los pasos como un programador.', aprende: 'Algoritmos: pasos ordenados para resolver un problema',
        datos: { secuencias: [
          { titulo: 'Algoritmo: cepillarse los dientes', items: ['🦷 Tomar el cepillo', '🧴 Poner la crema', '😁 Cepillar los dientes', '💧 Enjuagarse la boca', '🧽 Lavar el cepillo'], explica: 'Un algoritmo es una lista de pasos en orden.' },
          { titulo: 'Algoritmo: hacer un sándwich', items: ['🍞 Tomar dos tajadas de pan', '🧈 Untar mantequilla', '🧀 Poner el queso', '🍅 Poner el tomate', '🥪 Cerrar con la otra tajada'], explica: 'Si cambiamos el orden, el resultado no es el esperado.' },
          { titulo: 'Algoritmo: enviar un correo', items: ['🌐 Abrir el correo', '✉️ Clic en Redactar', '👤 Escribir el destinatario', '✍️ Escribir el mensaje', '📤 Clic en Enviar'], explica: 'Los computadores siguen algoritmos para funcionar.' }
        ] } },
      { tipo: 'seleccion', titulo: 'El procesador de texto', icono: '📝', descripcion: 'Herramientas para escribir documentos.', aprende: 'Funciones básicas del procesador de texto',
        datos: { preguntas: [
          '¿Qué botón pone el texto en negrilla? | N | K | S || N de Negrita (en inglés es B, Bold).',
          '¿Qué botón pone el texto en cursiva (inclinado)? | K | N | S || K de cursiva (en inglés es I, Italic).',
          '¿Qué botón subraya el texto? | S | N | K || S de Subrayado (en inglés es U, Underline).',
          '¿Para qué sirve el corrector ortográfico? | Para encontrar errores de escritura | Para dibujar | Para imprimir || Subraya en rojo las palabras mal escritas.',
          '¿Qué tecla borra la letra a la izquierda del cursor? | Retroceso (Backspace) | Enter | Shift || La tecla de la flecha hacia atrás.',
          '¿Qué tecla se usa para escribir una letra mayúscula? | Shift (Mayús) | Ctrl | Alt || Se mantiene presionada Shift y se pulsa la letra.'
        ] } },
      { tipo: 'laberinto', titulo: 'Laberinto del hardware', icono: '🐰', descripcion: 'Pisa solo las partes que se pueden tocar.', aprende: 'Identificar hardware',
        datos: { regla: 'Pisa solo HARDWARE (partes físicas)', correctos: ['Monitor', 'Teclado', 'Mouse', 'USB', 'CPU', 'Cámara', 'Parlante', 'Impresora', 'Micrófono'], incorrectos: ['Paint | Paint es un programa (software)', 'Word | Word es un programa (software)', 'Juego | Un videojuego es software', 'Windows | Windows es el sistema operativo (software)', 'Navegador | El navegador es software', 'App | Una aplicación es software', 'Antivirus | El antivirus es software'] } },
      { tipo: 'crucigrama', titulo: 'Crucigrama digital', icono: '🌐', descripcion: 'Palabras de internet y computación.', aprende: 'Vocabulario de informática',
        datos: { palabras: ['NAVEGADOR | Programa para entrar a internet', 'INTERNET | Red mundial de computadores', 'CONTRASEÑA | Clave secreta para entrar a una cuenta', 'CORREO | Sirve para enviar mensajes electrónicos', 'ARCHIVO | Documento guardado en el computador', 'CARPETA | Sirve para organizar archivos', 'VIRUS | Programa malicioso que daña el computador'] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'ordenar', titulo: 'Línea de tiempo de los inventos', icono: '💡', descripcion: 'Ordena los inventos del más antiguo al más reciente.', aprende: 'Historia de la tecnología',
        datos: { secuencias: [
          { titulo: 'Del más antiguo al más reciente', items: ['⚙️ La rueda (hace 5.500 años)', '📜 La imprenta (1440)', '☎️ El teléfono (1876)', '💡 El bombillo (1879)', '✈️ El avión (1903)'], explica: 'Cada invento cambió la forma de vivir de las personas.' },
          { titulo: 'Del más antiguo al más reciente', items: ['📻 La radio (1895)', '📺 La televisión (1927)', '🖥️ El computador electrónico (1946)', '🌐 La World Wide Web (1991)', '📱 El teléfono inteligente (2007)'], explica: 'La tecnología avanza cada vez más rápido.' }
        ] } },
      { tipo: 'vf', titulo: 'Huella digital y ciberacoso', icono: '👣', descripcion: 'Convivencia en el mundo digital.', aprende: 'Ciudadanía digital: huella digital y ciberacoso',
        datos: { afirmaciones: [
          '👣 :: Todo lo que publicamos en internet deja una huella digital. | V || Lo que se publica puede quedar para siempre.',
          '😢 :: Burlarse de alguien en un grupo de chat es ciberacoso. | V || El ciberacoso hace daño. Si lo ves, cuéntaselo a un adulto.',
          '🗑️ :: Si borro una foto, desaparece para siempre de internet. | F || Otros pueden haberla copiado o guardado.',
          '📢 :: Si veo ciberacoso, lo mejor es quedarme callado. | F || Debemos avisar a un adulto de confianza.',
          '🤔 :: Antes de publicar algo, debo pensar si puede herir a alguien. | V || Piensa antes de publicar.',
          '📰 :: Todo lo que aparece en internet es verdad. | F || Hay noticias falsas: compara con fuentes confiables.'
        ] } },
      { tipo: 'clasificar', titulo: 'Extensiones de archivo', icono: '📄', descripcion: '¿Qué tipo de archivo es?', aprende: 'Tipos de archivo y sus extensiones',
        datos: { categorias: ['🖼️ Imagen', '🎵 Audio o video', '📄 Documento'], elementos: ['foto.jpg | 0', 'dibujo.png | 0', 'animacion.gif | 0', 'cancion.mp3 | 1', 'pelicula.mp4 | 1', 'grabacion.wav | 1', 'tarea.docx | 2', 'exposicion.pptx | 2 || Es una presentación de diapositivas', 'notas.xlsx | 2 || Es una hoja de cálculo', 'libro.pdf | 2'] } },
      { tipo: 'relacionar', titulo: 'Pensamiento computacional', icono: '🤖', descripcion: 'Conceptos de programación.', aprende: 'Algoritmos, bucles, condicionales y variables',
        datos: { pares: ['Algoritmo | Pasos ordenados para resolver un problema', 'Bucle (ciclo) | Repetir una acción varias veces', 'Condicional | Si pasa algo, entonces hago otra cosa', 'Variable | Espacio que guarda un dato', 'Depurar | Encontrar y corregir errores', 'Programa | Instrucciones que sigue el computador'] } },
      { tipo: 'seleccion', titulo: 'Piensa como programador', icono: '🧩', descripcion: 'Secuencias, bucles y condicionales.', aprende: 'Resolver problemas con lógica de programación',
        datos: { preguntas: [
          '🤖 :: El robot debe avanzar 3 pasos. ¿Qué bucle sirve? | Repetir 3 veces: avanzar | Avanzar 1 vez | Girar 3 veces || Un bucle repite instrucciones.',
          '🌧️ :: "SI llueve, ENTONCES llevo paraguas". ¿Qué es? | Un condicional | Un bucle | Una variable || Los condicionales toman decisiones.',
          '🔢 :: Puntos = 0. Gano 5 puntos dos veces. ¿Cuánto vale Puntos? | 10 | 5 | 0 || 0 + 5 + 5 = 10. La variable guarda el dato.',
          '🐞 :: El robot choca con la pared. ¿Qué debe hacer el programador? | Depurar el programa | Apagar el computador | Nada || Depurar es encontrar y corregir el error.',
          '🎯 :: Para dibujar un cuadrado el robot repite 4 veces… | Avanzar y girar 90° | Saltar | Avanzar y girar 45° || Un cuadrado tiene 4 lados y 4 ángulos rectos.',
          '🚦 :: SI el semáforo está en rojo… | ENTONCES me detengo | ENTONCES acelero | ENTONCES canto || Condicional: si (condición) entonces (acción).'
        ] } },
      { tipo: 'teclado', titulo: 'Mecanografía', icono: '⌨️', descripcion: 'Escribe frases sobre tecnología.', aprende: 'Escritura con el teclado (frases y números)',
        datos: { cantidad: 6, palabras: ['INTERNET SEGURO', 'MI CLAVE ES SECRETA', 'PIENSO ANTES DE PUBLICAR', 'ALGORITMO', 'ROBOT 2030', 'COLOMBIA DIGITAL'] } },
      { tipo: 'sopa', titulo: 'Sopa de programación', icono: '🔎', descripcion: 'Busca palabras de programación.', aprende: 'Vocabulario de programación',
        datos: { palabras: ['ALGORITMO | Pasos ordenados', 'BUCLE | Repetir', 'CÓDIGO | Instrucciones', 'ROBOT | Máquina programable', 'PROGRAMA | Conjunto de instrucciones', 'DATOS | Información'] } }
    ]
  }
});
