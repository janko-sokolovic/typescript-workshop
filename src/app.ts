import * as ng from "angular";
import "angular-route";
import AnimalsListController from "./animalsList/animalsList.controller";

let app: ng.IModule = ng.module("animals", []);

app.controller("AnimalsListController", AnimalsListController);
