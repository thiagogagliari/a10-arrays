// EXERCICIO 3 1º array
const numeros = [2,24,17,584,-22]
const numerosOriginal = numeros.slice()
const numerosCopia = numeros.slice()

numeros.push(1985)
console.log(`Adicionando um number no array`,numeros, numerosOriginal, numerosCopia)

//2º array
const string = ['Caneta','Lápis','Papel']
const stringOriginal = string.slice()
const stringCopia = string.slice()

string.pop()
console.log(`Removendo o último item do array`,string, stringOriginal, stringCopia)

//3º array 
const misto = ['Banana','Acerola', 2, 10]
const mistoOriginal = misto.slice()
const mistoCopia = misto.slice()

misto.splice(1,1)
console.log(`Removendo o segundo item do array`,misto, mistoOriginal, mistoCopia)