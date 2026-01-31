/* main.js */

// 1. Simulación de Base de Datos (Array de Objetos)
// En Node.js esto vendría de un `res.json(data)` de tu API.
const projects = [
    {
        title: "Eros Wear",
        description: "Plataforma E-commerce y social para una marca de moda. Incluye un probador interactivo (Canvas) con sistema de Drag & Drop para crear outfits, gestión de base de datos relacional para usuarios, comentarios y likes, además de un motor de renderizado dinámico con escalado automático.",
        techStack: ["Node.js", "Express", "MySQL", "JavaScript (ES6+)", "Handlebars", "Bootstrap 5"],
        link: "https://eros-wear.onrender.com"
    },

    {
        title: "REST API",
        description: "API REST desarrollada con Spring Boot para la gestión de videojuegos. Implementación de arquitectura de microservicios utilizando Docker Compose para la orquestación de contenedores (App + MySQL).",
        techStack: ["Java", "Spring Boot", "Docker", "MySQL", "Docker Compose"],
        link: "https://github.com/Aksel96/APIRest-Spring-DockerCompose" // Reemplaza con el link al repo si ya lo tienes
    },
    {
        title: "ShadowDex Analytics",
        description: "Scripts de análisis de datos para medir retención de audiencia en una comunidad de +40k usuarios. Automatización de reportes de rendimiento.",
        techStack: ["Python", "Data Analysis", "Excel", "Automation"],
        link: "https://www.facebook.com/AShadowDex"
    }
    ,
    {
        title: "Sticker Hunt",
        description: "Aplicación de escritorio con interfaz moderna (Material Design) para búsqueda, almacenamiento y gestión dinámica de imágenes. Desarrollada con principios de POO.",
        techStack: ["Python", "Flet", "POO", "Material UI"],
        link: "https://github.com/Aksel96/Sticker_Hunt"
    },
    {
        title: "Algebra Lineal",
        description: "Software educativo diseñado para la FES Aragón. Incluye GUI para visualizar algoritmos matemáticos y diagramas de flujo para documentación de arquitectura.",
        techStack: ["Python", "Tkinter", "Matplotlib", "Algoritmos"],
        link: "https://github.com/Aksel96/prototipo_libro_digital"
    },
    {
        title: "Java Management System",
        description: "Sistema de gestión de bases de datos robusto. Implementación de estructuras de datos complejas y conexión persistente a MySQL.",
        techStack: ["Java", "Swing", "MySQL", "Estructuras de Datos"],
        link: "https://github.com/Aksel96/ProyectoFinalPOO"
    }
];

// 2. Seleccionamos el contenedor del DOM (donde vamos a "inyectar" el HTML)
const projectsContainer = document.querySelector('.projects-grid');

// 3. Función para renderizar (Esto reemplaza a tu motor de plantillas Handlebars)
const renderProjects = () => {
    // Limpiamos el contenedor por si acaso
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
        // Creamos el HTML de cada tarjeta usando "Template Strings" (las comillas invertidas ``)
        // Fíjate que usamos ${variable} igual que en las plantillas modernas.
        const cardHTML = `
            <article class="project-card">
                <div class="card-header">
                    <h3>${project.title}</h3>
                </div>
                <div class="card-body">
                    <p>${project.description}</p>
                    <div class="tech-tags">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="${project.link}" target="_blank" class="btn-card">Más información →</a>
                </div>
            </article>
        `;

        // Añadimos el HTML al contenedor
        projectsContainer.innerHTML += cardHTML;
    });
};

// Función que maneja la aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.15 // El elemento debe estar visible al 15% para activarse
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: dejar de observar una vez que ya apareció
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const initScrollReveal = () => {
    // Añadimos '.skills-section' y '.skill-card' a la lista
    const elementsToReveal = document.querySelectorAll('.about-section, .project-card, .timeline-item, .contact-content, .skills-section, .skill-card, .education-section, .edu-card');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
};

/* =========================================
   1. BARRA DE PROGRESO (SCROLL INDICATOR)
   ========================================= */
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    // Calculamos cuánto ha bajado el usuario (winScroll)
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Calculamos la altura total "scrolleable" (altura total - altura de la ventana)
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Regla de tres para obtener el porcentaje
    const scrolled = (winScroll / height) * 100;

    // Aplicamos el ancho al div
    document.getElementById("myBar").style.width = scrolled + "%";
}


/* =========================================
   2. SPY SCROLL (RESALTADO DE MENÚ)
   ========================================= */
// Seleccionamos todas las secciones que tienen ID (inicio, sobre-mi, etc.)
const sections = document.querySelectorAll('section[id]');

// Opciones: threshold 0.3 significa "cuando el 30% de la sección sea visible"
const spyOptions = {
    threshold: 0.3
};

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Obtenemos el ID de la sección que entró en pantalla
            const id = entry.target.getAttribute('id');

            // Buscamos el link del menú que apunta a ese ID
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            // Si existe, hacemos la magia de las clases
            if (navLink) {
                // Quitamos la clase 'active-link' a TODOS los links primero
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active-link');
                });

                // Se la ponemos SOLO al actual
                navLink.classList.add('active-link');
            }
        }
    });
}, spyOptions);

// Ponemos el observador a vigilar cada sección
sections.forEach(section => {
    spyObserver.observe(section);
});

/* =========================================
   EFECTO TILT 3D (TARJETAS JUICY)
   ========================================= */
// Esperamos un poquito a que se generen las tarjetas dinámicas
setTimeout(() => {
    // Seleccionamos qué elementos queremos que se muevan
    const cards = document.querySelectorAll(".project-card, .edu-card, .skill-card");

    // Inicializamos la librería VanillaTilt en esos elementos
    VanillaTilt.init(cards, {
        max: 15,            // Inclinación máxima (grados)
        speed: 400,         // Velocidad de la animación (ms)
        glare: true,        // Activar efecto de brillo/reflejo
        "max-glare": 0.3,   // Opacidad máxima del brillo (0 a 1)
        scale: 1.05         // Se agranda un poquito (5%) al pasar el mouse
    });
}, 1000); // 1 segundo de retraso para asegurar que el DOM cargó

/* =========================================
   EFECTO TYPEWRITER (MÁQUINA DE ESCRIBIR)
   ========================================= */
const typeTextSpan = document.getElementById("typewriter");

// Las frases que quieres rotar. ¡Personalízalas!
const phrases = [
    "Ingeniero en Computación",
    "Desarrollador Full Stack",
    "Entusiasta de la IA",
    "Social Media Director",
    "Programador de Videojuegos"
];

let phraseIndex = 0; // Qué frase estamos escribiendo
let charIndex = 0;   // Qué letra estamos escribiendo
let isDeleting = false; // ¿Estamos borrando o escribiendo?
let typeSpeed = 100; // Velocidad de escritura

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Borrar una letra
        typeTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Borrar es más rápido
    } else {
        // Escribir una letra
        typeTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Escribir es velocidad normal
    }

    // Lógica para cambiar de estado
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Terminó de escribir la frase completa
        isDeleting = true;
        typeSpeed = 2000; // Esperar 2 segundos antes de empezar a borrar (para que se lea)
    } else if (isDeleting && charIndex === 0) {
        // Terminó de borrar todo
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Pasar a la siguiente frase
        typeSpeed = 500; // Pausa pequeña antes de escribir la nueva
    }

    setTimeout(typeEffect, typeSpeed);
}

// Iniciar el efecto cuando cargue la página
document.addEventListener('DOMContentLoaded', typeEffect);



renderProjects();
initScrollReveal();

