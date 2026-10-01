# Cambios aplicados (fusión v2 + v3)

## 🔘 Botón de interacción (antes: "clic en el fondo", roto)
El canvas de fondo tenía `pointer-events: none`, así que el clic que pedía
"haz clic en el fondo para activar la constelación" **nunca podía
funcionar** (el clic pasaba de largo). Ahora hay un botón circular real
en la tarjeta de interacción (icono y color cambian según la canción).
Al presionarlo se dispara la animación correspondiente:
- ❤️ Capítulo 1: mantenlo presionado y el corazón late más rápido.
- 🌸 Capítulo 2: crecen flores.
- ✨ Capítulo 3: fuegos artificiales.
- ⭐ Capítulo 4: constelación de estrellas.

## ✨ Partículas de fondo persistentes
En la v3 "mejorada" las partículas de fondo tenían una vida (`life`/`decay`)
que las apagaba en 1-3 segundos y no se reponían, así que el fondo se
quedaba vacío poco después de cargar. Ahora se reciclan igual que en la v2:
flotan, salen de pantalla y vuelven a aparecer, sin desaparecer nunca.

## 🎤 Letras completas
La v3 tenía las letras sincronizadas notablemente recortadas frente a la
v2 (menos de la mitad de líneas en algunas canciones). Se restauraron las
letras completas de la v2 en las 4 canciones, conservando los rellenos
temáticos que la v3 ya tenía bien hechos donde correspondía.

## 🔡 Letra cortada al activarse la línea
La línea activa usa `transform: scale(1.05)` dentro de una tarjeta con
`backdrop-filter` (efecto vidrio). Sin espacio de respiro alrededor, el
borde superior de las letras (sobre todo mayúsculas) podía recortarse
visualmente. Se agregó padding al contenedor de letras y se promovieron
los elementos animados a su propia capa de composición
(`will-change`, `transform: translateZ(0)`) para evitar el recorte.

## 📋 Panel de playlist
Quedaba metido en el flujo normal del documento en vez de flotar como
overlay (como en la v2). Se corrigió su posicionamiento.

---

# Segunda ronda de cambios

## ✍️ Ortografía
Se corrigieron errores de tipeo en los mensajes (ej. "queríero" → "quiero",
acentos faltantes en "única", "mía", etc).

## ⭐ Constelación arreglada
El bug real: el capítulo 6 (Love You Forever) tenía `pattern: "shooting"`,
un valor que no existe en ningún lado del código. La animación de
constelación (`ConstellationAnim`) ya estaba completamente programada —
elige al azar entre Osa Mayor, Orión, Cruz del Sur, Casiopea, o un corazón,
dibuja los puntos uno por uno como si se conectaran solos, y los deja
titilando un rato antes de desvanecerse — pero nunca se disparaba porque el
patrón no coincidía con `"stars"`. Se corrigió el nombre y ahora cada click
muestra una constelación distinta.

## 💡 Notas flotantes → Luciérnagas
El capítulo 5 (Cosas Que No Te Dije) cambió su interacción de "notas
musicales" a un enjambre de luciérnagas cálidas que titilan y suben en
espiral suave por la pantalla.

## 🌃 Nuevo capítulo: Tokyo (Jhayco)
Se agregó como capítulo 8, con una interacción nueva ("Luces de Tokio"):
círculos bokeh suaves que suben lento como un skyline nocturno desenfocado.
**Falta el archivo de audio** `music/8-tokyo.mp3` (no vino en el zip
original) y **falta la letra sincronizada real**: no puedo transcribir
letras de canciones con derechos de autor de terceros, así que el LRC de
este capítulo quedó con un placeholder — hay que completarlo a mano
siguiendo el mismo formato `[mm:ss.cc] texto` que usan los otros capítulos.

## 💬 Mensajes reescritos
Todos los mensajes de los 7 capítulos originales se reescribieron con un
tono más cálido y natural (menos "carta formal", más como se habla en
realidad), sin repetir frases entre canciones y sin declaraciones directas
tipo "me gustás" — la idea es que se insinúe, no que se diga en el texto.
