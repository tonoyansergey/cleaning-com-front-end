import { Component, OnInit } from '@angular/core';
import {BasicCleaningService} from '../../service/basic-cleaning.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Benefit} from '../../models/benefit';
import {BasicCleaning} from '../../models/basic-cleaning';
import {DialogService} from '../../service/dialog.service';
import {InfoDialogComponent} from '../../dialog/info-dialog/info-dialog.component';

@Component({
  selector: 'app-basic-cleaning',
  templateUrl: './basic-cleaning.component.html',
  styleUrls: ['./basic-cleaning.component.scss']
})
export class BasicCleaningComponent implements OnInit {

  basicCleanings: BasicCleaning[];

  constructor(private basicCleaningService: BasicCleaningService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.initBasicCleaningData();
  }

  initBasicCleaningData() {
    this.basicCleaningService.getAllBasicCleanings().subscribe(
      data => {
        this.basicCleanings = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  openCleaningInfo(services: string[]) {
    this.dialogService.openDialogAndPassData(InfoDialogComponent, services);
  }
}
