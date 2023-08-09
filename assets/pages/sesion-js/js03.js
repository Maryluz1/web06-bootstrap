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
let mensaje = "Temperatura de "

if ( temperatura === 22 ){      // si la temperatura = a 22 imprimira que la temperatura es ideal, si es diferente imprimira que la temperatura no es la ideal.
    mensaje += `${temperatura} grados centigrados es ideal` ;// += operador de concatenacion // mensaje - mensaje + nvoTexto
    
}

else if( temperatura >= 15 && temperatura<= 21){
    mensaje += `${temperatura} grados centigrados es fría`
} 


else if(temperatura>=23 && temperatura <= 30){
    mensaje += `${temperatura} grados centigrados es calurosa`;
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
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */
const setVelocidadVentilador = ( velocidad = 0)=>{
    let mensaje;

    //la condicional switch utiliza la comparacion estricta ( === )
    switch ( velocidad ){
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break;   
        case 2:
            mensaje = "velocidad media";
            break;   
        default:
            mensaje = "el nivel no existe";
            break;        
    }
    return mensaje;
}
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador (1)}`);
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador (8)}`);
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador ("2")}`);