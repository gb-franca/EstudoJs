# Projeto: Lista de Tarefas (To-Do List)

Uma aplicação clássica de "To-Do List" que permite ao usuário adicionar, visualizar e remover tarefas. Este projeto foi um exercício fundamental para praticar a manipulação dinâmica de elementos do DOM e operações de CRUD (Create, Read, Update, Delete) no front-end.

---

### 🎯 Objetivo do Projeto

O objetivo central era construir uma interface onde um usuário pudesse gerenciar uma lista de tarefas. Isso envolvia criar a funcionalidade para adicionar novos itens à lista a partir de um input, marcar itens como concluídos e excluí-los, tudo isso atualizando a interface em tempo real sem a necessidade de recarregar a página.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

* **Tecnologias:**
    * **HTML5:** Estrutura básica com um campo de `input`, um botão de "Adicionar" e uma lista `<ul>` para exibir as tarefas.
    * **CSS3:** Estilização da lista e dos itens, incluindo um efeito visual para tarefas concluídas (ex: `text-decoration: line-through`).
    * **JavaScript:** O coração do projeto, responsável por toda a criação e manipulação dinâmica dos elementos da lista.

* **Conceitos de JavaScript:**
    * **Criação Dinâmica de Elementos:** Uso intensivo de `document.createElement()` para criar novos itens de lista (`<li>`), botões e outros elementos HTML via código.
    * **Manipulação do DOM (CRUD):**
        * **Create:** Adicionar novos `<li>` na `<ul>` com `.appendChild()`.
        * **Read:** A própria exibição da lista na tela.
        * **Update:** Adicionar ou remover uma classe CSS para marcar uma tarefa como concluída.
        * **Delete:** Remover um elemento `<li>` da árvore do DOM com `.remove()`.
    * **Event Delegation:** Aplicação de um único *event listener* na `<ul>` para gerenciar os cliques nos botões de "deletar" de todas as tarefas, mesmo as que são adicionadas dinamicamente.

---

### 챌 Desafios e Soluções

1.  **Eventos em Elementos Dinâmicos:**
    * **Desafio:** Como fazer os botões de "deletar" funcionarem se eles são criados depois que a página já carregou? Um `addEventListener` comum não funciona em elementos que ainda não existem.
    * **Solução:** A técnica de *Event Delegation* foi essencial. Ao monitorar os cliques no elemento pai (`<ul>`), eu pude verificar (com `event.target`) se o clique ocorreu em um botão de exclusão e, em seguida, encontrar e remover o item `<li>` correspondente.

2.  **Persistência de Dados (Desafio Adicional):**
    * **Desafio:** As tarefas desapareciam sempre que a página era recarregada.
    * **Solução:** Implementei o uso do `localStorage` do navegador. Criei funções para salvar o array de tarefas (convertido para JSON com `JSON.stringify`) sempre que uma tarefa era adicionada ou removida, e uma função para carregar e renderizar as tarefas salvas (usando `JSON.parse`) sempre que a página é iniciada.

---

### 💡 Resumo dos Aprendizados

* **DOM como uma Estrutura Viva:** Este projeto me deu uma compreensão profunda de que o DOM não é estático. Aprendi a adicionar, modificar e remover qualquer elemento da página de forma programática.
* **O Poder da Delegação de Eventos:** Entendi que essa é a abordagem padrão e mais eficiente para lidar com listas de elementos dinâmicos, tornando o código mais simples e performático.
* **Fundamentos de CRUD:** Pratiquei a base de qualquer aplicação que manipula dados. Mesmo sendo no front-end, a lógica de Criar, Ler, Atualizar e Deletar é universal.
* **Persistência de Dados no Navegador:** Tive meu primeiro contato com `localStorage`, uma ferramenta simples e poderosa para salvar informações do lado do cliente e melhorar a experiência do usuário.

---
