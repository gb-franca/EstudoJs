# Projeto: Relógio Digital

Um relógio digital simples que exibe a hora, os minutos e os segundos atuais, atualizando-se em tempo real. Este projeto foi um excelente exercício para aprender sobre eventos baseados em tempo no JavaScript.

📸 **Preview do Projeto**
*-- (coloque aqui um print do seu relógio) --*

---

### 🎯 Objetivo do Projeto

O objetivo era criar um componente de relógio funcional que buscasse a hora atual do sistema e a exibisse na tela. O principal desafio técnico era fazer com que essa exibição se atualizasse a cada segundo de forma contínua e eficiente.

---

### ⚙️ Conceitos e Tecnologias Aplicadas

* **Tecnologias:**
    * **HTML5:** Um único elemento (`<div>` ou `<span>`) para servir como display do relógio.
    * **CSS3:** Estilização para a aparência do relógio (fonte, tamanho, cor).
    * **JavaScript:** Lógica para obter a hora e controlar a atualização da tela.

* **Conceitos de JavaScript:**
    * **`setInterval()`:** Função de ordem superior usada para executar uma função repetidamente em um intervalo de tempo fixo (neste caso, a cada 1000 milissegundos, ou 1 segundo).
    * **Objeto `Date`:** Utilização do objeto nativo `Date` para obter a hora, os minutos e os segundos atuais do sistema operacional.
    * **Manipulação do DOM:** Atualização do `innerHTML` ou `textContent` do elemento de exibição a cada segundo com a hora formatada.
    * **Formatação de Strings/Números:** Lógica para adicionar um zero à esquerda de horas, minutos ou segundos quando o valor for menor que 10 (ex: "09" em vez de "9").

---

### 챌 Desafios e Soluções

1.  **Atualização Contínua:**
    * **Desafio:** Como fazer o relógio "rodar" sozinho sem que o usuário precise interagir com a página?
    * **Solução:** A função `setInterval()` foi a solução ideal. Criei uma função `atualizarRelogio()` que continha toda a lógica de obter e exibir a hora, e então a configurei para ser executada a cada segundo com `setInterval(atualizarRelogio, 1000)`.

2.  **Formatação do Horário:**
    * **Desafio:** O objeto `Date` retorna números puros (ex: `9` para 9 horas). Um relógio digital precisa do formato de dois dígitos (ex: `09`).
    * **Solução:** Criei uma pequena função auxiliar de formatação. Essa função recebia um número e, usando uma condição `if`, verificava se ele era menor que 10. Se fosse, retornava o número com um "0" na frente; caso contrário, retornava o número original. Apliquei essa função às horas, minutos e segundos antes de exibi-los.

---

### 💡 Resumo dos Aprendizados

* **Eventos de Tempo em JavaScript:** Aprendi a usar `setInterval` para criar funcionalidades que se repetem ao longo do tempo, uma base para animações, contadores e outras tarefas assíncronas.
* **Trabalhando com o Objeto `Date`:** Ganhei familiaridade com o objeto `Date`, uma ferramenta essencial para manipular qualquer tipo de informação relacionada a datas e horários.
* **A Importância da Formatação de Dados:** Entendi que obter os dados é apenas parte do trabalho; formatá-los de uma maneira que seja legível e agradável para o usuário é igualmente crucial para uma boa interface.

---
