# Projeto: Calculadora Simples

Uma calculadora funcional desenvolvida com HTML, CSS e JavaScript, criada para praticar a lógica de programação, o gerenciamento de estado e a manipulação de eventos do DOM.

---

### 🎯 Objetivo do Projeto

O objetivo era construir uma calculadora padrão, capaz de realizar as quatro operações matemáticas básicas. O foco principal foi criar uma lógica de cálculo sequencial e gerenciar os inputs do usuário e o estado da calculadora (número atual, operação pendente, etc.) através do JavaScript.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

* **Tecnologias:**
    * **HTML5:** Estrutura da calculadora, com a tela (display) e os botões.
    * **CSS3 (Grid Layout):** Utilizei o Grid Layout para organizar os botões de forma responsiva e alinhada, simulando o layout de uma calculadora real.
    * **JavaScript:** Responsável por toda a interatividade e lógica de cálculo.

* **Conceitos de JavaScript:**
    * **Manipulação do DOM:** Atualização do display em tempo real e captura dos cliques nos botões.
    * **Event Delegation:** Em vez de adicionar um *listener* para cada botão, um único *event listener* foi adicionado ao elemento pai dos botões. O `event.target` foi usado para identificar qual botão específico foi pressionado, tornando o código mais limpo e performático.
    * **Gerenciamento de Estado:** Utilização de variáveis para controlar o estado da operação, como `primeiroNumero`, `operadorAtual` e `aguardandoSegundoNumero`.
    * **Lógica com Switch/If:** Para determinar qual operação matemática executar com base no botão de operador que foi clicado.

---

### 챌 Desafios e Soluções

1.  **Captura de Eventos em Múltiplos Botões:**
    * **Desafio:** Criar um código eficiente para lidar com os cliques em todos os botões (números e operadores) sem ser excessivamente repetitivo.
    * **Solução:** A técnica de *Event Delegation* foi a solução perfeita. Ao colocar um único `addEventListener` no container dos botões, pude simplificar o código e gerenciar todos os cliques em um só lugar.

2.  **Lógica da Operação Sequencial:**
    * **Desafio:** Fazer a calculadora entender a sequência de uma operação. Por exemplo, quando o usuário digita `5`, `+`, `3`, `=`, o que fazer em cada passo?
    * **Solução:** Criei um sistema de "máquina de estados" com variáveis. O programa "sabe" se está esperando o primeiro número, o operador ou o segundo número, e se comporta de maneira diferente a cada passo, armazenando os valores temporariamente até que o cálculo seja solicitado.

---

### 💡 Resumo dos Aprendizados

* **A importância do Gerenciamento de Estado:** Este projeto deixou claro que, para aplicações interativas, é fundamental ter variáveis que controlem o "estado" atual da aplicação.
* **Eficiência com Event Delegation:** Aprendi uma técnica poderosa para otimizar o código que lida com múltiplos elementos interativos semelhantes.
* **Separação de Lógicas:** Entendi como separar a lógica de captura de eventos da lógica de cálculo, tornando o código mais organizado e fácil de entender.
