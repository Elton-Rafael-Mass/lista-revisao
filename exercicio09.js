let palavra = "Elton";
let novaPalavra = "";



for(let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();
    if(letra === "a" ||
    letra === "e" || 
    letra === "i" || 
    letra === "o"  ||
    letra === "u"){
        novaPalavra = novaPalavra + letra
        
    }
}
console.log(novaPalavra)