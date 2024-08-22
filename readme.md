# Sistema Web para Cadastro de Contatos

## Baixar o repositório

`git clone https://gitlab.com/devops-imd-ufrn/web-cadastro-contatos.git`  

## Dependências

1. Docker  

## Construir a imagem Docker

Navegue até a pasta "web-cadastro-contatos" e execute o seguinte comando para construir a imagem Docker:  

`docker build -t web-cadastro-contatos .`  

## Rodar o container

Depois de construir a imagem, você pode rodar o container com o seguinte comando:  

`docker run --name webcadastrocontatos -d -p 8080:80 web-cadastro-contatos`  

## Acessar o site

Agora você pode acessar o site pelo navegador na URL http://localhost:8080. Isso deve exibir o conteúdo do seu site HTML que está na pasta "web-cadastro-contatos".  

