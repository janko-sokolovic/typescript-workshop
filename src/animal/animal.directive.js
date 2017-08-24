
function AnimalDirective () {
  return {
    restrict: "E",
    templateUrl: "./animal/animal.html",
    scope: {
      animal: "="
    }
  }
}

module.exports = AnimalDirective;
