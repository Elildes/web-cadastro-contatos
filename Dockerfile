# Usar a imagem oficial do Nginx
FROM nginx:alpine

# Copiar os arquivos do site para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80
