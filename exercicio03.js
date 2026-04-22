let lista = [ 3, 5, 4, 6, 7, 2, 19];
let menorValor = lista[0];

for (let i = 1; i < lista.length; i++ ) {
    if(menorValor > lista[i]){
        menorValor = lista[i];
    }
}
console.log(menorValor)