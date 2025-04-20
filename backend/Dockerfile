# Étape 1 : Utilisation de l'image Node.js
FROM node:16

# Répertoire de travail
WORKDIR /app

# Copie des fichiers de configuration
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du code source dans le conteneur
COPY ./src ./src

# Exposition du port 3000
EXPOSE 3000

# Commande pour démarrer le serveur
CMD ["node", "src/app.js"]
