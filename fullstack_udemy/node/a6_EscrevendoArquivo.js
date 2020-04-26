const fs = require('fs');

//Conteúdo a ser escrito:
const content = {
    streamer: "brunosana",
    stream_name: "learn and make",
    host: "twitch",
    live_time: 6
}

fs.writeFile(__dirname + '/a6_newfile.json', JSON.stringify(content), err =>{
    console.log(err || "Arquivo Salvo!");
})