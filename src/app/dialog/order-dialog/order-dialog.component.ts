import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '../../service/dialog.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CleaningTypeService} from '../../service/cleaning-type.service';
import {QuestionAnswer} from '../../models/question-answer';
import {CleaningType} from '../../models/cleaning-type';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderService} from '../../service/order.service';
import {HomeCleaningService} from '../../service/home-cleaning.service';
import {HomeCleaning} from '../../models/home-cleaning';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  form: FormGroup;
  private cleaningTypes: HomeCleaning[];
  private cleanType: HomeCleaning;

  private emailPattern: string = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor(private orderService: OrderService, private homeCleaningService: HomeCleaningService, private fb: FormBuilder,
              private dialogService: DialogService,
              private dialogRef: MatDialogRef<OrderDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    console.log(data.data.cleaningType);
    this.cleanType = data.data.cleaningType;
    this.form = fb.group({
      cleaningType: [data.data.cleaningType, [Validators.required]],
      square: [data.data.radioSquare, [Validators.required]],
      clientName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      clientPhoneNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      clientEmail: ['', [Validators.pattern(this.emailPattern)]]
    });
  }

  ngOnInit() {
    this.initCleaningTypeData();
  }

  initCleaningTypeData() {
    this.homeCleaningService.getAllHomeCleanings().subscribe(
      data => {
        this.cleaningTypes = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  addOrder() {
    console.log(this.form.value);
    this.orderService.addOrder(this.form).subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
