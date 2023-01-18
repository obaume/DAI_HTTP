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