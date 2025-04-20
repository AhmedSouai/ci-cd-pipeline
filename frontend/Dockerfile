# Utilisation de l'image de base Node.js pour le build
FROM node:16 AS build

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY ./src ./src
COPY ./public ./public

# Création de l'application React pour la production
RUN npm run build

# Serveur de production
FROM nginx:alpine

# Copie du build de React dans le répertoire nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposition du port 80 pour le frontend
EXPOSE 80

# Démarrage du serveur nginx
CMD ["nginx", "-g", "daemon off;"]
