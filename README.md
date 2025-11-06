# Projeto Web II - Frontend (Clone Twitter/X)

Repositório do Backend: https://github.com/kkauaon/projeto-webII-node

Este repositório contém o código-fonte do **frontend** para um clone do Twitter/X, desenvolvido como projeto N1 da disciplina de Programação Web II.

A aplicação é uma SPA (Single Page Application) construída com [React](https://react.dev/) (utilizando [Create React App](https://create-react-app.dev/)) e é responsável por consumir a [API backend do projeto](https://github.com/kkauaon/projeto-webII-node) e renderizar a interface do usuário.

## 🚀 Funcionalidades Principais (Frontend)

  * **Telas de Autenticação:** Páginas de Registro (`/register`) e Login (`/login`) que se comunicam com a API para gerenciar as sessões do usuário.
  * **Navegação Protegida:** Utilização do `react-router` para navegação entre páginas e fluxos de autenticação.
  * **Feed Principal:** Listagem e exibição dos posts (tweets) buscados da API.
  * **Criação de Conteúdo:** Componentes para criar novos posts e comentários.
  * **Visualização de Comentários:** Exibição dos comentários associados a cada post.
  * **Estilização Avançada:** Interface estilizada utilizando SASS para uma melhor organização do CSS.

## 🛠️ Stack de Tecnologias

Este projeto utiliza um stack moderno de JavaScript no frontend:

  * **Biblioteca:** [React](https://react.dev/)
  * **Bootstrap:** [Create React App](https://create-react-app.dev/)
  * **Roteamento:** [React Router](https://reactrouter.com/)
  * **Estilização:** [SASS](https://sass-lang.com/)
  * **Comunicação API:** [Axios](https://axios-http.com/)

## ⚠️ Pré-requisito: Backend Ativo

Para que este frontend funcione corretamente (login, registro, listagem de posts), o **[servidor backend](https://github.com/kkauaon/projeto-webII-node)** deve estar em execução.

Certifique-se de que o backend esteja rodando em `http://localhost:3001` (conforme o README do outro projeto) antes de iniciar este frontend.

## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

**1. Clone o repositório:**

```bash
git clone https://github.com/kkauaon/projeto-webII-react.git
cd projeto-webII-react
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Execute a aplicação:**

```bash
npm start
```

Após executar, a aplicação React estará disponível em `http://localhost:3000` e se comunicará com o backend na porta `3001`.
