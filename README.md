# 🛠️ CI/CD Pipeline avec Jenkins, Docker, Trivy & SonarQube

Ce projet met en place une pipeline CI/CD complète avec **Jenkins**, **Docker**, **Trivy**, **SonarQube**, et des tests automatisés via un conteneur dédié. Il s'agit d'une architecture réaliste orientée entreprise.

---

## 📁 Structure du projet

```bash
├── Dockerfile
├── README.md
├── backend
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── app.js
│       └── users.js
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.js
│       ├── index.css
│       └── index.js
├── jenkins
│   └── Jenkinsfile
├── sonar-project.properties
└── test-container
    ├── Dockerfile
    ├── integration-test.js
    ├── package.json
    ├── performance-test.yml
    └── unit-test.js

🚀 Technologies utilisées
Jenkins : Orchestration CI/CD

Docker : Conteneurisation des services

Trivy : Analyse de sécurité des images Docker

SonarQube : Analyse statique du code

Mocha : Tests unitaires et d'intégration

Artillery : Tests de performance

Docker Hub : Registre pour les images

⚙️ Étapes de la pipeline Jenkins
🔹 1. Récupération du code

git credentialsId: 'xxx', url: 'https://github.com/AhmedSouai/ci-cd-pipeline.git', branch: 'develop'

🔹 2. Construction des images Docker
frontend: React

backend: Express.js

test-container: pour les tests

🔹 3. Scan de sécurité avec Trivy
Analyse les vulnérabilités CRITIQUES

Arrête le pipeline si une faille est détectée

🔹 4. Exécution des tests automatisés
unit-test.js

integration-test.js

performance-test.yml

🔹 5. Push vers Docker Hub
ahmed92clmb/frontend:latest

ahmed92clmb/backend:latest

ahmed92clmb/test-container:latest

🧪 Lancer les tests localement
bash
Copier
Modifier
docker-compose run --rm test-container
📝 Notes
Le pipeline est fail-fast : s'arrête à la première erreur critique.

Tous les conteneurs sont autonomes.

Idéal pour un déploiement Kubernetes ou Docker Swarm.

👤 Auteur
Ahmed Souai
🔗 GitHub - @AhmedSouai

bash
Copier
Modifier
