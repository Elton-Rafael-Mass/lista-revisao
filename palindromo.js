let palavra = "arara";
let invertida = "";

for(let i = palavra.length -1; i >= 0; i--){

    invertida = invertida + palavra[i]

}

if (palavra === invertida){
    console.log("Palindromo")
} else {
    console.log("Não")
}