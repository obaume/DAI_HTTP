var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(generateAnimals());
});

app.listen(3000, function() {
    console.log("Accepting HTTP requests on port 3000.");
});

function generateAnimals() {
    var numberOfAnimals = chance.integer({
        min: 1,
        max: 10
    });
    console.log(numberOfAnimals + " animals :");
    var animals = [];
    for (var i = 0; i < numberOfAnimals; i++) {
        var birthYear = chance.year({
            min: 1998,
            max: 2021
        });
        animals.push({
            animal: chance.animal(),
            name: chance.word(),
            gender: chance.gender(),
            birthday: chance.birthday({
                year: birthYear
            })
        });
    }
    console.log(animals);
    return animals;
}