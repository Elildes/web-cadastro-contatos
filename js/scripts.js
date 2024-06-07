
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

    // Limpa campos de entrada do formulários
    document.getElementById('formulario').reset();

    // Teste:
    testePrintCadastro();

    alert('Contato salvo com sucesso!');
}


/**
 * Função exibir contatos
 */
function exibir() {

    // Recupera conteúdo da tag 'article'
    var article = document.querySelector('article');

    // Verifica se a div 'divCadastrosGeral' está vazia e se o vetor 'cadastros' também está vazio
    // senão, limpa os dados para eviar a duplicação de dados
    var divCadastrosGeral = document.getElementById('divCadastrosGeral');
    if (divCadastrosGeral && divCadastrosGeral.innerHTML == '' && cadastros.length == 0) {
        alert("Lista de contatos vazia!");
    } else if (divCadastrosGeral) {
        divCadastrosGeral.innerHTML = '';
    }

    // Loop através de cada cadastro
    for (let i = 0; i < cadastros.length; i++) {

        // Cria div pai
        var divCadastro = document.createElement('div');
        
        // Cria div's filhas
        var divNome = document.createElement('div');
        var divCpf = document.createElement('div');
        var divData = document.createElement('div');
        var divEndereco = document.createElement('div');

        // Seta dados nas div's filhas
        divNome.textContent = cadastros[i].nome;
        divCpf.textContent = cadastros[i].cpf;
        divData.textContent = cadastros[i].dataNascimento;
        divEndereco.textContent = cadastros[i].endereco;

        // Adiciona dados na div 'divCadastro'
        divCadastro.appendChild(divNome);
        divCadastro.appendChild(divCpf);
        divCadastro.appendChild(divData);
        divCadastro.appendChild(divEndereco);

        // Adiciona id e altera/adiciona CSS na div 'divCadastro'
        // Adiciona id único para cada div
        divCadastro.setAttribute('id', 'divCad' + i);

        // Adiciona dados ao final da div 'divCadastros'
        divCadastrosGeral.appendChild(divCadastro);
    }
}

/**
 * Função Buscar Contato
 */
function buscarContato() {
    
    let cpf = String(prompt("Digite o CPF do contato que deseja buscar:"));

    // Buscar por cpf
    for (indice in cadastros) {
        if (cpf === cadastros[indice].cpf) {
            // Retorno da busca pelo cpf
            alert("Nome: " + cadastros[indice].nome + "\n"
                + "Data de Nascimento: " + cadastros[indice].dataNascimento + "\n"
                + "Endereço: " + cadastros[indice].endereco);
            return;
        }        
    }

    // Caso o CPF não seja encontrado
    alert("CPF não encontrado!")
}

/**
 * Função Remover Contato
 */
function removerContato() {

    let cpf = String(prompt("Digite o CPF do contato que deseja remover:"));

    // Buscar por cpf
    for (indice in cadastros) {
        if (cpf === cadastros[indice].cpf) {
            // remove contato
            //cadastros[indice].delete;
            delete cadastros[indice];
            alert("Contato excluído com sucesso!");
            return;
        }        
    }

    // Caso o CPF não seja encontrado
    alert("CPF não encontrado!")
}

// Teste: print vetor
function testePrintCadastro () {
    console.log("Vetor: ");
    for (let index = 0; index < cadastros.length; index++) {
        console.log(cadastros[index].nome + ", ");
        console.log(cadastros[index].cpf + ", ");
        console.log(cadastros[index].dataNascimento + ", ");
        console.log(cadastros[index].endereco  + ", ");    
    }
}
