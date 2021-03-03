export class HomeCleaning {

  id: string;
  title: string;
  definition: string;
  angularComponent: string;
  pricePerSquare: number;
  photo: string;

  constructor(id: string, title: string, definition: string, angularComponent: string, pricePerSquare: number, photo: string) {
    this.id = id;
    this.title = title;
    this.definition = definition;
    this.angularComponent = angularComponent;
    this.pricePerSquare = pricePerSquare;
    this.photo = photo;
  }
}
