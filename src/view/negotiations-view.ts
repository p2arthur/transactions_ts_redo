import { Negotiation } from "../model/negotiation.js";
import { Negotiations } from "../model/negotiations.js";
import { View } from "./view.js";

export class NegotiationView extends View {
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

  //The _selectorElement is being inherited from the View class by using the protected modifier
  update(model: Negotiations): void {
    const template = this.template(model);
    this._selectorElement.innerHTML = template;
  }
}
