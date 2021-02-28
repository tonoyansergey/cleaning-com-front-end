export class Order {

  cleaningTypeId: string;
  clientName: string;
  clientEmail: string;
  clientPhoneNumber: string;
  square: string;


  constructor(cleaningTypeId: string, clientName: string, clientEmail: string, clientPhoneNumber: string, square: string) {
    this.cleaningTypeId = cleaningTypeId;
    this.clientName = clientName;
    this.clientEmail = clientEmail;
    this.clientPhoneNumber = clientPhoneNumber;
    this.square = square;
  }
}
