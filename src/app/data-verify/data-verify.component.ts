import { Component, OnInit } from '@angular/core';
import { verifications } from "../../assets/data/verification.js";

@Component({
  selector: 'app-data-verify',
  templateUrl: './data-verify.component.html',
  styleUrls: ['./data-verify.component.scss']
})
export class DataVerifyComponent implements OnInit {

  constructor() { }
  verifications = verifications;
  ngOnInit(): void {
    console.log(verifications);
    
  }

}
