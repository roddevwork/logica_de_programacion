// *00 SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

/*

 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

//* JavaScript

// Ejercicios:
console.log('EJECICIOS:\n')

//-> 1-Crea un comentario en el código y coloca la URL del sitio web oficial
console.log(
	'1-Crea un comentario en el código y coloca la URL del sitio web oficial:'
)
console.log(
	'Sitio el de MDN : ' +
		' https://developer.mozilla.org/es/docs/Web/JavaScript\n'
)
console.log('Otro sitio : ' + 'https://www.javascript.com\n')

//-> 2-Representa las diferentes sintaxis que existen de crear comentarios
console.log(
	'2-Representa las diferentes sintaxis que existen de crear comentarios:'
)
// un comentario de una línea
console.log('// un comentario de una línea')

/* Éste es un comentario de múltiples líneas
  Éste es un comentario de múltiples líneas
  Éste es un comentario de múltiples líneas
 */
console.log('/*')
console.log('Éste es un comentario de múltiples líneas')
console.log('Éste es un comentario de múltiples líneas')
console.log('Éste es un comentario de múltiples líneas')
console.log('*/')

//-> 3-Crea una variable (y una constante si el lenguaje lo soporta).
console.log(
	'\n3-Crea una variable (y una constante si el lenguaje lo soporta):'
)
let my_variable = 'contenido'
const AGE = 36

console.log('my_variable = ' + "'", my_variable, "'")
console.log('AGE = ', AGE)

//-> 4-Crea variables representando todos los tipos de datos primitivos
console.log(
	'\n4-Crea variables representando todos los tipos de datos primitivos:'
)
// son 8 tipos de datos. 7 primitivos y 1 Object

let my_number = 30
let my_float = 20.55
console.log('number = ', my_number)
console.log('float =  ', my_float)

let my_string = 'I am a string'
console.log("my_string = '", my_string, "'")

my_boolean_true = true
my_boolean_false = false
console.log('boolean_True = ', my_boolean_true)
console.log('boolean_False = ', my_boolean_false)

let nulo = null
console.log('null = ', nulo)

let indefinido
console.log('Undefined = ', indefinido)

let bigNumber = 9007199254740992n
console.log('bigInt = ', bigNumber) // BigInt se utiliza para numeros grandes

//-> 5-Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
console.log(
	"\n5-Imprime por terminal el texto: '¡Hola, [y el nombre de tu lenguaje]!':"
)
console.log('Hola, JavaScript\n ')
