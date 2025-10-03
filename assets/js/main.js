document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado correctamente");

    /* === SCROLLYTELLING === */
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
    });
    sections.forEach(section => observer.observe(section));

    /* === VALIDACIÓN EN VIVO FORMULARIO === */
    const form = document.getElementById('contactForm');
    if (form) {
        const btnEnviar = document.getElementById('btnEnviar');
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                btnEnviar.disabled = !form.checkValidity();
            });
        });
    }

        /* === CAMBIO DE IDIOMA === */
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                if (window.location.href.includes("index-en.html")) {
                    window.location.href = "index.html"; // Cambia a español
                } else {
                    window.location.href = "index-en.html"; // Cambia a inglés
                }
            });
        }

});

/* === FUNCIÓN ENVÍO CORREO === */
function enviarCorreo() {
    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return false;
    }

    const asunto = encodeURIComponent(`Consulta de ${nombre}`);
    const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`);

    const esNavegadorCompatible = navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Edg") || navigator.userAgent.includes("Brave");

    if (esNavegadorCompatible) {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=stevenrm09@gmail.com&su=${asunto}&body=${cuerpo}`, '_blank');
    } else {
        window.location.href = `mailto:stevenrm09@gmail.com?subject=${asunto}&body=${cuerpo}`;
    }

    return false;
}
