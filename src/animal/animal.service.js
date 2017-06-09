const ANIMALS = require('../animals.mock');

function AnimalService() {

    return {
        getAnimals: getAnimals,
        getAnimalByName: getAnimalByName,
        isAnimal: isAnimal
    }

    function getAnimals() {
        return ANIMALS;
    }

    function isAnimal(animalName) {
        return ANIMALS.some(function(animal) {
            return animal.name === animalName;
        });
    }

    function getAnimalByName(animalName) {
        return ANIMALS.find(function(animal) {
            return animal.name === animalName;
        });
    }
}

module.exports = AnimalService;
