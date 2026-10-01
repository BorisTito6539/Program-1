// Sistema de Partículas + Interacciones en Canvas

class Particle {
    constructor(x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight + window.innerHeight, fromMouse = false) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4;
        this.vy = fromMouse ? (Math.random() * 2 - 1) : -(Math.random() * 1.2 + 0.4);
        this.vx = fromMouse ? (Math.random() * 2 - 1) : (Math.random() * 0.6 - 0.3);
        this.opacity = Math.random() * 0.5 + 0.3;
        this.isPrimaryShape = Math.random() > 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseDir = 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.y < -20) {
            this.y = window.innerHeight + 20;
            this.x = Math.random() * window.innerWidth;
        }
        if (this.x < -20) this.x = window.innerWidth + 20;
        if (this.x > window.innerWidth + 20) this.x = -20;

        this.opacity += this.pulseSpeed * this.pulseDir;
        if (this.opacity > 0.85 || this.opacity < 0.15) {
            this.pulseDir *= -1;
        }
    }

    draw(ctx, currentTrack) {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        const accent = currentTrack ? currentTrack.accent : "244, 63, 94";
        const pattern = (currentTrack && currentTrack.theme && currentTrack.theme.pattern) || "hearts";

        ctx.fillStyle = `rgba(${accent}, ${this.opacity})`;
        ctx.strokeStyle = `rgba(${accent}, ${this.opacity})`;
        ctx.translate(this.x, this.y);

        if (!this.isPrimaryShape) {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
            ctx.shadowBlur = 12;
            ctx.shadowColor = `rgb(${accent})`;
            ctx.fill();
            ctx.restore();
            return;
        }

        ctx.rotate(this.rotation);

        if (pattern === "hearts") {
            this.drawHeart(ctx);
        } else if (pattern === "waves" || pattern === "ripples") {
            this.drawWave(ctx);
        } else if (pattern === "sparks") {
            this.drawSpark(ctx, accent);
        } else if (pattern === "stars" || pattern === "dance") {
            this.drawStar(ctx, accent);
        } else if (pattern === "flowers") {
            this.drawFlower(ctx, accent);
        } else if (pattern === "fireflies") {
            this.drawAmbientFirefly(ctx, accent);
        } else if (pattern === "citylights") {
            this.drawAmbientBokeh(ctx, accent);
        }

        ctx.restore();
    }

    drawAmbientFirefly(ctx, accent) {
        const s = this.size * 0.55;
        const flicker = 0.5 + Math.sin(Date.now() * 0.004 + this.x) * 0.5;
        ctx.globalAlpha = this.opacity * flicker;
        ctx.shadowBlur = 16;
        ctx.shadowColor = `rgb(${accent})`;
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 220, ${this.opacity * flicker * 0.8})`;
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
        ctx.fill();
    }

    drawAmbientBokeh(ctx, accent) {
        const s = this.size * 0.7;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgb(${accent})`;
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
    }

    drawHeart(ctx) {
        ctx.beginPath();
        ctx.scale(this.size / 12, this.size / 12);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
        ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
        ctx.fill();
    }

    drawWave(ctx) {
        ctx.beginPath();
        ctx.scale(this.size / 10, this.size / 10);
        ctx.moveTo(0, -8);
        ctx.quadraticCurveTo(6, 2, 0, 8);
        ctx.quadraticCurveTo(-6, 2, 0, -8);
        ctx.fill();
    }

    drawSpark(ctx, accent) {
        const s = this.size / 2;
        ctx.beginPath();
        ctx.moveTo(0, -s * 1.6);
        ctx.lineTo(s * 0.4, -s * 0.4);
        ctx.lineTo(s * 1.6, 0);
        ctx.lineTo(s * 0.4, s * 0.4);
        ctx.lineTo(0, s * 1.6);
        ctx.lineTo(-s * 0.4, s * 0.4);
        ctx.lineTo(-s * 1.6, 0);
        ctx.lineTo(-s * 0.4, -s * 0.4);
        ctx.closePath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgb(${accent})`;
        ctx.fill();
    }

    drawStar(ctx, accent) {
        const spikes = 5;
        const outer = this.size / 1.6;
        const inner = outer / 2.2;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const angle = (Math.PI / spikes) * i;
            ctx.lineTo(Math.sin(angle) * r, -Math.cos(angle) * r);
        }
        ctx.closePath();
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgb(${accent})`;
        ctx.fill();
    }

    drawFlower(ctx, accent) {
        const petalCount = 6;
        const petalRadius = this.size / 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgb(${accent})`;

        ctx.beginPath();
        ctx.arc(0, 0, this.size / 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, ${this.opacity * 0.8})`;
        ctx.fill();

        ctx.fillStyle = `rgba(${accent}, ${this.opacity})`;
        for (let i = 0; i < petalCount; i++) {
            const angle = (Math.PI * 2 / petalCount) * i;
            const x = Math.cos(angle) * petalRadius;
            const y = Math.sin(angle) * petalRadius;
            ctx.beginPath();
            ctx.ellipse(x, y, this.size / 3, this.size / 2.5, angle, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

class InteractionParticle {
    constructor(x, y, type, accent) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.accent = accent;
        this.life = 1;
        this.size = Math.random() * 4 + 3;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 3 + 2;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;

        if (type === 'firework') {
            this.decay = 0.015;
        } else if (type === 'flower') {
            this.decay = 0.008;
        } else if (type === 'ripple') {
            this.radius = 4;
            this.maxRadius = 80 + Math.random() * 60;
            this.decay = 0.018;
        } else if (type === 'firefly') {
            this.vy = -(Math.random() * 1.0 + 0.5);
            this.vx = (Math.random() - 0.5) * 1.0;
            this.wobble = Math.random() * Math.PI * 2;
            this.flicker = Math.random() * Math.PI * 2;
            this.decay = 0.006;
        } else if (type === 'bokeh') {
            this.vy = -(Math.random() * 0.8 + 0.3);
            this.vx = (Math.random() - 0.5) * 0.6;
            this.size = Math.random() * 10 + 6;
            this.decay = 0.006;
        } else if (type === 'dance') {
            this.orbitAngle = Math.random() * Math.PI * 2;
            this.orbitRadius = 5 + Math.random() * 10;
            this.orbitSpeed = (Math.random() > 0.5 ? 1 : -1) * (0.08 + Math.random() * 0.06);
            this.expandSpeed = Math.random() * 1.8 + 0.8;
            this.decay = 0.009;
        } else {
            this.decay = 0.01;
        }
    }

    update() {
        if (this.type === 'firework') {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
        } else if (this.type === 'flower') {
            this.y -= this.speed * 0.5;
            this.x += Math.sin(Date.now() * 0.001) * 0.5;
            this.size += 0.05;
        } else if (this.type === 'heart') {
            this.y -= this.speed * 0.3;
            this.x += (Math.random() - 0.5) * 1;
        } else if (this.type === 'star') {
            this.rotation += this.rotationSpeed;
        } else if (this.type === 'ripple') {
            this.radius += (this.maxRadius - this.radius) * 0.06;
        } else if (this.type === 'firefly') {
            this.wobble += 0.06;
            this.flicker += 0.15;
            this.x += this.vx + Math.sin(this.wobble) * 0.6;
            this.y += this.vy + Math.cos(this.wobble * 0.7) * 0.3;
        } else if (this.type === 'bokeh') {
            this.x += this.vx;
            this.y += this.vy;
        } else if (this.type === 'dance') {
            this.orbitAngle += this.orbitSpeed;
            this.orbitRadius += this.expandSpeed;
            this.x += Math.cos(this.orbitAngle) * this.expandSpeed;
            this.y += Math.sin(this.orbitAngle) * this.expandSpeed * 0.6;
            this.rotation += this.orbitSpeed * 1.5;
        }

        this.life -= this.decay;
    }

    draw(ctx) {
        // FIX: antes no se trasladaba el contexto a (this.x, this.y), así que
        // heart/flower/firework/star/note/dance se dibujaban pegados a la
        // esquina superior izquierda del canvas (0,0) en vez de en la posición
        // del botón. 'ripple' ya funcionaba porque usaba coordenadas absolutas
        // directamente en su arc(); ahora todos pasan por el mismo
        // save() + translate() + restore() para comportarse igual.
        ctx.save();
        ctx.translate(this.x, this.y);

        // FIX 2: heart/flower/firework/star/note/dance nunca fijaban un
        // fillStyle con el color de acento, así que quedaban negras (el
        // negro es el color por defecto del canvas cuando no se especifica
        // ninguno). Ahora se define acá un color base para todas, y cada
        // forma puede reforzarlo con su propio brillo (shadowBlur).
        ctx.fillStyle = `rgba(${this.accent}, ${this.life})`;

        if (this.type === 'ripple') {
            ctx.globalAlpha = this.life * 0.7;
            ctx.strokeStyle = `rgba(${this.accent}, ${this.life})`;
            ctx.lineWidth = 2.5;
            ctx.shadowBlur = 12;
            ctx.shadowColor = `rgb(${this.accent})`;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.stroke();
        } else if (this.type === 'heart') {
            this.drawHeart(ctx);
        } else if (this.type === 'flower') {
            this.drawFlower(ctx);
        } else if (this.type === 'firework') {
            this.drawFirework(ctx);
        } else if (this.type === 'star') {
            ctx.rotate(this.rotation);
            this.drawStar(ctx);
        } else if (this.type === 'firefly') {
            this.drawFirefly(ctx);
        } else if (this.type === 'bokeh') {
            this.drawBokeh(ctx);
        } else if (this.type === 'dance') {
            ctx.rotate(this.rotation);
            this.drawDance(ctx);
        }

        ctx.restore();
    }

    drawHeart(ctx) {
        ctx.shadowBlur = 16;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.scale(this.size / 12, this.size / 12);
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
        ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
        ctx.fill();
    }

    drawFlower(ctx) {
        const petalCount = 6;
        const petalRadius = this.size / 2.5;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgb(${this.accent})`;

        ctx.beginPath();
        ctx.arc(0, 0, this.size / 4, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < petalCount; i++) {
            const angle = (Math.PI * 2 / petalCount) * i;
            const x = Math.cos(angle) * petalRadius;
            const y = Math.sin(angle) * petalRadius;
            ctx.beginPath();
            ctx.ellipse(x, y, this.size / 3, this.size / 2.5, angle, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    drawFirework(ctx) {
        // Núcleo brillante casi blanco + halo del color de acento, como
        // una chispa de fuego artificial real en vez de un puntito negro.
        ctx.shadowBlur = 18;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.9})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 4.5, 0, Math.PI * 2);
        ctx.fill();
    }

    drawStar(ctx) {
        const spikes = 5;
        const outer = this.size / 1.6;
        const inner = outer / 2.2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const angle = (Math.PI / spikes) * i;
            ctx.lineTo(Math.sin(angle) * r, -Math.cos(angle) * r);
        }
        ctx.closePath();
        ctx.fill();
    }

    drawFirefly(ctx) {
        const flickerAlpha = this.life * (0.5 + 0.5 * Math.sin(this.flicker));
        ctx.globalAlpha = flickerAlpha;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 220, ${flickerAlpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
    }

    drawBokeh(ctx) {
        ctx.globalAlpha = this.life * 0.6;
        ctx.shadowBlur = 22;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = this.life * 0.9;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.5})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.35, 0, Math.PI * 2);
        ctx.fill();
    }

    drawDance(ctx) {
        // Partícula en espiral: pequeña estrella que gira mientras se aleja
        const s = this.size * 0.8;
        ctx.shadowBlur = 16;
        ctx.shadowColor = `rgb(${this.accent})`;
        const spikes = 4;
        const outer = s / 1.4;
        const inner = outer / 2.5;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const a = (Math.PI / spikes) * i;
            ctx.lineTo(Math.sin(a) * r, -Math.cos(a) * r);
        }
        ctx.closePath();
        ctx.fill();
    }
}

let globalParticles = [];
let globalInteractionParticles = [];
let globalCanvas = null;
let globalCtx = null;
let burstCanvas = null;
let burstCtx = null;
let globalBackgroundAnims = [];

function initParticleSystem() {
    globalCanvas = document.getElementById("particleCanvas");
    globalCtx = globalCanvas.getContext("2d");
    burstCanvas = document.getElementById("burstCanvas");
    burstCtx = burstCanvas.getContext("2d");

    function resizeCanvas() {
        globalCanvas.width = window.innerWidth;
        globalCanvas.height = window.innerHeight;
        burstCanvas.width = window.innerWidth;
        burstCanvas.height = window.innerHeight;
    }

    function animateParticles() {
        globalCtx.clearRect(0, 0, globalCanvas.width, globalCanvas.height);
        burstCtx.clearRect(0, 0, burstCanvas.width, burstCanvas.height);

        globalParticles.forEach((p, index) => {
            p.update();
            p.draw(globalCtx, TRACKS[currentTrackIndex]);
            if (globalParticles.length > 120 && index < globalParticles.length - 120) {
                globalParticles.splice(index, 1);
            }
        });

        globalInteractionParticles = globalInteractionParticles.filter(p => p.life > 0);
        globalInteractionParticles.forEach(p => {
            p.update();
            p.draw(burstCtx);
        });

        globalBackgroundAnims = globalBackgroundAnims.filter(a => a.life > 0);
        globalBackgroundAnims.forEach(a => {
            a.update();
            a.draw(burstCtx);
        });

        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particleCount = Math.min(window.innerWidth / 12, 70);
    for (let i = 0; i < particleCount; i++) {
        globalParticles.push(new Particle());
    }

    window.addEventListener("mousemove", (e) => {
        if (Math.random() > 0.85) {
            globalParticles.push(new Particle(e.clientX, e.clientY, true));
        }
    });
    window.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0 && Math.random() > 0.8) {
            globalParticles.push(new Particle(e.touches[0].clientX, e.touches[0].clientY, true));
        }
    });

    animateParticles();
}

function triggerInteraction(x, y, pattern) {
    const track = TRACKS[currentTrackIndex];
    const accent = track.accent;
    const p = pattern || (track.theme && track.theme.pattern) || 'hearts';

    if (p === 'hearts') {
        for (let i = 0; i < 8; i++)
            globalInteractionParticles.push(new InteractionParticle(x, y, 'heart', accent));

    } else if (p === 'flowers') {
        for (let i = 0; i < 7; i++)
            globalInteractionParticles.push(new InteractionParticle(
                x + (Math.random() - 0.5) * 30, y, 'flower', accent));

    } else if (p === 'sparks') {
        for (let i = 0; i < 14; i++)
            globalInteractionParticles.push(new InteractionParticle(x, y, 'firework', accent));

    } else if (p === 'stars') {
        for (let i = 0; i < 6; i++)
            globalInteractionParticles.push(new InteractionParticle(x, y, 'star', accent));

    } else if (p === 'ripples') {
        for (let i = 0; i < 3; i++)
            setTimeout(() =>
                globalInteractionParticles.push(new InteractionParticle(x, y, 'ripple', accent))
            , i * 200);

    } else if (p === 'fireflies') {
        for (let i = 0; i < 10; i++)
            setTimeout(() =>
                globalInteractionParticles.push(new InteractionParticle(
                    x + (Math.random() - 0.5) * 60, y, 'firefly', accent))
            , i * 60);

    } else if (p === 'citylights') {
        for (let i = 0; i < 9; i++)
            setTimeout(() =>
                globalInteractionParticles.push(new InteractionParticle(
                    x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 40, 'bokeh', accent))
            , i * 50);

    } else if (p === 'dance') {
        // Espiral: 10 partículas con ángulos distribuidos para que salgan en todas direcciones
        for (let i = 0; i < 10; i++) {
            const p2 = new InteractionParticle(x, y, 'dance', accent);
            p2.orbitAngle = (Math.PI * 2 / 10) * i;
            globalInteractionParticles.push(p2);
        }
    }
}

const FLOWER_SPECIES = {
    rose: {
        colors: [
            { base: [219, 39, 119], light: [251, 182, 206], dark: [157, 23, 77] },
            { base: [220, 38, 38], light: [252, 165, 165], dark: [127, 29, 29] },
            { base: [253, 224, 71], light: [254, 249, 195], dark: [161, 98, 7] },
            { base: [255, 255, 255], light: [255, 255, 255], dark: [209, 213, 219] }
        ]
    },
    sunflower: {
        colors: [{ base: [250, 204, 21], light: [250, 204, 21], dark: [120, 53, 15] }]
    },
    daisy: {
        colors: [{ base: [255, 255, 255], light: [255, 255, 255], dark: [250, 204, 21] }]
    },
    tulip: {
        colors: [
            { base: [239, 68, 68], light: [239, 68, 68], dark: [180, 83, 9] },
            { base: [219, 39, 119], light: [219, 39, 119], dark: [157, 23, 77] },
            { base: [250, 204, 21], light: [250, 204, 21], dark: [161, 98, 7] }
        ]
    }
};
const FLOWER_SPECIES_NAMES = Object.keys(FLOWER_SPECIES);

function drawRosePetal(ctx, size, rot, curl, color) {
    ctx.save();
    ctx.rotate(rot);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(size * 0.55, -size * 0.15, size * 0.5 * curl, -size * 0.85, 0, -size);
    ctx.bezierCurveTo(-size * 0.5 * curl, -size * 0.85, -size * 0.55, -size * 0.15, 0, 0);
    ctx.fill();
    ctx.restore();
}

class FlowerBloomAnim {
    constructor(x, groundY) {
        this.x = x;
        this.groundY = groundY;
        this.speciesName = FLOWER_SPECIES_NAMES[Math.floor(Math.random() * FLOWER_SPECIES_NAMES.length)];
        const species = FLOWER_SPECIES[this.speciesName];
        this.palette = species.colors[Math.floor(Math.random() * species.colors.length)];
        this.stemProgress = 0;
        this.bloomProgress = 0;
        this.stemHeight = 70 + Math.random() * 30;
        this.maxSize = 34 + Math.random() * 14;
        this.life = 1;
        this.holdFrames = 130;
        this.state = "stem";
        this.sway = Math.random() * Math.PI * 2;
    }

    update() {
        if (this.state === "stem") {
            this.stemProgress += 0.03;
            if (this.stemProgress >= 1) { this.stemProgress = 1; this.state = "bloom"; }
        } else if (this.state === "bloom") {
            this.bloomProgress += 0.02;
            if (this.bloomProgress >= 1) { this.bloomProgress = 1; this.state = "holding"; }
        } else if (this.state === "holding") {
            this.holdFrames--;
            if (this.holdFrames <= 0) this.state = "fading";
        } else if (this.state === "fading") {
            this.life -= 0.015;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        const stemTop = this.groundY - this.stemHeight * this.stemProgress;
        const sway = Math.sin(Date.now() * 0.0015 + this.sway) * 4;

        if (this.stemProgress > 0) {
            ctx.strokeStyle = "rgba(60,120,60,1)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(this.x, this.groundY);
            ctx.quadraticCurveTo(
                this.x + sway * 0.5,
                this.groundY - this.stemHeight * this.stemProgress * 0.5,
                this.x + sway,
                stemTop
            );
            ctx.stroke();
            if (this.stemProgress > 0.35) {
                const leafY = this.groundY - this.stemHeight * 0.4;
                ctx.fillStyle = "rgba(60,120,60,0.9)";
                ctx.beginPath();
                ctx.ellipse(this.x - 12, leafY, 10, 4.5, -0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(this.x + 12, leafY + 10, 10, 4.5, 0.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        if (this.stemProgress >= 1 && this.bloomProgress > 0) {
            const ease = 1 - Math.pow(1 - this.bloomProgress, 2.2);
            const size = this.maxSize * ease;
            const pal = this.palette;
            ctx.translate(this.x + sway, stemTop);

            if (this.speciesName === "rose") {
                const outerColor = `rgba(${pal.base.join(",")},1)`;
                const midColor = `rgba(${pal.base.map((c, i) => i < 3 ? Math.min(255, c + 25) : c).join(",")},1)`;
                const innerColor = `rgba(${pal.light.join(",")},1)`;
                const darkColor = `rgba(${pal.dark.join(",")},1)`;

                for (let i = 0; i < 5; i++) {
                    drawRosePetal(ctx, size, (Math.PI * 2 / 5) * i + 0.3, 0.9, outerColor);
                }
                for (let j = 0; j < 5; j++) {
                    drawRosePetal(ctx, size * 0.68, (Math.PI * 2 / 5) * j, 0.75, midColor);
                }
                for (let k = 0; k < 4; k++) {
                    drawRosePetal(ctx, size * 0.4, (Math.PI * 2 / 4) * k + 0.4, 0.6, innerColor);
                }
                ctx.fillStyle = darkColor;
                ctx.beginPath();
                ctx.arc(0, -size * 0.08, size * 0.1, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.speciesName === "sunflower" || this.speciesName === "daisy") {
                const petalCount = this.speciesName === "sunflower" ? 13 : 12;
                const petalLen = this.speciesName === "sunflower" ? size * 1.0 : size * 0.85;
                const petalW = this.speciesName === "sunflower" ? size * 0.16 : size * 0.12;
                ctx.fillStyle = `rgba(${pal.base.join(",")},1)`;
                for (let i = 0; i < petalCount; i++) {
                    const angle = (Math.PI * 2 / petalCount) * i;
                    ctx.save();
                    ctx.rotate(angle);
                    ctx.beginPath();
                    ctx.ellipse(0, -petalLen * 0.55, petalW, petalLen * 0.55, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
                ctx.fillStyle = `rgba(${pal.dark.join(",")},1)`;
                ctx.beginPath();
                ctx.arc(0, 0, size * (this.speciesName === "sunflower" ? 0.42 : 0.28), 0, Math.PI * 2);
                ctx.fill();
            } else if (this.speciesName === "tulip") {
                ctx.fillStyle = `rgba(${pal.base.join(",")},1)`;
                for (let k = 0; k < 6; k++) {
                    const ta = (Math.PI * 2 / 6) * k;
                    ctx.save();
                    ctx.rotate(ta);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.quadraticCurveTo(size * 0.35, -size * 0.5, 0, -size * 0.95);
                    ctx.quadraticCurveTo(-size * 0.35, -size * 0.5, 0, 0);
                    ctx.fill();
                    ctx.restore();
                }
            }
        }
        ctx.restore();
    }
}

const REAL_CONSTELLATIONS = {
    osaMayor: [[-40, -10], [-25, -15], [-10, -12], [5, -8], [10, 5], [25, 8], [35, 15]],
    orion: [[-15, -30], [15, -30], [0, -15], [-12, 0], [12, 0], [-8, 18], [8, 18]],
    cruzDelSur: [[0, -25], [0, 15], [-15, -5], [15, -5]],
    casiopea: [[-30, 10], [-15, -10], [0, 5], [15, -12], [30, 8]],
    heart: [[0, -6], [7, -15], [16, -13], [18, -3], [8, 8], [0, 16], [-8, 8], [-18, -3], [-16, -13], [-7, -15]]
};
const CONSTELLATION_NAMES = Object.keys(REAL_CONSTELLATIONS);
const CONSTELLATIONS_CLOSED_LOOP = { heart: true, cruzDelSur: true };

function jitterPoint(pt, amt) {
    return [pt[0] + (Math.random() - 0.5) * amt, pt[1] + (Math.random() - 0.5) * amt];
}

class ConstellationAnim {
    constructor(cx, cy, scale) {
        this.shapeName = CONSTELLATION_NAMES[Math.floor(Math.random() * CONSTELLATION_NAMES.length)];
        const base = REAL_CONSTELLATIONS[this.shapeName];
        const pts = base.map(p => jitterPoint(p, 3));
        this.points = pts.map(p => ({
            x: cx + p[0] * scale,
            y: cy + p[1] * scale,
            appeared: false,
            r: 2 + Math.random() * 2.5
        }));
        this.connectAsLoop = !!CONSTELLATIONS_CLOSED_LOOP[this.shapeName];
        this.revealIndex = 0;
        this.frame = 0;
        this.life = 1;
        this.state = "revealing";
        this.holdFrames = 130;
    }

    update() {
        this.frame++;
        if (this.state === "revealing") {
            if (this.frame % 12 === 0 && this.revealIndex < this.points.length) {
                this.points[this.revealIndex].appeared = true;
                this.revealIndex++;
            }
            if (this.revealIndex >= this.points.length) this.state = "holding";
        } else if (this.state === "holding") {
            this.holdFrames--;
            if (this.holdFrames <= 0) this.state = "fading";
        } else if (this.state === "fading") {
            this.life -= 0.012;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        const visible = this.points.filter(p => p.appeared);

        ctx.strokeStyle = "rgba(255,255,255,0.35)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        visible.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        if (this.connectAsLoop && this.state !== "revealing") ctx.closePath();
        ctx.stroke();

        const t = Date.now() * 0.003;
        visible.forEach((p, idx) => {
            const tw = 0.6 + Math.sin(t + idx) * 0.4;
            ctx.fillStyle = `rgba(255,255,255,${tw})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgb(255,255,255)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
    }
}

class BackgroundFirework {
    constructor(x, y, accent) {
        this.x = x;
        this.y = y;
        this.accent = accent;
        this.life = 1;
        this.size = Math.random() * 8 + 10;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 2.5 + 1.5;
        this.decay = 0.012;
    }
    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life -= this.decay;
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = `rgba(${this.accent},${this.life})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class FireworkBurstAnim {
    constructor(cx, cy, accent) {
        this.particles = [];
        const count = 18;
        for (let i = 0; i < count; i++) {
            this.particles.push(new BackgroundFirework(cx, cy, accent));
        }
        this.life = 1;
    }
    update() {
        this.particles.forEach(p => p.update());
        this.particles = this.particles.filter(p => p.life > 0);
        this.life = this.particles.length > 0 ? 1 : 0;
    }
    draw(ctx) {
        this.particles.forEach(p => p.draw(ctx));
    }
}

// Capítulo 1 (hearts): un corazón grande que late dos veces (lub-dub)
// en algún punto de la pantalla, como un monitor cardíaco, y se desvanece.
class BigHeartPulseAnim {
    constructor(cx, cy, accent) {
        this.cx = cx;
        this.cy = cy;
        this.accent = accent;
        this.frame = 0;
        this.life = 1;
        this.state = "beating";
        this.beatsLeft = 2;
        this.beatProgress = 0;
        this.maxSize = 60 + Math.random() * 25;
    }
    update() {
        this.frame++;
        if (this.state === "beating") {
            this.beatProgress += 0.045;
            if (this.beatProgress >= 1) {
                this.beatProgress = 0;
                this.beatsLeft--;
                if (this.beatsLeft <= 0) this.state = "holding";
            }
        } else if (this.state === "holding") {
            if (this.frame % 90 === 0) this.state = "fading";
        } else if (this.state === "fading") {
            this.life -= 0.02;
        }
    }
    draw(ctx) {
        // Curva de "lub-dub": crece rápido, retrocede un poco, y se asienta.
        const b = this.beatProgress;
        const beatScale = this.state === "beating"
            ? (b < 0.4 ? b / 0.4 : 1 - (b - 0.4) / 0.6 * 0.15)
            : 1;
        const size = this.maxSize * (this.state === "fading" ? this.life : beatScale || 0.05);

        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(this.cx, this.cy);
        ctx.scale(size / 12, size / 12);
        ctx.fillStyle = `rgba(${this.accent}, ${this.life * 0.9})`;
        ctx.shadowBlur = 40;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
        ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
        ctx.fill();
        ctx.restore();
    }
}

// Capítulo 4 (ripples): varios anillos concéntricos grandes que laten
// hacia afuera como un pulso de sonar, más dramático que el burst chico del botón.
class RippleFieldAnim {
    constructor(cx, cy, accent) {
        this.cx = cx;
        this.cy = cy;
        this.accent = accent;
        this.maxRadius = 150 + Math.random() * 50;
        this.rings = [0, 1, 2, 3].map(i => ({ radius: 0, delay: i * 16 }));
        this.frame = 0;
        this.life = 1;
    }
    update() {
        this.frame++;
        let allFinished = true;
        this.rings.forEach(r => {
            if (this.frame >= r.delay) {
                r.radius += (this.maxRadius - r.radius) * 0.045 + 0.4;
            }
            if (r.radius < this.maxRadius * 0.97) allFinished = false;
        });
        if (allFinished) this.life -= 0.02;
    }
    draw(ctx) {
        ctx.save();
        this.rings.forEach(r => {
            if (this.frame < r.delay) return;
            const progress = r.radius / this.maxRadius;
            const alpha = (1 - progress) * this.life;
            if (alpha <= 0) return;
            ctx.globalAlpha = alpha * 0.85;
            ctx.strokeStyle = `rgba(${this.accent}, ${alpha})`;
            ctx.lineWidth = 3;
            ctx.shadowBlur = 16;
            ctx.shadowColor = `rgb(${this.accent})`;
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, r.radius, 0, Math.PI * 2);
            ctx.stroke();
        });
        ctx.restore();
    }
}

// Capítulo 5 (fireflies): un enjambre de luciérnagas cálidas que titilan
// y suben en espiral suave, como si se soltaran todas esas cosas calladas.
class BigFirefly {
    constructor(x, y, accent) {
        this.x = x;
        this.y = y;
        this.accent = accent;
        this.size = 4 + Math.random() * 4;
        this.vy = -(0.3 + Math.random() * 0.6);
        this.vx = (Math.random() - 0.5) * 0.8;
        this.wobble = Math.random() * Math.PI * 2;
        this.flicker = Math.random() * Math.PI * 2;
        this.life = 1;
        this.decay = 0.004 + Math.random() * 0.003;
    }
    update() {
        this.wobble += 0.04;
        this.flicker += 0.12;
        this.x += this.vx + Math.sin(this.wobble) * 0.5;
        this.y += this.vy + Math.cos(this.wobble * 0.6) * 0.3;
        this.life -= this.decay;
    }
    draw(ctx) {
        const flickerAlpha = this.life * (0.4 + 0.6 * Math.sin(this.flicker));
        ctx.save();
        ctx.globalAlpha = flickerAlpha;
        ctx.translate(this.x, this.y);
        ctx.shadowBlur = 22;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.fillStyle = `rgba(${this.accent}, ${flickerAlpha})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 225, ${flickerAlpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}
class FireflySwarmAnim {
    constructor(x, y, accent) {
        this.flies = [];
        const count = 14;
        for (let i = 0; i < count; i++) {
            this.flies.push(new BigFirefly(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 60, accent));
        }
        this.life = 1;
    }
    update() {
        this.flies.forEach(f => f.update());
        this.flies = this.flies.filter(f => f.life > 0);
        this.life = this.flies.length > 0 ? 1 : 0;
    }
    draw(ctx) {
        this.flies.forEach(f => f.draw(ctx));
    }
}

// Capítulo 8 (citylights): luces bokeh suaves que suben despacio,
// como el skyline de Tokio desenfocado de noche.
class BigBokeh {
    constructor(x, y, accent) {
        this.x = x;
        this.y = y;
        this.accent = accent;
        this.size = 10 + Math.random() * 14;
        this.vy = -(0.2 + Math.random() * 0.4);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.life = 1;
        this.decay = 0.003 + Math.random() * 0.002;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life * 0.55;
        ctx.translate(this.x, this.y);
        ctx.shadowBlur = 26;
        ctx.shadowColor = `rgb(${this.accent})`;
        ctx.fillStyle = `rgba(${this.accent}, ${this.life})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = this.life * 0.8;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.4})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}
class BokehSkylineAnim {
    constructor(x, y, accent) {
        this.lights = [];
        const count = 16;
        for (let i = 0; i < count; i++) {
            this.lights.push(new BigBokeh(x + (Math.random() - 0.5) * 220, y + (Math.random() - 0.5) * 140, accent));
        }
        this.life = 1;
    }
    update() {
        this.lights.forEach(l => l.update());
        this.lights = this.lights.filter(l => l.life > 0);
        this.life = this.lights.length > 0 ? 1 : 0;
    }
    draw(ctx) {
        this.lights.forEach(l => l.draw(ctx));
    }
}

// Capítulo 7 (dance): un remolino grande de destellos que giran y se
// expanden en espiral, como las vueltas que dan cuando bailás.
class DanceSpark {
    constructor(cx, cy, accent, startAngle) {
        this.cx = cx;
        this.cy = cy;
        this.accent = accent;
        this.orbitAngle = startAngle;
        this.orbitRadius = 4;
        this.orbitSpeed = 0.09 + Math.random() * 0.05;
        this.expandSpeed = 1.4 + Math.random() * 1.8;
        this.size = 7 + Math.random() * 5;
        this.rotation = 0;
        this.life = 1;
        this.decay = 0.009 + Math.random() * 0.004;
    }
    update() {
        this.orbitAngle += this.orbitSpeed;
        this.orbitRadius += this.expandSpeed;
        this.rotation += this.orbitSpeed * 1.4;
        this.life -= this.decay;
    }
    draw(ctx) {
        const x = this.cx + Math.cos(this.orbitAngle) * this.orbitRadius;
        const y = this.cy + Math.sin(this.orbitAngle) * this.orbitRadius * 0.65;
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(x, y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(${this.accent}, ${this.life})`;
        ctx.shadowBlur = 18;
        ctx.shadowColor = `rgb(${this.accent})`;
        const s = this.size;
        const spikes = 4;
        const outer = s / 1.4;
        const inner = outer / 2.5;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const a = (Math.PI / spikes) * i;
            ctx.lineTo(Math.sin(a) * r, -Math.cos(a) * r);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
class DanceSwirlAnim {
    constructor(cx, cy, accent) {
        this.particles = [];
        const count = 18;
        for (let i = 0; i < count; i++) {
            this.particles.push(new DanceSpark(cx, cy, accent, (Math.PI * 2 / count) * i));
        }
        this.life = 1;
    }
    update() {
        this.particles.forEach(p => p.update());
        this.particles = this.particles.filter(p => p.life > 0);
        this.life = this.particles.length > 0 ? 1 : 0;
    }
    draw(ctx) {
        this.particles.forEach(p => p.draw(ctx));
    }
}

function triggerBackgroundInteraction(pattern, accent) {
    const margin = 80;
    const x = margin + Math.random() * (window.innerWidth - margin * 2);
    const y = margin + Math.random() * (window.innerHeight - margin * 2);

    if (pattern === "flowers") {
        const groundY = Math.min(window.innerHeight - 40, y + 80 + Math.random() * 60);
        globalBackgroundAnims.push(new FlowerBloomAnim(x, groundY));
    } else if (pattern === "sparks") {
        globalBackgroundAnims.push(new FireworkBurstAnim(x, y, accent));
    } else if (pattern === "stars") {
        // Capítulo 6: vuelve la constelación mágica en vez de estrellas fugaces.
        globalBackgroundAnims.push(new ConstellationAnim(x, y, 1.8));
    } else if (pattern === "hearts") {
        globalBackgroundAnims.push(new BigHeartPulseAnim(x, y, accent));
    } else if (pattern === "ripples") {
        globalBackgroundAnims.push(new RippleFieldAnim(x, y, accent));
    } else if (pattern === "fireflies") {
        globalBackgroundAnims.push(new FireflySwarmAnim(x, y, accent));
    } else if (pattern === "dance") {
        globalBackgroundAnims.push(new DanceSwirlAnim(x, y, accent));
    } else if (pattern === "citylights") {
        globalBackgroundAnims.push(new BokehSkylineAnim(x, y, accent));
    }
}

window.addInteractionParticle = function(x, y, type, accent) {
    globalInteractionParticles.push(new InteractionParticle(x, y, type, accent));
};