class Combo {
    constructor(nombre, ingredientes, precio) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = parseFloat(precio);
    }
    detalle() {
        alert('Eligió el combo de ' + this.nombre + '. Contiene: ' + this.ingredientes + '. Y su precio es de $' + this.precio);
    }
}

let combo1 = new Combo("McPollo", ['Un medallon de Pollo', 'Lechuga', 'Mayonesa'], 250);
let combo2 = new Combo("TripleMac", ['Tres medallones de Carne', 'Salsa Especial', 'Queso Cheddar', 'Lechuga', 'Pepino Crocante', 'Cebolla'], 150);

function cantidad() {
    let numero = +prompt("¿Cuántos combos desea? ");
    while (numero != null) {
        if (numero != null) {
            let mensaje = confirm('Pediste '+numero+' combos.\n¿Confirmar compra?');
            if (mensaje) {
                alert("¡Gracias por su compra!");
                break;
            } else {
                numero = +prompt("¿Cuántos combos desea? ");
            }
        }
    }
}

function elegirCombo() {
    let elegir = +prompt('Bienvenido! \n¿Qué combo desea? \nCOMBO 1. ' + combo1.nombre + '\nCOMBO 2. ' + combo2.nombre + '\nPresione 9 para salir.');
    while (elegir != "9") {
        if (elegir == "1") {
            combo1.detalle();
            cantidad();
            break;
        } if (elegir == "2") {
            combo2.detalle();
            cantidad();
            break;
        } else {
            elegir = +prompt('Bienvenido nuevamente! \n¿Qué combo desea? \nCOMBO 1. ' + combo1.nombre + '\nCOMBO 2. ' + combo2.nombre + '\nPresione 9 para salir.');
        }
    }
}

elegirCombo();