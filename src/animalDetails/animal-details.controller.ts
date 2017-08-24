import Animal from "../animal/animal";
import ANIMALS from "../animals.mock";

export default class AnimalDetailsController {

private animal: Animal;

  constructor($routeParams: ng.route.IRouteParamsService) {

    if (!$routeParams || !this.isAnimal($routeParams.animal)) {
        return;
    }

    this.animal = ANIMALS.filter(a => a.name.toLowerCase() === $routeParams.animal.toLowerCase())[0];
  }

  isAnimal(animalName: string) :boolean {
    return ANIMALS.some(a => a.name === animalName);
  }

}
