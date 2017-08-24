import * as angular from "angular";
import "angular-route";

import AnimalsListController from "./animalsList/animalsList.controller";
import AnimalDetailsController from "./animalDetails/animal-details.controller";

let app: ng.IModule = angular.module("animals", ["ngRoute"])

app.config(($routeProvider: ng.route.IRouteProvider) => {
  $routeProvider
      .when("/", {
          template: require("./animalsList/animals-list.html"),
          controller: "AnimalsListController as vm"
      })
      .when("/details/:animal", {
          template: require("./animalDetails/animal-details.html"),
          controller: "AnimalDetailsController as vm"
      });
});

app.controller("AnimalsListController", AnimalsListController)
  .controller("AnimalDetailsController", AnimalDetailsController);
