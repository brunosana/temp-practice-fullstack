function saveLocal(){
    localStorage.setItem("name", "Bruno Sana");
    alert("Item Salvo!")
}

function getLocal(){
    var name = localStorage.getItem("name");
    if (typeof(name) == undefined){
        alert("Não há chave!")
    }else{
        alert(name);
    }
}

function deleteLocal(){
    localStorage.removeItem("name");
    alert("Removido!");
}

function brokenObj(){
    const obj = {
        nome: "Bruno",
        sobrenome: "Santana",
        idade: 22,
        cargo: "Estudante"
    }

    let { nome } = obj;
    console.log(nome);

    let {cargo:funcao} = obj;
    console.log(funcao);

    let {cargo:trabalho, nome:name} = obj;

    console.log(trabalho, name);
}

