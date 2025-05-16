function main() {
    const form =  document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    const imcGraus = [
        { max: 18.5, grau: 'Abaixo do peso', cor: 'lightblue' },
        { max: 25, grau: 'Peso normal', cor: 'lightgreen' },
        { max: 30, grau: 'Sobrepeso', cor: 'yellow' },
        { max: 35, grau: 'Obesidade grau 1', cor: 'orange' },
        { max: 40, grau: 'Obesidade grau 2', cor: 'red' },
        { max: Infinity, grau: 'Obesidade grau 3', cor: 'darkred' }
    ];

    function calcularIMC(e) {
        e.preventDefault();
      
        const peso = Number( document.querySelector('#peso').value );
        const altura = Number( document.querySelector('#altura').value );

        if(!peso || !altura) {
            resultado.innerHTML = `<p style="color: red;">Por favor, insira valores válidos para peso e altura.</p>`;
            return;
        };

        const imc = peso / (altura ** 2);
        const grau = imcGraus.find(g => imc <= g.max);

        resultado.innerHTML = `
            <p style=" text-align: center; ; background-color: ${grau.cor}; padding: 10px; border-radius: 5px;">
                Seu IMC é: ${imc.toFixed(2)} (${grau.grau})
            </p>`;

        
    };
    form.addEventListener('submit', calcularIMC);
};
main();