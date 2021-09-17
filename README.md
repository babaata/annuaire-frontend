# annuaire-frontend
Repertoire des competences equipe front.

# Configuration Dockerfile et docker-compose.yaml
Apres l'initialisation du projet, configurer un Dockerfile et docker-compose.yaml,
Dans les services de docker-compose ajoute ses variables dans l'environement de votre server d'application.
```yaml
version: '3.2'
networks:
  proxy_https_default:
     external: true
services:
  front:
    build: .
    image: annuaire-front:0.0.1
    container_name: annuaire-front
    volumes:
      - ./share_data:/share_data
    networks:
      - default
      - proxy_https_default
    environment:
      - VIRTUAL_HOST=${DOMAIN}
      - VIRTUAL_PORT=3000
      - LETSENCRYPT_HOST=${DOMAIN}
      - LETSENCRYPT_EMAIL=dev.harouna@gmail.com
    ports:
      - "3080:3000"
```

Utiliser le port `3080` et remplacer le `${DOMAIN}` par `test.babaata.org`

# Contribution
Regarder le ficher Contribution.md

# Credit
Babaata
