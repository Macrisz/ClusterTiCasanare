particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80, // Cantidad de partículas
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff" // Color de las partículas
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Velocidad de movimiento
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse" // Efecto al pasar el ratón
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // Efecto al hacer clic
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });

// --- Modo Día/Noche ---
const iconoDia = document.getElementById('icono-dia');
const iconoNoche = document.getElementById('icono-noche');
const iconoDiaTop = document.getElementById('icono-dia-top');
const iconoNocheTop = document.getElementById('icono-noche-top');
const body = document.body;

function activarModoNoche() {
    if (iconoDia) iconoDia.style.display = 'none';
    if (iconoNoche) iconoNoche.style.display = 'inline';
    if (iconoDiaTop) iconoDiaTop.style.display = 'none';
    if (iconoNocheTop) iconoNocheTop.style.display = 'inline';
    body.classList.add('modo-noche');
}

function activarModoDia() {
    if (iconoNoche) iconoNoche.style.display = 'none';
    if (iconoDia) iconoDia.style.display = 'inline';
    if (iconoNocheTop) iconoNocheTop.style.display = 'none';
    if (iconoDiaTop) iconoDiaTop.style.display = 'inline';
    body.classList.remove('modo-noche');
}

if (iconoDia) {
    iconoDia.addEventListener('click', activarModoNoche);
}
if (iconoNoche) {
    iconoNoche.addEventListener('click', activarModoDia);
}
if (iconoDiaTop) {
    iconoDiaTop.addEventListener('click', activarModoNoche);
}
if (iconoNocheTop) {
    iconoNocheTop.addEventListener('click', activarModoDia);
}