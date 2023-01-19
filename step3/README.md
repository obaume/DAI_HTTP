# Étape 3
## Docker compose to build the infrastructure
* j'ai repris les 2 dockerfile de la patie 1 et 2, avec le code pour le site static et dynamique. J'ai du les modifier pour qu'on puisse communiquer avec le reverse proxy.
* J'ai du ajouter la commande EXPOSE dans les Dockerfile des 2 services. J'ai exposé les ports 80 (static) et 3000 (dynamic) 
### docker-compose
``` dockerfile
services:
  reverse-proxy:
    # The official v2 Traefik docker image
    image: traefik:v2.9
    # Enables the web UI and tells Traefik to listen to docker
    command: --api.insecure=true --providers.docker  --entryPoints.web.address=:80 --entryPoints.admin.address=:3000
    ports:
      # The HTTP port
      - "80:80"
      # The admin port (enabled by --api.insecure=true)
      # The Web UI (enabled by --api.insecure=true)
      - "8080:8080"
    volumes:
      # So that Traefik can listen to the Docker events
      - /var/run/docker.sock:/var/run/docker.sock
  static:
    build: ./php-apache
    scale: 3
    labels:
      - "traefik.http.routers.static.rule=Host(`localhost`)"
      - "traefik.http.routers.static.entrypoints=web"
  dynamic:
    build: ./express-image
    scale: 3
    labels:
      - "traefik.http.routers.dynamic.rule=Host(`localhost`)"
      - "traefik.http.routers.dynamic.middlewares=dynamic-stripprefix"
      - "traefik.http.middlewares.dynamic-stripprefix.stripprefix.prefixes=/api"
      - "traefik.http.routers.dynamic.rule=Host(`localhost`) && Path(`/api`)"
```
* j'ai placer les éléments de l'étape 1 dans le dossier php-apache et ceux de l'étape 2 dans le dossier express-image.
* Les 2 services auront 3 instances je l'indique par la commande ``scale: 3`` 
* Les container static seront accédé via ``http://localhost`` j'indique cela dans les labels du service
* Les container dynamic seront accédé via ``http://localhost/api``