# CI/CD Pipeline Project 🚀 [En développement]

Ce projet vise à implémenter une pipeline CI/CD complète pour une application web avec un backend et un frontend. L'objectif est de configurer des processus automatisés pour la gestion des builds, tests, et déploiements en utilisant Docker, Jenkins et plusieurs outils de tests (unitaires, d'intégration, de performance et de sécurité).



## 📂 Structure

```
ci-cd-pipeline/
├── backend/              #  Node.js
├── frontend/             #  React 
├── jenkins/
│   └── Jenkinsfile       # Pipeline script
├── tests/
│   ├── unit/             # Tests unitaires
│   ├── integration/      # Tests API Postman
│   ├── performance/      # Fichiers JMeter ou k6
│   └── security/         # Config OWASP ZAP
├── sonar-project.properties
├── Dockerfile
├── docker-compose.yml
└── README.md
```


### Description des dossiers et fichiers 📝

- **`backend/`** : Contient le code du backend de l'application (par exemple, Node.js ou Spring Boot). Ce dossier peut inclure des configurations spécifiques pour la base de données et l'API.
  
- **`frontend/`** : Contient le code du frontend de l'application (par exemple, React ou Angular). Ce dossier inclut aussi les configurations nécessaires pour la construction et le déploiement du frontend.

- **`jenkins/`** :
  - **`Jenkinsfile`** : Script de pipeline Jenkins pour gérer l'intégration continue et le déploiement continu (CI/CD). Ce fichier définit toutes les étapes, y compris les builds, les tests et les déploiements.

- **`tests/`** : Ce dossier contient différents types de tests pour l'application :
  - **`unit/`** : Tests unitaires pour le backend et le frontend.
  - **`integration/`** : Tests d'intégration, y compris des tests API avec Postman.
  - **`performance/`** : Scripts pour les tests de performance (JMeter ou k6).
  - **`security/`** : Configuration pour les tests de sécurité avec OWASP ZAP.

- **`sonar-project.properties`** : Fichier de configuration pour l'intégration avec SonarQube, un outil pour l'analyse de la qualité du code.

- **`Dockerfile`** : Fichier de configuration pour la création des images Docker. Chaque service (backend, frontend) possède son propre Dockerfile.

- **`docker-compose.yml`** : Fichier utilisé pour définir et exécuter des applications Docker multi-conteneurs. Ce fichier orchestre les conteneurs nécessaires pour le backend, le frontend, et tout autre service.

### Fonctionnalités du projet 💡

1. **Dockerisation** 🐳 : Le projet est entièrement dockerisé, avec des conteneurs pour le backend, le frontend et d'autres services (comme la base de données et Jenkins).
   
2. **Jenkins CI/CD Pipeline** 🛠️ : Utilisation de Jenkins pour automatiser le processus de build, tests et déploiement. La pipeline s'occupe des étapes suivantes :
   - Compilation du code ⚙️
   - Exécution des tests (unitaires, d'intégration, de performance, de sécurité) ✅
   - Déploiement en environnement de production 🌍

3. **Tests automatisés** 🧪 :
   - **Tests unitaires et d'intégration** pour s'assurer que les fonctionnalités de l'application sont correctes.
   - **Tests de performance** pour simuler le comportement sous charge de l'application 🚀.
   - **Tests de sécurité** avec OWASP ZAP pour analyser les vulnérabilités potentielles 🔐.

4. **Analyse de la qualité du code** 📊 : Intégration de SonarQube pour effectuer des analyses de la qualité du code tout au long du cycle de développement.

### Prérequis ⚙️

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- Docker 🐋
- Docker Compose 🧩
- Jenkins 🏗️ (pour exécuter le pipeline)
- SonarQube 🦸‍♂️ (si vous utilisez l'analyse de la qualité du code)

### Installation 🔧

1. Clonez ce repository :

   ```bash
   git clone https://github.com/AhmedSouai/ci-cd-pipeline
   cd ci-cd-pipeline
