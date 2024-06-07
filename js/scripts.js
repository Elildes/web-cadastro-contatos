
const cadastros = [];

/**
 * Função cadastrar contatos
 */
function cadastrar() {
    let nome_ = document.getElementById('nome').value;
    let cpf_ = document.getElementById('cpf').value;
    let dataNascimento_ = document.getElementById('data-nascimento').value;
    let endereco_ = document.getElementById('endereco').value;

    let novoCadastro = {
        nome: nome_,
        cpf: cpf_,
        dataNascimento: dataNascimento_,
        endereco: endereco_
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

// Teste: adaptar a exibição em formulário html
/**
function exibir() {
    console.log("Meu cadastro é: ");
    for (let i = 0; i < cadastros.length; i++) {
        console.log(cadastros[i].nome);
        console.log(cadastros[i].cpf);
        console.log(cadastros[i].dataNascimento);
        console.log(cadastros[i].endereco);
    }
}
 */

/**
 * Função exibir contatos
 */
function exibir() {
    var article = document.querySelector('article');

    var divCadastro = document.createElement('div');
    
    var divNome = document.createElement('div');
    var divCpf = document.createElement('div');
    var divData = document.createElement('div');
    var divEndereco = document.createElement('div');
    var novaLinha = document.createElement('br');

    divNome.textContent = cadastros[0].nome;
    divCpf.textContent = cadastros[0].cpf;
    divData.textContent = cadastros[0].dataNascimento;
    divEndereco.textContent = cadastros[0].endereco;

    // Adiciona dados ao final da page
    // Obs.: exibe apenas dados de uma pessoa.
    // Implementar loop para exibir todos
    /**
    article.appendChild(divNome);
    article.appendChild(divCpf);
    article.appendChild(divData);
    article.appendChild(divEndereco);
    article.appendChild(novaLinha);
     */
    divCadastro.appendChild(divNome);
    divCadastro.appendChild(divCpf);
    divCadastro.appendChild(divData);
    divCadastro.appendChild(divEndereco);
    divCadastro.appendChild(novaLinha);

    article.appendChild(divCadastro);
}

/** Modelo: adicionar CSS a função exibir:
<div id="cadastro">
    <div id="">João Paulo da Silva</div>
    <div>CPF: 999.999.999-99</div>
    <div>Data Nascimento: 11/11/2010</div>
    <div>Endereço: Rua B, Bela Vista, Natal/RN</div>
</div>
 */

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
