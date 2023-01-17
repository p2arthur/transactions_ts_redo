//Creating a generic type to be defined on the children
//Implementing an abstract class which means that the parent class doesn't know how it will be implemented, it's a resonsability of the children class
export abstract class View<T> {
  //Used the protected modifier to give access only to children classes
  protected _selectorElement: HTMLElement;

  constructor(selectorElement: string) {
    this._selectorElement = <HTMLElement>(
      document.querySelector(selectorElement)
    );
  }

  //Using the generic type to define the type of the model argument inside the children
  //Implementing an abstract method meaning that the children have to implement a template method for the code to compile
  abstract template(model: T): string;
  update(model: T): void {
    const template = this.template(model);
    this._selectorElement.innerHTML = template;
  }
}
