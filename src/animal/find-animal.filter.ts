import Animal from "./animal";

export default class FindAnimalFilter {

  constructor() {
    return (input: Animal[], searchQuery: string): Animal[] => {
      if (!searchQuery) {
        return input;
      }
      
      let filtered = input.filter( a => {
        if (a.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
          return a;
        }
      });
      return filtered;
    };

  }
}
