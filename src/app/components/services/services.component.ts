import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CleaningTypeService} from '../../service/cleaning-type.service';
import {CleaningType} from '../../models/cleaning-type';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  cleaningTypes: CleaningType[] = [];

  constructor(private cleaningTypeService: CleaningTypeService) { }

  ngOnInit() {
    this.initCleaningTypeData();
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
}
