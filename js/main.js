// ============================================================
// DATOS DE LAS CANCIONES
// ============================================================

const TRACKS = [
    {
        id: "sustancia",
        file: "music/1-sustancia.mp3",
        title: "SUSTANCIAS EN MI CORAZÓN",
        artist: "Strangehuman & DannyLux",
        accent: "244, 63, 94",
        theme: {
            name: "ternura",
            bgIcon: "fa-heart",
            pattern: "hearts",
            titleFont: "handwritten-font",
            badgeIcon: "fa-wand-magic-sparkles"
        },
        headerTitle: "Para ti que hace brillar mi mundo",
        headerSubtitle: "Capítulo 1 · Algo que quería contarte",
        cardTitle: "Esto es lo que quería contarte 💌",
        message: [
            "Ok, esto es medio raro de escribir pero bueno, aquí voy: hace un tiempo hay alguien que se metió en mi cabeza sin pedir permiso, y ese alguien eres tú. 🌸",
            "No es una sola cosa, es todo junto: cómo hablas, cómo te ríes de la nada, esa energía tuya que contagia hasta en un simple mensaje de texto. ✨",
            "El tiempo se pone raro cuando estamos hablando. Se acelera y ni cuenta me doy.",
            "Armé esto porque las palabras normales se me quedaban cortas. Esta canción sonaba de fondo mientras lo pensaba, así que le di play. 🎶"
        ],
        italicIndex: 2,
        details: [
            { icon: "fa-face-smile-beam", title: "Tu forma de ser", text: "Única, espontánea y con una vibra que me alegra el día entero. 😊" },
            { icon: "fa-heart", title: "Tu esencia", text: "Esa forma tan linda de hablar, escuchar y estar para mí. 🤍" },
            { icon: "fa-message", title: "Nuestras charlas", text: "Donde el tiempo vuela y siempre me quedo con ganas de más. 💬" }
        ],
        lrc: `[00:00.00] (Instrumental de inicio...) 🎵✨
[00:12.93] Yeah, ey 💫
[00:14.21] Como tú a mí me besa', yeah 💋
[00:16.07] Todo pasa tan lento ⏳
[00:17.99] Y con esa destreza, yeah 🌹
[00:19.89] Junto a tu movimiento 🌊
[00:21.69] A ti sí que se reza, yeah 🙏✨
[00:23.62] En verdad que no miento 🥺
[00:25.33] Solo quiero amarte, comerte por parte 💞
[00:27.58] Llevarte a Marte y que quede en silen- 🚀🌌
[00:29.15] Como tú a mí me besa', yeah 💋
[00:31.14] Todo pasa tan lento ⏳
[00:33.00] Y con esa destreza, yeah ✨
[00:34.69] Junto a tu movimiento 🌊
[00:36.52] A ti sí que se reza, yeah 🙏🤍
[00:38.38] En verdad que no miento 🥺
[00:40.25] Solo quiero amarte, comerte por parte 💞
[00:42.42] Llevarte a Marte y que quede en silen- 🚀🌌
[00:44.61] Tú eres la razón por la que yo creo en el amor ❤️‍🔥
[00:48.42] Póneme los lentes pa verte mejor 🕶️👀
[00:51.69] Sustancias en mi corazón, yo no creía en el amor 🧪❤️
[00:55.37] Te cruzaste en mi camino y todo cambió ✨🌈
[01:01.65] Qué rico se siente despertar al lado tuyo ☀️🛌
[01:05.24] Eres musa, te plasmo, me siento tuyo 🎨📝
[01:08.11] Yeah, con el rímel corrido, sin maquillar 💄
[01:10.95] Eres linda en la mañana al levantar 🥰
[01:12.71] Brillante como luna, eres la moonlight 🌙✨
[01:13.98] Y es que tú... 👉👈
[01:16.76] Eres todo lo que quiero y más (más, más, más, más) 💖
[01:20.48] No tenerte sería fatal 🥀
[01:23.44] Tengo tantos sentimientos 📈
[01:25.08] Contigo quiero estar desierto 🏜️
[01:27.32] Y perdernos en amor 🗺️💞
[01:30.65] Amor, amor 💕
[01:32.36] Me encanta la conexión ⚡
[01:34.21] Tan loco me siento 🌀
[01:36.05] Por ti no lo pienso 🧠💨
[01:38.25] El futuro se ve brillante 🌟
[01:40.23] Siempre seré tu amante 🌹
[01:42.78] Quisiera explicar todo lo que yo siento 🗣️❤️
[01:45.74] Nuestro amor está compuesto 🎼
[01:49.49] Con solo un alma habitándonos 🫂
[01:52.82] Cuando no te tenía, yo no estaba bien 🩹
[01:56.74] Ahora a todos estos vatos les tocó perder 👑😏
[02:00.58] Amor, amor 💕
[02:02.25] Me encanta la conexión ⚡
[02:04.23] Tan loco me siento 🌀
[02:06.13] Por ti no lo pienso 🧠💨
[02:08.38] El futuro se ve brillante 🌟
[02:10.16] Siempre seré tu amante 🌹
[02:12.85] Como tú me besas 💋
[02:16.67] Mami, me haces ver estrellas ⭐✨
[02:20.22] Hasta mis sueños controlas 💭😴
[02:22.11] Ya nunca vas a estar sola 🤝🔒
[02:25.01] Ya nunca vas a estar sola ❤️
[02:29.24] Como tú a mí me besa', yeah 💋
[02:30.96] Todo pasa tan lento ⏳
[02:32.93] Y con esa destreza, yeah ✨
[02:34.62] Junto a tu movimiento 🌊
[02:36.63] A ti sí que se reza, yeah 🙏🤍
[02:38.42] En verdad que no miento 🥺
[02:40.37] Solo quiero amarte, comerte por parte 💞
[02:42.52] Llevarte a Marte y que quede en silen- 🚀🌌
[02:44.13] Como tú a mí me besa', besa' (yeah) 💋
[02:46.73] Lento, lento, besa, besa, lento (yeah) 🫠⏳
[02:51.48] A ti sí que se reza, reza (yeah) 🙏✨
[02:54.45] En verdad que no miento 🥺
[02:56.39] Solo quiero amarte, comerte por parte 💞
[02:58.24] Y que quede en silencio 🤫💜
[02:59.00] (La melodía se desvanece suavemente...) 🎹🕯️`
    },
    {
        id: "carita-linda",
        file: "music/2-carita-linda.mp3",
        title: "Carita Linda",
        artist: "Rauw Alejandro",
        accent: "59, 130, 246",
        theme: {
            name: "calma",
            bgIcon: "fa-flower",
            pattern: "flowers",
            titleFont: "serif-font italic",
            badgeIcon: "fa-moon"
        },
        headerTitle: "Para quien me transmite tanta calma",
        headerSubtitle: "Capítulo 2 · Lo que noto cuando estás cerca",
        cardTitle: "Algo que noté hace tiempo 🌙",
        message: [
            "Hay algo que noté hace rato y nunca te dije: cuando estás cerca, todo baja un cambio, como si el mundo se pusiera cómodo por un momento. 🌊",
            "No es solo lo que dices, es cómo lo dices. Contigo cualquier rato al azar se siente bien, sin que tenga que pasar nada especial.",
            "Te lo cuento sin drama, tranqui, solo para que sepas que dejas huella aunque ni te lo propongas. 🤍",
            "Esta canción me hizo acordar justo de eso: esa calma linda que aparece cuando alguien simplemente te cae bien de verdad. 🌙"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-water", title: "Tu calma", text: "Esa tranquilidad que transmites sin esfuerzo, casi sin darte cuenta. 🌊" },
            { icon: "fa-shield-heart", title: "Confianza", text: "Se siente fácil hablar contigo, como si ya nos conociéramos de antes. 🤝" },
            { icon: "fa-star", title: "Momentos lindos", text: "Pequeños ratos que sin querer se vuelven de los que más recuerdo. ⭐" }
        ],
        lrc: `[00:12.69] Wow, qué linda tú estás 😳
[00:16.00] Yo solo te miro a ti 👀
[00:19.76] La combinación de tu boca 💋
[00:21.67] Con este tequila a las rocas 🥃
[00:24.13] Son mortal pa' mí ☄️
[00:27.07] Siento que ya estuve aquí una vez 🌀
[00:30.10] No sé si te pasa lo mismo a ti también 🤔💭
[00:33.77] Amores van, amores vienen, pero qué más da 🌊
[00:38.21] Si al final cada quien merece lo que da ⚖️
[00:42.18] Bajo las estrellas, la luna llena 🌙✨
[00:46.12] Tú eres mi calma en esta tempestad ⛈️🤍
[00:49.43] Hay caritas lindas que dejan huellas 👣
[00:53.44] Y la tuya no se puede borrar 🎨
[00:56.94] Cómo me gustas tú a mí, cómo me gustas tú a mí 🥰
[01:00.35] Quisiera hablarte de otro tema que con las palabras no puedo decir 🗣️💫
[01:04.06] ¿Por qué no nos vamos de aquí? Es más, ¿por qué no nos vamos a vivir 🏝️
[01:07.78] A una casita en la arena y nunca mudarnos de ahí, de ahí? 🏖️
[01:11.86] Contigo el mundo se siente en paz 🕊️
[01:25.54] Cosa Nuestra 🎼
[01:26.17] Ella baila sola 💃
[01:28.07] Y yo la veo 👁️
[01:29.72] Tú tienes un swing, tienes un piquete, tú tiene' un meneo 🌀✨
[01:33.32] Ponte peligrosa, que yo siempre me atrevo 😏
[01:36.77] Si jugamos el juego de quien se enamora, yo pierdo primero 🥇❤️
[01:40.02] Y vuelvo a caer (No) 🍂
[01:42.96] No me puedo contener (No) 🙈
[01:46.56] A tu carita de bandida 😼
[01:49.56] Y cómo me miras 👁️✨
[01:51.33] Me pones a delirar (Ey) 🌀
[01:53.22] Cositas a imaginar 💭
[01:54.66] Cúcame, mujer 🌴
[01:55.96] Ee-feh… mee… shee oh… n go-keh 🎶
[01:58.22] Yuba cuembe 🥁
[02:00.19] Pa' que lo baile usted 💃
[02:01.78] Es una locura amarte desde la primera vez ⚡❤️
[02:05.36] Durmiendo a mi lao te quiero to' las noches 🌙🛌
[02:08.90] Bajo las estrellas, la luna llena 🌙✨
[02:12.76] Tú eres mi calma en esta tempestad ⛈️🤍
[02:16.06] Hay caritas lindas que dejan huellas 👣
[02:20.08] Y la tuya no se puede borrar 🎨
[02:23.54] Cómo me gustas tú a mí, cómo me gustas tú a mí 🥰
[02:27.00] Quisiera hablarte de otro tema que con las palabras no puedo decir 🗣️💫
[02:30.65] ¿Por qué no nos vamos de aquí? Es más, ¿por qué no nos vamos a vivir 🏝️
[02:34.43] A una casita en la arena y nunca mudarnos de ahí, de ahí? 🏖️
[02:51.98] Ay, mi niña hermosa, yo vine a ver 🌧️
[02:55.60] Cómo corre la tormenta yo vine a ver ⛈️
[02:59.25] Ay, niñita linda, yo vine a ver 🌧️
[03:02.83] Cómo corre la tormenta yo vine a ver ⛈️
[03:06.52] Ahí viene la tormenta, yo vine a ver 🌊
[03:09.99] Con la niña hermosa la quiero ver 🤍
[03:13.51] Esas caras bonitas las vine a ver 😊
[03:17.19] Cómo corre la tormenta yo vine a ver ⛈️`
    },
    {
        id: "ensename-a-bailar",
        file: "music/3-ensename-a-bailar.mp3",
        title: "Enséñame a Bailar",
        artist: "Bad Bunny",
        accent: "234, 179, 8",
        theme: {
            name: "fiesta",
            bgIcon: "fa-bolt",
            pattern: "sparks",
            titleFont: "serif-font font-black uppercase tracking-tight",
            badgeIcon: "fa-music"
        },
        headerTitle: "Para quien la pasa increíble conmigo",
        headerSubtitle: "Capítulo 3 · Lo bien que la pasamos juntos",
        cardTitle: "Lo que más disfruto de nosotros 🎉",
        message: [
            "Sin tanta vuelta: contigo todo se siente más liviano, más divertido. No sé si es tu energía o que simplemente conectamos raro bien. 🎶",
            "Esa forma de entendernos que tenemos no hace falta planearla para que el rato se ponga bueno. Una conversación cualquiera termina en risas, y de ahí en algo que recuerdo todo el día. 😄",
            "No es forzado, fluye solo. Y eso, la verdad, no es tan común.",
            "Va dedicado a eso: los buenos ratos, las risas, y esa libertad que se siente cuando estoy contigo. 🎊"
        ],
        italicIndex: 2,
        details: [
            { icon: "fa-laugh-squint", title: "La diversión", text: "Contigo todo es más ligero y divertido. Nos reímos de todo. 😂" },
            { icon: "fa-handshake", title: "La complicidad", text: "No necesitamos planearlo, simplemente fluye y se siente natural. 🤝" },
            { icon: "fa-star-of-life", title: "La libertad", text: "Puedo ser yo mismo sin juzgamientos, solo disfrutando del momento. ✨" }
        ],
        lrc: `[00:02.42] Yeh, yeh, yeh, yeh, yeh, yeh, yeh 🎤
[00:05.89] Eh, eh, eh, eh-eh, eh-eh 🎶
[00:09.32] Eh, tú y yo 🫵
[00:11.00] Yo y tú 🫱
[00:11.84] Nos llevamos bien 🤝✨
[00:18.96] Tú y yo 🫵
[00:20.01] Yo y tú 🫱
[00:20.96] Nos llevamos bien 🤝✨
[00:23.66] ¿Qué lo que? 👀
[00:24.69] Dame luz 💡
[00:25.57] Yo sigo tus pies 👣
[00:28.19] A donde vaya' te sigue la luna 🌙
[00:32.70] Tú eres mi gyal, como tú ninguna 💃👑
[00:36.82] Ey 🗣️
[00:37.42] La noche está buena 🌃
[00:38.63] Que rico se pasa en Quisqueya 🏝️
[00:40.63] Eh, eh 🎶
[00:41.76] Mi corazón no es de arena 🏖️❤️
[00:43.19] Pero tú estas dejando tus huellas 👣✨
[00:45.36] Eh, eh 🎶
[00:46.41] Cada vez que me miras 👁️
[00:47.87] Sin parar de mover las caderas 💃
[00:49.85] Eh, eh 🎶
[00:51.00] Esto aquí no termina ♾️
[00:52.32] Nos fuimos rulin la noche entera 🌙🪩
[00:54.64] Eh, eh 🎶
[00:55.59] Y enséñame a bailar 💃🕺
[00:57.69] Mami, yo no sé 🤷
[01:00.14] Pero ya 'toy borracho 🥴
[01:02.63] Y son las 3 🕒
[01:04.80] Yo quiero ver contigo el amanecer 🌅
[01:08.98] Tú y yo solito' y el sol ☀️
[01:11.17] Tú y yo solito' y el sol ☀️
[01:13.82] Si me dejas te hago 😏
[01:15.35] Todo lo que a ti te gusta 💛
[01:17.96] Ey, rompe to' que yo pago 💸
[01:19.95] Esa vaina no me asusta 😎
[01:23.03] Si tú te tardas te beso primero 😘
[01:27.72] Pórtate mala, dale, ponte cuero 🔥
[01:31.34] Que nadie se va enterar 🤫
[01:33.08] No, no 🙅
[01:33.99] No pares de bailar 💃
[01:35.30] Eh, eh 🎶
[01:36.16] Nadie le va llegar 🚫
[01:37.52] A lo de nosotros 🤍
[01:38.71] Esto es más allá 🌌
[01:40.11] Eh, eh 🎶
[01:41.30] Si tú te tardas, te beso primero 😘
[01:45.86] Pórtate mala, dale, ponte cuero 🔥
[01:50.41] Y enséñame a bailar 💃🕺
[01:52.50] Mami, yo no sé 🤷
[01:54.90] Pero ya 'toy borracho 🥴
[01:57.52] Y son las 3 🕒
[01:59.61] Yo quiero ver contigo el amanecer 🌅
[02:03.78] Tú y yo solito' y el sol ☀️
[02:05.85] Tú y yo solito' y el sol ☀️
[02:08.67] Y enséñame a bailar 💃🕺
[02:10.74] Mami, yo no sé 🤷
[02:13.26] Pero ya 'toy borracho 🥴
[02:15.84] Y son las 3 🕒
[02:17.86] Yo quiero ver contigo el amanecer 🌅
[02:22.06] Tú y yo solito' y el sol ☀️
[02:24.20] Tú y yo solito' y el sol ☀️`
    },
    {
        id: "cuando-me-acerco",
        file: "music/4-cuando-me-acerco.mp3",
        title: "Cuando Me Acerco A Ti",
        artist: "Danny Ocean",
        accent: "251, 146, 60",
        theme: { name: "cercanía", bgIcon: "fa-wave-square", pattern: "ripples", titleFont: "serif-font italic", badgeIcon: "fa-heart-pulse" },
        headerTitle: "Para quien me altera el pulso sin hacer nada",
        headerSubtitle: "Capítulo 4 · Lo que pasa cuando me acerco a ti",
        cardTitle: "Algo que mi corazón hace sin que yo lo decida 💓",
        message: [
            "Hay algo que fui notando de a poco: cada vez que estás cerca, algo cambia. No son nervios raros, es más tranquilo que eso, como si todo lo demás dejara de importar un rato. 🌊",
            "No sé bien cuándo empezó, pero es bastante obvio. Y quería que lo supieras, aunque sea así, medio de costado.",
            "Danny Ocean lo explica mejor que yo, así que dejé que la canción hablara por mí. 💫",
            "Mi corazón suena distinto cuando me acerco a ti. Ya está, lo dije. 🧡"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-heart-pulse", title: "Mi pulso", text: "Cambia apenas aparecés. No lo controlo y ya ni intento. 💓" },
            { icon: "fa-eye", title: "Cómo te miro", text: "Con ganas de quedarme así, sin que se acabe el momento. 👁️" },
            { icon: "fa-hand-holding-heart", title: "Lo evidente", text: "Que después de todo lo que hemos pasado, era inevitable. 🌊" }
        ],
        lrc: `[00:05.12] Babylon, Babylon, Babylon 🌃
[00:09.80] Yeah, yeah 🎶
[00:14.61] Cuando me acerco, cuando me acerco, cuando me acerco a ti 💓
[00:22.43] Es evidente que 💫
[00:25.44] Que después de todo 🌊
[00:28.66] De todo lo que hemos pasado ✨
[00:30.36] Iba a terminar enamorándome 🥺
[00:33.31] Es evidente 💫
[00:36.18] Que al conocer tus ojos 👁️
[00:39.19] Me dejaría desarmado, anhelándote 🌊
[00:43.19] De tenerte aquí 🤍
[00:45.60] Cerquitica 'e mí 🥺
[00:49.71] Arrepintiéndome de haber cometido el peor crimen 💔
[00:53.79] De haberte besado 💋
[00:56.67] Y no haberte halagado 🌹
[00:59.68] Desde el primer momento en que te vi 👀
[01:04.94] Oh-uh, mi corazón 💓
[01:07.45] Oh-uh, me suena así 🎶
[01:09.45] Oh, cuando me acerco a ti 🌊
[01:15.76] Oh-uh, mi corazón 💓
[01:17.64] Oh-uh, me suena así 🎶
[01:20.64] Oh, cuando me acerco a ti 🌊
[01:23.26] Dame un momentico, baby ⏰
[01:25.88] Uno chiquitico, lady 🥺
[01:28.73] Acércate poquito 👉👈
[01:31.12] Que a tu boquita explico 💋
[01:33.81] Y entiende, entiende 🌊
[01:35.72] Que tú solo no eres ganas ✨
[01:38.09] Tú eres el deseo que emprende 💫
[01:41.10] En el amanecer en mi cama, chama 🌅
[01:47.19] Oh-uh, mi corazón 💓
[01:49.71] Oh, me suena así 🎶
[01:52.38] Oh, cuando me acerco a ti 🌊
[01:57.24] Oh-uh, mi corazón 💓
[01:59.82] Oh, me suena así 🎶
[02:02.07] Oh, cuando me acerco a ti 🌊
[02:05.08] Mi corazón-zón 💓
[02:08.00] Oh-uh, mi corazón 🎵
[02:10.41] Oh, me suena así 🎶
[02:12.89] Oh, cuando me acerco a ti 🌊
[02:27.48] Es evidente que 💫
[02:30.48] Que después de todo 🌊
[02:33.49] De todo lo que hemos pasado ✨
[02:35.49] Iba a terminar enamorándome 🥺
[02:38.50] Enamorándome de ti ❤️
[02:43.51] Iba a terminar enamorándome 💫
[02:51.26] Cuando me acerco 🌊
[02:53.26] Cuando me acerco 🌊
[02:54.27] Cuando me acerco a ti 💓
[02:59.77] Oh-uh, mi corazón 💓
[03:02.34] Oh, me suena así 🎶
[03:05.12] Oh, cuando me acerco a ti 💓🌊`
    },
    {
        id: "cosas-que-no-te-dije",
        file: "music/5-cosas-que-no-te-dije.mp3",
        title: "COSAS QUE NO TE DIJE",
        artist: "SAIKO",
        accent: "45, 212, 191",
        theme: { name: "confesión", bgIcon: "fa-lightbulb", pattern: "fireflies", titleFont: "handwritten-font", badgeIcon: "fa-comment-dots" },
        headerTitle: "Para quien guarda cosas que no sabe cómo decir",
        headerSubtitle: "Capítulo 5 · Todo lo que me quedé callado",
        cardTitle: "Hay cosas que no te dije aquella noche 🤍",
        message: [
            "Siempre quedan cosas a mitad de camino. Cosas que pensás mil veces y que, cuando llega el momento, no salen. Este capítulo es justo eso. 💭",
            "Hay una que vengo postergando hace rato, y ni sé bien por qué. Capaz vos ya la sospechás.",
            "En mi cabeza hay un lugar que quedó reservado sin que yo lo decidiera del todo. Y ya sabés quién lo ocupa. 🎯",
            "Acá está, al fin, todo lo que me guardé. Ya era hora. 🤍✨"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-comment-dots", title: "Lo que callé", text: "Cosas que pensé mil veces y nunca encontré cómo decirte. 💭" },
            { icon: "fa-chess-queen", title: "Lo que entendí", text: "Que en mi tablero siempre te faltabas vos. ♛" },
            { icon: "fa-lock-open", title: "Ahora sí", text: "Ya no me guardo nada. Todo lo que no te dije, está acá. 🗝️" }
        ],
        lrc: `[00:01.71] Yeah, yeah 🎤
[00:08.50] Oye, dime, Saiko 🎵
[00:13.27] Dime si te gustaría 💭
[00:18.46] Vamos a escribir nuestras iniciales juntas ✍️
[00:22.42] La verdad es que tú me gustas 🥺
[00:24.77] En invierno y en verano 🌸❄️
[00:27.13] Y si te hago la pregunta 💬
[00:29.00] El horóscopo dice que somos compatibles ⭐
[00:32.58] Y eso que yo no creía, pero habrá que hacerle caso 😏
[00:35.94] Y yo te aviso como subas otra foto en la playa te caso 🏖️
[00:40.45] Mami dime si te gusto solo por si acaso 🥺
[00:45.10] Que de tanto perder le perdí el miedo al fracaso 💪
[00:50.06] Estoy pensando si decirte que me gustas tanto 💭
[00:54.27] Que me gustas tanto 🥺
[00:56.92] Que yo te quiero dormida en la cama con mi hoodie 🛌🧥
[01:01.64] Dime si te gustaría, quiero ser todos tus hobbies mami 🎯
[01:08.00] Solo una cosa te pediría, que si te doy mi corazón ❤️
[01:12.82] Me lo cuides todos los días 🙏
[01:16.10] Necesito algo que no sea temporal ♾️
[01:19.18] Alguien para presumir cuando te lleve a comer con mi familia en Navidad 🎄
[01:24.40] No sé si me entiendes 👀
[01:25.91] Que yo sé que tienes más pretendientes 🚶
[01:28.37] Pero no tienen nada que ofrecerte 💫
[01:30.68] Quizá alguno te compre ropa de marca 👗
[01:32.65] Pero tú prefieres ponerte la mía por suerte 🧥✨
[01:35.31] Y cada vez que coinciden las miradas pienso en si tú sientes lo mismo 👁️
[01:41.67] Pero tampoco me dices nada 🤫
[01:44.22] Y cuando te vas 🚶
[01:48.10] Siempre me giro por si esta vez me decido 🔄
[01:54.54] Que yo te quiero dormida en la cama con mi hoodie 🛌🧥
[01:59.23] Dime si te gustaría, quiero ser todos tus hobbies mami 🎯
[02:05.57] Solo una cosa te pediría, que si te doy mi corazón ❤️
[02:10.37] Me lo cuides todos los días 🙏
[02:14.30] Solo imagina 💭
[02:16.58] Mami dime si te gusto para ser tú y yo 🫵
[02:21.57] Tú y yo y nadie más 🤍
[02:23.82] Hay cosas que no te dije aquella noche 🌙
[02:30.12] Pero creo que en mi tablero falta reina ♛
[02:34.44] No tengo castillo, pero puedes quedarte en mi casa cuando quieras 🏠
[02:38.05] Solo júrame que tú no serás pasajera 🙏
[02:40.73] Y antes de que te fueras ✨
[02:42.16] Te dije: "tú solo confía" 🤝
[02:45.11] Yo también tengo miedo 🥺
[02:47.38] De estrellarme si acelero ⚡
[02:49.78] Pero contigo no freno 💨
[02:52.08] Que yo te quiero dormida en la cama con mi hoodie 🛌🧥
[02:56.90] Dime si te gustaría, quiero ser todos tus hobbies mami 🎯
[03:03.08] Solo una cosa te pediría, que si te doy mi corazón ❤️
[03:07.90] Me lo cuides todos los días 🙏
[03:12.05] Bebé, bebé 💕
[03:13.68] Es que las palabras no vienen easy, pa' ti 💭
[03:20.28] Quiero saber si tú piensas en mí 🥺
[03:28.29] ¿Cómo te hago ver que esto no es easy pa' mí? 💔`
    },
    {
        id: "love-you-forever",
        file: "music/6-love-you-forever.mp3",
        title: "Love You Forever",
        artist: "Sebastián Yatra",
        accent: "234, 179, 8",
        theme: { name: "eternidad", bgIcon: "fa-infinity", pattern: "stars", titleFont: "serif-font italic", badgeIcon: "fa-infinity" },
        headerTitle: "Para quien imagino en todo lo que viene",
        headerSubtitle: "Capítulo 6 · Lo que siento cuando pienso en el futuro",
        cardTitle: "Creo que sos todo lo que había soñado ✨",
        message: [
            "Si llegaste hasta acá, ya escuchaste seis canciones seguidas conmigo. Eso ya dice bastante, la verdad. 🌟",
            "No tengo mucho más que agregar, honestamente. Solo quería que supieras que pienso en esto más de lo que aparento.",
            "Yatra lo resume mejor de lo que yo podría explicarlo con mis propias palabras. ⭐",
            "Gracias por leer, por escuchar, por bancarte este quilombo de capítulos. Significa más de lo que te imaginás. 💛"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-star", title: "Lo que siento", text: "Certeza. Y eso es algo que no había sentido antes. ⭐" },
            { icon: "fa-infinity", title: "Para siempre", text: "No sé si existe, pero contigo me animaría a intentarlo. ♾️" },
            { icon: "fa-heart", title: "El resumen", text: "Solo te quiero a ti y a nadie más. Simple como eso. 💛" }
        ],
        lrc: `[00:04.06] Solo te quiero a ti y a nadie más 🌟
[00:09.77] Solo te quiero a ti y a nadie más 💛
[00:12.23] Creo que eres todo lo que había soñado 🌙✨
[00:17.26] A tu lado no necesito a nadie más 🤍
[00:24.63] Le agradezco a Dios por haberte encontrado 🙏
[00:28.45] Me he enamorado de una bella persona 💛
[00:31.81] De alguien especial ✨
[00:34.31] Por ti yo conocí el amor ❤️
[00:37.11] Tú me lo has enseñado 💫
[00:42.93] Que los sueños se hacen realidad ⭐
[00:46.89] Eres como el aire que respiro 🌬️
[00:49.77] Eres como el sol que me ilumina ☀️
[00:51.15] A cada despertar 🌅
[00:52.31] De mi corazón, cada latido 💓
[00:55.54] Pareces mentira y eres realidad 💫
[00:58.56] Yo creo que tú eres de otro planeta 🪐
[01:01.59] Donde consigo todo lo que tú me das 🌟
[01:04.81] Dime si también sientes lo mismo 💭
[01:06.60] Quédate conmigo 🙏
[01:07.67] Estaremos juntos una eternidad ♾️
[01:10.64] 'Cause baby, I love you forever 💛
[01:13.79] Love you forever ⭐
[01:16.44] Love you forever ✨
[01:18.20] Quédate conmigo 🙏
[01:19.67] Estaremos juntos una eternidad ♾️
[01:22.39] Solo te quiero a ti y a nadie más 💛
[01:36.63] Solo te quiero a ti y a nadie más 🤍
[01:39.60] Solo te quiero a ti y a nadie más ❤️
[01:45.45] A nadie más, a nadie más ✨
[01:58.26] Por ti yo conocí el amor ❤️
[02:03.97] Me has demostrado 🌟
[02:06.70] Que los sueños se hacen realidad ⭐
[02:10.70] Eres como el aire que respiro 🌬️
[02:13.78] Eres como el sol que me ilumina ☀️
[02:16.75] De mi corazón, cada latido 💓
[02:19.84] Pareces mentira y eres realidad 💫
[02:22.65] Yo creo que tú eres de otro planeta 🪐
[02:28.55] Dime si también sientes lo mismo 💭
[02:31.88] Estaremos juntos una eternidad ♾️
[02:34.63] 'Cause baby, I love you forever 💛
[02:37.33] Love you forever ⭐
[02:42.38] Quédate conmigo 🙏
[02:43.10] Estaremos juntos una eternidad ♾️
[02:46.49] Solo te quiero a ti y a nadie más 💛
[02:58.99] 'Cause girl, I wanna love you 💫
[03:01.09] Till the end of my days ♾️
[03:02.20] Si también quieres lo mismo, mi vida 🤍
[03:05.37] Tú eres mi reina 👑
[03:06.23] Por siempre de ti quiero ser el rey 🤴
[03:09.73] No existe el modo no way, no way 🚫
[03:15.69] Girl, I love you till the end of my day 💛♾️
[03:22.26] 'Cause baby, I love you forever 💛
[03:26.77] Love you forever ✨
[03:34.61] 'Cause baby, I love you forever 💛
[03:40.49] Love you forever ✨
[03:42.75] Quédate conmigo 🙏
[03:45.92] Solo te quiero a ti y a nadie más 💛
[03:54.88] Solo te quiero a ti y a nadie más 💛
[03:57.56] A nadie más, a nadie más ✨`
    },
    {
        id: "tus-vueltas",
        file: "music/7-tus-vueltas.mp3",
        title: "TUS VUELTAS + CARENCIAS DE CORDURA",
        artist: "Milo j, Santino Villarruel & Yami Safdie",
        accent: "192, 132, 252",
        theme: { name: "baile", bgIcon: "fa-music", pattern: "dance", titleFont: "handwritten-font", badgeIcon: "fa-rotate" },
        headerTitle: "Para quien me cautivó sin siquiera intentarlo",
        headerSubtitle: "Capítulo 7 · Lo que sentí cuando te vi bailar",
        cardTitle: "Tus vueltas cautivaban la mirada de unos cuantos 💫",
        message: [
            "Hay un momento exacto en el que algo cambió. No fue una charla profunda ni nada armado, fue simplemente verte siendo vos, y no poder mirar para otro lado. ❤️",
            "Capaz en ese momento era uno más ahí mirando. Pero bueno, ahí quedó guardado igual.",
            "Con el tiempo entendí algo: nadie es perfecto, ni vos ni yo, y eso, lejos de restar, suma. 🤍",
            "Este capítulo es para ese momento exacto. Para cuando te vi algo en mí ya sabía que iba a terminar escribiendo esto. 💜✨"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-rotate", title: "Tus vueltas", text: "Cautivaron la mirada de unos cuantos. Yo fui uno de ellos. 💫" },
            { icon: "fa-moon", title: "Tus carencias", text: "Son tus mismos defectos los que te hacen ser una ternura. 🌙" },
            { icon: "fa-pen-fancy", title: "Lo que escribí", text: "Un tema en mi mente que aún no termino. Este. 💜" }
        ],
        lrc: `[00:18.04] Te vi bailando 💃
[00:19.87] Raspando el cemento de la plaza de mi barrio 🏙️
[00:24.39] Tus vueltas cautivaban la mirada de unos cuantos 👀
[00:28.74] Tal vez yo era uno más, pero deseé que fueras mía 🥺
[00:33.79] Mientras escribía que... ✍️
[00:35.54] Quiero besarte en la cama, desnuda o con ropa 💋
[00:38.20] Y cantarte poesías de esas que me escribo para vos nomás 📝
[00:41.59] Y hacer el amor solo con vos 🤍
[00:44.78] Mirada penetrante, parece Medusa 👁️
[00:47.34] Movimiento' de morocha y cara de USA 💫
[00:49.58] No vi ni tu blusa por tu cara hermosa 🤩
[00:54.60] Y es que con vos sentí algo que no había sentido 💓
[00:57.21] En la noche, mis sueños son solo contigo 🌙
[00:59.37] En mi panza dejaste un lindo cosquilleo 🦋
[01:01.96] Y en mi mente un tema que aún no termino 🎵
[01:04.08] Solo te sería infiel con la luna, pero ni siquiera 🌙
[01:07.36] No tiene tu estilo ✨
[01:11.00] Te vi bailando 💃
[01:13.19] Raspando el cemento de la plaza de mi barrio 🏙️
[01:17.62] Tus vueltas cautivaban la mirada de unos cuantos 👀
[01:22.14] Tal vez yo era uno más, pero deseé que fueras mía 🥺
[01:27.05] Mientras escribía que... ✍️
[01:45.00] No sé quién más conoce lo que me pasa al ver tu caminar 🚶
[01:52.09] Tal vez el tiempo sepa qué siento 🕰️
[01:55.79] Cuando me hablás y me contás tu día 💬
[02:01.78] Mi alma me pidió que te ame cuando oía tu voz una vez más 🎵
[02:07.72] Contento, y sin aliento, miré hacia arriba 🌟
[02:12.90] Cuando se llenó la luna, vi tu rostro en una estrella 🌕⭐
[02:21.16] Y en cuanto comprendí lo bella que es, sentí yo no estar a la altura 🥺
[02:28.96] Con vos entendí que nadie es perfecto 🤍
[02:32.69] Por tus carencias de cordura 💫
[02:36.61] Pero es que son tus mismos defectos ✨
[02:40.35] Que te hacen ser una ternura 🥰
[02:47.00] Con vos nunca hubo nada que dudar 🤍
[02:50.71] Si mis miedos pesan menos que mi amor ⚖️
[02:53.81] Y las ganas que tengo de volverte a abrazar 🤗
[03:00.40] Y decirte que me muero por tenerte 💔
[03:04.47] Me cambiaste el mundo con una sonrisa 🌍✨
[03:08.04] De repente el sol ya no brilla tan fuerte ☀️
[03:11.95] Como esos dos ojitos que me hipnotizan 👁️✨
[03:15.87] Ay, qué delicia 🥰
[03:17.06] No aguanté las ganas de ver tus labios 💋
[03:20.95] Pa' conocernos nos bastaron dos miradas 👁️
[03:24.76] Pero esa noche conocí al diablo 😈
[03:28.51] El diablo reía, el diablo bailaba 💃
[03:33.18] Cuando se llenó la luna, vi tu rostro en una estrella 🌕⭐
[03:40.96] Y en cuanto comprendí lo bella que es, sentí yo no estar a la altura 🥺
[03:48.45] Con vos entendí que nadie es perfecto 🤍
[03:52.50] Por tus carencias de cordura 💫
[03:55.94] Pero es que son tus mismos defectos ✨
[03:59.87] Que te hacen ser una ternura 🥰
[04:22.50] Muchas gracias, Yami 🎤
[04:23.43] Feliz cumple, ami 🎂`
    },
    {
        id: "tokyo",
        file: "music/8-tokyo.mp3",
        title: "Tokyo",
        artist: "Jhayco",
        accent: "217, 70, 239",
        theme: {
            name: "deseo",
            bgIcon: "fa-city",
            pattern: "citylights",
            titleFont: "serif-font font-black uppercase tracking-tight",
            badgeIcon: "fa-city"
        },
        headerTitle: "Para quien no se me sale de la cabeza",
        headerSubtitle: "Capítulo 8 · Lo último que te quería contar",
        cardTitle: "Uno más antes de cerrar esto 🌃",
        message: [
            "Ok, uno más y ya. La agregué después, porque escuchándola me acordé de ti en loop bastante persistente. 🌃",
            "No sé explicarlo mejor: hay días en que se te ocurre aparecer en mi mente, sin invitación ni aviso previo. Simplemente pasa.",
            "No es nada dramático, es más simple que eso: de repente ando sonriendo solo mirando el celular como un tonto, sin razón aparente. 📱",
            "Esta canción quedó como cierre. 🎶🌃"
        ],
        italicIndex: 1,
        details: [
            { icon: "fa-city", title: "El loop", text: "Apareces en mi cabeza en momentos random, sin invitación previa. 🌃" },
            { icon: "fa-mobile-screen-button", title: "El teléfono", text: "De repente reviso el chat más veces de las que admito. 📱" },
            { icon: "fa-moon", title: "La noche", text: "Las canciones que más me hacen acordar de ti suenan de noche. 🌙" }
        ],
        // NOTA: no puedo transcribir la letra completa de "Tokyo" acá (derechos de autor
        // de terceros), aunque me la hayas pasado vos mismo. Pegá tu propio texto siguiendo
        // el mismo formato LRC de arriba: [mm:ss.cc] seguido de la línea correspondiente.
        // Dejo un placeholder mínimo para que el capítulo funcione mientras tanto.
        lrc: `[00:03.04]Con el corazón roto 💔
[00:06.30]Siempre que yo miro tu foto 🖼️
[00:11.04]Yo no te veo con otro 🚫
[00:14.69]Como un celular, me agoto 🔋🪫
[00:17.74]
[00:17.75]Porque yo me la paso pensando en ti 💭🫠
[00:22.34]De mi mente no quieres salir 🧠
[00:27.34]Si desde que yo te vi 👀
[00:31.27]Te pregunté 🗣️
[00:34.05]
[00:34.25]Dime si tú te enamoras de cora' ❤️‍🔥
[00:39.49]Yo pienso en ti, y si en verdad estás sola 🥺
[00:43.28]Yo voy por ahí, no me importa la hora 🚗💨
[00:47.98]Yo solo quiero hacerte mi señora 💍
[00:50.80]
[00:50.85]Dime si tú te enamoras de cora' ❤️‍🔥
[00:55.54]Yo pienso en ti, y si en verdad estás sola 🤔
[00:59.23]Yo voy por ahí, no me importa la hora 🕒
[01:03.32]Por mí que se joda, por mí que se joda 🤷‍♂️
[01:08.35]
[01:08.97]Que se joda, baby, tú eres mi amorfoda 🖤
[01:12.47]Dicen por ahí que estar soltera ya no está de moda 💃
[01:16.75]Baby, no me hagas como Cardi B le hizo al remix de "Toda" 🎶🪩
[01:20.30]Yo quiero un canto de ese bizcocho, aunque no llegue a la boda 🍰👰‍♀️
[01:24.10]
[01:24.11]Y, ¿qué hay de malo en amar? ¿Qué hay de malo en sentir? ❤️‍🩹
[01:28.44]¿Qué hay de malo, baby, en quererte buscar pa' podértelo hundir? 🔥😏
[01:32.56]¿En no ser como estos cabrones que solo lo quieren decir? 🗣️
[01:36.13]Yo siempre lo saco, pero si tú quieres, lo dejo y no' podemo' reproducir 🛑👶
[01:40.80]
[01:41.01]¿Qué carajo me hiciste? 🤷‍♂️🔮
[01:43.51]Yo lo enrolé, pero tú lo prendiste 🚬🔥
[01:47.53]Ya tú no sales, como el remix de "Triste" 🚫
[01:52.20]No lo coja' a chiste, y 😂
[01:54.23]
[01:54.24]Dime si tú te enamoras de cora' ❤️‍🔥
[01:59.55]Yo pienso en ti, y si en verdad estás sola 🤫
[02:03.26]Yo voy por ahí, no me importa la hora ⏰
[02:08.00]Yo solo quiero hacerte mi señora 👰
[02:10.80]
[02:10.81]Dime si tú te enamoras de cora' ❤️‍🔥
[02:15.55]Yo pienso en ti, y si en verdad estás sola 🥺
[02:19.23]Yo voy por ahí, no me importa la hora 🏎️
[02:23.27]Por mí que se joda, por mí que se joda 🤷‍♂️
[02:28.39]`
    }
];

