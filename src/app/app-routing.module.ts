import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { MeetComponent } from './meet/meet.component';
import { ServiceComponent } from './service/service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"feature",
    component:FeatureComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"testimonial",
    component:TestimonialComponent
  },
  {
    path:"meet",
    component:MeetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
