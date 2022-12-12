# DAI - Laboratoire HTTP 
# Étape 1 
## Docker base image
* On utilise l'image officielle de php:7.2-apache.
``` dockerfile
FROM php:7.2-apache
COPY src /var/www/html/
```
* On copie les sources du ficher src dans la vm docker.
* J'ai choisi comme contenu de ma page html une page bootstrap [one page](https://bootstrapmade.com/herobiz-bootstrap-business-template/) gratuite. 
* J'ai modiifé le contenu de cette page pour être plus correct dans le contexte du laboratoire.
## Build
* Se rendre dans le dossier contenant le dockerfile et les sources voulus pour notre serveur http static
* lancer cette ligne de commande:
```
docker build -t php-apache .
```
* voilà le résultat qui est attendu :

![](/figures/building_docker_image.png)

## Run
* Pour run l'image docker utiliser la commande suivante 
```
docker run -p <port_souhaité>:80 php-apache
```
* Voici le résultat qui est attendu :

![](/figures/run_docker_image.png)
* Vous pouvez maintenant accéder au contenu via un browser à l'adresse ```localhost:<port souhaité>```

![](/figures/content_run.png)