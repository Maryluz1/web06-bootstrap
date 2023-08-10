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

    personasEnCh30[1].splice(3, 1, "Brayan"); //Eliminando a Leo y cambiandolo por brayan
    console.table( personasEnCh30 );


    // --------Iterando todos los elementos-----------

    for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {
        for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {
            console.log( personasEnCh30[ equipo ][ persona ] );        
        }    
    }