import { Component, OnInit } from '@angular/core';
import {FeatureService} from '../../service/feature.service';
import {Feature} from '../../models/feature';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  private features: Feature[];

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.initFeaturesData();
  }

  initFeaturesData() {
    this.featureService.getAllFeatures().subscribe(
      data => {
        this.features = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
