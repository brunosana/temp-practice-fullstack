### Node
Client vs Servidor
O Node atua no servidor, back end, com o mesmo interpretador de javascript do browser.

Node: Ambiente de execução de JS no servidor.
[Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) criou o Node.

Ele teve a ideia de ao invés de utilizar o padrão de requisições do Apache (Cada requisição gerava uma thread e era tratada no servidor), ele fez uma thread master única que trata todas as requisições. Isso fez com que o sistema se tornasse mais estável, pois com um número alto de requisições o rendimento dele ainda fica bem superior ao do apache.

Ele precisava de um ambiente assíncrono, como o JavaScript é a linguagem que foi desenvolvida para trabalhar com ambientes assim, foi o casamento perfeito.

IO: Ler arquivo, fazer conexão, acesso a BD, sempre que é necessário uma entrada e uma saida, chamamos de IO.

É sempre necessário que não façamos operações pesadas no Event Loop (Thread master), é melhor delegar para uma thread trabalhadora.

Usando Node como servidor (é possível tratar o node como servidor ou API), organizamos em pastas e arquivos, cada arquivo servindo como um módulo, e o conteúdo deles ficam visíveis apenas no múdulo, podendo ser importados e exportados, para que os módulos conversem entre eles.

Para dar leitura do atributo a outros módulos, usamos o this ou exports.
Para importar módulos utilizando commonsJS usamos o 'require'

**a1 = Formas de importar e exportar atributos do módulos.**

Para baixar módulos de terceiros, utilizamos o NPM (Node Package Manager) para baixar e instalar o pacote na máquina.

Ex:
*Antes de instalar os pacotes, é preciso usar o "npm init" para criar o arquivo package.json

    npm i lodash (Instala o lodash)

A partir do momento que uma linha de instalação é iniciada, é criada uma pasta node_modules, e é nela onde ficarão todos os módulos importados do NPM. Caso o pacote instalado possua alguma dependência, ela também será instalada na pasta.

o __module.exports__ e __exports__ apontam para a mesma variável, portanto mesmo que o __exports__ aponte para um null o __module.exports__ ainda funcionará corretamente.

**a2 = Para usar módulos de terceiros.**

na linha require, ele irá procurar o "index.js" na pasta node_modules e lá vai estar as linhas que estão exportando os módulos de terceiros.

**__A flag -g no npm instala o pacote de forma global, então não irá para a pasta node_modules e pode ser usada para qualquer aplicação__**

Ex:

    npm i -g nodemon

(Nodemon executa o servidor e aplica as alterações automaticamente sem precisar resetar o server, usando o rs ele dá o restart).

A flag --save salva a biblioteca no package.json
A flag --save-dev salva a versão apenas para desenvolvimento
A flag -E instala a versão exata que foi informada

Quanto às instâncias do node com o require, elas são únicas a não ser que a forma de retorno seja com uma arrow function e durante o require usar o () para executar a função.

Ex:
    const mod1 = require('./value.js')()

É possível adicionar propriedades ao objeto global e ele será visível por todo o node.

**a4 = Inserindo propriedades no objeto global.**

Executando o arquivo uma única vez, a propriedade já será adicionada, e poderá ser invocada de qualquer lugar. O problema é que decalrando normalmente é possível alterar ele também de qualquer lugar, para isso usamos o __Object.freeze__.

**__O this no Node aponta para "module.exports" ou "exports". Quando dentro de uma função, aponta para "global"__**

Existe a possibilidade de exportar um módulo como uma função, e passar os parâmetros durante o require.

**a5 = Passando e Importando módulos como funções.**

Para instalar os módulos do package.json usa o comando **npm i**

O comando **npm start** é o comando padrão do node que excuta o arquivo __start__ do __package.json__.

O comando __npm dev__ não irá funcionar pois o dev não é um pacote predefinido pelo node, para conseguir executar, é preciso inserir a linha **npm run dev**

É possível ler e escrever arquivos no node!

**a6 = Lendo e Escrevendo arquivos com Node**

É possível ler arquivos de forma síncrona ou assíncrona. Quando é assíncrona a função recebe um callback onde o primeiro parâmetro é o erro e o segundo o conteúdo.

Para arquivos JSON existe um método mais simples de ler arquivos JSON, usando o require e o caminho do arquivo.

Também é possível ler um diretório com o File System.

### Padrão MiddleWare

Suponha que exista uma função que execute 3 passos, os passos A, B e C. E você pode querer usar os passos em separado, uma alternativa a isso seria separar por funções, onde no final o passo seguinte seria chamado, porém criaria uma regra única para que o passo B seja apenas depois do passo A, e o passo C depois do B.

Para isso foi criado o padrão middleware, onde você tem uma função que, dentre os parâmetros está o parâmetro next, uma função passada por linha de comando, que determinará o próximo passo.

**a7 = Aplicação do padrão MiddleWare**

### Diretório "Projeto" - Projeto de API com Express

Como padrão, é necessário instalar o express na pasta do projeto, e no arquivo JS importar com o require. Logo em seguida uma outra variável armazenará uma instância do express.
Ex:

    const express = require('express');
    const app = express();

Para o servidor iniciar usa-se o código:

    app.listen(porta, () =>{
        console.log(`Servidor executando na porta ${port}`);
    });


Podem existir rotas de diferentes tipos com a mesma url, no caso do exemplo, foi usada a rota '/produtos' em GET e POST.

**/'produtos' GET - Retorna todos os produtos inseridos no banco fake**

**'/produtos' POST - Retorna o produto inserido (precisa passar os dados name e price no formulário)**

para criar a rota usamos a variável app com a instância express, e para toda requisição um callback é necessário com os parâmetros __Request__, __Response__ e __Next__.

Ex:

    app.get('/nome_rota', (request, response, next) =>{
    
    })

Para capturar valores do formulário enviado, é usada a biblioteca **body-parser**, que traduz o corpo do formulário em um objeto legível a API, e o comando **request.body.nomedoparametro** para capturar o valor específico referente ao parâmetro.

Para linkar o body-parser na API, usa-se:

    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: true}))

Caso o valor seja passado na url (__'/produtos/4'__), o comando muda para **request.params.nomedoparametro**.

Para cada função (CRUD) o produto criado/alterado/excluído é retornado, e para isso enviamos para o usuário no corpo da resposta (__RESPONSE__): **response.send(objeto)**

### Agendar tarefas com o node-shedule

**a8 = Agendar evento com node-schedule**

Primeiro o pacote precisa ser instalado:

    npm i node-schedule

Importar para o arquivo JS:

    const schedule = require('node-schedule');

Agendar com o método scheduleJob:

    const event1 = schedule.scheduleJob(string, callback)

A string será no formato:

"P1 P2 P3 P4 P5 P6"

P1 -> De P1 em P1 segundos

P2 -> No minuto P2

P3 -> Na hora P3

P4 -> dia do mês

P5 -> No mês P5

P6 -> No dia P6 (0-Domingo, 6-Sábado)

Para usar o valor "qualquer", usa-se o __*__.
Para criar um laço, usa-se o __*/__.

Ex:

    const event1 = schedule.scheduleJob('*/5 0 12 1 * * *', () => {console.log("oi")});

__Evento 1 agendado a cada 5 segundos do minuto 0 da hora 12, no dia 1 de qualquer mês e qualquer dia__.

Para cancelar o temporizador, usa-se o método cancel:

    event1.cancel();

Também é possível substituir a string por uma regra (a8).

