/*console.log("Hello, world, Javascript!")

//variáveis
var x = 10 //number
//formas mais convenientes de declarar variáveis
let y = 50
const z = "''"

y = 20
console.log(y)

if(1){
    let y = 15
    console.log(y)
}

console.log(y)

//tipos

const nome = "Aluizio"
console.log(nome)
console.log(typeof nome)

const idade = 31
console.log(idade)
console.log(typeof idade)

const peso = 72.3
console.log(peso)
console.log(typeof peso)

//null
const nada = null
console.log(nada)
console.log(typeof nada)

//undefined
let indefinido
console.log(indefinido)
console.log(typeof indefinido)

//bool
const vouf = true
console.log(vouf)
console.log(typeof vouf)

//array
const vetor = ['PHP', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)


//object literals
const usuario = { 
    email: 'eu@email.com',
    senha: 'teste123', 
    nome: 'Eu', 
    idade: 31
}

console.log(typeof usuario)

const nome = 'Eu Fulano'
console.log(nome.length)
//const stringParaVetor = nome.split('')
//console.log(stringParaVetor)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
const nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo)

console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,6))

//arrays, vetores, listas
*/
//const lista = ['a','b','c','d','e']
/*console.log(lista.length)
console.log(lista[2])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
//lista = 'Testando atribuição de texto para lista.'
lista.push('g')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
lista.shift()
lista.shift()
console.log(lista)
lista.unshift('h')
console.log(lista)

//object literals - estruturas que descrema entidade.
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    tamanho: ['P', 'M', 'G'],
    'Cor': 'azul'
}

console.log(produto['preco'])

//destructuring - recurso para objetos, para extrair conteúdo de dentro deles
const { preco, emEstoque } = produto
console.log(preco)
console.log(emEstoque)

const [char1, char2] = lista
console.log(char1)
console.log(char2)

//JSON - JavaScript Object Notation
const doguinho = {
    nome: 'Scooby',
    idade: 10
}

const json = JSON.stringify(doguinho)
console.log(json)
console.log(typeof json)
const json2 = JSON.parse(json)
console.log(json2)
console.log(typeof json2)

const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10,}')
console.log(jsonErrado)

Desafio 1: armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedade n1, n2, n3, n4, n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vetor = [1, 2, 3, 4, 5]

const objeto = {
    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4]
}

const { n1, n2, n3, n4, n5 } = objeto

const jsonVetor = JSON.stringify({ n1,n2,n3,n4,n5 })
console.log(jsonVetor)
console.log(typeof jsonVetor)

Desafio 2: desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básica. Em outras palavras: crie um objeto calculadora, inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10, num2 = 20

const calculadora = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}

const jsonCalc = JSON.stringify(calculadora)
console.log(jsonCalc)
*/
//estruturas, métodos de listas, funções

// const n = 100
// if(n > 10){ // > < >= <= == !=
//     console.log('Teste de entrada no if.')
// }

// const texto = '0'
// if(texto === 0)
//     console.log("Os dados são iguais.")
// else if(true) 
//     console.log('Segundo if - if aninhado.')
// else
//     console.log('Saída...') // erro na hora de pensar o código...

// //operador ternário
// const resultado =  n > 20 ? true : false
// console.log(resultado)
// console.log(typeof resultado)

// //repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

// let contador = 0
// const lista = [1, 7, 3, 64, 2, 0]
// while(contador < lista.length){
//     console.log('O \'elemento\' da\n vez é ' + lista[contador] + '.')
//     contador++ // contador = contador + 1
// }

// const outraLista = ['a', 'b', 'd', 'e', 'c']
// for(let contador = 0; contador < outraLista.length; contador++)
//     console.log(`O elemento da 
//     vez é ${outraLista[contador]}.`) //template literais, ou template strings

// const testeLiteral = (`\``==="`")
// console.log(`\\`)

// const a=3, b=5
// console.log('Oito é '+(a+b)+' \ne não '+(2*a+b))
// console.log(`Oito é ${(a+b)} 
// e não ${(2*a+b)}`)

// //métodos de listas-arrays-vetores
// const nomes = ['Abimael','Cleyciane','Paulo','Aluizio']
// nomes.forEach(function(nome){
//     console.log(nome)
// })

// const nomesModificados = nomes.map(function(nome){
//     if(nome === 'Paulo'){
//         nome = 'O Grande'
//         return nome
//     }else
//         return nome
// })

// nomesModificados.forEach(function(nome){
//     console.log(nome)
// })

// const numerosGrandes = ['60','1','9','17','99','94'].filter(function(numero){
//     return (numero>10)
// })

// numerosGrandes.forEach(function(numero){
//     console.log(numero)
// })

// console.log(numerosGrandes.reduce(function(total,numero){
//     return parseInt(total)+parseInt(numero)
// }))

// function minhaFuncao(){
//     console.log("Teste");
// }
// minhaFuncao();

// const funcao = function minhaFuncao(nome, sobrenome){
//     // console.log(`O nome completo é ${nome} ${sobrenome}.`)
//     // console.log(typeof nome, typeof sobrenome);
//     return (`O nome completo é ${nome} ${sobrenome}.`);
// }
// const nome = 'Aluízio'
// const sobrenome = 'Catão'
// console.log(funcao(nome, sobrenome))
// funcao(10, 31)

// //arrow function
// const soma = (a, b) => {
//     return a + b;
// }
// console.log(soma(2,3))

// const lista = ['esse cara é maior', 'b', 'c', 'd']

// console.log(lista.map(elemento => elemento.length ))

// //Exemplo de Clousure
// function makeFunc() {
//     const name = "Mozilla";
    
//     function displayName() {
//         console.log(name);
//     }
    
//     return displayName;
// }
  
// const myFunc = makeFunc();
// myFunc();






let x = 20
const fora = () => {
    let x = 18
    function somarXMais5(){
        console.log(x + 5);
    }
    return somarXMais5();
}
fora()

//REsoolução do professor 01
// let x = 10
// let fora = () => (() => x+ 5)()
// console.log(fora())
// console.log(typeof fora())

//REsolução do Professor 02
// let x = 10
// const fora = () => ((x + 7), () => x + 5) ()
// console.log(fora())
//Fim da resolução do professor
//Fim do Exemplo de Clousure