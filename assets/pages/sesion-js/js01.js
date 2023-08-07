console.log("Bienvenido a la sesión Js 01")

// 7 Datos primitivos:
// numbers, string, boolean, null, undefined, gigint, sybol

//Tipos de datos en JS
//Primitivos y no Primitivos

//No primitivos
//objet

//Tipo de dato string
const stringData = "Holi crayoli"
console.log( stringData );

//Tipos de datos number:
//números positivos, negativos, decimales, NaN, +infinity, -infinity.
//para un salto de linea se puede utilizar \n, pero en template string no es necesario.
console.log( `Tipos de datos number: ${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}` );
console.log("---\n----");
console.log(` ------ `);
console.log(` -- \n "texto entre comillas dobles" `);
console.log(` Valor máximo representable en Java Script : ${ Number.MAX_VALUE }`) //1.79769313486
console.log( `Si el valor mayor a MAX_VALUE como 1.79e310: ${1.79e310}`) //Infinity
console.log(`Valor (entero) Máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER }`)
//Cuando se realizan operaciones que exceden los limites de MAX_SAFET_INTEGER
//se produce un apérdida de precision


console.log(`MAX_SAFE_INTEGER +1: ${Number.MAX_SAFE_INTEGER + 1 }`)
console.log(`MAX_SAFE_INTEGER +2: ${Number.MAX_SAFE_INTEGER + 2 }`)
console.log(`MAX_SAFE_INTEGER +3: ${Number.MAX_SAFE_INTEGER + 3 }`)
console.log(`MAX_SAFE_INTEGER +4: ${Number.MAX_SAFE_INTEGER + 4 }`)

//Tipo de dato boolean
//se tiene dos estados: true / false




//agregar una funcion que muestre el nombre completo en mayusculas


//-------------------------------------------------
//Conversión explícita de datos
const horaDescanso = 13;
console.log ("Hora Descanso " + horaDescanso + "h." ); //Concatenación
const horaDescansoTxt = String( horaDescanso);
console.log("Hora Descanso " + horaDescansoTxt + "h. "); //Concatenación
console.log("Hora de retorno: " + horaDescanso + .15); // 13.050.15

const colorVerde = 0x008000;//32768
console.log(`El valor RGB del color verde es: ${colorVerde}`);
console.log(`El valor RGB del color verde es: ${  colorVerde.toString() }`);
console.log(`El valor RGB del color verde es: ${  colorVerde.toString(16).padStart(6, "0") }`);

//Conversion a Number
const myAgeTxt = "25";
const sumatoria = 10 + myAgeTxt;
console.log(`Valor de la sumatoria ${sumatoria}`);

console.log(`Valor de la sumatoria usando Number(): ${ 10 + Number(myAgeTxt)}`);
console.log(`Valor de la sumatoria usando Number(): ${ 10 + parseInt( myAgeTxt )}`);

//Diferencias entre usar Number () y parseInt()
//-Number  convierte enteros y decimales
//-parseInt convierte solo enteros
console.log( parseInt( 100.567));//100
//- Number devuelve NaN si la cadena contiene algun caracter no numérico
//parseInt convierte los enteros hasta encontrar un caracter no numerico.
//           Si la entrada no comienza con un valor numérico, devuelve NaN
console.log(Number("123 - 456"));



console.log( "parseInt( '$123 - 456'.slice(1) ) :" +  parseInt( "$123 - 456".slice(1) ) ); // 123

//Conversion a booleano
//En la conversion de boolean los siguiente valores son false:
//"", 0, null, indefined
console.log("Boolean(1)): " + Boolean(1) ); //true:
console.log("Boolean(1000)): " + Boolean(1000) ); //true:
console.log("Boolean(`Hola`)): " + Boolean("hola") ); //true:
console.log("Boolean(`false`)): " + Boolean("false") ); //true:
console.log("Boolean(` `)): " + Boolean(" ") ); //true: porque los espacios tienen un valor 

//Number
//[] -> 0, [30] -> 30, [30,33] -> NaN, false -> 0, true -> 1
//String
//[] -> "" , [12,2] -> "12,2", function(){}-> "function()[]", {} -> [objet, objet]
String(JSON.stringify( { name: "sergio"});

//