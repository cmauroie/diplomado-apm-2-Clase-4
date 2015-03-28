/* Array en JavaScript*/
'use strict';
var my_array = new Array();
var other_array = [];

my_array = [1,2,3,4,5,6,6,5,5,456546,65654,54,6456,46];

console.log(my_array);

console.log(my_array[3]);

other_array = ['a','n','b','z','f'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion

my_array.push(39);

other_array.push('hola mundo');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elelmento

my_array.pop();

other_array.pop();

// eliminar el primer elemento
my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);

// Organizar elementos+
my_array.sort();

other_array.sort();
console.log(other_array);

console.log(my_array);

task = ['comer','dormir','jugar'];

console.log(task);
task.splice(1,3,"Estudiar","saltar","correr");
console.log(task);