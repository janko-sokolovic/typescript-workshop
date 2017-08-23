import * as ng from "angular";
import "angular-route";
import AnimalsListController from "./animalsList/animalsList.controller";
import AnimalDetailsController from "./animalDetails/animal-details.controller";
import FindAnimalFilter from "./animal/find-animal.filter";
import {AnimalComponent, AnimalComponentController} from "./animal/animal.component";
import {AnimalService} from "./animal/animal.service";

let app: ng.IModule = ng.module("animals", ["ngRoute"]);

app
  .config(function($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when("/", {
        template: require("./animalsList/animals-list.html"),
        controller: "AnimalsListController as vm"
      })
      .when("/details/:animal", {
        template: require("./animalDetails/animal-details.html"),
        controller: "AnimalDetailsController as vm"
      });
  })
  .controller("AnimalsListController", AnimalsListController)
  .controller("AnimalDetailsController", AnimalDetailsController)
  .service("animalService", AnimalService)
  .filter("findAnimal", FindAnimalFilter)
  .component(AnimalComponent.componentId, new AnimalComponent());
