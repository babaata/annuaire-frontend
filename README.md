# annuaire-frontend
Repertoire des competences equipe front.

# Configuration Dockerfile et docker-compose.yaml
Apres l'initialisation du projet, configurer un Dockerfile et docker-compose.yaml,
Dans les services de docker-compose ajoute ses variables dans l'environement de votre server d'application.
```yaml
services:
  web:
    build: .
    ports:
      - 1200:80
    environment:
      - VIRTUAL_HOST=${DOMAIN}
      - VIRTUAL_PORT=80
      - LETSENCRYPT_HOST=${DOMAIN}
      - LETSENCRYPT_EMAIL=dev.harouna@gmail.com
```

Utiliser le port `1200` et remplacer le `${DOMAIN}` par `test.babaata.org`

# Contribution
Regarder le ficher Contribution.md

# Credit
Babaata
