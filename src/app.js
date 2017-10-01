const angular = require('angular');
const AnimalsListController = require("./animalsList/animalsList.controller");

angular
    .module('app', [])
    .controller("AnimalsListController", AnimalsListController);