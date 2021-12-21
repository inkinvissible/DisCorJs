class Usuario {
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
        this.telefono = telefono;
        this.email = email;

    }
    verificacion() {
        while ((!this.email.includes("@")) && (!this.email.includes(".com"))) {
            alert("Su email es inválido");
            this.email=prompt("Ingrese nuevamente su email");
        }

    }
    getDatos() {
        alert("Sus datos son: " + this.nombre + "\n" + this.apellido + "\n" + this.telefono + "\n" + this.email);
    }
}
alert("Le pediremos que ingrese sus datos");
const usuario1 = new Usuario(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su apellido"),
    prompt("Ingrese su teléfono"),
    prompt("Ingrese su Email")
);
usuario1.verificacion();
usuario1.getDatos();



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




