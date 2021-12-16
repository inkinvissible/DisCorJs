

const productoSelected = (producto) => {
    if (producto == "") {
        alert("No se ha ingresado nada");
    }
    return producto;
}
const comprobacion = (seleccion) => {
    if ((seleccion === "Manijas") || (seleccion === "manijas")) {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 1500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $1.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion))
        }
        alert("Su presupuesto es correcto")

        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto-((presupuesto*10)/100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $"+presupuesto);
        }
        salidaIva(iva());
    }
    if ((seleccion === "Cerraduras") || (seleccion === "cerraduras")) {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 2500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $2.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        }
        alert("Su presupuesto es correcto");
        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto-((presupuesto*10)/100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $"+presupuesto);
        }
        salidaIva(iva());
    }
    if ((seleccion === "máquinas") || (seleccion === "maquinas") || (seleccion === "Máquinas") || (seleccion === "Maquinas")) {
        let presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        while (presupuesto <= 3500) {
            alert("Su presupuesto es muy chico, por favor, ingrese una nueva cantidad de dinero superior a $3.500");
            presupuesto = parseInt(prompt("Seleccione su presupuesto para las " + seleccion));
        }
        alert("Su presupuesto es correcto");
        alert("El precio de costo de " + seleccion + " es de $" + (presupuesto-((presupuesto*10)/100)));
        const iva = () => {
            let ivaVariable = presupuesto * 0.21;
            presupuesto += ivaVariable;

        }
        const salidaIva = () => {
            alert("Su precio final es: $"+presupuesto);
        }
        salidaIva(iva());
    }
}

comprobacion(productoSelected(prompt("Escriba los productos. Los productos son los siguientes \n1. Manijas \n2. Máquinas\n3.Cerraduras")));

