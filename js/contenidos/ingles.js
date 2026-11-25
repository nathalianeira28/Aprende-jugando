/* =========================================================
   INGLÉS · Contenidos por grado
   Instrucciones en español y vocabulario en inglés.
   ========================================================= */
AJ.materia({
  id: 'ingles',
  nombre: 'Inglés',
  color: '#7048e8',
  icono: '💬',
  descripcion: 'Vocabulario y frases en inglés.',
  temas: {
    1: 'Colors, numbers 1–10, greetings, animals, classroom objects',
    2: 'Numbers 11–20, family, body parts, fruits, toys',
    3: 'Days and months, clothes, parts of the house, in/on/under, verb to be',
    4: 'Daily routines, jobs, weather, present simple, there is / there are',
    5: 'Past simple, places in town, comparatives, telling time, question words, can / can\'t'
  },
  grados: {
    /* ======================= PRIMERO ======================= */
    1: [
      { tipo: 'memoria', titulo: 'Colors memory', icono: '🎨', descripcion: 'Une cada color con su nombre en inglés.', aprende: 'Los colores en inglés',
        datos: { cantidad: 6, pares: ['🔴 | red', '🔵 | blue', '🟢 | green', '🟡 | yellow', '🟠 | orange', '🟣 | purple', '⚫ | black', '⚪ | white', '🟤 | brown'] } },
      { tipo: 'relacionar', titulo: 'Numbers 1 to 10', icono: '🔢', descripcion: 'Une cada número con su nombre.', aprende: 'Los números del 1 al 10 en inglés',
        datos: { porRonda: 5, pares: ['1 | one', '2 | two', '3 | three', '4 | four', '5 | five', '6 | six', '7 | seven', '8 | eight', '9 | nine', '10 | ten'] } },
      { tipo: 'seleccion', titulo: 'Animals', icono: '🐶', descripcion: '¿Cómo se dice este animal en inglés?', aprende: 'Nombres de animales en inglés',
        datos: { preguntas: [
          '🐶 :: What animal is it? | dog | cat | fish || Dog = perro.',
          '🐱 :: What animal is it? | cat | dog | bird || Cat = gato.',
          '🐟 :: What animal is it? | fish | duck | cow || Fish = pez.',
          '🐦 :: What animal is it? | bird | fish | horse || Bird = pájaro.',
          '🐄 :: What animal is it? | cow | pig | dog || Cow = vaca.',
          '🐷 :: What animal is it? | pig | cow | cat || Pig = cerdo.',
          '🦆 :: What animal is it? | duck | bird | frog || Duck = pato.',
          '🐴 :: What animal is it? | horse | cow | dog || Horse = caballo.'
        ] } },
      { tipo: 'seleccion', titulo: 'Greetings', icono: '👋', descripcion: 'Saludos y despedidas en inglés.', aprende: 'Saludar y despedirse en inglés',
        datos: { preguntas: [
          '🌅 :: Por la mañana decimos: Good ___ | morning | night | afternoon || Good morning = buenos días.',
          '🌇 :: Por la tarde decimos: Good ___ | afternoon | morning | night || Good afternoon = buenas tardes.',
          '🌙 :: Antes de dormir decimos: Good ___ | night | morning | afternoon || Good night = buenas noches.',
          '👋 :: ¿Cómo se dice "hola"? | Hello | Goodbye | Thank you || Hello = hola.',
          '🚶 :: ¿Cómo se dice "adiós"? | Goodbye | Hello | Please || Goodbye = adiós.',
          '🙏 :: ¿Cómo se dice "gracias"? | Thank you | Sorry | Please || Thank you = gracias.',
          '🙂 :: "How are you?" significa… | ¿Cómo estás? | ¿Cómo te llamas? | ¿Cuántos años tienes? || Respondemos: I\'m fine, thank you.'
        ] } },
      { tipo: 'sopa', titulo: 'Classroom word search', icono: '🔎', descripcion: 'Busca objetos del salón en inglés.', aprende: 'Objetos del salón de clases en inglés',
        datos: { palabras: ['PENCIL | ✏️ lápiz', 'BOOK | 📕 libro', 'RULER | 📏 regla', 'BAG | 🎒 maleta', 'PEN | 🖊️ lapicero', 'CHAIR | 🪑 silla'] } },
      { tipo: 'vf', titulo: 'Colors: true or false?', icono: '🌈', descripcion: '¿El color está bien dicho?', aprende: 'Reconocer colores en inglés',
        datos: { afirmaciones: [
          '🍌 :: The banana is yellow. | V || Yellow = amarillo.',
          '🍓 :: The strawberry is blue. | F || The strawberry is RED (roja).',
          '🐸 :: The frog is green. | V || Green = verde.',
          '☁️ :: The cloud is black. | F || The cloud is WHITE (blanca).',
          '🍊 :: The orange is orange. | V || Orange = naranja.',
          '🍆 :: The eggplant is purple. | V || Purple = morado.'
        ] } }
    ],

    /* ======================= SEGUNDO ======================= */
    2: [
      { tipo: 'identificar', titulo: 'Body parts', icono: '🧍', descripcion: 'Toca la parte del cuerpo en inglés.', aprende: 'Partes del cuerpo en inglés',
        datos: { dibujo: 'cuerpo', pregunta: 'Touch the ', partes: ['cabeza | head | Head = cabeza', 'cuello | neck | Neck = cuello', 'brazos | arms | Arms = brazos', 'manos | hands | Hands = manos', 'piernas | legs | Legs = piernas', 'pies | feet | Feet = pies (one foot, two feet)'] } },
      { tipo: 'memoria', titulo: 'My family', icono: '👨‍👩‍👧', descripcion: 'Une cada miembro de la familia.', aprende: 'La familia en inglés',
        datos: { cantidad: 6, pares: ['👵 | grandmother', '👴 | grandfather', '👩 | mother', '👨 | father', '👧 | sister', '👦 | brother', '👶 | baby'] } },
      { tipo: 'relacionar', titulo: 'Numbers 11 to 20', icono: '🔢', descripcion: 'Une cada número con su nombre.', aprende: 'Los números del 11 al 20 en inglés',
        datos: { porRonda: 5, pares: ['11 | eleven', '12 | twelve', '13 | thirteen', '14 | fourteen', '15 | fifteen', '16 | sixteen', '17 | seventeen', '18 | eighteen', '19 | nineteen', '20 | twenty'] } },
      { tipo: 'seleccion', titulo: 'Fruits', icono: '🍎', descripcion: '¿Qué fruta es?', aprende: 'Frutas en inglés',
        datos: { preguntas: [
          '🍌 :: What fruit is it? | banana | apple | grapes || Banana = banano.',
          '🍎 :: What fruit is it? | apple | orange | pear || Apple = manzana.',
          '🍇 :: What fruit is it? | grapes | cherries | lemon || Grapes = uvas.',
          '🍊 :: What fruit is it? | orange | lemon | mango || Orange = naranja.',
          '🍓 :: What fruit is it? | strawberry | watermelon | pineapple || Strawberry = fresa.',
          '🍍 :: What fruit is it? | pineapple | apple | banana || Pineapple = piña.',
          '🍉 :: What fruit is it? | watermelon | strawberry | grapes || Watermelon = sandía.',
          '🥭 :: What fruit is it? | mango | pear | orange || Mango = mango.'
        ] } },
      { tipo: 'revueltas', titulo: 'Animals scramble', icono: '🔤', descripcion: 'Ordena las letras del animal en inglés.', aprende: 'Escribir nombres de animales en inglés',
        datos: { palabras: ['CAT | 🐱 gato', 'DOG | 🐶 perro', 'FISH | 🐟 pez', 'BIRD | 🐦 pájaro', 'HORSE | 🐴 caballo', 'COW | 🐄 vaca', 'DUCK | 🦆 pato', 'LION | 🦁 león'] } },
      { tipo: 'sopa', titulo: 'Toys word search', icono: '🔎', descripcion: 'Busca juguetes en inglés.', aprende: 'Juguetes en inglés',
        datos: { palabras: ['BALL | ⚽ pelota', 'DOLL | 🎎 muñeca', 'KITE | 🪁 cometa', 'CAR | 🚗 carro', 'TRAIN | 🚂 tren', 'ROBOT | 🤖 robot'] } }
    ],

    /* ======================= TERCERO ======================= */
    3: [
      { tipo: 'ordenar', titulo: 'Days and months', icono: '📅', descripcion: 'Ordena los días y los meses.', aprende: 'Días de la semana y meses del año en inglés',
        datos: { enOrden: true, sinFlechas: true, secuencias: [
          { titulo: 'Days of the week', items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], explica: 'Lunes, martes, miércoles, jueves, viernes, sábado, domingo. ¡En inglés van con mayúscula!' },
          { titulo: 'Months (January – June)', items: ['January', 'February', 'March', 'April', 'May', 'June'], explica: 'Enero, febrero, marzo, abril, mayo, junio.' },
          { titulo: 'Months (July – December)', items: ['July', 'August', 'September', 'October', 'November', 'December'], explica: 'Julio, agosto, septiembre, octubre, noviembre, diciembre.' }
        ] } },
      { tipo: 'memoria', titulo: 'Clothes memory', icono: '👕', descripcion: 'Une cada prenda con su nombre.', aprende: 'La ropa en inglés',
        datos: { cantidad: 6, pares: ['👕 | T-shirt', '👖 | pants', '👗 | dress', '👟 | shoes', '🧦 | socks', '🧢 | cap', '🧥 | jacket', '🧤 | gloves'] } },
      { tipo: 'seleccion', titulo: 'In, on, under', icono: '📦', descripcion: '¿Dónde está el gato?', aprende: 'Preposiciones de lugar: in, on, under',
        datos: { preguntas: [
          '🐱📦 :: El gato está DENTRO de la caja: The cat is ___ the box. | in | on | under || In = dentro.',
          '📕 :: El libro está SOBRE la mesa: The book is ___ the table. | on | in | under || On = sobre / encima.',
          '🐶 :: El perro está DEBAJO de la cama: The dog is ___ the bed. | under | on | in || Under = debajo.',
          '🍎 :: La manzana está DENTRO de la maleta: The apple is ___ the bag. | in | under | on || In = dentro.',
          '⚽ :: El balón está DEBAJO de la silla: The ball is ___ the chair. | under | in | on || Under = debajo.',
          '🐦 :: El pájaro está SOBRE el árbol: The bird is ___ the tree. | on | under | in || On = encima.'
        ] } },
      { tipo: 'completar', titulo: 'Verb to be', icono: '✍️', descripcion: 'Completa con am, is o are.', aprende: 'Verbo to be: am, is, are',
        datos: { preguntas: [
          'I ___ a student. | am | is | are || Con I usamos AM.',
          'She ___ my friend. | is | am | are || Con he, she, it usamos IS.',
          'They ___ happy. | are | is | am || Con we, you, they usamos ARE.',
          'The dog ___ big. | is | are | am || The dog = it → IS.',
          'We ___ in the classroom. | are | is | am || We → ARE.',
          'He ___ ten years old. | is | are | am || He → IS.',
          'You ___ very kind. | are | is | am || You → ARE.'
        ] } },
      { tipo: 'clasificar', titulo: 'Parts of the house', icono: '🏠', descripcion: '¿En qué parte de la casa está?', aprende: 'Partes de la casa en inglés',
        datos: { categorias: ['🍳 Kitchen (cocina)', '🛏️ Bedroom (habitación)', '🛁 Bathroom (baño)'], elementos: ['🍳 stove | 0', '🧊 fridge | 0', '🍽️ plates | 0', '🛏️ bed | 1', '🧸 teddy bear | 1', '👕 wardrobe | 1', '🚿 shower | 2', '🦷 toothbrush | 2', '🧻 toilet paper | 2'] } },
      { tipo: 'crucigrama', titulo: 'House crossword', icono: '🏡', descripcion: 'Escribe en inglés las partes de la casa.', aprende: 'Vocabulario de la casa',
        datos: { palabras: ['KITCHEN | Cocina', 'BEDROOM | Habitación', 'BATHROOM | Baño', 'DOOR | Puerta', 'WINDOW | Ventana', 'GARDEN | Jardín', 'ROOF | Techo'] } }
    ],

    /* ======================= CUARTO ======================= */
    4: [
      { tipo: 'ordenar', titulo: 'My daily routine', icono: '⏰', descripcion: 'Ordena la rutina de la mañana.', aprende: 'Rutinas diarias en inglés',
        datos: { secuencias: [
          { titulo: 'Order the morning routine', items: ['⏰ I wake up', '🚿 I take a shower', '👕 I get dressed', '🥣 I have breakfast', '🚌 I go to school'], explica: 'Me despierto, me baño, me visto, desayuno y voy a la escuela.' },
          { titulo: 'Order the evening routine', items: ['🏠 I go home', '📚 I do my homework', '🍲 I have dinner', '🦷 I brush my teeth', '😴 I go to bed'], explica: 'Llego a casa, hago tareas, ceno, me cepillo y me acuesto.' }
        ] } },
      { tipo: 'relacionar', titulo: 'Jobs', icono: '👩‍🚒', descripcion: 'Une cada profesión con su traducción.', aprende: 'Profesiones en inglés',
        datos: { pares: ['👩‍🏫 teacher | docente', '👨‍⚕️ doctor | médico', '👩‍🚒 firefighter | bombera', '👨‍🌾 farmer | campesino', '👩‍🍳 cook | cocinera', '👮 police officer | policía', '👨‍✈️ pilot | piloto', '👩‍🔬 scientist | científica'] } },
      { tipo: 'memoria', titulo: 'Weather memory', icono: '🌦️', descripcion: '¿Cómo está el clima?', aprende: 'El clima en inglés',
        datos: { cantidad: 6, pares: ['☀️ | sunny', '🌧️ | rainy', '☁️ | cloudy', '💨 | windy', '❄️ | snowy', '⛈️ | stormy', '🌡️ | hot', '🥶 | cold'] } },
      { tipo: 'completar', titulo: 'Present simple', icono: '✍️', descripcion: 'Completa la oración en presente.', aprende: 'Presente simple (he/she/it + s)',
        datos: { preguntas: [
          'She ___ to school every day. | goes | go | going || Con she/he/it agregamos -s o -es: goes.',
          'They ___ soccer on Saturdays. | play | plays | playing || Con they no se agrega -s.',
          'My dad ___ coffee in the morning. | drinks | drink | drinking || My dad = he → drinks.',
          'I ___ my teeth at night. | brush | brushes | brushing || Con I no se agrega -s.',
          'The cat ___ a lot. | sleeps | sleep | sleeping || The cat = it → sleeps.',
          'We ___ English at school. | study | studies | studying || Con we no se agrega -s.'
        ] } },
      { tipo: 'seleccion', titulo: 'There is / There are', icono: '🔍', descripcion: '¿Singular o plural?', aprende: 'There is (uno) / There are (varios)',
        datos: { preguntas: [
          '🐱🐱🐱 :: There ___ three cats. | are | is || Varios → there ARE.',
          '🍎 :: There ___ an apple on the table. | is | are || Uno → there IS.',
          '📚📚 :: There ___ two books in my bag. | are | is || Dos → there ARE.',
          '🌞 :: There ___ a sun in the sky. | is | are || Uno → there IS.',
          '🐟🐟🐟🐟 :: There ___ four fish in the river. | are | is || Cuatro → there ARE.',
          '🏫 :: There ___ a school in my town. | is | are || Una → there IS.'
        ] } },
      { tipo: 'vf', titulo: 'Adjectives', icono: '🐘', descripcion: '¿La descripción es correcta?', aprende: 'Adjetivos: big, small, fast, slow, tall, short',
        datos: { afirmaciones: [
          '🐘 :: An elephant is big. | V || Big = grande.',
          '🐭 :: A mouse is big. | F || A mouse is SMALL (pequeño).',
          '🐢 :: A turtle is fast. | F || A turtle is SLOW (lenta).',
          '🐆 :: A cheetah is fast. | V || Fast = rápido.',
          '🦒 :: A giraffe is tall. | V || Tall = alto.',
          '🧊 :: Ice is hot. | F || Ice is COLD (frío).'
        ] } },
      { tipo: 'sopa', titulo: 'Jobs word search', icono: '🔎', descripcion: 'Encuentra las profesiones en inglés.', aprende: 'Profesiones en inglés',
        datos: { palabras: ['TEACHER | docente', 'DOCTOR | médico', 'FARMER | campesino', 'COOK | cocinero', 'PILOT | piloto', 'NURSE | enfermero'] } }
    ],

    /* ======================= QUINTO ======================= */
    5: [
      { tipo: 'memoria', titulo: 'Irregular verbs', icono: '🃏', descripcion: 'Une el presente con el pasado.', aprende: 'Verbos irregulares en pasado',
        datos: { cantidad: 6, pares: ['go | went', 'eat | ate', 'see | saw', 'have | had', 'make | made', 'write | wrote', 'drink | drank', 'run | ran', 'buy | bought'] } },
      { tipo: 'completar', titulo: 'Past simple', icono: '⏪', descripcion: 'Completa en pasado.', aprende: 'Pasado simple: verbos regulares (-ed) e irregulares',
        datos: { preguntas: [
          'Yesterday I ___ soccer. (play) | played | play | plays || Regular: play → played.',
          'Last week we ___ to the beach. (go) | went | goed | go || Irregular: go → went.',
          'She ___ a cake last Sunday. (make) | made | maked | makes || Irregular: make → made.',
          'They ___ TV last night. (watch) | watched | watch | watches || Regular: watch → watched.',
          'I ___ a letter to my grandma. (write) | wrote | writed | writes || Irregular: write → wrote.',
          'He ___ his homework yesterday. (finish) | finished | finish | finishes || Regular: finish → finished.'
        ] } },
      { tipo: 'seleccion', titulo: 'Places in town', icono: '🏙️', descripcion: '¿A dónde vas?', aprende: 'Lugares de la ciudad en inglés',
        datos: { preguntas: [
          '🤒 :: Where do you go when you are sick? | hospital | bakery | library || Hospital = hospital.',
          '📚 :: Where do you borrow books? | library | bank | park || Library = biblioteca (¡no librería!).',
          '🍞 :: Where do you buy bread? | bakery | pharmacy | school || Bakery = panadería.',
          '💊 :: Where do you buy medicine? | pharmacy | library | museum || Pharmacy = farmacia.',
          '🎢 :: Where do you play outside? | park | bank | hospital || Park = parque.',
          '💵 :: Where do you save money? | bank | park | bakery || Bank = banco.'
        ] } },
      { tipo: 'completar', titulo: 'Comparatives', icono: '⚖️', descripcion: 'Compara usando -er o more.', aprende: 'Comparativos: bigger, faster, more beautiful',
        datos: { preguntas: [
          '🐘🐭 :: An elephant is ___ than a mouse. | bigger | big | biggest || Big → bigger (se dobla la g).',
          '🐆🐢 :: A cheetah is ___ than a turtle. | faster | fast | more fast || Fast → faster.',
          '🦒🐕 :: A giraffe is ___ than a dog. | taller | tall | more tall || Tall → taller.',
          '☀️🌙 :: The sun is ___ than the moon. | hotter | hot | more hot || Hot → hotter.',
          '🦋 :: A butterfly is ___ than a worm. | more beautiful | beautifuller | beautiful || Palabras largas usan more: more beautiful.',
          '📘📕 :: This book is ___ than that one. | more interesting | interestinger | interesting || Palabra larga → more interesting.'
        ] } },
      { tipo: 'relacionar', titulo: 'Question words', icono: '❓', descripcion: 'Une la palabra con su significado.', aprende: 'Palabras para preguntar (Wh- questions)',
        datos: { pares: ['What | ¿Qué?', 'Where | ¿Dónde?', 'When | ¿Cuándo?', 'Who | ¿Quién?', 'Why | ¿Por qué?', 'How | ¿Cómo?', 'How many | ¿Cuántos?'] } },
      { tipo: 'seleccion', titulo: 'What time is it?', icono: '🕒', descripcion: 'Lee el reloj en inglés.', aprende: 'Decir la hora en inglés',
        datos: { preguntas: [
          "🕒 :: What time is it? | It's three o'clock | It's two o'clock | It's nine o'clock || O'clock = en punto.",
          "🕡 :: What time is it? | It's half past six | It's six o'clock | It's half past five || Half past = y media.",
          "🕘 :: What time is it? | It's nine o'clock | It's three o'clock | It's half past nine || Las nueve en punto.",
          "🕜 :: What time is it? | It's half past one | It's one o'clock | It's half past two || La una y media.",
          "🕛 :: What time is it? | It's twelve o'clock | It's six o'clock | It's half past twelve || Las doce en punto.",
          "🕥 :: What time is it? | It's half past ten | It's ten o'clock | It's half past eleven || Las diez y media."
        ] } },
      { tipo: 'vf', titulo: 'Can or can\'t?', icono: '🐧', descripcion: '¿Puede o no puede?', aprende: 'Habilidades con can / can\'t',
        datos: { afirmaciones: [
          '🐟 :: A fish can swim. | V || Can = puede.',
          '🐧 :: A penguin can fly. | F || A penguin CAN\'T fly, but it can swim.',
          '🐦 :: A bird can fly. | V || Los pájaros pueden volar.',
          '🐍 :: A snake can walk. | F || A snake can\'t walk; it slithers (se arrastra).',
          '🐒 :: A monkey can climb trees. | V || Climb = trepar.',
          '🐢 :: A turtle can run fast. | F || A turtle can\'t run fast.'
        ] } },
      { tipo: 'crucigrama', titulo: 'Town crossword', icono: '🏘️', descripcion: 'Lugares de la ciudad.', aprende: 'Vocabulario de lugares de la ciudad',
        datos: { palabras: ['HOSPITAL | Lugar donde atienden a los enfermos', 'LIBRARY | Biblioteca', 'BAKERY | Panadería', 'PARK | Parque', 'SCHOOL | Escuela', 'MUSEUM | Museo', 'BANK | Banco'] } }
    ]
  }
});
