
//utilizando en prompt le pide el nombre al usuario
const nombreUsuario = prompt("Ingresa tu nombre:");

// pide la edad al usuario
const edad = prompt("Ingresa tu edad:");

// conversión en número
const edadUsuario = Number(edad);

// verificación si es número 
if (isNaN(edadUsuario)) {

    // mostrar al usuario error si la edad no es válida 
    console.error("Error: Por favor, ingresa una edad válida en números.");

} else {

  

    // si el usuario es menor de edad 
    if (edadUsuario < 18) {

        // Mensaje para menores de edad
        alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
        console.log(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);

    } else {

        // si el usuario es mayor de edad
        alert(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
        console.log(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);

    }
}