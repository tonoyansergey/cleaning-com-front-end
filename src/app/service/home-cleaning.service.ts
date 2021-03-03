import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HomeCleaning} from '../models/home-cleaning';

@Injectable({
  providedIn: 'root'
})
export class HomeCleaningService {

  private homeCleaningUrl = '/api/home-cleaning';

  constructor(private http: HttpClient) { }

  getAllHomeCleanings() {
    return this.http.get<HomeCleaning[]>(this.homeCleaningUrl);
  }
}
