function AnimalComponentController() {

}

function AnimalComponent() {
  return {
    templateUrl: "./animal/animal.html",
    controller: "AnimalComponentController as vm",
    bindings: {
      animal: "="
    }
  }
}

exports.AnimalComponent = AnimalComponent;
exports.AnimalComponentController = AnimalComponentController;
