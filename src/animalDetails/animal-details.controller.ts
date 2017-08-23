import Animal from "../animal/animal";
import ANIMALS from "../animals.mock"
import * as ng from "angular";
import {IAnimalService, AnimalService} from "../animal/animal.service";

interface IRouteParams extends ng.route.IRouteParamsService {
    animal: string;
 }

export default class AnimalDetailsController {
   private animal: Animal;

  constructor($routeParams: IRouteParams, private animalService: IAnimalService){
    if (!$routeParams || !this.animalService.isAnimal($routeParams.animal)) {
        return;
    }

    this.animal = animalService.getAnimalByName($routeParams.animal);
  }
}
