# CI/CD Pipeline Project 🚀

Ce projet met en œuvre un pipeline CI/CD complet avec Jenkins pour une application web (frontend + backend).

## 📂 Structure

```
ci-cd-pipeline/
├── backend/              # Exemple : Node.js / Spring Boot
├── frontend/             # Exemple : React / Angular
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

## 🧪 Tests intégrés au pipeline

- Tests unitaires
- Tests d'intégration
- Tests de performance
- Tests de sécurité

## 🔧 Outils & Technologies

- Jenkins, Docker, SonarQube, Postman/Newman, JMeter/k6, OWASP ZAP, Snyk

