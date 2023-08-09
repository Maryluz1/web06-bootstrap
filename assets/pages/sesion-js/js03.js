console.log("Sesion JS 03Control de flujo");
console.log("No olvidaremos el reto a Ed");

//-----DEclaración de bloque de código ---------

/*
    Sintaxis:
            {

            }
 Las variables declaradas con let y const solo tendrán alcance (scope) dentro del bloque o bloques anidados.
 
 Si la variable en el bloque, tiene el mismo nombre que una variable de afuera del bloque, se le da prioridad a la variable dentro del bloque.
 
 *Let y const solo tiene alcance dentro del bloque, fuera ya no.
 En el caso de var no existen los bloques, es lo mismo afuera y adentro

 */

 //let y const no se pueden redeclarar
//let firstname = "Lalo";
//const lastname = "Garcia";
var age = "24";


 let firstname = "Sergio";
 const lastname = "Torres";
 var age = "30";

 {
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "azul";
    console.log(`${firstname}`);//Sergio Torres
    console.log( age ); //30

    {
        const colorFavorito = "morado";
        console.log(colorFavorito);
        console.log(firstname);
        {
          console.log(colorFavorito);
          console.log(firstname);
        }
      }
 }

 console.log(`${firstname} ${lastname}`);//Sergio Torres
 console.log( age );
//Var no tiene alcance de bloque, let y const, si.


//---------Condicional IF-ELSE-----------

/*Ejecuta una sentencia si una condicion especifica es avaluada como verdadera.

Sintaxis:
        if( condicion ) sentencia; // Con una instruccion

        if( condicion ) {  //con varias instrucciones
            sentencias;
        }

        if ( condicion ) sentencia;
        else sentencia_si_condicion_es_falsa; // else se jecuta si condicion es falsa

        if ( condicion ){
            sentencias;
        }
        else {
            sentencias;
        }

        if (condicion) sentencias;
        else if(condicion2) sentencia;
        else sentencia_si_condicion2_es_falsa;




        if (condicion 2) sentencia2;
           else if (condicion 3) sentencia3;
               else sentencia

*/

const temperatura = 25;
let mensaje = "Temperatura de ";

if ( temperatura === 22 ){
    mensaje += `${temperatura} grados centigrados es ideal` ; // mensaje = mensaje + nvoTexto
}
else if ( temperatura >= 15 && temperatura<= 21) {
    mensaje += `${temperatura} grados centigrados es fría` ;
}
else if( temperatura>=23 && temperatura <= 30 ){
//else if( temperatura <= 30 &&  temperatura>=23 ){
    mensaje += `${temperatura} grados centigrados es calurosa`;
}
else {
    mensaje = `${temperatura} grados centigrados no es ideal =(` ;    
}

console.log(mensaje);


/* 
// rango de 23 a 30-> es calurosa

else if(temperatura>=23 && temperatura <= 30){
    mensaje += `${temperatura} grados centigrados es calurosa`;
}
} */





//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida
 */
const setVelocidadVentilador = ( velocidad = 0 )=>{
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch (  parseInt( velocidad) ) {
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
            mensaje = "velocidad media"; break;
        default:
            mensaje = "el nivel no existe"; break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado

// console.log(`valor: ? ${setVelocidadVentilador( prompt("Velocidad", 1))}`); // velocidad baja




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12, 1, 2 = invierno.
 mes 3, 4, 5  = primavera
 mes 6, 7, 8  = verano
 mes 9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.


*/
/* const numeroMes = (12)
let msj = "La estación del año es : "
if (numeroMes >=9 && numeroMes >=11){
    msj += `${numeroMes} invierno`;
}
console.log(msj);
 */


//----------- Operador ternario----------------

 /* 
 
 Es el unico operador de JS que tiene 3 operandos.
 Generalmente se utiliza como opcion a la sentencia if-else.

 Sintaxis:
    condicion ? expresionSiLaCondicionEsVerdadera : expresionSiCondicionEsFalsa;

 */

const pagoTarjetaCredito = false;
let msj;
if (pagoTarjetaCredito) msj= "A realizado el pago";
else msj= "No ha realizado el pago de TC";

console.log(`El usuario ${msj}`);



