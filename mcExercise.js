class ayudante {
    envolverRegalos() {
        console.log("Envolviendo regalos...");
    }
}

class payaso extends ayudante {
    envolverRegalos() {
        console.log("El payaso envuelve regalos con su estilo único.");
    }
}

class esqueleto extends ayudante {
    envolverRegalos() {
        console.log("El esqueleto envuelve regalos perfectamente.");
    }
}

function prepararRegalos(ayudante) {
    ayudante.envolverRegalos();
}

const payasoAyudante = new payaso();
const esqueletoAyudante = new esqueleto();

prepararRegalos(payasoAyudante);
prepararRegalos(esqueletoAyudante);