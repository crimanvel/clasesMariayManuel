/*const message = 'Perfecto' // Try edit me
var message2 ='Adios'

// Update header text
document.querySelector('#header').innerHTML = message
var message2 ='Bye'
document.querySelector('#chau').innerHTML = message2

// Log to console
console.log(message)
console.log(message2)*/

// comentar una sola linea
/* comentar un bloque de código */

//var nota;
//let numero2=10;
//const numero3= 10;

// la dif entre var y let es su scope (alcance)
//el let solo tiene un alcance de bloque
// en este ejemplo:
//let numero4 solo existe dentro del if

//console.log(numero4)
//promedio = (numero1+numero2+numero3)/3
//console.log(promedio)
//document.querySelector('#header').innerHTML = promedio

//var nota = 10
/*
if(nota>=6){
    console.log("Usted está aprobado")
}else{
    console.log("Usted esta desaprobado")
}*/

/*
if(nota<=6){
    console.log("Usted esta desaprobado")
}else{
    console.log("Usted está aprobado")
}*/

var grade = 0
if(grade>=6 && grade <=10){
    var condition = true
    console.log("Usted está aprobado")
    console.log(condition)
}else if(grade>=0 && grade<6){
    var condition= false
    console.log("Usted esta desaprobado")
    console.log(condition)}
    else{
    console.log("nota incorrecta")
   }





