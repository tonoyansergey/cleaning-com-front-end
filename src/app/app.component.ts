import { Component } from '@angular/core';
import {OrderDialogComponent} from './dialog/order-dialog/order-dialog.component';
import {DialogService} from './service/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-cc';

  constructor(private dialogService: DialogService) {
  }

  order() {
    this.dialogService.openDialog(OrderDialogComponent);
  }
}
