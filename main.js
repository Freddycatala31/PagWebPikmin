'use strict';

//NAVBAR
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    if (!navLinks.contains(event.target) && !logo.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


//CARROUSEL
const grande = document.querySelector('.grande');
let punto = document.querySelectorAll('.punto');
let anchomov = 20;

// Función para ajustar los puntos y el valor de anchomov
function ajustarPuntos() {
    const puntosContainer = document.querySelector('.puntos');
    if (window.innerWidth <= 600) {
        anchomov = 48;
    }else if(window.innerWidth <= 710) {
        anchomov = 20;
    } else if(window.innerWidth <= 768) {
       
        // Eliminar los dos últimos puntos si hay más de dos puntos
        if (puntosContainer.children.length > 2) {
            // puntosContainer.removeChild(puntosContainer.lastElementChild);
            // puntosContainer.removeChild(puntosContainer.lastElementChild);
            anchomov = 50;
        }
    } else if(window.innerWidth <= 1367) {
        anchomov = 37;
    }else if(window.innerWidth <= 1764) {
        anchomov = 30;
    } else {
        // Restaurar los puntos si se vuelve a una pantalla más grande
        // while (puntosContainer.children.length < 4) {
        //     const newPunto = document.createElement('li');
        //     newPunto.classList.add('punto');
        //     puntosContainer.appendChild(newPunto);
        // }
        anchomov = 20;
    }
    // Actualizar la lista de puntos y agregar event listeners
    punto = document.querySelectorAll('.punto');
    addEventListenersToPoints();
}

// Función para agregar event listeners a los puntos
function addEventListenersToPoints() {
    punto.forEach((cadapunto, i) => {
        // Eliminar event listeners anteriores para evitar duplicados
        cadapunto.removeEventListener('click', handleClick);
        // Agregar un click a cada punto
        cadapunto.addEventListener('click', handleClick);
    });
}

// Función para manejar el click en los puntos
function handleClick(event) {
    const cadapunto = event.currentTarget;
    const i = Array.from(punto).indexOf(cadapunto);
    // Guardar la posición del punto seleccionado
    let posicion = i;
    // Calcular el espacio que se debe mover usando anchomov
    let operacion = posicion * -anchomov;
    // Mover el 'grande'
    grande.style.transform = `translateX(${operacion}%)`;
    // Quitar clase activo y ponerla en el punto seleccionado
    punto.forEach((cadapunto) => {
        cadapunto.classList.remove('activo');
    });
    cadapunto.classList.add('activo');
}

// Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', ajustarPuntos);
window.addEventListener('resize', ajustarPuntos);