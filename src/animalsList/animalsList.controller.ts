import ANIMALS from "../animals.mock";
import Animal from "../animal/animal";
import {AnimalService, IAnimalService} from "../animal/animal.service";
export default class AnimalsListController {
  private animals: Animal[];

  constructor(animalService: IAnimalService){
    this.animals = animalService.getAnimals();
  }
}
