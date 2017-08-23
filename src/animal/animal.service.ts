import Animal from "./animal";
import ANIMALS from "../animals.mock";

export interface IAnimalService {
  getAnimals(): Animal[];
  isAnimal(animalName: string): boolean;
  getAnimalByName(name: string): Animal;
}
export class AnimalService implements IAnimalService {
  constructor() {

  }

  getAnimals(): Animal[] {
    return ANIMALS;
  }

  isAnimal(animalName: string): boolean {
    return ANIMALS.some(a => a.name.toLowerCase() === animalName.toLowerCase());
  }

  getAnimalByName(name: string): Animal {
    return ANIMALS.filter(a => a.name.toLowerCase() === name.toLowerCase())[0];
  }
}
