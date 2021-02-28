import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicCleaning} from '../models/basic-cleaning';

@Injectable({
  providedIn: 'root'
})
export class BasicCleaningService {

  private basicCleaningUrl = '/api/basic-cleaning';

  constructor(private http: HttpClient) { }

  getAllBasicCleanings() {
    return this.http.get<BasicCleaning[]>(this.basicCleaningUrl);
  }
}
