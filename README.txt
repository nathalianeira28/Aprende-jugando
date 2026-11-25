=====================================================================
  APRENDE JUGANDO
  Aplicación web educativa para primero a quinto de primaria
  Proyecto de servicio social
=====================================================================

¿QUÉ ES?
--------
Una plataforma de juegos educativos para que el docente la use en
clase con un computador conectado a un televisor o video beam.
Incluye 7 materias, 5 grados y más de 250 actividades. Los temas de
cada grado siguen los Estándares Básicos de Competencias y los
Derechos Básicos de Aprendizaje (DBA) del Ministerio de Educación
Nacional de Colombia.

No necesita internet, ni instalar nada, ni crear cuentas.


¿CÓMO SE ABRE?
--------------
1. Copie la carpeta completa APRENDE-JUGANDO (por ejemplo, en una
   memoria USB).
2. Abra la carpeta y haga doble clic en el archivo  index.html
3. Se abrirá en el navegador (Google Chrome, Microsoft Edge o Firefox).
4. Para verlo en todo el televisor pulse el botón  ⛶ Pantalla
   (o la tecla F11).

IMPORTANTE: copie SIEMPRE la carpeta completa. Si solo copia el
archivo index.html, la aplicación no tendrá estilos ni juegos.


¿CÓMO SE USA?
-------------
  Inicio  →  Elegir grado  →  Elegir materia  →  Biblioteca de juegos
  →  JUGAR  →  Resultados (volver a jugar, otro juego o menú)

- Cada tarjeta de juego muestra una imagen de vista previa, el
  nombre, una descripción, el grado y lo que se aprende.
- El botón 📋 Guía docente muestra todos los temas y juegos por grado.
- El botón 🔊 Sonido activa o desactiva los sonidos.
- Cuando un niño se equivoca, el juego le muestra la respuesta
  correcta y le explica por qué. No hay mensajes negativos.
- En Matemáticas los ejercicios cambian cada vez que se juega.


MATERIAS
--------
  🔢 Matemáticas          📖 Lengua Castellana     🌿 Ciencias Naturales
  🌎 Ciencias Sociales    💬 Inglés                💻 Tecnología e Informática
  🎨 Arte y Creatividad


TIPOS DE JUEGO (mecánicas)
--------------------------
Sopa de letras, crucigrama, memoria de parejas, palabras revueltas,
completar palabras y oraciones, selección múltiple, comprensión de
lectura, verdadero o falso, relacionar columnas, arrastrar y soltar
para clasificar, ordenar secuencias, rompecabezas, laberinto,
ruleta de preguntas, encuentra las diferencias, identificar partes
en un dibujo, resolver operaciones, la tienda escolar y práctica
del teclado.


ORGANIZACIÓN DE LOS ARCHIVOS
----------------------------
APRENDE-JUGANDO/
│
├── index.html               Página principal (se abre con doble clic)
├── README.txt               Este archivo
│
├── css/
│   └── estilos.css          Colores, tamaños y diseño de todo
│
├── js/
│   ├── utilidades.js        Funciones de ayuda
│   ├── sonidos.js           Sonidos (se generan sin archivos de audio)
│   ├── dibujos.js           Ilustraciones en SVG (cuerpo, planta,
│   │                        computador, mapa de Colombia, célula…)
│   ├── miniaturas.js        Imágenes de vista previa de cada juego
│   ├── generadores.js       Ejercicios automáticos de matemáticas
│   ├── contenidos.js        Registro de materias y grados
│   ├── navegacion.js        Pantallas y paso de una a otra
│   ├── app.js               Arranque de la aplicación
│   │
│   ├── juegos/              Una mecánica de juego por archivo
│   │   ├── motor.js             Pantalla común, aciertos, mensajes
│   │   ├── seleccion-multiple.js (también completar, lectura y V/F)
│   │   ├── memoria.js
│   │   ├── sopa-letras.js
│   │   ├── crucigrama.js
│   │   ├── relacionar.js
│   │   ├── ordenar.js
│   │   ├── clasificar.js
│   │   ├── revueltas.js
│   │   ├── ruleta.js
│   │   ├── rompecabezas.js
│   │   ├── operaciones.js       (también la tienda escolar)
│   │   ├── laberinto.js
│   │   ├── diferencias.js
│   │   ├── identificar.js
│   │   └── teclado.js
│   │
│   └── contenidos/          Preguntas y actividades por materia y grado
│       ├── matematicas.js
│       ├── lengua.js
│       ├── naturales.js
│       ├── sociales.js
│       ├── ingles.js
│       ├── tecnologia.js
│       └── arte.js
│
└── assets/
    ├── icons/logo.svg       Logotipo
    ├── images/              (libre para agregar imágenes propias)
    └── sounds/              (libre para agregar sonidos propios)


¿CÓMO AGREGAR O CAMBIAR PREGUNTAS?
----------------------------------
Abra el archivo de la materia en js/contenidos/ con un editor de
texto (por ejemplo, Visual Studio Code o el Bloc de notas).
Cada grado tiene una lista de juegos. Las preguntas se escriben así:

  Selección múltiple (la PRIMERA opción es la correcta; el juego
  las mezcla):
     '¿Cuál es el río más importante? | Magdalena | Cauca | Atrato || Explicación'

  Memoria o relacionar:
     '🐶 | dog'

  Clasificar (el número es el grupo: 0 = primero, 1 = segundo…):
     '🐟 Pez | 0'

  Verdadero o falso:
     'El Sol es una estrella. | V || Explicación'

Guarde el archivo y vuelva a abrir index.html.


REQUISITOS
----------
Un navegador moderno: Google Chrome, Microsoft Edge o Mozilla Firefox
(actualizados). Funciona en Windows, Mac, Linux y Chromebook.
Los emojis se ven mejor en Windows 10 u 11.


Hecho con HTML, CSS y JavaScript, sin conexión a internet.
