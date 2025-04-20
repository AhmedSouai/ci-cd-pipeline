# Utilise l'image officielle de Node.js comme base
FROM node:16

# Crée un répertoire de travail pour ton application
WORKDIR /app

# Copie le package.json et le package-lock.json dans le conteneur
COPY package.json package-lock.json /app/

# Installe les dépendances dans le conteneur
RUN npm install --production

# Copie le reste du code source dans le conteneur
COPY . /app

# Expose le port sur lequel l'application écoute
EXPOSE 3000

# Démarre ton application
CMD ["npm", "start"]
