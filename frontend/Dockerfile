# Étape 1 : Construire l'application React
FROM node:16 AS build

WORKDIR /app

# Copier package.json et package-lock.json directement depuis le répertoire courant
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Utiliser Nginx pour servir les fichiers statiques
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Exposer le port 80 pour Nginx
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]
