// 1 EJERCICIO 1
var nombre = prompt("Ingresa tu nombre:");

var edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
    
    alert("¡Bienvenido " + nombre + "! Eres mayor de edad.");
} else {
    
    alert("¡Bienvenido " + nombre + "! Eres menor de edad.");
}

//EJERCICIO 2
var anioNacimiento = prompt("Ingresa tu año de nacimiento:");

var anioActual = new Date().getFullYear();

var edad = anioActual - parseInt(anioNacimiento);

alert("Tu edad es: " + edad + " años.");

//EJERCICIO 3

var numSecreto = Math.floor(Math.random() * 100) + 1;

var intentos = 0;
while (true) {

    var numUsuario = parseInt(prompt("Intenta adivinar el número secreto (entre 1 y 100):"));

    if (isNaN(numUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue;  
    }

    intentos++;

    if (numUsuario === numSecreto) {
        alert("¡Felicidades! Adivinaste el número secreto (" + numSecreto + ") en " + intentos + " intentos.");
        break;  
    } else {
       
        var mensaje = (numUsuario < numSecreto) ? "Demasiado bajo. Intenta nuevamente." : "Demasiado alto. Intenta nuevamente.";
        alert(mensaje);
    }
}