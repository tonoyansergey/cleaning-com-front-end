import { Injectable } from '@angular/core';
import {Feature} from '../models/feature';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private featureUrl = '/api/feature';

  constructor(private http: HttpClient) { }

  getAllFeatures() {
    return this.http.get<Feature[]>(this.featureUrl);
  }
}
