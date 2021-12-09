
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
while(!parseInt(edad)){
    alert("Ingrese un número, no una letra");
    edad=prompt("Ingrese nuevamente su edad");
}
alert("Que tengas un lindo día " + nombre);

let condicion = prompt("Es tu edad " + edad + "?");

if (condicion === "si" || "Si" || "sí" || "Sí") {
    alert("Muchas gracias! Buen día!");
} else {
    alert("Ups...");
}

alert("Vamos a repetir tu nombre la cantidad de años que tenés");
for(let i=1; i<=5; i++){

    alert(i+". "+nombre);
    if(i===3){
        let cansado=prompt("Está cansado de ver su nombre? Escriba Si/No");
        if((cansado==="Si") || (cansado==="si")){
            alert("Perfecto! Terminamos el programa 😥");
            break;
        }
    }
}
