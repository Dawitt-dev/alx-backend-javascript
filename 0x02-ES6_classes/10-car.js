class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    const CarClass = this.constructor[Symbol.species] || this.constructor;
    return new CarClass(this._brand, this._motor, this._color);
  }

  // Method to get the species constructor for cloning
  static get [Symbol.species]() {
    return this;
  }
}

export default Car;
