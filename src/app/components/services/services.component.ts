import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CleaningTypeService} from '../../service/cleaning-type.service';
import {CleaningType} from '../../models/cleaning-type';
import {HomeCleaningService} from '../../service/home-cleaning.service';
import {HomeCleaning} from '../../models/home-cleaning';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  cleaningTypes: HomeCleaning[] = [];

  constructor(private homeCleaningService: HomeCleaningService) { }

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
}
