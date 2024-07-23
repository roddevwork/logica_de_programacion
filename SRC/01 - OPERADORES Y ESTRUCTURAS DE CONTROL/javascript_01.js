// 01 OPERADORES Y ESTRUCTURAS DE CONTROL
console.log('Javascript : #01 OPERADORES Y ESTRUCTURAS DE CONTROL \n')
console.log('EJECICIOS:\n')
/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

console.log('OPERADORES:\n')

// Operadores aritméticos

console.log(`Suma: 10 + 3 = ${10 + 3}`) // 13
console.log(`Resta: 10 - 3 = ${10 - 3}`) // 7
console.log(`Multiplicación: 10 * 3 = ${10 * 3}`) //30
console.log(`División: 10 / 3 = ${10 / 3}`) // 3.333333
console.log(`Módulo: 10 % 3 = ${10 % 3}`) // 1
console.log(`Exponente: 10 ** 3 = ${10 ** 3}`) // 1000
console.log(`División entera: 10 // 3 = ${parseInt(10 / 3)}`) //3

// Incremento y Decremento
let c = 10
c++
console.log('Incremento:', c)
c--
console.log('Decremento:', c)

// Operadores de comparación
console.log('\nOperadores de comparación:')

// la igualdad estricta, valida tipo y valor
// la igualdas no estricta solo valida valor
console.log(`Igualdad estricta : 10 === 10 es ${10 === '10'}`) //false
console.log(`Igualdad: 10 == "10" es ${10 == '10'}`) // true
console.log(`Desigualdad: 10 !== 3 es ${10 !== 3}`) // ture
console.log(`Mayor que: 10 > 3 es ${10 > 3}`) // true
console.log(`Menor que: 10 < 3 es ${10 < 3}`) // false
console.log(`Mayor o igual que: 10 >= 10 es ${10 >= 10}`) // true
console.log(`Menor o igual que: 10 <= 3 es ${10 <= 3}`) //false

// Operadores lógicos
console.log('\nOperadores lógicos:')

console.log(
	`AND &&: 10 + 3 == 13 and 5 - 1 == 4 es ${10 + 3 == 13 && 5 - 1 == 4}`
) // true
console.log(
	`OR ||: 10 + 3 == 13 or 5 - 1 == 4 es ${10 + 3 == 14 || 5 - 1 == 4}`
) // true
console.log(`NOT !: not 10 + 4 == 14 es ${!10 + 4 === 14}`) // false

// Operadores de asignación
console.log('\nOperadores de asignación:')

my_number = 10 // asignación
console.log('Asignación:')
console.log(`my_number = ${my_number}`)

my_number += 1 // suma y asignación
console.log('Suma y asignación:')
console.log(`my_number += ${my_number} `)

my_number -= 1 // resta y asignación
console.log('Resta y asignación')
console.log(`my_number -= ${my_number} `)

my_number *= 2 // multiplicación y asignación
console.log('Multiplicación y asignación')
console.log(`my_number *= ${my_number} `)

my_number /= 2 // división y asignación
console.log('división y asignación')
console.log(`my_number /= ${my_number} `)

my_number %= 2 // módulo y asignación
console.log(' Módulo y asignación')
console.log(`my_number %= ${my_number} `)

my_number **= 1 // exponente y asignación
console.log(' Exponente y asignaciónn')
console.log(`my_number **= ${my_number} `)

// Operadores de pertenencia
console.log('\nOperadores de pertenencia:')
//Operador in
//Este operador se utiliza para comprobar si una propiedad específica existe en un objeto
console.log('Operador in:')
let miObjeto = { clave: 'valor', otro: 42 }

// Verificar si la propiedad existe en el objeto
console.log('clave' in miObjeto) // true
console.log('otro' in miObjeto) // true
console.log('inexistente' in miObjeto) // false

//Operador instanceof:
//Este operador se utiliza para comprobar si un objeto es una instancia de una clase o constructor específico.
console.log('\nOperador instanceof:')
class MiClase {
	constructor() {
		this.propiedad = 'Hola, soy una instancia de MiClase.'
	}
}

let instancia = new MiClase()

// Verificar si la variable es una instancia de la clase
console.log(instancia instanceof MiClase) // true
console.log(instancia instanceof Array) // false (no es un array)

// Operadores de bit
console.log('\nOperadores de bit:')

let a = 10 // 1010
let b = 3 // 0011
console.log(`AND: ${10 & 3} = ${a & b}`) // 0010
console.log(`OR: ${10 | 3} = ${a | b}`) // 1011
console.log(`XOR: ${10 ^ 3} = ${a ^ b}`) // 1001
console.log(`NOT: ~10 = ${~a}`) // 11110101...
console.log(`Desplazamiento a la derecha: ${10 >> 2} = ${a >> 2}`) // 0010
console.log(`Desplazamiento a la izquierda: ${10 << 2} = ${a << 2}`) // 101000

// Estructuras de control
console.log('\nEstructuras de control:')

// Condicionales
console.log('\nCondicionales (if, else if, else):')
let numero = 10

if (numero > 0) {
	console.log('El número es positivo')
} else if (numero < 0) {
	console.log('El número es negativo')
} else {
	console.log('El número es cero')
}

// Iterativas
console.log('\nIterativas:')

console.log('Bucle For:')
for (let i = 0; i < 5; i++) {
	console.log(`Iteración ${i + 1}`)
}

console.log('\nBucle While:')
let contador = 0

while (contador < 5) {
	console.log(`Iteración ${contador + 1}`)
	contador++
}

console.log('\nBucle Do-While:')
let contador2 = 0

do {
	console.log(`Iteración ${contador2 + 1}`)
	contador2++
} while (contador2 < 5)

// Manejo de excepciones
console.log('\nManejo de excepciones:')
try {
	// Código que puede lanzar una excepción
	throw new Error('Este es un error de ejemplo')
} catch (error) {
	console.error(`Error capturado: ${error.message}`)
} finally {
	console.log('Este bloque se ejecuta siempre, haya o no haya excepción.')
}

console.log('\nDIFICULTAD EXTRA:')
console.log(
	'-Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.'
)
console.log('\nResultado:')

const my_function = () => {
	const array = []
	for (let i = 10; i <= 55; i++) {
		if (i % 2 === 0 && i !== 16 && i % 3 !== 0) array.push(i)
	}
	console.log(array)
}
my_function() // output: 10 14 20 22 26 28 32 34 38 40 44 46 50 52
