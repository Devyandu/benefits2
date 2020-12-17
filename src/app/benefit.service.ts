import { Injectable } from "@angular/core";
import { Benefit } from "./benefit";
import { BenefitCategory } from "./benefit";

@Injectable({
  providedIn: "root"
})
export class BenefitService {
  constructor() {
    this.categories = [
      {
        code: "costshare",
        icon: "home",
        name: "Cost Sharing Features:Deductible and Out of pocket maximum",
        benefits: [
          {
            code: "deductible",
            name: "Deductible",
            description:
              "A health insurance deductible is the amount of money you pay out of pocket for healthcare services covered under your insurance plan before your plan begins to pay benefits for eligible expenses. There are different deductible numbers for individual and family. The deductible can also vary depending on whether you go to an in-network provider or out of network."
          },
          {
            code: "oopmax",
            name: "Out-Of-Pocket Maximum",
            description:
              "An out-of-pocket maximum is a predetermined, limited amount of money that an individual must pay before an insurance company or (self-insured employer) will pay 100 percent of an individual’s health care expenses for the remainder of the year."
          }
        ]
      },
      {
        code: "labs",
        icon: "sanitizer",
        name: "Blood Tests and other Lab Work",
        benefits: [
          {
            code: "lab",
            name: "Lab Services",
            description: "This is a definiion of labs"
          },
          {
            code: "indlab",
            name: "Independent Facility/OutPatient Hospital Lab",
            description:
              "This is the definition of ooooo ooooooooooooooo oooooooooooooooooo"
          }
        ]
      },
      {
        code: "provider",
        icon: "medical_services",
        name: "Provider Visits",
        benefits: [
          {
            code: "lab",
            name: "Lab Services",
            description: "here"
          },
          {
            code: "indlab",
            name: "Independent Facility/OutPatient Hospital Lab",
            description: "here"
          }
        ]
      }
    ];
  }
  private categories: BenefitCategory[];
  public getCategories(): BenefitCategory[] {
    return this.categories;
  }
  /*
  public getBenefits(): Benefit[] {
    return this.benefits;
  }
  public getBenefit(name: string): Benefit {
    let x: undefined | Benefit = this.benefits.find(e => e.name === name);

    if (x === undefined) {
      console.log("in undefined");
      return { name: "", title: "", icon: "", value: "" };
    } else {
      console.log(x);
      return x;
    }
  }
  */
}
