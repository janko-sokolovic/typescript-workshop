import * as ng from "angular";

export class AnimalComponentController implements ng.IController{

}
export  class AnimalComponent implements ng.IComponentOptions {

  static componentId = "animal";

    template = require("./animal.html");
    bindings = {
    animal: "="
  }
  controller = AnimalComponentController;
  controllerAs= "vm";
}
