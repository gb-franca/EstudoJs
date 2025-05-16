function main() {
    const display = document.querySelector(".display");
    const btn = document.querySelectorAll(".btn");

    function start() {
        clickBtn();
        enterKey();
        backspaceKey();
        display.focus();
    }

    function clickBtn() {
        btn.forEach((button) => {
            button.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    display.value += el.innerText;
                }

                if (el.classList.contains('btn-clear')){
                    display.value = "";
                }

                if (el.classList.contains('btn-del')){
                    removeOne();
                }

                if (el.classList.contains('btn-eq')){
                    result();
                }
            });
        });
    }

    function removeOne() {
        display.value = display.value.slice(0, -1);
    };

    function enterKey() {
        display.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                result();
            }
        });
    }

    function backspaceKey() {
        display.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                e.preventDefault();
                removeOne();
            }
        });

        }

    function result() {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (Number.isFinite(conta) && !Number.isInteger(conta)) {
                conta = parseFloat(conta.toFixed(10));
            }   

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            display.value = String(conta);
        }
        catch(e) {
            alert('Conta inválida');
            return;
        }
    }
    start();
}
main(); // Chame a função main para iniciar o script