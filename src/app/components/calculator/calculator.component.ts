import { Component, OnInit } from '@angular/core';
import {CleaningType} from '../../models/cleaning-type';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DialogService} from '../../service/dialog.service';
import {OrderDialogComponent} from '../../dialog/order-dialog/order-dialog.component';
import {HttpErrorResponse} from '@angular/common/http';
import {CleaningTypeService} from '../../service/cleaning-type.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private form: FormGroup;
  cleaningTypes: CleaningType[] = [];
  selectedCleaningTypePricePerSquare = 150;
  selectedSquare = 0;
  cleaningPrice: number;

  constructor(private cleaningTypeService: CleaningTypeService, private fb: FormBuilder, private dialogService: DialogService) {
    this.initCleaningTypeData();
    console.log(this.cleaningTypes[0]);
    this.form = fb.group({
      cleaningType: [this.cleaningTypes[0]],
      radioSquare: [50],
      customSquare: [],
      customSquareNumber: []
    });
  }

  ngOnInit() {
  }

  initCleaningTypeData() {
    this.cleaningTypeService.getAllCleaningTypes().subscribe(
      data => {
        this.cleaningTypes = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  assignCleaningType() {
    this.selectedCleaningTypePricePerSquare = this.form.controls.cleaningType.value.pricePerSquare;
    this.calculate();
  }

  assignSquare(value) {
    if (value === 'customSquareNumber') {
      document.getElementById('customSquareInput').focus();
    }
    this.selectedSquare = this.form.controls[value].value;
    this.calculate();
  }


  calculate() {
    this.cleaningPrice = this.selectedSquare * this.selectedCleaningTypePricePerSquare;
  }

  checkCustomSquareRadio(value) {
    // @ts-ignore
    document.getElementById('customSquare').checked = true;
    this.assignSquare(value);
  }

  order(form: FormGroup) {
    this.dialogService.openDialogAndPassData(OrderDialogComponent, form.value);
  }
}
