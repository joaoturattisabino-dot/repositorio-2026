/* =========================================
   NØVA — INTERAÇÕES
========================================= */


/* =========================
   CURSOR GLOW
========================= */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================
   PARALLAX DO PRODUTO
========================= */

const productStage = document.querySelector(".product-stage");

window.addEventListener("scroll", () => {

    if (!productStage) return;

    const scrollPosition = window.scrollY;

    if (window.innerWidth > 1000) {

        productStage.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


/* =========================
   CAN — MOVIMENTO COM MOUSE
========================= */

const can = document.querySelector(".can");

document.addEventListener("mousemove", (event) => {

    if (!can || window.innerWidth < 1000) return;

    const x = (window.innerWidth / 2 - event.clientX) / 70;
    const y = (window.innerHeight / 2 - event.clientY) / 70;

    can.style.transform = `
        perspective(900px)
        rotateY(${-13 + x}deg)
        rotateX(${y}deg)
        rotateZ(1deg)
        translateY(-5px)
    `;

});


/* =========================
   RESET DO MOVIMENTO
========================= */

document.addEventListener("mouseleave", () => {

    if (!can) return;

    can.style.transform = `
        perspective(900px)
        rotateY(-13deg)
        rotateZ(1deg)
    `;

});


/* =========================
   MENU MOBILE
========================= */

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("mobile-open");

    });

}


/* =========================
   NAVEGAÇÃO SUAVE
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   EFEITO DE TEXTO NO HERO
========================= */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        if (scroll < 500) {

            heroTitle.style.transform =
                `translateY(${scroll * 0.08}px)`;

            heroTitle.style.opacity =
                Math.max(0.3, 1 - scroll / 700);

        }

    });

}


/* =========================
   BOTÕES — FEEDBACK VISUAL
========================= */

document.querySelectorAll(".primary-button").forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.setProperty(
            "--mouse-x",
            "50%"
        );

    });

});


/* =========================
   TÍTULO DINÂMICO
========================= */

const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Volte para a NØVA. ✦";

    } else {

        document.title = originalTitle;

    }

});


/* =========================
   PERFORMANCE
========================= */

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            ticking = false;

        });

        ticking = true;

    }

});


/* =========================
   CONSOLE BRANDING
========================= */

console.log(
    "%c NØVA ENERGY ",
    "background:#b6ff32;color:#050706;font-size:20px;font-weight:900;padding:10px;"
);

console.log(
    "%cDESPERTE O EXTRA.",
    "color:#b6ff32;font-size:14px;font-weight:700;"
);
