# Usa a imagem do Node para build
FROM node:20 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila a aplicação React
RUN npm run build

# Usa uma imagem Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia o build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
