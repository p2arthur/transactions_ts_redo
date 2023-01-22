import { WeekDays } from "../enums/week-days.js";
import { Negotiation } from "../model/negotiation.js";
import { Negotiations } from "../model/negotiations.js";
import { MessageView } from "../view/message-view.js";
import { NegotiationView } from "../view/negotiations-view.js";

export class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationView("#table-container", false);
  private _messageView = new MessageView("#messageView", false);

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantity = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
    this._negotiationsView.update(this._negotiations);
  }

  addNewTransaction(): void {
    const negotiation = Negotiation.createOf(
      this._inputDate.value,
      this._inputQuantity.value,
      this._inputValue.value
    );

    if (NegotiationController.isWeekDay(negotiation.date)) {
      this._negotiations.addNewNegotiation(negotiation);
      this._negotiationsView.update(this._negotiations, negotiation);
      this._messageView.update("Transaction successfully added", "success");
    } else {
      this._messageView.update(
        "You can only add negotiations made on business days",
        "danger"
      );
      return;
    }
  }

  public static isWeekDay(day: Date) {
    return (
      day.getDay() !== WeekDays.SUNDAY &&
      day.getDay() !== WeekDays.SATURDAY &&
      true
    );
  }
}
