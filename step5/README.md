# Étape 5
## Sticky session
* Pour cette étape il n'y pas beaucoup de chose à modifier.
* Il suffit d'ajouter ces 2 lignes au label du service static dans le docker-compose.yml :
```dockerfile
- "traefik.http.services.static-service.loadBalancer.sticky.cookie=true"
- "traefik.http.services.static-service.loadBalancer.sticky.cookie.name==static_server_cookie"
```