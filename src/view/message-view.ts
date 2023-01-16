import { View } from "./view.js";

export class MessageView extends View {
  template(model: string): string {
    return `
    <p class="alert alert-info">
    ${model}
    </p>
    
    `;
  }

  //The _selectorElement is being inherited from the View class by using the protected modifier
  update(model: string): void {
    const template = this.template(model);
    this._selectorElement.innerHTML = template;
  }
}
