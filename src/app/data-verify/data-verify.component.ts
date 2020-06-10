import { Component, OnInit } from '@angular/core';
import { verifications } from "../../assets/data/verification.js";
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-data-verify',
  templateUrl: './data-verify.component.html',
  styleUrls: ['./data-verify.component.scss']
})
export class DataVerifyComponent implements OnInit {

  constructor(private router: Router) { }
  verifications = verifications;
  
  verificationProcessWip = false;
  allVerified = true;
  ngOnInit(): void {
    this.verifyData()
  }

  verifyData() {
    this.allVerified = true;
    this,verifications.map(d => {
      d.verified ? null : this.allVerified = false;
    })
  }

  correctQuesData () {
    this.verifications.map(d => {
      d.verified ? null : d.verified = true;
    })
    this.verifyData();
    this.verificationProcessWip = false
  }

  proceedClicked () {
    if (this.allVerified && !this.verificationProcessWip) {
      this.router.navigate(['dashboard/questionnaire'])
    } else if (!this.allVerified && this.verificationProcessWip) {
      $('#verificationWip').modal('show');
      this.correctQuesData ()
    } else {
      $('#dataMismatchModal').modal('show');
    }
  }

  initiateDataCorrection () {
    this.verificationProcessWip = true;
    $('#showEmailModal').modal('hide');
  }

  contactSupportClicked () {
    $('#showEmailModal').modal('show')
  }

}

