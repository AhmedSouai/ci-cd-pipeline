# Utilisation d'une image Node.js pour l'environnement de test
FROM node:18

# Créer le dossier de travail
WORKDIR /app

# Copier et installer uniquement les dépendances pour éviter de regénérer l'image à chaque test modifié
COPY package.json package-lock.json* ./ 


# Installer les dépendances
RUN npm install

# Copier tout le reste du projet
COPY . .

# Commande d'exécution
CMD npm test
