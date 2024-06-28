import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Setter for range with type verification
  set range(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = value;
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
