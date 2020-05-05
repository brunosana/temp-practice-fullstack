function spread(){
    //Com array
    var vetor = [1, 2, 3];
    var vetor2 = [...vetor, 4, 5, 6];
    console.log(vetor2);

    //Com objetos
    var jovem = {
        nome: "Bruno",
        sobrenome: "Santana"
    }

    var pessoa = {
        ...jovem,
        idade: 22,
        email: "brunosa@brunosa.com"
    }

    console.log(pessoa);
}
    
function rest(...nomes){
    console.log(nomes);
}

function restSpread(nomes, ...outros_nomes){
    let array = [...nomes, ...outros_nomes];
    console.log(array);
}