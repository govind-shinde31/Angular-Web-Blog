import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)

  },
  {
    
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  {
    path:'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
  },
  {
    path:'meet',
    loadChildren: () => import('./meet/meet.module').then(m => m.MeetModule)
  },
  {
    path:'testimonial',
    loadChildren: () => import('./testimonial/testimonial.module').then (m => m.TestimonialModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
