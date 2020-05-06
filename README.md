## REACT

React é uma biblioteca JS para criar interfaces de usuário. Ela é toda baseada em **Components**.

Cada componente precisa ser importado no Index.js e declarado da função render do ReactDOM.

Os componentes React podem ser classificados em **StateLess** e **StateFull**.

Componentes com estados possuem atributos que podem ter seu valor alterados.

**Componentes class que herdam Component tem o médoto constructor, este é conhecido como o ciclo de vida do componente.**

Como padrão, toda classe primeiro executa o construtor, e logo após executa a função **componentDidMount()** que pode ser definida pelo DEV.

### Rotas

Para trabalhar com rotas é necessário instalar uma biblioteca extra

    npm install react-router-dom

Com ela será possivel criar as rotas.
(Demora para um caralho para instalar).


Para criar uma Rota, criamos na pasta **src** o arquivo **routes.js** e é preciso importar os seguintes componentes:

    import { BrowserRouter, Switch, Route } from 'react-router-dom';

Podemos então definir uma função para gerenciar as rotas:

    import Home from './pages/Home';

    const Routes = () => {
        return(

            <BrowserRouter>

                <Route exact path="/" component={Home} />

            </BrowserRouter>

        );

    }

    export default Routes;

Todas as rotas ficam na tag **BrowserRouter**.

**A flag __exact__ garante que a rota só será acessada com o path exato, significa que outras rotas não estarão disponíveis**


O switch permite que apenas uma rota seja chamada ao mesmo tempo, pois no react-router-dom é possível mostrar dois componentes separados ao mesmo tempo. Para isso usamos a tag <Switch> entre as rotas.


#### Links

Para criar um link entre as rotas é necessário importar o **link** da biblioteca **react-router-dom**:

    import { Link } from 'react-router-dom';


Todo componente que usar Rotas precisa ser importado no arquivo **routes.js**.

Para direcionar uma página de erro ou redirecionar qualquer url não válida usamos o path *:

    <Route path="*" component={erro} />

**Essa rota precisa ser a última a ser declarada**

#### Rotas com autenticações e redirects

Suponha que você tem uma página/rota que requer uma determinada autenticação para que ela possa ser acessada. Podemos fazer uma função que verifique se o usuário está autenticado.

Neste exemplo criamos um arquivo auth.js que contém a função autenticado que por hora retorna false.

No arquivo __routes.js__ importamos o __Redirect__ do react-router-dom junto às outras propriedades:

    import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

Importamos o arquivo auth.js com o desconstrutor, pegando apenas a função:

    import { autenticado } from './auth';

Para criar uma rota com autenticação, criamos uma constante que recebe uma função:

    const PrivateRoute = ({component: Component, ...rest}) => ...

Recebemos um objeto pois declararemos a função como uma tag, recebemos o component passado assim como todas as outras informações, e no retorno da função, usamos a tag __Route__ e verificamos se o usuário está autenticado:

    <Route {...rest} render={ props => (
        autenticado() ? (
            <Component {...props} />
        ) :
        (
            <Redirect to={ {pathname: '/', state: { from: props.location } } } />
        )
    ) } />

O parâmetro state no Redirect precisa ter o state com o __from: props.location__ para que o histórico de navegação não seja perdido.

**OBS: É importante verificar que na declaração da função PrivateRoute depois da arrow (=>) o bloco da função é declarado com parêntesis, assim como a arrow function declarada em render e a verificação por meio da função __autenticado__**

Durante a declaração das rotas podemos inserir a __PrivateRoute__ lá (o nome da função que declaramos acima):

    <PrivateRoute exact path="/painel" component={Painel} />


#### StyledComponents

Usar vários arquivos CSS no react é uma bosta, pois você pode ter problemas de herança, problemas com nome, problemas de tags e vira uma mistura e seu projeto não vai pra frente vulgo netflixfake.

Para isso temos o StyledComponent que é o superman do css no React.

Claro que antes precisamos instalar o StyledComponents rs:

    npm install --save styled-components

Agora para instalar essa delícia precisamos criar um arquivo __styles.js__ e importar o styled-components:

    import style from 'styled-components';

Agora para criar um estilo, usamos:

    export const NomeDoEstilo = styled.nomeDaTag`
        Estilos css Aqui!
    `;

Ex:

    export const Container = styled.div`
        display: flex;
        width: 100%;
        justfy-content: center;
    `;


Para usar o estilo em sua aplicação, precisa importar para o arquivo .js:

    import { Container } from './styles.js';