// ============================================================
// VARIABLES GLOBALES
// ============================================================

let currentTrackIndex = 0;
let isPlaylistOpen = false;
const audio = document.getElementById("romanticAudio");
let lyricLines = [];
let currentLineIndex = -1;

audio.volume = 0.8;

// ============================================================
// MÚSICA DE LA CARTA FINAL (instrumental, sin letras, solo de fondo)
// ============================================================
// ✏️ Poné acá el archivo del instrumental que quieras usar de fondo cuando
// se abre la carta final. Tiene que ser un mp3 sin voz/lyrics, para que
// suene de fondo sin distraer de la lectura. Colocá el archivo en la
// carpeta /music con este mismo nombre (o cambiá la ruta de abajo).
const LETTER_MUSIC_FILE = "music/9-carta-final.mp3";
const LETTER_MUSIC_VOLUME = 0.45; // volumen bajo, solo de ambiente
const letterAudio = document.getElementById("letterAudio");
letterAudio.volume = 0;

function fadeAudio(el, targetVolume, durationMs = 1200) {
    const startVolume = el.volume;
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min(1, (now - startTime) / durationMs);
        el.volume = startVolume + (targetVolume - startVolume) * progress;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else if (targetVolume === 0) {
            el.pause();
        }
    }
    requestAnimationFrame(step);
}

