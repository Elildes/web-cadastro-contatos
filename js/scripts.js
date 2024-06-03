
const cadastros = [];

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('data-nascimento').value;
    let endereco = document.getElementById('endereco').value;

    let novoCadastro = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        endereco: endereco
    };

    // Verifica se o CPF já está cadastrado
    for (let i = 0; i < cadastros.length; i++) {
        if (cadastros[i].cpf === novoCadastro.cpf) {
            alert('CPF já cadastrado!');
            return;
        }
    }

    // Se o CPF não estiver cadastrado, adiciona o novo cadastro ao vetor
    cadastros.push(novoCadastro);
    alert('Contato salvo com sucesso!');
}

function exibir() {
    console.log("Meu cadastro é: ");
    for (let i = 0; i < cadastros.length; i++) {
        console.log(cadastros[i].nome);
        console.log(cadastros[i].cpf);
        console.log(cadastros[i].dataNascimento);
        console.log(cadastros[i].endereco);
    }
}

// teste
//console.log(exibir());

// testes:
/**
function exibir() {
    console.log("Meu cadastro é: ");
    for (const key in cadastros) {
        for (const indice in lista) {
            if (Object.hasOwnProperty.call(lista, indice)) {
                const element = lista[indice];
                console.log(element);
            }       
        }
    }
}
*/

