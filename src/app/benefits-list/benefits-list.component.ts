import { Component, OnInit } from "@angular/core";
import { Benefit } from "../benefit";
import { BenefitService } from "../benefit.service";

@Component({
  selector: "app-benefits-list",
  templateUrl: "./benefits-list.component.html",
  styleUrls: ["./benefits-list.component.css"]
})
export class BenefitsListComponent implements OnInit {
  constructor(public benefitService: BenefitService) {}
  benefits: Benefit[];

  ngOnInit() {
    //this.benefits = this.benefitService.getBenefits();
  }
}
