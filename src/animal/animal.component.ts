import * as ng from "angular";

export class animalComponentController implements ng.IController{

}
export  class AnimalComponent implements ng.IComponentOptions {

  static componentId = "animal";

    template = require("./animal.html");
    bindings = {
      animal: "="
    };
  controller = animalComponentController;
  controllerAs= "vm"
}
