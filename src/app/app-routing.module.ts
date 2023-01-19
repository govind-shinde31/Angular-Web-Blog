import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './web-blog/components/feature/feature.component';
import { HomeComponent } from './web-blog/components/home/home.component';
import { MeetComponent } from './web-blog/components/meet/meet.component';
import { ServiceComponent } from './web-blog/components/service/service.component';
import { TestimonialComponent } from './web-blog/components/testimonial/testimonial.component';

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
