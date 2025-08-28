# Formulário de Cadastro com Validação POO em JavaScript

Um projeto de estudo focado na aplicação prática de conceitos de **Programação Orientada a Objetos (POO)** em JavaScript. O objetivo foi construir um formulário de cadastro com validações robustas e feedback em tempo real para o usuário.

<img width="654" height="904" alt="image" src="https://github.com/user-attachments/assets/0ceb2164-2670-400d-a8c9-8c87151a8c26" />



---

### 🎯 Funcionalidades

-   Validação de campos vazios.
-   Regras específicas para Usuário (tamanho e caracteres permitidos).
-   Validação de CPF utilizando o algoritmo oficial.
-   Verificação de Senha (tamanho mínimo e confirmação de campo).
-   Exibição de mensagens de erro claras e específicas para cada campo inválido.

---

### 🧠 Conceitos de POO Praticados

O código foi estruturado utilizando Classes do ES6 para organizar a lógica de validação:

-   **Classes e Instâncias:** Uso das classes `ValidaFormulario` e `ValidaCPF` para modelar a validação.
-   **Métodos:** Divisão da lógica em métodos com responsabilidades únicas (`camposSaoValidos`, `validaCPF`, etc.).
-   **Encapsulamento:** A lógica de validação fica contida dentro das classes, desacoplada do HTML.
-   **Métodos Estáticos:** Utilização de um método estático para a função auxiliar de gerar o dígito do CPF.

---

### 🛠️ Tecnologias

-   HTML5
-   CSS3
-   JavaScript (ES6+)

---

### 🚀 Como Executar

1.  Clone ou baixe o repositório.
2.  Abra o arquivo `index.html` em seu navegador.
