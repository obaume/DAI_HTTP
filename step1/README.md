# DAI - Laboratoire HTTP 
# Étape 1 
## Docker base image
* On utilise l'image officielle de php:7.2-apache.
``` docker
FROM php:7.2-apache
COPY src /var/www/html/
```
* On copie les sources du ficher src dans la vm docker.
* J'ai choisi comme contenu de ma page html une page bootstrap [one page](https://bootstrapmade.com/herobiz-bootstrap-business-template/) gratuite. 
* J'ai modiifé le contenu de cette page pour être plus correct dans le contexte du laboratoire.
## Build
* Se rendre dans le dossier contenant le dockerfile et les sources voulus pour notre serveur http static
* lancer cette ligne de commande:
``` cmd
docker build -t php-apache .
```