function playLetterMusic() {
    // Baja suavemente la música del capítulo y arranca el instrumental de la carta.
    fadeAudio(audio, 0, 900);

    letterAudio.src = LETTER_MUSIC_FILE;
    letterAudio.currentTime = 0;
    letterAudio.volume = 0;
    letterAudio.play().then(() => {
        fadeAudio(letterAudio, LETTER_MUSIC_VOLUME, 1400);
    }).catch(() => {
        // Si el navegador bloquea el autoplay, no pasa nada: la carta
        // sigue funcionando igual, solo sin música de fondo.
    });
}

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================

function parseLRC(lrcText) {
    const lines = lrcText.split('\n');
    const parsedLyrics = [];
    const timeReg = /\[(\d+):(\d+)(?:\.(\d+))?\]/g;

    for (let line of lines) {
        const matches = [...line.matchAll(timeReg)];
        if (matches.length === 0) continue;
        const text = line.replace(timeReg, '').trim();
        for (let match of matches) {
            const min = parseInt(match[1]);
            const sec = parseInt(match[2]);
            const ms = match[3] ? parseInt(match[3].padEnd(3, '0').substring(0, 3)) : 0;
            const time = min * 60 + sec + ms / 1000;
            parsedLyrics.push({ time, text });
        }
    }
    return parsedLyrics.sort((a, b) => a.time - b.time);
}

