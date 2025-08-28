# Projeto: Formulário de Cadastro com Validação POO

Um formulário de cadastro completo, criado para aplicar e aprofundar os conceitos de Programação Orientada a Objetos (POO) em JavaScript (ES6+). O foco principal foi criar um sistema de validação robusto, modular e reutilizável.

---

### 🎯 Objetivo do Projeto

O objetivo central era sair do paradigma procedural e estruturar toda a lógica de validação de um formulário utilizando Classes do ES6. A meta era construir um código mais organizado, onde cada classe tivesse uma responsabilidade clara, facilitando a manutenção e a adição de novas regras de validação no futuro.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

Este projeto foi uma imersão na sintaxe e nos pilares da POO com JavaScript, combinados com a manipulação do DOM.

* **Tecnologias:**
    * **HTML5:** Estrutura do formulário e dos campos de input.
    * **CSS3:** Estilização da interface e dos feedbacks de erro.
    * **JavaScript (ES6+):** Linguagem principal para a lógica e aplicação dos conceitos de POO.

* **Conceitos de JavaScript e POO:**
    * **Classes e Instâncias:** O projeto foi modelado em torno da classe `ValidaFormulario`, que orquestra todo o processo. Uma classe `ValidaCPF`, importada do projeto anterior, foi reutilizada para validar o campo de CPF.
    * **Métodos e Responsabilidade Única:** A lógica foi segmentada em métodos especializados, como `validaUsuario()`, `validaSenhas()` e um método principal `camposSaoValidos()` que unifica todas as checagens.
    * **Encapsulamento:** Toda a complexidade da validação foi encapsulada dentro das classes. O código que interage com o DOM apenas instancia a classe e chama seus métodos, sem precisar conhecer os detalhes da implementação das regras.
    * **Reutilização de Código:** A classe `ValidaCPF` foi tratada como um módulo independente, demonstrando como a POO facilita o reaproveitamento de código entre diferentes projetos.

---

### 챌 Desafios e Soluções

A transição para o paradigma orientado a objetos trouxe desafios específicos e muito aprendizado.

1.  **Estruturação do Código em Classes:**
    * **Desafio:** Decidir como organizar as responsabilidades. Inicialmente, pensei em colocar toda a lógica em uma única classe gigante.
    * **Solução:** Percebi que o ideal seria ter uma classe principal (`ValidaFormulario`) para gerenciar o formulário como um todo e classes menores e mais específicas para validações complexas, como a do CPF. Isso tornou o código muito mais limpo e seguiu o princípio de responsabilidade única.

2.  **Gerenciamento de Múltiplos Erros:**
    * **Desafio:** Como exibir mensagens de erro específicas para cada campo, sem criar um código `if/else` gigante e confuso?
    * **Solução:** Criei um método genérico para exibir erros. Esse método recebe o campo e a mensagem como parâmetros. Dentro de cada método de validação (ex: `validaUsuario`), eu chamo essa função de erro sempre que uma regra não é atendida. Isso centralizou a manipulação do DOM e evitou repetição de código.

3.  **Conexão entre a Lógica e o Evento do Formulário:**
    * **Desafio:** Fazer com que a classe "ouvisse" o evento de `submit` do formulário e impedisse o envio caso os dados fossem inválidos.
    * **Solução:** Capturei o evento de `submit` e, dentro do *event listener*, instanciei a classe `ValidaFormulario`. Em seguida, chamei o método de validação principal. Utilizei `event.preventDefault()` para parar o envio do formulário, baseando-me no retorno booleano (`true` ou `false`) do método de validação.

---

### 💡 Resumo dos Aprendizados

Este projeto foi um passo importante para evoluir a qualidade e a estrutura do meu código JavaScript.

* **Organização e Manutenibilidade:** A POO se mostrou uma ferramenta poderosa para organizar lógicas complexas. Adicionar uma nova validação agora é simples: basta criar um novo método na classe sem afetar o restante do sistema.
* **Desacoplamento:** Aprendi a separar claramente a lógica de negócio (as regras de validação) da lógica de apresentação (a manipulação do DOM), tornando o código mais testável e reutilizável.
* **Pensamento Abstrato:** O exercício de modelar um problema real (validar um formulário) através de classes e objetos me ajudou a desenvolver uma forma mais abstrata e estruturada de pensar sobre a solução de problemas com programação.
