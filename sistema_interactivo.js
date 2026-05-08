// ===============================
// sistema_interactivo.js
// Programa interactivo en JavaScript
// ===============================

// ---------------------------------
// TASK 1: Configuración inicial
// ---------------------------------
// Este programa solicita al usuario su nombre y edad,
// valida la edad ingresada y muestra un mensaje personalizado.

// ---------------------------------
// TASK 2: Entrada de datos del usuario
// ---------------------------------

// Solicitar el nombre del usuario
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Solicitar la edad del usuario
const edadIngresada = prompt("Por favor, ingresa tu edad:");

// ---------------------------------
// TASK 3: Validación de la edad
// ---------------------------------

// Convertir la edad ingresada a número
const edadUsuario = Number(edadIngresada);

// Verificar si la edad ingresada es un número válido
if (isNaN(edadUsuario)) {

    // Mostrar mensaje de error en consola
    console.error("Error: Por favor, ingresa una edad válida en números.");

} else {

    // ---------------------------------
    // TASK 4: Condicionales y mensajes dinámicos
    // ---------------------------------

    // Validar si el usuario es menor de edad
    if (edadUsuario < 18) {

        // Mensaje para menores de edad
        alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
        console.log(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);

    } else {

        // Mensaje para mayores de edad
        alert(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
        console.log(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);

    }
}