# API do Mercado Livre (ML)

Este projeto fornece uma API para acessar detalhes de produtos, vendedores, métodos de pagamento, preços e cupons do Mercado Livre, simulando um ambiente realista para testes e desenvolvimento.

## Sumário

- [Stack](#stack)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Banco de Dados](#banco-de-dados)
- [Documentação Swagger](#documentação-swagger)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Stack

- Node.js >= 20
- Express
- Typescript

## Como rodar o projeto

Veja instruções detalhadas no arquivo [RUN.md](RUN.md).

Comandos principais:

```sh
npm install
npm run dev      # Desenvolvimento com hot reload
npm run start    # Desenvolvimento sem hot reload
npm run build    # Compila o projeto TypeScript para JavaScript
npm run serve    # Executa o projeto compilado em produção
```

## Banco de Dados

Este projeto **não utiliza banco de dados externo**.  
Todas as informações estão armazenadas no arquivo [`src/db.json`](src/db.json).
