# Projeto: Calculadora de IMC

Uma ferramenta interativa para calcular o Índice de Massa Corporal (IMC). O projeto foi desenvolvido para praticar a manipulação de formulários, cálculos matemáticos e a exibição de resultados condicionais com JavaScript.

---

### 🎯 Objetivo do Projeto

O objetivo era criar uma aplicação simples onde o usuário pudesse inserir seu peso e altura para receber o valor do seu IMC. Além do número, o projeto deveria exibir a classificação correspondente (ex: "Abaixo do peso", "Peso normal", "Sobrepeso"), fornecendo um feedback visual claro com base no resultado.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

* **Tecnologias:**
    * **HTML5:** Estrutura do formulário com campos de `input` para peso e altura.
    * **CSS3:** Estilização da interface e dos resultados, utilizando cores diferentes para cada classificação de IMC.
    * **JavaScript:** Lógica para capturar os dados do formulário, realizar o cálculo e exibir o resultado dinamicamente.

* **Conceitos de JavaScript:**
    * **Captura de Dados de Formulário:** Leitura dos valores (`.value`) dos campos de input do HTML.
    * **Funções de Cálculo:** Implementação da fórmula matemática do IMC ($IMC = peso / (altura * altura)$) dentro de uma função.
    * **Estruturas Condicionais (if/else if/else):** Utilização de uma cadeia de condicionais para verificar em qual faixa o resultado do IMC se encaixa e determinar a classificação correta.
    * **Manipulação do DOM:** Escrita do resultado (o valor do IMC e o texto da classificação) em um elemento específico da página.

---

### 챌 Desafios e Soluções

1.  **Validação de Inputs:**
    * **Desafio:** Garantir que o usuário insira apenas números válidos nos campos e que não os deixe em branco.
    * **Solução:** Implementei uma verificação inicial que checa se os campos estão vazios ou se o valor inserido não é um número (`isNaN`). Caso a validação falhe, uma mensagem de erro é exibida para o usuário em vez de tentar realizar o cálculo.

2.  **Exibição Clara do Resultado:**
    * **Desafio:** Apresentar o resultado de uma forma que fosse imediatamente compreensível, incluindo a classificação e um indicativo visual.
    * **Solução:** Criei uma área de resultado no HTML que era preenchida via JavaScript. A lógica condicional não apenas definia o texto da classificação, mas também adicionava uma classe CSS ao resultado (ex: `.normal`, `.alerta`, `.perigo`), que alterava a cor de fundo para dar um feedback visual instantâneo.

---

### 💡 Resumo dos Aprendizados

* **Integração entre Formulários HTML e JavaScript:** Este projeto foi uma ótima prática para entender o fluxo completo: como capturar dados inseridos pelo usuário em um formulário e processá-los com JavaScript.
* **Lógica Condicional para Classificação de Dados:** Aprendi a usar estruturas `if/else if/else` de forma eficaz para categorizar um resultado numérico em diferentes faixas, uma habilidade muito comum em diversas aplicações.
* **Feedback ao Usuário:** Entendi a importância de fornecer um feedback claro, tanto para entradas inválidas quanto para o resultado final, melhorando a experiência de quem usa a aplicação.

---
