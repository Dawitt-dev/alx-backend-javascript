class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size with type verification
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location with type verification
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // Custom type casting to number
  valueOf() {
    return this.size;
  }

  // Custom type casting to string
  toString() {
    return this.location;
  }
}

export default HolbertonClass;
