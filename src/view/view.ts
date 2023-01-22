//Creating a generic type to be defined on the children

//Implementing an abstract class which means that the parent class doesn't know how it will be implemented, it's a resonsability of the children class
export abstract class View<T, K> {
  //Used the protected modifier to give access only to children classes
  protected _selectorElement: HTMLElement;
  private escape = false;

  constructor(selectorElement: string, escape: boolean) {
    const element = <HTMLElement>document.querySelector(selectorElement);

    if (element) {
      this._selectorElement = <HTMLElement>element;
    } else {
      throw Error(`Couldn't select ${selectorElement}. Verify if it exists`);
    }

    if (escape) {
      this.escape = escape;
    }
  }

  //Using the generic type to define the type of the model argument inside the children
  //Implementing an abstract method meaning that the children have to implement a template method for the code to compile
  protected abstract template(model: T, negotiation?: K): string;
  update(model: T, type?: K): void {
    let template = this.template(model, type);

    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this._selectorElement.innerHTML = template;
  }
}
