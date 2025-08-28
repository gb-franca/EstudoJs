# Projeto: Timer (Cronômetro)

Um cronômetro funcional com controles de "Iniciar", "Pausar" e "Zerar". Este projeto foi um passo além do relógio digital, focando no gerenciamento de estado mais complexo e no controle de eventos de tempo.

📸 **Preview do Projeto**
*-- (coloque aqui um GIF do seu timer em funcionamento) --*

---

### 🎯 Objetivo do Projeto

O objetivo era construir uma aplicação de cronômetro que permitisse ao usuário iniciar uma contagem de tempo, pausá-la a qualquer momento sem perder o progresso, continuar a contagem e zerá-la para começar de novo. O desafio era gerenciar o estado do timer (rodando, pausado) e controlar o `setInterval` de forma precisa.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

* **Tecnologias:**
    * **HTML5:** Estrutura com um display para o tempo e os botões de controle (`<button>`).
    * **CSS3:** Estilização da interface, talvez com mudanças visuais nos botões dependendo do estado do timer.
    * **JavaScript:** Lógica de estado, controle dos intervalos de tempo e formatação da exibição.

* **Conceitos de JavaScript:**
    * **`setInterval()` e `clearInterval()`:** Uso combinado das duas funções. `setInterval` inicia a contagem e retorna um ID, que é armazenado em uma variável. `clearInterval` usa esse ID para parar a execução.
    * **Gerenciamento de Estado:** Utilização de variáveis para controlar o estado da aplicação, como `timerId` (para guardar o ID do intervalo), `segundosPassados` (para acumular o tempo) e `estaRodando` (um booleano para saber se o timer está ativo).
    * **Lógica de Controle:** Funções separadas para as ações de iniciar, pausar e zerar, cada uma manipulando as variáveis de estado e os intervalos de tempo.
    * **Separação de Lógicas:** Separação entre a lógica que *conta* o tempo (incrementando uma variável de segundos) e a lógica que *exibe* o tempo (convertendo o total de segundos para o formato HH:MM:SS).

---

### 챌 Desafios e Soluções

1.  **Pausar e Continuar:**
    * **Desafio:** Como parar o contador sem perder o tempo que já passou? E como continuar de onde parou?
    * **Solução:** A solução foi usar `clearInterval()` para pausar. A variável `segundosPassados` não é zerada, guardando o progresso. Ao clicar em "Iniciar" novamente, um novo `setInterval` é criado e continua incrementando essa mesma variável, dando a impressão de que o timer continuou de onde parou. Uma variável de estado `estaRodando` foi crucial para evitar que múltiplos `setIntervals` fossem criados ao clicar em "Iniciar" várias vezes.

2.  **Conversão do Tempo:**
    * **Desafio:** Manter o controle do tempo apenas incrementando segundos é fácil, mas como exibir isso no formato `00:00:00`?
    * **Solução:** Criei uma função de formatação. A cada segundo, ela recebia o número total de `segundosPassados` e usava operações matemáticas (divisão e resto `%`) para calcular quantas horas, minutos e segundos aquilo representava. Depois, aplicava a mesma lógica de adicionar um zero à esquerda do projeto do relógio.

---

### 💡 Resumo dos Aprendizados

* **Controle Fino de Timers:** Aprendi que `setInterval` não é apenas para iniciar uma tarefa repetida, mas que, ao salvar seu ID, eu ganho controle total para pausá-la (`clearInterval`) e gerenciá-la conforme a necessidade da aplicação.
* **Gerenciamento de Estado é Chave:** Este projeto reforçou o quanto é importante modelar o estado de uma aplicação. Saber se o timer estava "rodando" ou "pausado" foi fundamental para fazer os botões funcionarem corretamente.
* **Separar a Lógica do Modelo e da Visualização:** Entendi a vantagem de ter uma variável `segundosPassados` como a "fonte da verdade" (o modelo) e uma função separada que apenas se preocupa em formatar esse número para o usuário (a visualização). Isso torna o código mais robusto e fácil de manter.
