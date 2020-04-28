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