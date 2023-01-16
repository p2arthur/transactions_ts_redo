import { Negotiation } from "./negotiation";

export class Negotiations {
  private _negotationsList: Negotiation[] = [];

  addNewNegotiation(negotiation: Negotiation): void {
    this._negotationsList.push(negotiation);
  }

  getNegotiationList(): readonly Negotiation[] {
    return this._negotationsList;
  }
}