// Mueve SOLO el scroll interno del cuadro de letras hasta la línea activa,
// sin tocar el scroll de la página (así se puede seguir leyendo el mensaje
// de arriba sin que la pantalla "baje sola" cada vez que cambia la letra).
function scrollLyricIntoView(line) {
    const container = document.getElementById("lyricsContainer");
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();

    // Distancia entre el centro de la línea y el centro del contenedor,
    // calculada sobre el viewport (independiente del offsetParent).
    const delta = (lineRect.top + lineRect.height / 2) - (containerRect.top + containerRect.height / 2);

    container.scrollBy({ top: delta, behavior: "smooth" });
}

function renderLyrics(lyrics) {
    const container = document.getElementById("lyricsContainer");
    container.innerHTML = "";
    
    lyrics.forEach((lyric, index) => {
        const line = document.createElement("div");
        line.className = "lyric-line";
        line.textContent = lyric.text || " ";
        line.dataset.index = index;
        container.appendChild(line);
    });
}

function loadTrack(index, autoplay = true) {
    if (index < 0) index = TRACKS.length - 1;
    if (index >= TRACKS.length) index = 0;
    currentTrackIndex = index;

    const track = TRACKS[index];
    
    audio.pause();
    audio.src = track.file;
    audio.currentTime = 0;
    document.getElementById("progressFill").style.width = "0%";
    document.getElementById("currentTime").innerText = "0:00";
    document.getElementById("durationTime").innerText = "0:00";
    document.getElementById("musicTimer").innerText = "00:00";

    document.getElementById("trackTitle").innerText = track.title;
    document.getElementById("trackArtist").innerText = track.artist;

    applyAccentColor(track.accent);
    updateContent(track);

    lyricLines = parseLRC(track.lrc || "");
    currentLineIndex = -1;
    renderLyrics(lyricLines);

    renderPlaylist();
    renderTrackDots();

    const icon = document.getElementById("playPauseBtn").querySelector("i");
    const disc = document.getElementById("musicDiscIcon");
    if (autoplay) {
        audio.play().then(() => {
            icon.className = "fa-solid fa-pause text-lg";
            disc.style.animationPlayState = "running";
        }).catch(() => {
            icon.className = "fa-solid fa-play text-lg ml-1";
            disc.style.animationPlayState = "paused";
        });
    } else {
        icon.className = "fa-solid fa-play text-lg ml-1";
        disc.style.animationPlayState = "paused";
    }
}

