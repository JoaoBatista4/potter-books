# Catálogo de Livros — Harry Potter

Aplicação de revisão da Lista 2 da disciplina Frontend Frameworks. O projeto consulta a PotterAPI e apresenta os livros de Harry Potter.

## Estudante

**João Batista Moraes Lima Coutinho**

## Funcionalidades

- A consulta só é realizada após o clique no botão **Buscar Livros**.
- Exibe estado de carregamento e mensagens de erro.
- Consulta a PotterAPI por meio de uma requisição HTTP GET.
- Apresenta na lista somente título e ano de publicação.
- Ao clicar em um livro, mostra um card com título, ano, descrição, número de páginas e capa.
- Atualiza os detalhes ao selecionar outro livro.
- Trata capa ausente ou imagem que não carrega.

## API utilizada

- Documentação: https://github.com/fedeperin/potterapi
- Endpoint: `https://potterapi-fedeperin.vercel.app/en/books`

A aplicação utiliza os campos `title`, `releaseDate`, `description`, `pages` e `cover`. A API pode mudar; caso isso aconteça, confira o JSON retornado e ajuste os componentes.

## Tecnologias

- React 18
- JavaScript
- Vite
- CSS
- Fetch API

## Como executar

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Acesse o endereço local apresentado pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
potter-books/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── components/
        ├── BookList/
        │   └── BookList.jsx
        ├── BookItem/
        │   └── BookItem.jsx
        └── BookDetails/
            └── BookDetails.jsx
```

## Testes realizados

| Teste | Resultado esperado | Situação |
| --- | --- | --- |
| Abrir a aplicação | Título e botão, sem consulta automática | OK |
| Clicar em Buscar Livros | Iniciar consulta à API | OK |
| Aguardar a resposta | Exibir a lista recebida | OK |
| Conferir os itens | Mostrar apenas título e ano | OK |
| Selecionar um livro | Exibir detalhes e capa | OK |
| Selecionar outro livro | Atualizar o card | OK |
| Simular falha de rede | Exibir mensagem de erro | OK |
| Clicar durante o carregamento | Botão permanece desabilitado | OK |
| Livro sem capa/dado opcional | Interface continua funcionando | OK |

## Conceitos praticados

- Componentização e responsabilidade de cada componente.
- JSX e composição de componentes.
- Props para comunicação entre componentes.
- Estados com `useState`.
- Eventos com `onClick`.
- Requisições HTTP com `fetch()`.
- Verificação de `response.ok`.
- Conversão da resposta com `response.json()`.
- Renderização dinâmica com `map()`.
- Uso de `key` nas listas.
- Renderização condicional para carregamento, erro e seleção.
