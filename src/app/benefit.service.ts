import { Injectable } from "@angular/core";
import { Benefit } from "./benefit";

@Injectable({
  providedIn: "root"
})
export class BenefitService {
  constructor() {
    this.benefits = [
      {
        icon: "home",
        name: "ovcopay",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      },
      {
        icon: "wheelchair_pickup",
        name: "equipment",
        title: "Durable Medical Equipment",
        value: "$25 per visit"
      },
      {
        icon: "fitness_center",
        name: "fitness",
        title: "Fitness Reimbursement",
        value: "$150 per year"
      },
      {
        icon: "sanitizer",
        name: "sanitizer",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      },
      {
        icon: "medical_services",
        name: "medical",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      }
    ];
  }
  private benefits: Benefit[];
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
}
