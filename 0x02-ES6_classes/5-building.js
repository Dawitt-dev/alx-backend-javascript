class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot instantiate abstract class');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft with type verification
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}

export default Building;
