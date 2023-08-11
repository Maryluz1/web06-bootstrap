console.log("Sesion JS04 matrices y bucles");

// Declaramos un arreglo de 2 dimensiones (matriz).
// Arrays anidados 
// [ [],  [],  [] ]


const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /* ByteMe */ //indice 0
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* PerryCode */ //indice 1
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* BugBusters */ //indice 2

    ];
    console.log(`Integrantes de BugBusters: ${ personasEnCh30[2]}`);//"Lu"  , "Leo"   , "Daniel"  , "Gina"
    console.log(`Integrantes de BugBusters: ${ personasEnCh30[2]}`);
    console.log(`BugBusters integrante n. 1: ${personasEnCh30[2][0]}`);//lu // Se pone primero el indice donde esta el arreglo y luego el indice donde se encuentra lu.

    //

    personasEnCh30[1].splice(3, 1, "Brayan"); //// En la historia Leo tiene exceso de amonestaciones.
    // Hay que reemplazar el nombre de Leo en PerryCode por Bryan.
    
    // personasEnCh30[1][3] = "Brayan";
    personasEnCh30[1].splice(3, 1, "Brayan");
    console.table( personasEnCh30 ); 
    
    
    // ------------- Iterando todos los elementos
    /*
    const personasEnCh30 = [ 
        [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  indice 0, ByteMe(404) 
        [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,   indice 1, PerryCode 
        [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]     indice 2, BugBusters 
    ];
    */ 
    
    console.log( personasEnCh30[0][2]  ); // Anneth
    
    // Este for itera sobre los equipos integradores
    for (let equipo = 0; equipo <  personasEnCh30.length  ; equipo++) {  
        console.log(`Equipo ${equipo} : ${personasEnCh30[equipo]}` )  ;
        
        // Este for itera sobre las personas
        for( let persona = 0; persona < personasEnCh30[equipo].length ; persona++ ){
         console.log(`Participante: ${ personasEnCh30[equipo][ persona ] }`);
        } 
    }
    
    // ----------------------- Uso de for... of ------------------
    /* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
    Sintaxis:
        for (const iterator of object) {
        
        }
    */
    console.table( personasEnCh30 ); 
    
    const myPet = "Kraken";
    for (const character of myPet  ){
        console.log( character );
    }
    
    for (const equipo of personasEnCh30 ) {
        console.log( equipo ); // Arreglo de equipos
        for (const persona of equipo) {
            console.log( persona ); //  Persona de cada equipo
        }
    }
    
    
/*     const myPet = "Kraken";
    for (const character of myPet  ){
        console.log( character ); */


        myPet.split("").forEach( character => console.log( character ))  

    // Refactoriza lo anterior con forEach

     // For each no funciona en string, pero con .split si se puede. Split divide el string en una lista ordenada y las coloca en una matriz (array) y devuelve la matriz.

     


     //------------Uso de break en ciclos------------
     //Break no detiene la ejecucion de la iteracion en curso y termina el ciclo.

     for(let index = 0; index < 10; index++){
        if ( index >= 5 ) break;
        console.log( index );
     }


     //Realizar tablas de multiplicar cel 1 al 5 con for tradicional

    /*  1 * 1 = 1
     1 * 2 = 2
     ...... 
     5 * 9 = 45
     5 * 10 = 50
     */
    for(let i = 1; i <=5; i++){
        for (let j = 1; j <= 10; j++){
            console.log(`${i} * ${j} = ${ i * j }`);
        }
    }

    console.log("=======Uso de break=======")
//Realizar la multiplicacion hasta el 4
//1*1, 1*2, 1*3, 1*4.... 5*3, 5*4

    for(let i = 1; i <=5; i++){
        for (let j = 1; j <= 10; j++){
            if ( j === 5 ) break;
            console.log(`${i} * ${j} = ${ i * j }`);
        }
    }


    console.log("=====Uso de break con tag=====")
//Realizar la multiplicacion hasta el 2 *4
//1*1, 1*2, 1*3, 1*4.... 5*3, 5*4

    for(let i = 1; i <=5; i++){
        for (let j = 1; j <= 10; j++){
            if ( j === 2 ) break;
            console.log(`${i} * ${j} = ${ i * j }`);
        }
    }



    console.log("===== Uso de continue con tag =======")
// Realizar la multiplicación hasta el  3
// 1*1, 1*2, 1*3 ..... 2*3... 5*3
continuaCicloSuperior: 
for (let i = 1; i <= 5; i++) {    
    for (let j = 1; j <= 10; j++) {
        if ( j > 3 ) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);        
    }    
}

//Crea un programa en JavaScript en donde compares las variables, y muestre en consola false:
//let x = 1;
//let y = "1";