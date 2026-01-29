/* main.js */

// 1. Simulación de Base de Datos (Array de Objetos)
// En Node.js esto vendría de un `res.json(data)` de tu API.
const projects = [
    {
        title: "Image Manager Material",
        description: "Aplicación de escritorio con interfaz moderna (Material Design) para búsqueda, almacenamiento y gestión dinámica de imágenes. Desarrollada con principios de POO.",
        techStack: ["Python", "Flet", "POO", "Material UI"],
        // Si no tienes link aún, pon "#" o el link a tu perfil general
        link: "https://github.com/tusuario"
    },
    {
        title: "Algebra Linear Suite",
        description: "Software educativo diseñado para la FES Aragón. Incluye GUI para visualizar algoritmos matemáticos y diagramas de flujo para documentación de arquitectura.",
        techStack: ["Python", "Tkinter", "Matplotlib", "Algoritmos"],
        link: "https://github.com/tusuario"
    },
    {
        title: "Java Management System",
        description: "Sistema de gestión de bases de datos robusto. Implementación de estructuras de datos complejas y conexión persistente a MySQL.",
        techStack: ["Java", "Swing", "MySQL", "Estructuras de Datos"],
        link: "https://github.com/tusuario"
    },
    {
        title: "ShadowDex Analytics",
        description: "Scripts de análisis de datos para medir retención de audiencia en una comunidad de +40k usuarios. Automatización de reportes de rendimiento.",
        techStack: ["Python", "Data Analysis", "Excel", "Automation"],
        link: "https://github.com/tusuario"
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
                    <a href="${project.link}" target="_blank" class="btn-card">Ver Código →</a>
                </div>
            </article>
        `;

        // Añadimos el HTML al contenedor
        projectsContainer.innerHTML += cardHTML;
    });
};

// Ejecutamos la función
renderProjects();
