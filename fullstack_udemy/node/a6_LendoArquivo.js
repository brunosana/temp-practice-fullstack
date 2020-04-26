const fs = require('fs');

const path = __dirname + '/a6_file.json';
//O Sync no nome da função garante que as próximas linhas de código será executada depois do arquivo ser lido

//Sincrono..
const data = fs.readFileSync(path, 'utf-8');
console.log(data);

//Assincrono
fs.readFile(path, 'utf-8', (err, content) =>{
    const file = JSON.parse(content);
    console.log(file);
})

//Ler com o require (OBS: Apenas JSON)
const file_data = require('./a6_file.json');

console.log(file_data);

//Lendo um diretório
fs.readdir(__dirname, (err,content) =>{
    console.log("Conteúdo da pasta:");
    console.log(content);
})