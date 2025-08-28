class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {

            this.handleSubmit(e);
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado com sucesso!');
        }
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.innerText = '';
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            campo.classList.remove('input-error');
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {

                if (!this.validaCPF(campo)) valid = false;
            }


            if (campo.classList.contains('usuario')) {

                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true; 

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário deve conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }


    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
            valid = false;
        }

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'As senhas precisam ser iguais.');
            this.criaErro(repetirSenha, 'As senhas precisam ser iguais.');
            valid = false;
        }
        return valid;
    }

    criaErro(campo, mensagem) {
        const errorText = campo.nextElementSibling;
        errorText.innerText = mensagem;
        campo.classList.add('input-error');
    }
}

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable : true,
            configurable : false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;  
    }
    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }

    static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }
}

const valida = new ValidaFormulario();

