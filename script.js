// Menú de navegación para dispositivos móviles
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Funcionalidad de navegación por secciones
function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.content-section, .gallery-section');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Mostrar la sección correspondiente
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.style.display = 'block';
    }
}

// Mostrar la sección "Inicio" por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});

// Modal de contenido adicional
const contentModal = document.getElementById('myModal');
const modalIframe = document.getElementById('modal-iframe');
const closeContentModal = document.getElementById('closeContentModal');

// Función para abrir el modal de contenido adicional
function openProject(url) {
    contentModal.style.display = 'block';
    modalIframe.src = url;
}

// Cerrar el modal de contenido adicional
closeContentModal.addEventListener('click', () => {
    contentModal.style.display = 'none';
});

// Cerrar los modales al hacer clic fuera de ellos
window.onclick = function(event) {
    if (event.target === contentModal) {
        contentModal.style.display = 'none';
    }
};

// Cerrar los modales con la tecla "Escape"
window.onkeydown = function(event) {
    if (event.key === 'Escape') {
        contentModal.style.display = 'none';
    }
};



