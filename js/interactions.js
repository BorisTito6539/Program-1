const INTERACTION_CONFIG = {
    hearts:   { title: "Sintonizador de Latidos ❤️",    desc: "Mantén presionado el corazón para sentir cómo se acelera mi pulso.", icon: "fa-heart" },
    flowers:  { title: "Flores Crecientes 🌸",           desc: "Presiona para ver florecer algo lindo.",                              icon: "fa-spa" },
    sparks:   { title: "Celebración Luminosa ✨",        desc: "Presiona para encender los fuegos artificiales.",                     icon: "fa-bolt" },
    stars:    { title: "Constelación Mágica ⭐",         desc: "Presiona para dibujar una constelación en el cielo.",                icon: "fa-star" },
    ripples:  { title: "Ondas del Corazón 💓",           desc: "Presiona y sentí lo que pasa cuando me acerco a vos.",               icon: "fa-heart-pulse" },
    fireflies:{ title: "Luces Que Se Sueltan 💡",        desc: "Presiona y dejá que se enciendan todas esas cosas que no dijiste.", icon: "fa-lightbulb" },
    dance:    { title: "Tus Vueltas 💫",                 desc: "Presiona para sentir el giro que me tiene cautivado.",                icon: "fa-rotate" },
    citylights:{ title: "Luces de Tokio 🌃",             desc: "Presiona y que se encienda la ciudad.",                               icon: "fa-city" }
};

function setupInteraction(trackIndex) {
    const titleEl = document.getElementById("interactionTitle");
    const descEl  = document.getElementById("interactionDescription");
    const btn     = document.getElementById("interactionButton");
    const icon    = document.getElementById("interactionButtonIcon");

    const track   = TRACKS[trackIndex];
    const rgb     = track.accent;
    const pattern = (track.theme && track.theme.pattern) || "hearts";
    const cfg     = INTERACTION_CONFIG[pattern] || INTERACTION_CONFIG.hearts;

    titleEl.textContent   = cfg.title;
    descEl.textContent    = cfg.desc;
    icon.className        = `fa-solid ${cfg.icon} text-2xl`;
    icon.style.color      = `rgb(${rgb})`;
    btn.style.background  = `rgba(${rgb}, 0.1)`;
    btn.style.borderColor = `rgba(${rgb}, 0.3)`;
    btn.style.boxShadow   = `0 0 25px rgba(${rgb}, 0.25)`;
    btn.style.animation   = pattern === "hearts" ? "heartbeat 1.4s infinite" : "none";
}

function fireInteractionBurst() {
    const btn     = document.getElementById("interactionButton");
    const rect    = btn.getBoundingClientRect();
    const x       = rect.left + rect.width  / 2;
    const y       = rect.top  + rect.height / 2;
    const track   = TRACKS[currentTrackIndex];
    const pattern = (track.theme && track.theme.pattern) || "hearts";

    // Siempre dispara partículas desde el botón
    triggerInteraction(x, y, pattern);

    // Y ahora TODAS las interacciones disparan también su propia
    // animación grande en el fondo de la pantalla, cada una distinta.
    triggerBackgroundInteraction(pattern, track.accent);

    btn.style.transform = "scale(1.12)";
    setTimeout(() => { btn.style.transform = ""; }, 150);
}

function initInteractionButton() {
    const btn = document.getElementById("interactionButton");
    if (!btn) return;

    const isHearts = () => TRACKS[currentTrackIndex].theme.pattern === "hearts";

    btn.addEventListener("click", fireInteractionBurst);
    btn.addEventListener("mousedown",  () => { if (isHearts()) btn.style.animation = "heartbeat 0.3s infinite"; });
    btn.addEventListener("mouseup",    () => { if (isHearts()) btn.style.animation = "heartbeat 1.4s infinite"; });
    btn.addEventListener("mouseleave", () => { if (isHearts()) btn.style.animation = "heartbeat 1.4s infinite"; });
    btn.addEventListener("touchstart", () => { if (isHearts()) btn.style.animation = "heartbeat 0.3s infinite"; }, { passive: true });
    btn.addEventListener("touchend",   () => { if (isHearts()) btn.style.animation = "heartbeat 1.4s infinite"; });
}