function updateContent(track) {
    const headerTitle = document.getElementById("headerTitle");
    const headerSubtitle = document.getElementById("headerSubtitle");
    const cardTitle = document.getElementById("cardTitle");
    const cardMessage = document.getElementById("cardMessage");
    const detailCards = document.getElementById("detailCards");
    const chapterBadge = document.getElementById("chapterBadge");
    const chapterBadgeIcon = document.getElementById("chapterBadgeIcon");
    const chapterBgIcon = document.getElementById("chapterBgIcon");

    const fadeTargets = [headerTitle, headerSubtitle, cardTitle, cardMessage, detailCards, chapterBadge];
    fadeTargets.forEach(el => el.classList.add("fade-out"));
    chapterBgIcon.style.opacity = "0";

    setTimeout(() => {
        const theme = track.theme || {};
        const rgb = track.accent;

        headerTitle.className = `${theme.titleFont || 'handwritten-font'} text-5xl md:text-7xl mb-2 fade-content`;
        headerTitle.style.color = `rgb(${rgb})`;
        headerTitle.innerText = track.headerTitle;

        headerSubtitle.innerText = track.headerSubtitle;
        cardTitle.querySelector("span").innerText = track.cardTitle;

        if (theme.badgeIcon) {
            chapterBadgeIcon.className = `fa-solid ${theme.badgeIcon} text-xl`;
            chapterBadgeIcon.style.color = `rgb(${rgb})`;
            chapterBadge.style.background = `rgba(${rgb}, 0.1)`;
            chapterBadge.style.borderColor = `rgba(${rgb}, 0.3)`;
        }

        if (theme.bgIcon) {
            chapterBgIcon.className = `fa-solid ${theme.bgIcon} fixed pointer-events-none select-none`;
            chapterBgIcon.style.color = `rgba(${rgb}, 0.04)`;
        }

        cardMessage.innerHTML = "";
        track.message.forEach((paragraph, i) => {
            const p = document.createElement("p");
            if (i === track.italicIndex) {
                p.className = "serif-font font-medium italic";
                p.style.color = `rgb(${rgb})`;
            }
            p.innerText = paragraph;
            cardMessage.appendChild(p);
        });

        detailCards.innerHTML = "";
        track.details.forEach(detail => {
            const card = document.createElement("div");
            card.className = "glass-card p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 text-center group";
            card.onmouseenter = () => { card.style.background = `rgba(${rgb}, 0.1)`; };
            card.onmouseleave = () => { card.style.background = ''; };
            card.innerHTML = `
                <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border group-hover:scale-110 transition-transform" style="background: rgba(${rgb}, 0.1); border-color: rgba(${rgb}, 0.2);">
                    <i class="fa-solid ${detail.icon} text-xl" style="color: rgb(${rgb});"></i>
                </div>
                <h4 class="font-semibold text-rose-200 mb-1 text-sm">${detail.title}</h4>
                <p class="text-xs text-rose-100/60 leading-relaxed">${detail.text}</p>
            `;
            detailCards.appendChild(card);
        });

        setupInteraction(currentTrackIndex);

        fadeTargets.forEach(el => el.classList.remove("fade-out"));
        chapterBgIcon.style.opacity = "1";
    }, 250);
}

