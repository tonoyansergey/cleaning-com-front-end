import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = '/api/order';

  constructor(private http: HttpClient) { }

  addOrder(form: FormGroup) {
    console.log(form.value);
    return this.http.post(this.orderUrl + '/add', {
      cleaningTypeId: form.value.cleaningType.id,
      square: form.value.square,
      clientName: form.value.clientName,
      clientPhoneNumber: form.value.clientPhoneNumber,
      clientEmail: form.value.clientEmail,
      });
  }
}
