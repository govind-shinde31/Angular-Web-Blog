import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './web-blog/components/home/home.component';
import { FeatureComponent } from './web-blog/components/feature/feature.component';
import { ServiceComponent } from './web-blog/components/service/service.component';
import { TestimonialComponent } from './web-blog/components/testimonial/testimonial.component';
import { MeetComponent } from './web-blog/components/meet/meet.component';
import { LoginComponent } from './web-blog/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    ServiceComponent,
    TestimonialComponent,
    MeetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
