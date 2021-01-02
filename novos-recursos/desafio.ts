
/** 1- Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
 * 
 * var dobro = function(valor) {
 *   return valor * 2
 * }
 * console.log(dobro(10))
*/

const dobro: (valor: number) => number = (valor: number): number => valor * 2

console.log(dobro(10))

/** 2 - Verifique se há espaço para melhorias nesse trecho de código!
 * 
 * var dizerOla = function (nome) {
 *  if (nome === undefined) { nome = "Pessoa" }
 *  console.log("Ola, " + nome)
 * }
 * dizerOla()
 * dizerOla("Anna")
*/

let dizerOla: (nome?:string) => void = (nome:string = 'Pessoa') => {
    console.log(nome)
}

dizerOla()
dizerOla('Anna')

/**
 * 3 - Dado esse array, imprima o menor valor!
 * 
 * var nums = [-3, 33, 38, 5]
 * console.log('???')
 */

 const nums: number[] = [-3, 33, 38, 5]
 console.log(Math.min(...nums));
 
/**
 * 4 - Adicione os elementos de nums em array !
 * 
 * var nums = [-3, 33, 38, 5]
 * var array = [55, 20]
 * console.log(array)
 */

const array: number[] = [55, 20, ...nums]
console.log(array);
 
/**
 * 5.1 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
 * 
 * var notas = [8.5, 6.3, 9.4]
 * var notas1 = notas[0]
 * var notas2 = notas[1]
 * var notas3 = notas[2]
 * console.log(nota1, nota2, nota3)
 */

const notas: number[] = [8.5, 6.3, 9.4]
let [notas1, notas2, notas3] = notas
console.log(notas1, notas2, notas3)

/** 5.2 
 * 
 * var cientista = {primeiroNome: "Will", experiencia: 12}
 * var primeiroNome = cientista.primeiroNome
 * var experiencia = cientista.experiencia
 * console.log(primeiroNome, experiencia)
 */
type Cientista = {
    primeiroNome: string,
    experiencia: number
}

const cientista: Cientista = {
    primeiroNome: "Will",
    experiencia: 12
}

let { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)