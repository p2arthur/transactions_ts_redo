import { Negotiation } from "../model/negotiation.js";
import { Negotiations } from "../model/negotiations.js";
import { NegotiationView } from "../view/negotiations-view.js";

export class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationView("#table-container");

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantity = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
    this._negotiationsView.update(this._negotiations);
  }

  createNewTransaction(): Negotiation {
    const date = new Date(this._inputDate.value.replace(/-/g, ","));
    const quantity = parseInt(this._inputQuantity.value);
    const value = parseFloat(this._inputValue.value);

    return new Negotiation(date, quantity, value);
  }

  addNewTransaction(): void {
    const negotiation = this.createNewTransaction();
    this._negotiations.addNewNegotiation(negotiation);
    this._negotiationsView.update(this._negotiations);
  }
}
