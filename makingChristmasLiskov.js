// Clase base: Ayudante
class Ayudante {
    envolverRegalos() {
        console.log("Envolviendo regalos...");
    }
}

// Clase hija 1: Payaso (respeta la interfaz de la clase base)
class Payaso extends Ayudante {
    envolverRegalos() {
        console.log("El payaso con la cara partida envuelve regalos con su estilo único.");
    }
}

// Clase hija 2: Esqueleto (respeta la interfaz de la clase base)
class Esqueleto extends Ayudante {
    envolverRegalos() {
        console.log("El esqueleto envuelve regalos perfectamente.");
    }
}

function prepararRegalos(ayudante) {
    ayudante.envolverRegalos();  // Sabemos que cualquier ayudante usará este método
}

// Usando ambas clases hijas
const payaso = new Payaso();
const esqueleto = new Esqueleto();

// ¡Ahora funciona sin problemas!
prepararRegalos(payaso);  // El payaso envuelve regalos con su estilo
prepararRegalos(esqueleto);  // El esqueleto envuelve regalos de manera impecable