const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');
axios.get(url).then(response => {
    const funcionarios = response.data;
    const chineses = funcionarios.filter(isChinese);
    const mulheres_chinesas = chineses.filter(isWoman);
    const mulher_menor_salario = mulheres_chinesas.reduce((prev, curr) => {
        return prev.salario > curr.salario ? curr : prev;
    });
    console.log(mulher_menor_salario);

})

const isChinese = function(funcionario){
    return funcionario.pais == "China";
}

const isWoman = function(funcionario){
    return funcionario.genero = "F";
}