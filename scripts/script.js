/*class Usuario {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
        this.telefono = telefono;
        this.email = email;

    }
    verificacion() {
        while ((!this.email.includes("@")) && (!this.email.includes(".com"))) {
            alert("Su email es inválido");
            this.email = prompt("Ingrese nuevamente su email");
        }

    }
    getDatos() {
        alert("Sus datos finales ingresados son: " + this.nombre + "\n" + this.apellido + "\n" + this.telefono + "\n" + this.email);
    }
    toString() {
        return "El nombre del usuario es: " + this.nombre + ". El apellido es: " + this.apellido + ". El teléfono es: " + this.telefono + ". El email es: " + this.email + "\n";
    }
}
alert("Le pediremos que ingrese sus datos");

const userArray = [];
let quantity = 0;
for (let index = 0; index <= quantity; index++) {
    userArray[index] = new Usuario(
        prompt("Ingrese su nombre"),
        prompt("Ingrese su apellido"),
        prompt("Ingrese su teléfono"),
        prompt("Ingrese su Email")
    );
    userArray[index].verificacion();
    userArray[index].getDatos();

}
alert(userArray.toString());
const filtro = (name) =>{
    name=name.toLowerCase();
    const encontrado=userArray.find(elemento => elemento === name);
    if (encontrado==undefined){
        alert("No se ha encontrado al usuario");
    }else{
        alert("Sí, el usuario está en su base de datos");
        
    }
}

filtro(prompt("Ingrese el usuario que se quiere buscar"));


const productoSelected = (producto) => {
    if (producto == "") {
        alert("No se ha ingresado nada");
    }
    return producto;
}
const comprobacion = (seleccion) => {
    seleccion = seleccion.toLowerCase();
    if (seleccion === "manijas") {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 1500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $1.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion))
        }
        alert("Su presupuesto es correcto")

        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto - ((presupuesto * 10) / 100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $" + presupuesto);
        }
        salidaIva(iva());
    }
    if (seleccion === "cerraduras") {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 2500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $2.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        }
        alert("Su presupuesto es correcto");
        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto - ((presupuesto * 10) / 100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $" + presupuesto);
        }
        salidaIva(iva());
    }
    if ((seleccion === "máquinas") || (seleccion === "maquinas")) {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 3500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $3.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        }
        alert("Su presupuesto es correcto");
        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto - ((presupuesto * 10) / 100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $" + presupuesto);
        }
        salidaIva(iva());
    }
}

comprobacion(productoSelected(prompt("Escriba los productos. Los productos son los siguientes \n1. Manijas \n2. Máquinas\n3.Cerraduras")));

*/


class Producto {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }
}
let productos = [];

productos.push(new Producto("751100", "Manija"));
productos.push(new Producto("851100", "Manija"));
productos.push(new Producto("751200", "Manija"));
productos.push(new Producto("753100", "Manija"));
let section = document.querySelector('.row.separar.container-fluid');

for (const producto of productos) {
    let article = document.createElement("article");
    article.className = "articulo col col-12 col-md-6 col-lg-4 carta"
    article.innerHTML = `<div>
                            <img src="../imagenes/ft-nosotros.jpg" class="img-fluid" alt="Imagen de Producto">
                            <h3 class="codigo">${producto.id}</h3>
                            <p class="descripcion">${producto.descripcion}</p>
    
                            <div>
                                <a href="" class="btnCompra">Agregar al Carrito</a>
                            </div>
                        </div>`;
    // Agregar a sección y no al documento
    section.appendChild(article);
}


