import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeneralCleaning} from '../models/general-cleaning';

@Injectable({
  providedIn: 'root'
})
export class GeneralCleaningService {

  private generalCleaningUrl = '/api/general-cleaning';

  constructor(private http: HttpClient) { }

  getAllGeneralCleanings() {
    return this.http.get<GeneralCleaning[]>(this.generalCleaningUrl);
  }
}
