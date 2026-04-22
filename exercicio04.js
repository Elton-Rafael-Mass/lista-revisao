let palavra = "Adrian";
let contador = 0;

for(let i = 0; i < palavra.length; i++) {
    if(palavra[i] === "a" || palavra[i] === "A"){
        contador++
    }
}
console.log(contador)