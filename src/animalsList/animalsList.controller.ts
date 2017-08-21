import ANIMALS from "../animals.mock";
import Animal from "../animal/animal";

export default class AnimalsListController {
  private animals: Animal[];

  constructor(){
    this.animals = ANIMALS;

    console.log(this.animals + "Aaa");
  }

}
