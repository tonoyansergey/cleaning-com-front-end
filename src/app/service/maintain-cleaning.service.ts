import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MaintainCleaning} from '../models/maintain-cleaning';

@Injectable({
  providedIn: 'root'
})
export class MaintainCleaningService {

  private maintainCleaningUrl = '/api/maintain-cleaning';

  constructor(private http: HttpClient) { }

  getAllMaintainCleanings() {
    return this.http.get<MaintainCleaning[]>(this.maintainCleaningUrl);
  }
}
