# Imagem base do Node.js
FROM node:22.8

# Define o diretório de trabalho
WORKDIR /app

# Copia o código da aplicação
COPY . .

# Instala as Deps
RUN npm i

# Expõe a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
