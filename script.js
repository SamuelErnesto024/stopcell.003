function enterStore() {
    // Primero, hacemos un efecto de desvanecimiento (fade out)
    const screen = document.getElementById('welcome-screen');
    screen.style.opacity = '0';
    screen.style.transition = 'opacity 0.6s ease';

    // Después de 600ms, redirigimos al index.html
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 600);
}