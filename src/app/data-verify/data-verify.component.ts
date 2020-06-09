import { Component, OnInit } from '@angular/core';
import { verifications } from "../../assets/data/verification.js";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-verify',
  templateUrl: './data-verify.component.html',
  styleUrls: ['./data-verify.component.scss']
})
export class DataVerifyComponent implements OnInit {

  constructor(private router: Router, 
              public dialog: MatDialog) { }
  verifications = verifications;
  allVerified = true;

  ngOnInit(): void {
    this,verifications.map(d => {
      d.verified ? null : this.allVerified = false;
    })
  }

  proceedToQues () {
    if (this.allVerified) {
      this.router.navigate(['dashboard/questionnaire'])
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProceedDialog, {panelClass: 'dialogContainer'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'proceed-dialog',
  templateUrl: './proceed-dialog.html',
  styleUrls: ['./proceed-dialog.scss']
})
export class ProceedDialog {}
