import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  information: string[];

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.information = data.data;
    console.log(data.data);

  }

  ngOnInit() {
  }

}