function applyAccentColor(rgb) {
    document.documentElement.style.setProperty('--accent-rgb', rgb);
    document.body.style.setProperty('--tw-accent', rgb);

    document.querySelectorAll(".glass-card-glow").forEach(el => {
        el.style.boxShadow = `0 0 25px rgba(${rgb}, 0.25)`;
    });

    document.getElementById("chapterBadge").style.borderColor = `rgba(${rgb}, 0.3)`;
    document.getElementById("chapterBadge").style.background = `rgba(${rgb}, 0.1)`;
}

function renderTrackDots() {
    const container = document.getElementById("trackDots");
    container.innerHTML = "";
    TRACKS.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "w-2 h-2 rounded-full transition-all cursor-pointer";
        dot.style.background = index === currentTrackIndex ? "rgb(244, 63, 94)" : "rgba(244, 63, 94, 0.3)";
        dot.onclick = () => loadTrack(index, true);
        container.appendChild(dot);
    });
}

function renderPlaylist() {
    const container = document.getElementById("playlistItems");
    container.innerHTML = "";
    TRACKS.forEach((track, index) => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        if (index === currentTrackIndex) item.classList.add("active-track");
        item.innerHTML = `
            <div class="text-sm font-semibold text-rose-200">${track.title}</div>
            <div class="text-xs text-rose-100/60">${track.artist}</div>
        `;
        item.onclick = () => {
            loadTrack(index, true);
            togglePlaylist();
        };
        container.appendChild(item);
    });
}

