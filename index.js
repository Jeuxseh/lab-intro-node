class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {

    for (let i = 0; i < this.items.length-1 ; i++) {
      if (item > this.items[i] && item < this.items[i + 1]) {
        this.items.splice(i + 1, 0, item)

      }
    }

    this.items.push(item);

    this.length++;




  }

  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let aux = 0;
      let pos = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] > aux) {
          aux = this.items[i];
          pos = i;
        }
      } return this.items[pos];
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let aux = 0;
      let pos = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] < aux) {
          aux = this.items[i];
          pos = i;
        }
      } return this.items[pos];
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      const reducer = (acumulator, currentValue) => acumulator + currentValue;
      const adding = this.items.reduce(reducer);
      const media = adding/this.items.length;
      return media;
    } 
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const reducer = (acumulator, currentValue) => acumulator + currentValue;
      const adding = this.items.reduce(reducer);
      return adding;
    }
  }
};

module.exports = SortedList;
