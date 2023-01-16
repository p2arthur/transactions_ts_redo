export class MessageView {
  private _selectorElement: HTMLElement;
  constructor(selector: string) {
    this._selectorElement = <HTMLElement>document.querySelector(selector);
  }
  template(model: string): string {
    return `
    <p class="alert alert-info">
    ${model}
    </p>
    
    `;
  }
  update(model: string): void {
    const template = this.template(model);
    this._selectorElement.innerHTML = template;
  }
}
