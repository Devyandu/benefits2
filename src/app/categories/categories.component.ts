import { Component, OnInit } from '@angular/core';
import { BenefitService } from '../benefit.service';
import { BenefitCategory } from "../benefit";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public benefitService: BenefitService) { 

  }
  public categories:BenefitCategory[];

  ngOnInit() {
    this.categories=this.benefitService.getCategories();
  }

}