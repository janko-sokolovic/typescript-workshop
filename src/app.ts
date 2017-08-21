import * as ng from "angular";
import AnimalsListController from "./animalsList/animalsList.controller";

let app: ng.IModule = ng.module("animals", []);
  app.controller("AnimalsListController",  AnimalsListController) ;
