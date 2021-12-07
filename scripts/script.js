

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
alert("Que tengas un lindo día " + nombre);

let condicion = prompt("Es tu edad " + edad + "?");

if (condicion === "si" || "Si" || "sí" || "Sí") {
    alert("Muchas gracias! Buen día!")
} else {
    alert("Ups...")
}

let respuestaNombre = prompt("Es tu nombre Juan González?");

if (respuestaNombre === "no" || "No" || "NO") {
    alert("Perfecto! Lo corregimos. Tu nombre es: " + nombre);
}
if (respuestaNombre === "no" || "NO" || "No" && condicion === "si" || "Si" || "sí" || "Sí"){
    alert("Usted puede acceder a nuestro sitio 😁😁")
}