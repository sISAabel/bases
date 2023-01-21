class Coche {

  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }

  start() {
	  console.log(`🚗 Bruuumm ${this.brand}`);
  }

  accelerate() {
	  console.log("🚗💨 Wñeeeeeee ");
  }

  breake() {
	  console.log("🛑 🚗 Wiiiiii");
  }
}

let myCar = new Coche("Toyota", "Corolla", "Blanco");

console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.color);

myCar.start();
myCar.accelerate();
myCar.breake();


let name = 'Moi';
let age = 34; // Aunque aparento menos :-)

console.log('Mi nombre es ' + name + ' y tengo ' + age + ' años');  // Comillas simples
console.log("Mi nombre es " + name + " y tengo " , age + " años");  // Comillas dobles
console.log(`Mi nombre es ${name} y tengo ${age} años`); // Template strings

// Cadena escapada
console.log('No es lo mismo tener ' + age + 'años, que tener \'' + age + '\'años');


let firstName = "Moi";
console.log(`Hola ${1}!`); // ?
console.log(`Hola ${"firstName"}!`); // ?
console.log(`Hola ${firstName}!`); // ?


let x = 10;
let y = 5;
console.log("x + y = " + (x + y)); // 15
console.log("x - y = " + (x - y)); // 5
console.log("x * y = " + (x * y)); // 50
console.log("x / y = " + (x / y)); // 2
console.log("x % y = " + (x % y)); // 0


console.log(1/0); //Infinity
console.log(Math.sqrt(-1)); //NaN




let x = 10;
x += 5; // x = x + 5
console.log("x += 5 : " + x); // 15

x -= 3; // x = x - 3
console.log("x -= 3 : " + x); // 12

x *= 2; // x = x * 2
console.log("x *= 2 : " + x); // 24

x /= 4; // x = x / 4
console.log("x /= 4 : " + x); // 6

x %= 3; // x = x % 3
console.log("x %= 3 : " + x); // 0

let z = 2;
let result = z ** 3; // z * z * z
console.log("z ** 3 : " + result); // 8


let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

let z = 0;
console.log(z); // 0


let x = 5;
let y = 10;
console.log(x > y); // false
console.log(x < y); // true

if (x < y) {
  console.log("x es menor que y");
} else {
  console.log("x no es menor que y");
}

let x = 5;
let y = 10;
console.log(x < y && x > 0); // true

// En este ejemplo, x < y es true y x > 0 también es true, por lo que la expresión x < y && x > 0 devuelve true.


let a = 15;
let b = 20;
console.log(a > b || a < 0); // false


let x;
console.log(x); // undefined

x = x || "Default value";
console.log(x); // "Default value"

let y = null;
console.log(y); // null

y = y || "New value";
console.log(y); // "New value"













let x;
console.log(x); // undefined

x ||= "Default value";
console.log(x); // "Default value"

let y = null;
console.log(y); // null

y ||= "New value";
console.log(y); // "New value"






let x = true;
console.log(!x); // false

let y = false;
console.log(!y); // true



let a = 5;
let b = 10;
console.log(!(a < b)); // false










switch (expression) {
  case value1:
    // código a ejecutar si el valor de la expresión es value1
    break;
  case value2:
    // código a ejecutar si el valor de la expresión es value2
    break;
  default:
    // código a ejecutar si el valor de la expresión no es ninguno de los valores especificados en los cases
    break;
}




let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Hoy es Lunes");
    break;
  case "Tuesday":
    console.log("Hoy es Martes");
    break;
  case "Wednesday":
    console.log("Hoy es Miércoles");
    break;
  default:
    console.log("Hoy no es Lunes, Martes ni Miércoles");
    break;
}




let age = 25;
let canEnter = (age >= 21) ? "Puedes entrar" : "No puedes entrar";
console.log(canEnter); // "Puedes entrar"




if (condition) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}

Por ejemplo:

let age = 25;
if (age >= 21) {
    console.log("Puedes entrar a la fiesta");
} else {
    console.log("Lo siento, eres menor de edad");
}



La sintaxis del operador ternario es (1)
E


let mayorOMenor =
    edad >= 18
        ? notaMedia >= 8.5
            ? sueldoTutor < 30_000
                ? 'Beca concedida'
                : 'El tutor excede en ingresos'
            : 'Beca denegada'
        : 'No puede optar por ser menor de edad';
