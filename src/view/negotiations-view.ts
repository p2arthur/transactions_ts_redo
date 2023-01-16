import { Negotiations } from "../model/negotiations.js";

export class NegotiationView {
  private _element: HTMLElement;

  constructor(selectorElement: string) {
    this._element = <HTMLElement>document.querySelector(selectorElement);
  }

  template(negotiations: Negotiations): string {
    return `
<table class="table table-hover table-bordered">
<thead>
<tr>
<th>Date</th>
<th>Quantity</th>
<th>Value</th>
<th>Volume</th>
</tr>
</thead>
<tr>
${negotiations
  .getNegotiationList()
  .map((negotiation) => {
    return `<tr>
  <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
  <td>${negotiation.quantity}</td>
  <td>$${negotiation.value}</td>
  <td>$${negotiation.volume}</td>
  </tr>`;
  })
  .join("")}
</tr>
</table>
`;
  }

  update(negotiations: Negotiations) {
    this._element.innerHTML = this.template(negotiations);
  }
}
