function entrar(){
    var area = document.getElementById("area");
    var texto = prompt('Inserir HTML');
    area.innerHTML = texto;
}

function select(value){
    switch(value){
        case 'Amora':
            document.getElementById("options").innerHTML = "Você escolheu Amora!";
            break;
        case 'Morango':
            document.getElementById("options").innerHTML = "Você escolheu Morango!";
            break;
        case 'Manga':
            document.getElementById("options").innerHTML = "Você escolheu Manga!";
            break;
        case 'Siriguela':
            document.getElementById("options").innerHTML = "Você escolheu Siriguela!";
            break;
        case 'Uva':
            document.getElementById("options").innerHTML = "Você escolheu Uva!";
            break;
        default:
            alert("Porra nenhuma");
    }
}

function options(){
    var options = document.getElementById("options");
    options.innerHTML = "<p>Escolha:</p><p>Amora</p><p>Morango</p><p>Manga</p><p>Siriguela</p><p>Uva</p><p>Esse bloco será modificado.</p>";
}

var timer;
function interval(){
    var temp = document.getElementById("temp");
    var prev = "";
    timer = setInterval(() =>{
        prev += "<br/>Disparando..."
        temp.innerHTML = prev;
    }, 1000);
}

function timeout(){
    var temp = document.getElementById("temp");
    var prev = "TimeOut começando....";
    temp.innerHTML = prev;
    setTimeout(()=>{
        prev += "<br/>Finalizado!"
        temp.innerHTML = prev;
    }, 2000);
}

function cancel(){
    clearInterval(timer);
}