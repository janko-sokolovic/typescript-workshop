
function AnimalDetialsController($routeParams, animalService) {
    let vm = this;
    if (!$routeParams || !animalService.isAnimal($routeParams.animal)) {
        return;
    }

    vm.animal = animalService.getAnimalByName($routeParams.animal);
}

module.exports = AnimalDetialsController;
