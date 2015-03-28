/* objetos y funciones */

var my_object = new Object();

var other_object = {};

var my_object = {
	firstName: 'mauricio',
	lastName: 'idárraga',
	phone: '123123'
};

console.log(my_object.firstName);
console.log(my_object['lastName']);

var key;

for (key in my_object){
 console.log(my_object[key]);
}

// Funciones

function test(){
	console.log('ejecutando como funcion');
}

test();

//usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();