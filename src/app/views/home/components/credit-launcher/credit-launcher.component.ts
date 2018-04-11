import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CreditsComponent } from '../credits/credits.component';

@Component({
  selector: 'credit-launcher',
  templateUrl: './credit-launcher.component.html',
  styleUrls: ['./credit-launcher.component.css']
})
export class CreditLauncherComponent implements AfterViewInit {

  constructor(private matDialog: MatDialog) {
    console.log('hee');
   }

  ngAfterViewInit() {
    setTimeout(_ => {
      const dialogRef = this.matDialog.open(CreditsComponent);
    }, 10);
  }

}
