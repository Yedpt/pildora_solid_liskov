# Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)

## Descripción

El **Principio de Sustitución de Liskov (LSP)** es uno de los principios SOLID de la programación orientada a objetos. Propuesto por Barbara Liskov en 1987, establece que:

> "Los objetos de una clase derivada deben poder sustituir a objetos de la clase base sin alterar el correcto funcionamiento del programa."

Este principio asegura que una subclase puede reemplazar a su clase base sin afectar la lógica de la aplicación. En otras palabras, los objetos de una clase hija deben poder ser usados donde se espera un objeto de la clase base, sin introducir errores inesperados.

## Objetivo

El LSP tiene como objetivo asegurar que las subclases conserven el comportamiento de sus superclases, permitiendo que una clase derivada extienda la funcionalidad de la clase base sin alterar su uso previsto.

## Ejemplo

### Ejemplo Incorrecto (Violación del LSP)

```javascript
class Pato {
  volar() {
    console.log("El pato está volando");
  }
}

class PatoDeGoma extends Pato {
  volar() {
    throw new Error("Los patos de goma no pueden volar");
  }
}

function hacerVolarPato(pato) {
  pato.volar();
}

const patoReal = new Pato();
const patoDeGoma = new PatoDeGoma();

hacerVolarPato(patoReal);  // Funciona bien
hacerVolarPato(patoDeGoma);  // Error: Los patos de goma no pueden volar
````



### Ejemplo correcto
````javascript
class Pato {
  volar() {
    console.log("El pato está volando");
  }
}

class PatoDeGoma extends Pato {
  volar() {
    console.log("El pato de goma no puede volar, pero flota en el agua");
  }
}

function hacerVolarPato(pato) {
  pato.volar();
}

const patoReal = new Pato();
const patoDeGoma = new PatoDeGoma();

hacerVolarPato(patoReal);  // "El pato está volando"
hacerVolarPato(patoDeGoma);  // "El pato de goma no puede volar, pero flota en el agua"

