import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Benefit } from "../benefit";
import { BenefitService } from "../benefit.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-benefit",
  templateUrl: "./benefit.component.html",
  styleUrls: ["./benefit.component.css"]
})
export class BenefitComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private benefitService: BenefitService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getBenefit();
  }
  benefit: Benefit;
  getBenefit(): void {
    let nm = this.route.snapshot.paramMap.get("name");
    console.log(nm);
    if (nm != null) {
      this.benefit = this.benefitService.getBenefit(nm);
    }
  }
}
