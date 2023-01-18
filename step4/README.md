# Étape 4
## AJAX requests with JQuery
* Pour cette partie il m'a suffit de modifier le contenu du container static
* J'ai ajouter jquery avec la balise suivante :
```html
<script type="text/javascript" 
src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
```
* J'ai ensuite créer un ficher javascript pour faire le load des informations. Le fichier s'appelle animals.js
* Je l'ai ajouté à index.html avec cette balise :
```html
<script src="assets/js/animals.js"></script>
```
* Le ficher animals.js contient ceci :
```javascript
$(function () {
    //fonction qui va 'load' un nouveau tableau d'animaux depuis localhost/api
    function loadAnimals(){
        $.getJSON("/api",function(animals){
            // animals = json récupéré depuis /api
            console.log(animals);
            var msg = "Nobobdy is here...";
            // lorsque le tableau est rempli 
            if(animals.length > 0){
                // on annonce qu'elle animal est arrivé via la variable msg
                msg = animals[0].name + " the " + animals[0].animal + " is here!";
            }
            // le contenu de dom ayant pour id animal est changé pour être msg
            $("#animal").text(msg);
        });
    }
    // on appelle une première fois la fonction 
    loadAnimals();
    // on indique que toute les 2 secondes on aimerait que la fonction loadAnimals soit appellée
    setInterval(loadAnimals,2000);
});
```
* J'ai ajouté l'id animal à un élément de index.html pour que le message s'affiche.
* Voilà le résultat final :
![](/figures/animals-static.png)