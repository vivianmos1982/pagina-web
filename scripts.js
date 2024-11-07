// scripts.js

// Función para desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Función para mostrar mensaje de bienvenida al cargar la página
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Bienvenido a Café y Tortas Julián: Disfruta de nuestros productos saludables.");
    }, 500); // Tiempo de espera para mostrar el mensaje
});

// Función para botón de "Volver arriba"
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "⬆️ Volver arriba";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mostrar el botón "Volver arriba" solo cuando se hace scroll hacia abajo
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
