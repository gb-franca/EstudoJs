# Projeto: Validador de CPF

Um validador de CPF desenvolvido puramente com HTML, CSS e JavaScript. Este projeto foi criado como um exercício prático para aprofundar conhecimentos em lógica de programação e manipulação de elementos da página web (DOM).

---

### 🎯 Objetivo do Projeto

O objetivo principal era construir uma ferramenta web funcional que aplicasse o algoritmo oficial de validação de CPF. A ideia era ir além da teoria, implementando a regra matemática em código e proporcionando uma interface com feedback visual claro e imediato para o usuário.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

Para construir este projeto, utilizei a base do desenvolvimento web front-end, focando nos seguintes pontos:

* **Tecnologias:**
    * **HTML5:** Para a estrutura semântica do formulário e dos elementos da página.
    * **CSS3:** Para a estilização da interface, incluindo o feedback visual de sucesso (verde) e erro (vermelho).
    * **JavaScript (Puro):** Para toda a lógica de programação e interatividade.

* **Conceitos de JavaScript:**
    * **Lógica de Programação:** Tradução do algoritmo de cálculo dos dígitos verificadores para funções em JavaScript, utilizando laços de repetição (`for`) e operações matemáticas.
    * **Manipulação de Strings:** Limpeza do input do usuário, removendo pontos e traços para que o cálculo pudesse ser feito apenas com os números.
    * **Manipulação do DOM:** Captura do valor digitado pelo usuário e alteração dinâmica das classes CSS para exibir o resultado da validação.
    * **Estruturas Condicionais:** Utilização de `if/else` para tratar casos de exceção, como CPFs com todos os dígitos repetidos (ex: "111.111.111-11").

---

### 챌 Desafios e Soluções

Durante o desenvolvimento, encontrei alguns desafios interessantes:

1.  **O Algoritmo de Validação:**
    * **Desafio:** Entender a lógica matemática por trás do cálculo dos dois dígitos verificadores e traduzi-la de forma correta para o JavaScript.
    * **Solução:** Quebrei o problema em partes menores. Criei uma função específica para calcular cada dígito verificador, tornando o código mais legível e fácil de depurar. Usei `for` para iterar sobre os 9 e depois 10 primeiros dígitos, aplicando os pesos conforme a regra.

2.  **Flexibilidade do Input:**
    * **Desafio:** O usuário poderia digitar o CPF com ou sem formatação (`.` e `-`). A lógica de cálculo precisava funcionar para ambos os casos.
    * **Solução:** Implementei uma etapa de "limpeza" do CPF. Antes de qualquer validação, utilizei o método `replace()` com uma expressão regular para remover todos os caracteres não numéricos da string.

3.  **Casos de Exceção:**
    * **Desafio:** CPFs formados por dígitos repetidos (como "222.222.222-22") passam no cálculo do algoritmo, mas são considerados inválidos.
    * **Solução:** Adicionei uma verificação condicional logo no início da função principal. Ela checa se todos os dígitos do CPF são iguais e, se forem, a validação é interrompida e o CPF é imediatamente marcado como inválido.

---

### 💡 Resumo dos Aprendizados

Este projeto foi fundamental para solidificar meu conhecimento em áreas-chave do JavaScript:

* **A importância de "tratar" os dados:** Entendi na prática que nunca se deve confiar no input do usuário. A etapa de limpeza e preparação dos dados é crucial para a lógica funcionar corretamente.
* **Aplicação de lógica complexa:** Consegui transformar uma regra de negócio formal (o algoritmo do CPF) em um código funcional e reutilizável.
* **Interatividade e feedback ao usuário:** Aprendi como usar o JavaScript para criar uma experiência mais dinâmica, onde a interface reage às ações do usuário em tempo real, melhorando a usabilidade.
