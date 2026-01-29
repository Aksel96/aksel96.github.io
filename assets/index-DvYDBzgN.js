(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Image Manager Material`,description:`Aplicación de escritorio con interfaz moderna (Material Design) para búsqueda, almacenamiento y gestión dinámica de imágenes. Desarrollada con principios de POO.`,techStack:[`Python`,`Flet`,`POO`,`Material UI`],link:`https://github.com/tusuario`},{title:`Algebra Linear Suite`,description:`Software educativo diseñado para la FES Aragón. Incluye GUI para visualizar algoritmos matemáticos y diagramas de flujo para documentación de arquitectura.`,techStack:[`Python`,`Tkinter`,`Matplotlib`,`Algoritmos`],link:`https://github.com/tusuario`},{title:`Java Management System`,description:`Sistema de gestión de bases de datos robusto. Implementación de estructuras de datos complejas y conexión persistente a MySQL.`,techStack:[`Java`,`Swing`,`MySQL`,`Estructuras de Datos`],link:`https://github.com/tusuario`},{title:`ShadowDex Analytics`,description:`Scripts de análisis de datos para medir retención de audiencia en una comunidad de +40k usuarios. Automatización de reportes de rendimiento.`,techStack:[`Python`,`Data Analysis`,`Excel`,`Automation`],link:`https://github.com/tusuario`}],t=document.querySelector(`.projects-grid`);t.innerHTML=``,e.forEach(e=>{let n=`
            <article class="project-card">
                <div class="card-header">
                    <h3>${e.title}</h3>
                </div>
                <div class="card-body">
                    <p>${e.description}</p>
                    <div class="tech-tags">
                        ${e.techStack.map(e=>`<span>${e}</span>`).join(``)}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="${e.link}" target="_blank" class="btn-card">Ver Código →</a>
                </div>
            </article>
        `;t.innerHTML+=n});