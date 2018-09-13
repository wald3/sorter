class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.setComparator(numbericCompare);
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    if(indices.length == 1){
      return this.array; 
    }
    else{ 
      indices.sort();
      let new_array = [];
      
      if((indices[indices.length - 1] - indices[0]) + 1 > indices.length){
        for(let i = 0; i < indices.length; i++){
          new_array.push({pos: indices[i], item: this.array[indices[i]]});    
        }
        new_array.sort(this.comparator);
        for(let j = 0; j < indices.length; j++){
          this.array[indices[j]] = new_array[j].item;   
        }
      }
      else{
        new_array  = this.array.splice(indices[0], indices.length);
        new_array.sort(this.comparator);
        this.array.splice(indices[0], 0, ...new_array);
        
      }
      return this.array;
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

function numbericCompare(a, b) {
  return a - b;
}

module.exports = Sorter;