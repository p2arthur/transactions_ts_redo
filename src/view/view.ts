//Creating a generic type to be defined on the children
export class View<T> {
  protected _selectorElement: HTMLElement;

  constructor(selectorElement: string) {
    this._selectorElement = <HTMLElement>(
      document.querySelector(selectorElement)
    );
  }
  template(model: T): string {
    throw new Error("child class has tom implement the template methods");
  }
  update(): void {}
}
