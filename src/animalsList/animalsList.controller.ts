import ANIMALS from "../animals.mock";
 import Animal from "../animal/animal";
 
 export default class AnimalsListController {
   animals: Animal[];

  constructor(){
    this.animals = ANIMALS;
   }
 }