export class Negotiation {
  constructor(
    private readonly _date: Date,
    private readonly _quantity: number,
    private readonly _value: number
  ) {}

  get date(): Date {
    const date = new Date(this._date);
    return date;
  }

  get quantity(): number {
    return this._quantity;
  }

  get value(): number {
    return this._value;
  }

  get volume(): number {
    return this._value * this._quantity;
  }
}
