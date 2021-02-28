export class CleaningType {

  cleaningTypeId: string;
  cleaningTypeTitle: string;
  cleaningTypeDef: string;
  cleaningTypeComponent: string;
  pricePerSquare: number;

  constructor(cleaningTypeId: string, cleaningTypeTitle: string,
              cleaningTypeDef: string, cleaningTypeComponent: string, pricePerSquare: number) {
    this.cleaningTypeId = cleaningTypeId;
    this.cleaningTypeTitle = cleaningTypeTitle;
    this.cleaningTypeDef = cleaningTypeDef;
    this.cleaningTypeComponent = cleaningTypeComponent;
    this.pricePerSquare = pricePerSquare;
  }
}
