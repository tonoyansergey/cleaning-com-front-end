import { Injectable } from '@angular/core';
import {Benefit} from '../models/benefit';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

  private benefitUrl = '/api/benefit';

  constructor(private http: HttpClient) { }

  getAllBenefits() {
    return this.http.get<Benefit[]>(this.benefitUrl);
  }
}