E usar como uma tag:

    <Container>Conteúdo da DIV aqui!</Container>


É possível ainda passar parâmetros pela tag e usar no styled:

    <Texto cor="green" >O vento no cume bate, a rosa no cume cheira</Texto>

Então no styled component ficaria:

    export const Texto = styled.h1`
        font-size: 35px;
        cor: ${props => props.cor};
    `;

Podemos passar qualquer argumento, porém, caso precise de um prefixo ou sufixo o retorno da arrow function terá que retornar um template string (**font-size: ${props => `${props.tamanho}px`)};**).

## SPA - Single Page Application

Single Page Application é um formato de construção de websites que cria toda a estrutura em uma página. Então suponha que na página você tem a parte de Home, Sobre e Contato. Você tem uma navBar e clica em Contato, e a página rola sozinha até a parte Contato.

Para isso você irá precisar instalar uma dependência chamada **react-router-hash-link** que faz exatamente isso.

    npm install --save react-router-hash-link


Feito isso, podemos importar a propriedade **HashLink** pelo desconstrutor.

    import { HashLink as Link } from 'react-router-hash-link';

Embora precise do react-router-dom **a propriedade Link do react-router-dom não será usada, portanto tudo bem renomear o HashLink para Link, economizando na escrita.**

Então você só precisa usar a tag com a propriedade **to**:

    <Link to="contato">Contato</Link>

Se for do seu desejo, poderá usar o smooth para suavizar o scroll xD


## Firebase

Firebase é um serviço da google que hospeda banco de dados não relacional.

Para usar no react, precisamos instalar o pacote:

    npm install --save firebase

Importamos o firebase para o arquivo que iremos usar:

    import firebase from 'firebase';

E após o trecho **firebase.initializeApp(config);** podemos capturar dados do banco:

    firebase.database().ref('props').on('value', (snapshot) => {
      let temp = this.state;
      temp.prop = snapshot.val();
      this.setState(temp);
    });

Nesse caso estamos capturando o campo __props__ do banco e usando a função __on__ para atribuir o valor capturado à variável __prop__ do __state__.

**OBS: A função `on` é ativada a qualquer alteração, então qualquer alteração no banco a função é invocada e os dados alterados em tempo real. Caso o sistema precise buscar apenas uma vez as informações no banco usamos a função `once`.**

Para capturar valores não diretos, podemos usar o comando __child__.

Ex: Capturar os valores do objeto usuários do íncide 1:

    firebase.database().ref('users').child(1).on('value', snapshot => {
        let name = snapshot.val().name;
        let age = snapshot.val().age;
    });

Para **__inserir/alterar__** os valores, usamos a função **__set__**:

    firebase.database().ref('token').set(this.state.tokenInput);

Para **__alterar mais de uma propriedade__** (ex. um objeto inteiro) é só passar ao comando set todo o objeto, ou alterar propriedade por propriedade:

    firebase.database().ref('users').child(1).child('idade').set(this.state.idadeInput);

Para **__excluir__** os dados é só usar o método remove(). Serve tanto para remover um objeto ou uma propriedade específica do objeto:

    firebase.database().ref('users').child(1).remove();

Ou

    firebase.database().ref('users').child(1).child('idade').remove();

Para **__inserir um dado novo__** e atribuir um ID a ele:

    let users = firebase.database().ref('users');
    let key = users.push().key;
    firebase.database().ref('users').child(key).set({
        name: 'nome',
        age: 00,
        nick: 'nick'
    });

Para **capturar os valores em lista** :

    firebase.database().ref('users').on('value', snapshot=>{
        let temp = this.state;
        temp.lista = [];
        
        snapshot.foreach(childItem => {
            temp.lista.push({
                name: childItem.name,
                age: childItem.age,
                nick: childItem.nick
            })
        })
        this.setState(temp);
    })


### Autenticação com Firebase

#### Criando um usuário

Precisa ter ativado a opção `Email and Password` na plataforma do firebase.

Utilizando um form simples, utilizamos o método `createUserWithEmailAndPassword`:

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then( () => {
        //Sucess
    })
    .catch(err =>{
        //Erro
    })


### Efetuando o Login

É possível que já haja algum usuário logado no sistema, então antes, no construtor, iremos chamar o método `signOut` para deslogarmos quem estiver logado:

    firebase.auth().signOut();

Efetue o login com o método `signInWithEmailAndPassword`

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then( () => {
        //Sucess
    })
    .catch(err =>{
        //Erro
    })

Para efetuar o **logout** é só chamar o método `signOut` acima.
