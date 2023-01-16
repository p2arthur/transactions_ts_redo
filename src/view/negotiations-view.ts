import { Negotiations } from "../model/negotiations.js";
import { View } from "./view.js";

//Using generics to pass the type that will enter into the parent View <Negotiations> - (Defining the T)
export class NegotiationView extends View<Negotiations> {
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
}
