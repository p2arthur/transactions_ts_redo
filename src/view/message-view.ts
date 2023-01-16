import { View } from "./view.js";
//Using generics to pass the type that will enter into the parent View <string>
export class MessageView extends View<string> {
  template(model: string): string {
    return `
    <p>
    ${model}
    </p>
    `;
  }
}
