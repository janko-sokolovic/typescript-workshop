const angular = require('angular');
const ngRoute = require('angular-route');
const AnimalsListController = require("./animalsList/animals-list.controller");
const AnimalDetailsController = require("./animalDetails/animal-details.controller");


angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "animalsList/animals-list.html",
                controller: "AnimalsListController as vm"
            })
            .when("/details/:animal", {
                templateUrl: "animalDetails/animal-details.html",
                controller: "AnimalDetailsController as vm"
            });
    })
    .controller("AnimalsListController", AnimalsListController)
    .controller("AnimalDetailsController", AnimalDetailsController)