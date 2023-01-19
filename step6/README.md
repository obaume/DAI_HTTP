# Étape 6
## Management UI
* Après quelque recherche sur internet et des discussions avec certains camarades de classe, j'ai décidé d'utiliser Portainer pour cette dernière partie du laboratoire.
* Il m'a donc suffit de rajouter un service au docker-compose.yml :
```dockerfile
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./portainer-data:/data
    labels:
      - "traefik.http.routers.portainer.rule=Host(`localhost`)"
      - "traefik.http.routers.portainer.entrypoints=admin"
      - "traefik.http.services.portainer.loadbalancer.server.port=9000"
```
* J'ai traduis la configuration de dockerfile qui est proposé dans la [documentation portainer](https://docs.portainer.io/start/install/server/docker/wcs) :
```dockerfile
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine -v portainer_data:C:\data portainer/portainer-ce:latest
```