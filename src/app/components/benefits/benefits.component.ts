import { Component, OnInit } from '@angular/core';
import {Benefit} from '../../models/benefit';
import {BenefitService} from '../../service/benefit.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  private benefits: Benefit[];

  constructor(private benefitService: BenefitService) {
    this.initBenefitData();

  }

  ngOnInit() {
  }

  initBenefitData() {
    this.benefitService.getAllBenefits().subscribe(
      data => {
        this.benefits = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
