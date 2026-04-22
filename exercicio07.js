let lista = [1 , 3, 5, 4, 6, 7, 2, 19];
let somaDeImpares = 0;
for (let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 !== 0){
     somaDeImpares = somaDeImpares + lista[i]
    }
}
console.log(somaDeImpares)