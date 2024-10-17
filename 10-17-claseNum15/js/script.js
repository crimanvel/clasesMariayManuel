// Operacion AND && - Realizar un programa en donde el usuario pueda ingresar su edad y si tiene una entrada válida (sí/no) para el evento.
/*var edad = prompt("Introduce tu edad:");
var entrada = prompt("¿Tiene su entrada?");

if(edad>=18 && entrada =="Sí"){
console.log ("Aquí está su entrada")}
else {
    console.log ("Lo siento, no cumple con las condiciones")}*/


// Operación OR || -  Requisitos de ingreso y permanencia en Polonia - Aduana Polonia. 
var pasaporte= prompt("¿Tiene pasaporte europeo?")
var visapolaca= prompt("¿Tiene visa polaca vigente?")
var permisoderesidencia= prompt("¿Tiene permiso de residencia vigente?")

if(pasaporte=="sí" || visapolaca=="sí" || permisoderesidencia=="sí"){
    console.log ("Bienvenido a Polonia")}
else {
    console.log ("Acceso denegado. Fuera, ilegal")}


// Operación NOT ! - Dado un número, verifica si no es positivo utilizando el operador ! directamente. 
var numero1 = prompt("Ingrese un número");
var noEsPositivo =  !(numero1 > 0);

console.log(noEsPositivo)