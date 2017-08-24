import Animal from "../animal/animal";
import {IAnimalService} from "../animal/animal.service";

export default class AnimalDetailsController {

private animal: Animal;

  constructor($routeParams: ng.route.IRouteParamsService, animalService: IAnimalService) {

    if (!$routeParams || !animalService.isAnimal($routeParams.animal)) {
        return;
    }

    this.animal = animalService.getAnimalByName($routeParams.animal);
  }

}
