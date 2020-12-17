import { Component, OnInit } from '@angular/core';
import { BenefitService } from '../benefit.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public benefitService: BenefitService) { 

  }
  public categories Cate

  ngOnInit() {
  }

}