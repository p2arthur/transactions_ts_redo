export class View {
  protected _selectorElement: HTMLElement;

  constructor(selectorElement: string) {
    this._selectorElement = <HTMLElement>(
      document.querySelector(selectorElement)
    );
  }
}
