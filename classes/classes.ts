class Data {
    constructor(
        public dia:number = 1,
        public mes:number = 1,
        public ano:number = 1970
    ) { }
}

const aniversario = new Data(9, 5 ,1989)
console.log(aniversario)

/**
 * Desafio Produto
 * Atributos: nome, preco, desconto
 * Criar  o contrutor
 * OBS.: Desconto é opcional (valor padrão 0)
 * OBS.2: Criar dois produtos: passando 2 e 3 parametros
 */

class Produto {
    constructor(
        public nome: string ,
        public preco: number,
        public desconto: number = 0
    ) {}

    resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% OFF!)`
    }

    precoComDesconto(): string {
        return `${this.preco - (this.preco * this.desconto)}`
    } 

}

const Tv = new Produto('Smart TV', 1200)
const Notebook = new Produto('Notebook Acer', 1100, 0.1)

console.log(Tv)
console.log(Notebook.resumo());


/**
 * Exercício 1 - Classe
 * 
 * function Moto(nome) {
 *     this.nome = nome
 *     this.velocidade = 0
 *  
 *     this.buzinar = function() {
 *         console.log('Toooooooooot!')
 *     }
 *  
 *     this.acelerar= function(delta) {
 *         this.velocidade = this.velocidade + delta
 *     }
 * }
 *  
 * var moto = new Moto('Ducati')
 * moto.buzinar()
 * console.log(moto.velocidade)
 * moto.acelerar(30)
 * console.log(moto.velocidade)
*/

class Moto {

    velocidade:number = 0

    constructor(public nome:string) {

    }

    buzinar():void {
        console.log('Tooooooooooot!');
    }

    acelerar(delta: number): void {
        this.velocidade += delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

/**
 * Exercício 2 - Herança
 * 
 * var objeto2D = {
 *     base: 0,
 *     altura: 0
 * }
 *  
 * var retangulo = Object.create(objeto2D)
 * retangulo.base = 5
 * retangulo.altura = 7
 * retangulo.area = function() {
 *     return this.base * this.altura
 * }
 * console.log(retangulo.area())
 */

abstract class Objeto {
    
    constructor(public base:number = 0, public altura:number =0){}

    abstract area(): number
}

class Retangulo extends Objeto {

    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5,7)
console.log(retangulo.area())


class Estagiario {
    private _primeiroNome = ''

    get primeiroNome() {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if(nome.length <=2){
            this._primeiroNome = ''
        }else{
            this._primeiroNome = nome
        }
    }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'De';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Deeved'
console.log(estagiario.primeiroNome);



