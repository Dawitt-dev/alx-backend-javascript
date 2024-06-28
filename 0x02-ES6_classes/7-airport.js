class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type verification
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with type verification
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Default string description of the class
  toString() {
    return `[object ${this.code}]`;
  }
}

export default Airport;
