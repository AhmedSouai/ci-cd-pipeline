# Étape 1 : Construire l'application React
FROM node:16 AS build

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Exécuter les tests
FROM node:16 AS test

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances de test
COPY package.json package-lock.json ./
RUN npm install --save-dev @testing-library/react @testing-library/jest-dom

COPY . .

# Exécuter les tests
CMD ["npm", "test"]

# Étape 3 : Utiliser Nginx pour servir les fichiers statiques (fin de pipeline classique)
FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
