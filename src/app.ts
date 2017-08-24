import * as angular from "angular";
import "angular-route";

import AnimalsListController from "./animalsList/animalsList.controller";


let app: ng.IModule = angular.module("animals", [])

app.controller("AnimalsListController", AnimalsListController);
