// Creo la función para la pila

class Pila {
    constructor() {
        this.cola = []; 
        this.tamano = 0; 
    }

    //Agregar un elemento a la pila.
    push(elemento) {
        this.cola.unshift(elemento); 
        this.tamano++; 
    }

    //Elimino y devuelvo el último elemento de mi pila.
    pop() {
        if (this.isEmpty()) {
            return "Pila vacía";
        }
        this.tamano--; 
        return this.cola.pop();
    }

    //Verifico si la pila está vacía.
    isEmpty() {
        return this.tamano === 0;
    }

    //Traer todos los elementos de la pila.
    getElements() {
        return this.cola;
    }
}

//Implemento la pila.
let nuevaPila = new Pila();

nuevaPila.push(4);
nuevaPila.push(3);
nuevaPila.push(2);
nuevaPila.push(1);
nuevaPila.push(0);

console.log(nuevaPila.isEmpty()); 
console.log(nuevaPila.tamano); 
console.log(nuevaPila.getElements()); 
console.log(nuevaPila.pop());
console.log(nuevaPila.tamano); 
console.log(nuevaPila.getElements());

// Vaciar pila
nuevaPila.cola = [];
nuevaPila.tamano = 0;

//Ver si la pila si está vacía.
console.log(nuevaPila.isEmpty());