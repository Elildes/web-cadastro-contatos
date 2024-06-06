
const cadastros = [];

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

// teste
//console.log(exibir());

function exibir() {
    // Exibição do cadastro salvos no array
    var article = document.querySelector('article');

    var paragrafoNome = document.createElement('p');
    var paragrafoCpf = document.createElement('p');
    var paragrafoData = document.createElement('p');
    var paragrafoEndereco = document.createElement('p');

    // Teste: adaptar
    /**
    paragrafoNome.textContent = "Nome: João Paulo da Silva";
    paragrafoCpf.textContent = "CPF: 999.999.999-72";
    paragrafoData.textContent = "Data de Nascimento: 16/12/1980";
    paragrafoEndereco.textContent = "Endereço: Rua B, 420, Bela Vista, Natal/RN";
     */

    // Recupera dados do vetor
    paragrafoNome.textContent = cadastros[i].nome;
    paragrafoCpf.textContent = cadastros[i].cpf;
    paragrafoData.textContent = cadastros[i].dataNascimento;
    paragrafoEndereco.textContent = cadastros[i].dataNascimento;

    // Adiciona dados ao final da page
    // Obs.: exibe apenas dados de uma pessoa.
    // Implementar loop para exibir todos
    article.appendChild(paragrafoNome);
    article.appendChild(paragrafoCpf);
    article.appendChild(paragrafoData);
    article.appendChild(paragrafoEndereco);  
}

/** Modelo: adicionar CSS (querySelector ??) a função exibir:
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
