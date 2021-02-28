import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MaintainCleaning} from '../../models/maintain-cleaning';
import {MaintainCleaningService} from '../../service/maintain-cleaning.service';
import {InfoDialogComponent} from '../../dialog/info-dialog/info-dialog.component';
import {BasicCleaningService} from '../../service/basic-cleaning.service';
import {DialogService} from '../../service/dialog.service';

@Component({
  selector: 'app-maintain-cleaning',
  templateUrl: './maintain-cleaning.component.html',
  styleUrls: ['./maintain-cleaning.component.scss']
})
export class MaintainCleaningComponent implements OnInit {

  private maintainCleanings: MaintainCleaning[];

  constructor(private maintainCleaningService: MaintainCleaningService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.initMaintainCleaningData();
  }

  initMaintainCleaningData() {
    this.maintainCleaningService.getAllMaintainCleanings().subscribe(
      data => {
        this.maintainCleanings = data;
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
