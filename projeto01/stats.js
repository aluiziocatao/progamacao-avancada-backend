/**
 * Description: Este código utiliza o módulo OS do NodeJS para verificar o estado da memória da máquina
 */

// Impotando o módulo OS do NodeJS
const os = require('os');

// Utilizado desestruturação para criar as variáreis que armazenarão a quantidade de memória disponível e total do pc.
const { freemem, totalmem } = os;

/**
 * console.log(`Memória livre ${parseInt(freemem() / 1024 / 1024)} MB
 *  Memória Total: ${parseInt(totalmem() / 1024 / 1024)} MB`)
*/

// const free = parseInt(freemem() / 1024 / 1024) + " MB";
// const total = parseInt(totalmem() / 1024 / 1024) + " MB";
// const percents = parseInt((free / total) * 100);

// const stats = {
//     free,
//     total,
//     percents
// }

// O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existem no total e a porcentagem que está sendo usada.
const stats = {
    free: `${parseInt(freemem() / 1024 / 1024)} MB`,
    total: `${parseInt(totalmem() / 1024 / 1024)} MB`,
    percents: `${parseInt(parseInt(freemem() / 1024 / 1024) / 
        parseInt(totalmem() / 1024 / 1024) * 100)}%`,
}
console.log(stats)
// Formatando a saída dos dados da memória para uma tabela
console.log("+++++ MEMORY STATS +++++")
console.table(stats)