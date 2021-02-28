import {BaseCleaning} from './base-cleaning';

export class BasicCleaning {

  title: string;
  description: string;
  services: string[];
  baseCleanings: BaseCleaning[];

  constructor(title: string, description: string, services: string[], baseCleanings: BaseCleaning[]) {
    this.title = title;
    this.description = description;
    this.services = services;
    this.baseCleanings = baseCleanings;
  }
}
