// Menú
const hamburger = document.querySelector('.hamburger'); 
// Selecciona el elemento del DOM con la clase 'hamburger' (el ícono del menú).

const navLinks = document.querySelector('.nav-links'); 
// Selecciona el elemento del DOM con la clase 'nav-links' (el contenedor de los enlaces de navegación).

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    // Al hacer clic en el ícono del menú, se añade o elimina la clase 'active' en 'nav-links', lo que activa o desactiva el menú.
});

// Funcionalidad de los modales
const galleryItems = document.querySelectorAll('.gallery-item'); 
// Selecciona todos los elementos con la clase 'gallery-item' (los elementos de la galería).

const modals = document.querySelectorAll('.modal'); 
// Selecciona todos los elementos con la clase 'modal' (las ventanas modales).

const closeButtons = document.querySelectorAll('.close'); 
// Selecciona todos los elementos con la clase 'close' (los botones de cierre de los modales).

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = `#modal-${item.dataset.modal}`; 
        // Crea un identificador dinámico para el modal en función del atributo 'data-modal' del ítem de la galería.

        document.querySelector(modalId).style.display = 'block'; 
        // Muestra el modal correspondiente cambiando su propiedad 'display' a 'block'.
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none'; 
        // Al hacer clic en el botón de cierre, se oculta el modal (el modal es el abuelo del botón de cierre).
    });
});

window.onclick = (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
            // Si se hace clic fuera del contenido del modal, se cierra el modal (comparando el evento de clic con el propio modal).
        }
    });
};

window.onkeydown = (event) => {
    if (event.key === 'Escape') {
        modals.forEach(modal => {
            modal.style.display = 'none'; 
            // Si se presiona la tecla 'Escape', todos los modales se cierran.
        });
    }
};

