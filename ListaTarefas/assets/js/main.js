function main() {
    const inputTarefa = document.querySelector(".input-tarefa");
    const btnAdicionar = document.querySelector(".btn-tarefa"); // Agora é um link <a>
    const listaTarefas = document.querySelector(".tarefas");
    

    function criaLista() {
        const li = document.createElement("li");
        return li;
    }

    function btnRemove(li) {
        const btn = document.createElement("a");
        btn.setAttribute("href", "#");
        btn.setAttribute("class", "btn-remover");
        btn.innerText = "";
        li.appendChild(btn);

        btn.addEventListener("click", function (event) {
            event.preventDefault();
            li.remove();
            salvarTarefas();
        });
    }

    function criaTarefa(t) {
        const li = criaLista();
        li.innerText = t;
        listaTarefas.appendChild(li);
        btnRemove(li);
        salvarTarefas();
    }

    function addTarefa(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        if (!inputTarefa.value.trim()) {
            alert("Você precisa adicionar uma tarefa!");
            return;
        }
        criaTarefa(inputTarefa.value.trim());
        inputTarefa.value = "";
    }

    function salvarTarefas() {
        const liTarefas = listaTarefas.querySelectorAll("li");
        const tarefaSalvas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace("Remover", "").trim();
            tarefaSalvas.push(tarefaTexto);
        }
        const tarefasJSON = JSON.stringify(tarefaSalvas);
        localStorage.setItem("tarefas", tarefasJSON);
    }

    function adicionarTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas");
        if (!tarefas) return;

        const tarefasSalvas = JSON.parse(tarefas);

        for (let tarefa of tarefasSalvas) {
            criaTarefa(tarefa);
        }
    }

    btnAdicionar.addEventListener("click", addTarefa);
    inputTarefa.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTarefa(e);
        }
    });

    adicionarTarefasSalvas();
}

main();