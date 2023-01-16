import { Negotiation } from "./negotiation";

export class Negotiations {
  private _negotationsList: Negotiation[] = [];

  addNewNegotiation(negotiation: Negotiation): void {
    this._negotationsList.push(negotiation);
  }

  getNegotiationList(): readonly Negotiation[] {
    console.log(this._negotationsList);
    return this._negotationsList;
  }
}
