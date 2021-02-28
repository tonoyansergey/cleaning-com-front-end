import { Injectable } from '@angular/core';
import {Benefit} from '../models/benefit';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CleaningType} from '../models/cleaning-type';

@Injectable({
  providedIn: 'root'
})
export class CleaningTypeService {

  private cleaningTypeUrl = '/api/cleaning-type';

  constructor(private http: HttpClient) { }

  getAllCleaningTypes() {
    return this.http.get<CleaningType[]>(this.cleaningTypeUrl);
  }
}