function togglePlaylist() {
    const panel = document.getElementById("playlistPanel");
    isPlaylistOpen = !isPlaylistOpen;
    if (isPlaylistOpen) {
        panel.classList.remove("hidden-panel");
    } else {
        panel.classList.add("hidden-panel");
    }
}

function togglePlay() {
    const icon = document.getElementById("playPauseBtn").querySelector("i");
    const disc = document.getElementById("musicDiscIcon");
    
    if (audio.paused) {
        audio.play();
        icon.className = "fa-solid fa-pause text-lg";
        disc.style.animationPlayState = "running";
    } else {
        audio.pause();
        icon.className = "fa-solid fa-play text-lg ml-1";
        disc.style.animationPlayState = "paused";
    }
}

function increaseVolume() {
    audio.volume = Math.min(1, audio.volume + 0.1);
    updateVolumeLabel();
}

function decreaseVolume() {
    audio.volume = Math.max(0, audio.volume - 0.1);
    updateVolumeLabel();
}

function updateVolumeLabel() {
    const percent = Math.round(audio.volume * 100);
    document.getElementById("volumeLabel").textContent = percent + "%";
}

function seekTrack(event) {
    const rect = document.getElementById("progressBar").getBoundingClientRect();
    const clickPosition = (event.clientX - rect.left) / rect.width;
    audio.currentTime = clickPosition * audio.duration;
}

