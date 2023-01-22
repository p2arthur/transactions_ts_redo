import { Negotiation } from "../model/negotiation.js";
import { View } from "./view.js";
//Using generics to pass the type that will enter into the parent View <string> - (Defining the T)
export class MessageView extends View<string, string> {
  template(model: string, type: string): string {
    return `
    <p class="alert alert-${type}">
    ${model}
    </p>
    `;
  }
}
