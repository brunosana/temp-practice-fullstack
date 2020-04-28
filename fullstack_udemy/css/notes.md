### css

Cascade Style Sheet - Ou Folha de estilo em cascata. É o que dá todo o visual e algumas animções de um site.

Existem 3 formas de colocar o CSS em uma página HTML.

1 - Inline

    <p style="color=red">Olá</p>

2 - Por tag

    <style>
        .p {
        color: red;
        }
    </style>

3 - Importar um arquivo CSS

    <link rel="stylesheet" href="arquivo.css"/>

Existem alguns tipos de valores que são muito comuns e muito usados no css, podem ser

* Códigos de Cores
* Valores numéricos referentes a medidas (px, cm etc)
* Valores predefinidos (center, left, right etc)
* Múltiplos Valores (ou shorthand property) Ex. border: dashed 5px blue;

Múltiplos valores também serve para alternâncias. Ex. **font-family: Helvetica, Arial, monospace;**. Significa que a fonte será Helvetica, e caso a fonte não seja encontrada, a fonte será a Arial, e assim sucessivamente.

###### O css usa dash case (nomes separados por ífen).