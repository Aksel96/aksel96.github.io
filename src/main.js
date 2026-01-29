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

// Ejecutamos la función
renderProjects();
