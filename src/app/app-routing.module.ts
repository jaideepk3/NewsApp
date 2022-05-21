import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent},
  {path:'tech', component:TechnologyComponent},
  {path:'business', component:BusinessComponent},
  {path:'sports', component:SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
