import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {GeneralCleaning} from '../../models/general-cleaning';
import {GeneralCleaningService} from '../../service/general-cleaning.service';
import {DialogService} from '../../service/dialog.service';
import {InfoDialogComponent} from '../../dialog/info-dialog/info-dialog.component';

@Component({
  selector: 'app-general-cleaning',
  templateUrl: './general-cleaning.component.html',
  styleUrls: ['./general-cleaning.component.scss']
})
export class GeneralCleaningComponent implements OnInit {

  generalCleanings: GeneralCleaning[];

  constructor(private generalCleaningService: GeneralCleaningService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.initBasicCleaningData();
  }

  initBasicCleaningData() {
    this.generalCleaningService.getAllGeneralCleanings().subscribe(
      data => {
        this.generalCleanings = data;
        console.log(data);
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
