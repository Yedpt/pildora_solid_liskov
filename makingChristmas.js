// Clase base: Ayudante
class Ayudante {
    envolverRegalos() {
        console.log("Envolviendo regalos...");
    }
}

// Clase hija 1: Payaso (NO respeta la interfaz)
class Payaso extends Ayudante {
    envolverRegalos() {
      // El payaso usa un método completamente diferente, con un nombre distinto
        this.envolverConGlobos();
    }
    envolverConGlobos() {
        console.log("El payaso envuelve regalos con globos.");
    }
}


// Clase hija 2: Vampiro (NO respeta la interfaz)
class Vampiro extends Ayudante {
    envolverRegalos() {
        // El vampiro hace algo extraño, ignorando la lógica original
        console.log("El vampiro se niega a envolver regalos.");
    }
}

function prepararRegalos(ayudante) {
    ayudante.envolverRegalos();  // Se espera que todos los ayudantes usen este método
}

// Usando ambas clases hijas
const payaso = new Payaso();
const vampiro = new Vampiro();

// ¡Este código no funciona como debería!
prepararRegalos(payaso);  // El payaso no envuelve regalos correctamente
prepararRegalos(vampiro);  // El vampiro ni siquiera envuelve regalos