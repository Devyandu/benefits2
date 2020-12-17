import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BenefitComponent } from "./benefit/benefit.component";
import { BenefitsListComponent } from "./benefits-list/benefits-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/benefits", pathMatch: "full" },

  {
    path: "benefits",
    component: BenefitsListComponent
  },
  {
    path: "benefit/:name",
    component: BenefitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
