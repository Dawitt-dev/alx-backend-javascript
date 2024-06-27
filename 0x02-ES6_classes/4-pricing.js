import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount with type verification
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency with type verification
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
