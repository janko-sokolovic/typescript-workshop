import Animal from "../animal/animal";
import {IAnimalService} from "../animal/animal.service";

export default class AnimalsListController {
  animals: Animal[];

  constructor(animalService: IAnimalService){
    this.animals = animalService.getAnimals();
  }
}
