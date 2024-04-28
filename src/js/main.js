// Ejercicio 1 
console.log("Ejercicio 1");
const nombres = ["Juan", "María", "Carlos", "Ana", "Luis", "Laura", "Pedro", "Sofía", "Diego", "Elena"];
console.log(nombres.sort());

// Ejercicio 3 
console.log("Ejercicio 3");
const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

let contador = 0;

for(let i=0; i<arrayNumeros.length; i++){
    contador += arrayNumeros[i];
}

console.log(contador);

// Ejercicio 4 
console.log("Ejercicio 4");
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero"
};

for(let elemento in persona){
    console.log(`${elemento}: ${persona[elemento]}`);
}

// Ejercicio 5 
console.log("Ejercicio 5");
let contador2 = 0;

for(const elemento of arrayNumeros){
    contador2 += elemento;
}

console.log(contador2);

// Ejercicio 6 
console.log("Ejercicio 6");
nombres.forEach(nombre=> console.log(nombre));

// Ejercicio 7 
console.log("Ejercicio 7");
const arrayNumerosx2 = arrayNumeros.map(numero=> numero*2);
console.log(arrayNumerosx2);

// Ejercicio 8 
console.log("Ejercicio 8");
const numerosPares = arrayNumeros.filter(numero => numero%2==0);
console.log(numerosPares);

// Ejercicio 9 
console.log("Ejercicio 9");
console.log(arrayNumerosx2.some(numero => numero>10));

// Ejercicio 10 
console.log("Ejercicio 10");
console.log(arrayNumerosx2.every(numero => numero>0));

// Ejercicio 11 
console.log("Ejercicio 11");
const numerosDesordenados = [332,2,45,23,7,89,3,54,1035];
console.log(numerosDesordenados.sort((a,b)=>(a-b)));

// Ejercicio 12 
console.log("Ejercicio 12");
console.log(numerosDesordenados.reverse());

// Ejercicio 13 
console.log("Ejercicio 13");
const nuevoArray = numerosDesordenados.toReversed();
console.log(nuevoArray);

// Ejercicio 14 
console.log("Ejercicio 14");
let contador3 = 0;
arrayNumeros.forEach(numero =>(contador3 += numero));
console.log(contador3);

// Ejercicio 15 
console.log("Ejercicio 15");
let contador4 = 0;

for (const elemento in persona){
    if(typeof(persona[elemento])=="string"){
        contador4++;
    }
}
console.log(contador4);

// Ejercicio 16 
console.log("Ejercicio 16");
const personasObjeto = [
    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid",
        profesion: "Ingeniero"
    },
    {
        nombre: "María",
        edad: 25,
        ciudad: "Barcelona",
        profesion: "Diseñadora"
    },
    {
        nombre: "Pedro",
        edad: 35,
        ciudad: "Sevilla",
        profesion: "Abogado"
    }
];

personasObjeto.forEach(elemento => console.log(elemento));

// Ejercicio 17 
console.log("Ejercicio 17");
const longitudString = nombres.map(nombre => nombre.length)
console.log(longitudString);

// Ejercicio 18 
console.log("Ejercicio 18");
const stringA = nombres.filter(nombre => nombre.includes("a"));
console.log(stringA);

// Ejercicio 19 
console.log("Ejercicio 19");
console.log(nombres.some(nombre=> nombre.length>10));

// Ejercicio 20 
console.log("Ejercicio 20");
const array = ["holiae", "iae", "mloiae", "wdiaef"];
let confirmacion = array.every(palabra => palabra.includes("a" || "e" || "i" || "o" || "u" ))
console.log(confirmacion);

// Ejercicio 21 
console.log("Ejercicio 21");
const libros = [
    {
        titulo: "El Señor de los Anillos",
        paginas: 1178
    },
    {
        titulo: "Cien años de soledad",
        paginas: 432
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        paginas: 100
    },
    {
        titulo: "1984",
        paginas: 328
    }
];

const libros300Pag = libros.filter(libro => libro.paginas>300);
console.log(libros300Pag);

// Ejercicio 22 
console.log("Ejercicio 22");
const numerosDivisibles3 = arrayNumeros.filter(numero => numero%3==0);
console.log(numerosDivisibles3);

// Ejercicio 23 
console.log("Ejercicio 23");
const numerosMayores10 = nombres.filter(nombre => nombre.length>5);
console.log(numerosMayores10);

// Ejercicio 24 
console.log("Ejercicio 24");

const personas = [
    {
        nombre: "Juan",
        edad: 30
    },
    {
        nombre: "María",
        edad: 25
    },
    {
        nombre: "Pedro",
        edad: 35
    },
    {
        nombre: "Luisa",
        edad: 13
    }
];

const mayoresEdad = personas.filter(persona => persona.edad>=18);
console.log(mayoresEdad);

// Ejercicio 25 
console.log("Ejercicio 25");
const valoresBooleanos = [true, false, true, true, false];
const verdaderos = valoresBooleanos.filter(valor => valor == true);
console.log(verdaderos);

// Ejercicio 26 
console.log("Ejercicio 26");
const cuadrados = arrayNumeros.map(numero => numero**2);
console.log(cuadrados);

// Ejercicio 27 
console.log("Ejercicio 27");
const personasMayuscula = nombres.map(nombre => nombre.toUpperCase());
console.log(personasMayuscula);

// Ejercicio 28 
console.log("Ejercicio 28");
const productos = [
    {
        nombre: "Camisa",
        precio: 25.99
    },
    {
        nombre: "Pantalón",
        precio: 39.99
    },
    {
        nombre: "Zapatos",
        precio: 59.99
    },
    {
        nombre: "Bufanda",
        precio: 12.50
    }
];

const productosPrecio = productos.map(producto => producto.precio);
console.log(productosPrecio);

// Ejercicio 29 
console.log("Ejercicio 29");

const nombresPersonas = personas.map(persona => persona.nombre);
console.log(nombresPersonas);

// Ejercicio 30 
console.log("Ejercicio 30");
const raizCuadrada = arrayNumeros.map(numero => numero**0.5);
console.log(raizCuadrada);