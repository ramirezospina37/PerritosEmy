// Espera a que el contenido de la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Añade la clase 'page-loaded' al cuerpo de la página cuando se ha cargado completamente
    // Esto activará una animación de desvanecimiento (fade-in) para toda la página.
    document.body.classList.add("page-loaded");

    // Selecciona todas las secciones (<section>) de la página
    const sections = document.querySelectorAll("section");

    // Crea un observador de intersección (Intersection Observer) para detectar cuando las secciones son visibles en la pantalla
    const observer = new IntersectionObserver((entries) => {
        // 'entries' es un array de las secciones que están siendo observadas
        entries.forEach((entry) => {
            // Si la sección está en la pantalla (es visible), añade la clase 'fade-in' para hacerla aparecer con una animación
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });  // 'threshold' define cuánta parte de la sección debe ser visible para que se active la animación

    // Para cada sección, añade la clase 'hidden' al principio (hace que la sección sea invisible)
    // y luego comienza a observar la sección para activar la animación de desvanecimiento cuando entre en la vista
    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);  // Comienza a observar cada sección
    });

    // Selecciona todos los botones de la página
    const buttons = document.querySelectorAll(".btn");

    // Para cada botón, escucha cuando el usuario pasa el mouse sobre el botón
    buttons.forEach((button) => {
        // Cuando el mouse pasa sobre el botón, añade la clase 'hover-bounce' para hacer que el botón rebote con una animación
        button.addEventListener("mouseover", () => {
            button.classList.add("hover-bounce");
        });

        // Cuando termina la animación de rebote, elimina la clase 'hover-bounce' para que el botón vuelva a su estado normal
        button.addEventListener("animationend", () => {
            button.classList.remove("hover-bounce");
        });
    });

    // Selecciona todos los enlaces de la barra de navegación (navbar)
    const navLinks = document.querySelectorAll(".navbar a");

    // Para cada enlace, escucha cuando el usuario hace clic en uno de ellos
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            // Previene el comportamiento predeterminado del enlace (no permite que la página se recargue)
            e.preventDefault();

            // Obtiene el ID del elemento de destino (por ejemplo, '#seccion1' -> 'seccion1')
            const targetId = link.getAttribute("href").substring(1);

            // Busca el elemento en la página con ese ID
            const targetElement = document.getElementById(targetId);

            // Si el elemento existe en la página, desplaza la vista hasta él de manera suave
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
