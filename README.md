## Dados Marvel

O site <b>Dados Marvel</b> é um site de busca de dados construido em Next js juntamente com a Marvel Api, você pode buscar dados de personagens, HQs e muito mais!



## Requisitos... :computer:

-Node js
-Um editor de código ou IDE para executar o projeto e modificá-lo


## Começando ☕

Primeiramente baixe o projeto e execute-o usando:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navetador para ver os resultados.

Você pode começar a modificar o projeto por onde quiser, um bom começo é modificar o: `pages/index.js`


## Por dentro do projeto :open_file_folder:

Vamos conhecer um pouco sobre a organização de pastas do projeto e seus arquivos...

## Pasta "assets"

É a pasta responsável pelos arquivos estáticos, dentro dessa pasta a pasta "images" que contém todas as imagens do site e a logo da marvel em svg.

## Pasta "cards"

Como o próprio nome sugere, essa pasta é a responsável por agrupar os cards que contém os dados vindo das requisições feitas a api. Cada card possui sua pasta com o arquivo do card e o arquivo "DropdownData" que varia de acordo com o card, por isso cada card possui seu arquivo de forma isolada.


## Pasta "components"

A pasta responsável pelos componentes do site, cada componente possui sua pasta com o arquivo .jsx e o "style.js" responsável pelo estilo do componente.

## Pasta "data"

Dentro da pasta "data" fica os arquivos com dados da api, cada arquivo é responsável por fazer uma requisição e renderizar um componente.

## Pasta "pages"

Essa pasta contém a página principal "index.jsx" e o arquivo "_document", responsável pelo Server Side Redenring do styled-components e o arquivo "app"

## Pasta "patterns"

Dentro dessa pasta fica arquivos reutilizáveis, esses arquivos são elementos HTML com um estilo já pré definido e outras coisas são adaptáveis através do uso de props. Para entender melhor como esses arquivos funcionam basta dar uma olhada em como cada um deles foi programado.

## pasta "styles"

Pasta responsável por conter o css global e o css dos inputs e botões do site.

## Observação :eyes:

Para que o projeto funcione corretamente em sua máquina local é necessário ter uma chave API da Marvel e um hash que é o md5 do ts + privateKey + publicKey. Esses dados devem estar dentro de um arquivo ".env", é necessário que o nome das variáveis de ambiente comecem com "NEXT_PUBLIC".