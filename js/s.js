// espacio en memoria que almacena un tipo de dato es una "variable"
//numeros enteros o flotantes
//strigs cadena de textos

/*let alumno1 = 7;
let alumno2 = 4;
let alumno3 = 9;

let sumatoriaDeNotas = alumno1+alumno2+alumno3;

console.log("la suma de las notas es:" + sumatoriaDeNotas);

let promedioDeNotas = sumatoriaDeNotas/3;
console.log(+ promedioDeNotas)

let numeroIngresado = prompt("ingrese un numero entero: ");

let multiplicar = numeroIngresado*5;
console.log(multiplicar);

let dividir = multiplicar/2;
console.log(dividir);

let edad =16;
let plata =false;


if (edad >=18 || plata){
    console.log ("podes entrar al bar");
}
else {
    console.log("no podes sos menor")
}




//let horaDeTrabajo = parseInt(prompt("ingresar el valor de una hora de trabajo"));

//let Salario = parseInt(prompt("ingresa la cantidad de horas trabajadas"));

Clase 2 /////////////////////////////////


const EDAD =parseInt(prompt("ingresa tu edad"))
if (EDAD >= 65) {
    console.log("eras adulto mayor");
}
else if (EDAD>= 18 && EDAD <64){
    console.log("eres un adulto")
}
else if (EDAD >= 13 && EDAD <=17){
    console.log("eres un adolescente")
}
else if (EDAD>=0 && edad <=12){
    console.log("eras un niño")
}


//  1)Realizá un programa que permita ingresar un número entero e indique si se trata de un número par o impar.
let numero = parseInt(prompt("Ingresa un número entero:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}
//2-Realizá un programa que permita ingresar dos números enteros e indique cuál de ellos es el mayor.

let primerNumero= parseInt(prompt("ingresa un numero entero"));

let SegundoNumero= parseInt(prompt("ingrese un segundo numero entero"))

if (primerNumero < SegundoNumero){
    console.log("el segundo numero es mas grande que el primero ")
}
else if(primerNumero> SegundoNumero){
    console.log("el primer numero ingresado es mayor que el segundo")
}



//3.Realizá un programa para ingresar tres números enteros e indique cuál de ellos es el mayor y su valor
let primerNumero= parseInt(prompt("ingresa un numero entero"));

let segundoNumero= parseInt(prompt("ingrese un segundo numero entero"));

let tercerNumero= parseInt(prompt("ingresa un tercer numero"));

if (primerNumero > segundoNumero && tercerNumero){
    console.log("el numero mayor es",primerNumero);
}
else if(segundoNumero> primerNumero && tercerNumero){
    console.log("el numero mayor es el ",segundoNumero);
}

else if (tercerNumero> primerNumero && segundoNumero){
    console.log("el numero mayor es el ",tercerNumero);
}

2- Crea una función que imprima todos los números pares del 1 al 50 utilizando un bucle while.

3- Escribe una función que calcule el factorial de un número dado usando un bucle for. El factorial de un número n es el producto de todos los números desde 1 hasta n.

4- Crea una función que reciba un número N y luego imprima los primeros N números impares utilizando un bucle for.

5- Escribe una función que muestre un menú con opciones del 1 al 3. Dependiendo de la opción elegida por el usuario (usando prompt), se debe ejecutar una acción diferente.
6- Crea una función que reciba un número límite y sume todos los números pares desde 1 hasta ese límite usando un bucle while.
7- Escribe una función que pida una palabra al usuario y cuente cuántas letras tiene, utilizando un bucle while.
8- Crea una función que imprima las potencias de 2 desde 2^1 hasta 2^10 utilizando un bucle for.


//1- Escribe una función que imprima los números del 1 al 100. Usa un bucle for para hacerlo.
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "el numero es par"
    } else {
      return "es impar"
    }
  }
  
 
  let numero = parseInt(prompt("Introduce un número entero:"));
  
  console.log(verificarParImpar)
  verificarParImpar(numero);

  let numeros = [1,2,3,40,5];
  numeros.sort((a,b)=>a-b);
  
  console.log(numeros)
  */