function nextTrack() {
    loadTrack(currentTrackIndex + 1, true);
}

function prevTrack() {
    loadTrack(currentTrackIndex - 1, true);
}

function startRomanticExperience() {
    const lobby = document.getElementById("welcomeLobby");
    const main = document.getElementById("mainExperience");

    lobby.classList.add("opacity-0", "pointer-events-none");
    main.classList.remove("pointer-events-none");
    main.classList.add("opacity-100");

    loadTrack(0, true);
}

// ============================================================
// EVENT LISTENERS
// ============================================================

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration || 0;

    if (duration) {
        const percent = (currentTime / duration) * 100;
        document.getElementById("progressFill").style.width = percent + "%";
    }

    document.getElementById("currentTime").innerText = formatTime(currentTime);
    document.getElementById("musicTimer").innerText = formatTime(currentTime);

    if (lyricLines.length > 0) {
        let newLineIndex = -1;
        for (let i = 0; i < lyricLines.length; i++) {
            if (currentTime >= lyricLines[i].time) {
                newLineIndex = i;
            } else {
                break;
            }
        }

        if (newLineIndex !== currentLineIndex) {
            const allLines = document.querySelectorAll(".lyric-line");
            allLines.forEach((line, index) => {
                line.classList.remove("active", "pop-in");
                if (index === newLineIndex) {
                    line.classList.add("active", "pop-in");
                    scrollLyricIntoView(line);
                }
            });
            currentLineIndex = newLineIndex;
        }
    }
});

audio.addEventListener("loadedmetadata", () => {
    document.getElementById("durationTime").innerText = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
    if (currentTrackIndex === TRACKS.length - 1) {
        showFinalCta();
    } else {
        nextTrack();
    }
});

// ============================================================
// PANTALLA FINAL: botón + carta con candado
// ============================================================

function showFinalCta() {
    document.getElementById("finalCtaScreen").classList.remove("hidden");
}

function openLetterScreen() {
    document.getElementById("finalCtaScreen").classList.add("hidden");
    document.getElementById("letterScreen").classList.remove("hidden");
    playLetterMusic();
}

function unlockLetter() {
    const key = document.getElementById("keyDraggable");
    if (key.classList.contains("key-used")) return;
    key.classList.add("key-used");
    key.classList.remove("key-idle");
    key.classList.add("key-turning");

    const padlockIcon = document.getElementById("padlockIcon");
    const padlockGlyph = document.getElementById("padlockIconGlyph");

    setTimeout(() => {
        padlockIcon.classList.add("lock-shake");
    }, 350);

    setTimeout(() => {
        padlockIcon.classList.remove("lock-shake");
        padlockGlyph.className = "fa-solid fa-lock-open text-3xl text-rose-300";
        padlockIcon.classList.add("unlock-pop");

        const rect = padlockIcon.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const accent = TRACKS[currentTrackIndex].accent;
        triggerInteraction(cx, cy, "sparks");
        triggerBackgroundInteraction("sparks", accent);
    }, 650);

    setTimeout(() => {
        document.getElementById("lockedEnvelope").classList.add("letter-fade-out");
    }, 1250);

    setTimeout(() => {
        document.getElementById("lockedEnvelope").classList.add("hidden");
        const openLetter = document.getElementById("openLetter");
        openLetter.classList.remove("hidden");
        openLetter.classList.add("letter-reveal");
        const letterWrap = document.querySelector(".letter-wrap");
        if (letterWrap) letterWrap.classList.add("letter-wrap-expanded");
    }, 1850);
}

function initFinalLetter() {
    const key = document.getElementById("keyDraggable");
    if (key) key.addEventListener("click", unlockLetter);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================================
// INICIALIZACIÓN
// ============================================================

initParticleSystem();
initInteractionButton();
initFinalLetter();
updateVolumeLabel();