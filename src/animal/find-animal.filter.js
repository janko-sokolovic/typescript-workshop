
function FindAnimalFilter() {
  return function(input, searchQuery) {
    if(!searchQuery) return input;
    let filtered = input.filter(function(animal){
      return animal.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return filtered;
  }
}

module.exports = FindAnimalFilter;
