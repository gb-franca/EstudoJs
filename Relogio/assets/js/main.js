function main() {
    const relogio = document.querySelector('.hora');
    const data = new Date();

    const dias = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
        'quinta-feira', 'sexta-feira', 'sábado'
    ];

    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    function atualizaRelogio() {
        const nomeMes = meses[data.getMonth()];
        const nomeDia = dias[data.getDay()];

        relogio.innerHTML = `Hoje é ${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    }

    atualizaRelogio();
}

main();