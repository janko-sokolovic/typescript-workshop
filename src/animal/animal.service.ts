import ANIMALS from "../animals.mock";
import Animal from "./animal";

export interface IAnimalService {
  getAnimals(): Animal[];
  isAnimal(animalName:string): boolean;
  getAnimalByName(animalName:string): Animal;
}

export class AnimalService implements IAnimalService {
  constructor() {

  }
  getAnimals(): Animal[] {
    return ANIMALS;
  }

  isAnimal(animalName: string): boolean {
    return ANIMALS.some(animal => {return animal.name === animalName;});
  }

  getAnimalByName(animalName: string): Animal {
    animalName === "unused expression?";
    return ANIMALS.filter(a => a.name.toLowerCase() === animalName.toLowerCase())[0];
  }

}
