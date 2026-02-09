/* STOPCELL - CONTROLADOR DE INTERFAZ PROFESIONAL */

document.addEventListener('DOMContentLoaded', () => {

    // 1. CONTROL DEL PRELOADER
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 2000); // Tiempo de carga simulado para ver el scanner
    });

    // 2. NAVEGACIÓN ENTRE SECCIONES CON ANIMACIÓN DE DESVANECIMIENTO
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.brand-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-page');
            
            if(link.classList.contains('active')) return;

            // Fase 1: Desvanecer sección actual
            const currentSection = document.querySelector('.brand-section.active');
            currentSection.style.opacity = '0';
            currentSection.style.transform = 'translateY(-20px)';

            // Fase 2: Cambiar estados tras el desvanecimiento
            setTimeout(() => {
                // Actualizar links de navegación
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Actualizar secciones
                sections.forEach(s => s.classList.remove('active'));
                
                const nextSection = document.getElementById(targetId);
                nextSection.classList.add('active');

                // Forzar un pequeño delay para que el navegador procese el display:block
                setTimeout(() => {
                    nextSection.style.opacity = '1';
                    nextSection.style.transform = 'translateY(0)';
                }, 50);

            }, 600); // Sincronizado con el CSS transition
        });
    });

    // 3. SISTEMA DE CARRITO (SIMULADO)
    let cartCounter = 0;
    const cartDisplay = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.buy-now');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            cartCounter++;
            cartDisplay.innerText = cartCounter;

            // Efecto visual en el botón
            const originalText = btn.innerText;
            btn.innerText = "¡AÑADIDO!";
            btn.style.background = "#fff";
            btn.style.color = "#ff0000";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "var(--red-main)";
                btn.style.color = "#fff";
            }, 1000);

            // Crear efecto de partículas rojas al hacer clic
            createParticles(e.clientX, e.clientY);
        });
    });

    // 4. EFECTOS ESPECIALES DE INTERACCIÓN
    function createParticles(x, y) {
        for(let i = 0; i < 5; i++) {
            const p = document.createElement('div');
            p.style.position = 'fixed';
            p.style.left = x + 'px';
            p.style.top = y + 'px';
            p.style.width = '10px';
            p.style.height = '10px';
            p.style.background = 'var(--red-main)';
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            p.style.zIndex = '9999';
            
            document.body.appendChild(p);

            const destinationX = x + (Math.random() - 0.5) * 100;
            const destinationY = y + (Math.random() - 0.5) * 100;

            p.animate([
                { opacity: 1, transform: 'translate(0, 0)' },
                { opacity: 0, transform: `translate(${destinationX - x}px, ${destinationY - y}px)` }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });

            setTimeout(() => p.remove(), 1000);
        }
    }

    // 5. VALIDACIÓN DE NEWSLETTER (Para extender el JS profesionalmente)
    const newsInput = document.querySelector('.newsletter input');
    const newsBtn = document.querySelector('.newsletter button');

    if(newsBtn) {
        newsBtn.addEventListener('click', () => {
            if(newsInput.value.includes('@')) {
                alert("¡Gracias por suscribirte a STOPCELL!");
                newsInput.value = "";
            } else {
                newsInput.style.borderColor = "red";
                setTimeout(() => newsInput.style.borderColor = "transparent", 2000);
            }
        });
    }

    // 6. EFECTO PARALLAX EN IMÁGENES AL HACER SCROLL
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const images = document.querySelectorAll('.img-container img');
        
        images.forEach(img => {
            const speed = 0.05;
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
