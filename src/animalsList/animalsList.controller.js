
function AnimalsListController(animalService) {
    let vm = this;
    vm.animals = animalService.getAnimals();
}

module.exports = AnimalsListController;
