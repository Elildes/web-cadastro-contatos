
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


/**
 * Função exibir contatos
 */
function exibir() {

    // Recupera conteúdo da tag 'article'
    var article = document.querySelector('article');

    // Cria div pai
    var divCadastro = document.createElement('div');
    
    // Cria div's filhas
    for (let i = 0; i < cadastros.length; i++) {
        var divNome = document.createElement('div');
        var divCpf = document.createElement('div');
        var divData = document.createElement('div');
        var divEndereco = document.createElement('div');
    }

    // Seta dados nas div's filhas
    for (let i = 0; i < cadastros.length; i++) {
        divNome.textContent = cadastros[i].nome;
        divCpf.textContent = cadastros[i].cpf;
        divData.textContent = cadastros[i].dataNascimento;
        divEndereco.textContent = cadastros[i].endereco;
    }

    // Adiciona dados na div 'divCadastro'
    for (let i = 0; i < cadastros.length; i++) {
        divCadastro.appendChild(divNome);
        divCadastro.appendChild(divCpf);
        divCadastro.appendChild(divData);
        divCadastro.appendChild(divEndereco);
    }

    // Adiciona id e altera/adiciona CSS na div 'divCadastro':
    divCadastro.setAttribute('id', 'divCad');

    // Adiciona dados ao final da tag 'article'
    article.appendChild(divCadastro);
}

