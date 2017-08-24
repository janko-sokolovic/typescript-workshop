const ANIMALS = require('../animals.mock');

function AnimalDetialsController($routeParams) {
    let vm = this;
    if (!$routeParams || !isAnimal($routeParams.animal)) {
        return;
    }

    vm.animal = ANIMALS.find(function(a){return a.name === $routeParams.animal})



    function isAnimal(animalName) {
        return ANIMALS.some(function(a) {
            return a.name === animalName
        });
    }

}

module.exports = AnimalDetialsController;
