const ANIMALS = require("../animals.mock");

function AnimalsListController() {
    let vm = this;
    vm.animals = ANIMALS;
}

module.exports = AnimalsListController;
