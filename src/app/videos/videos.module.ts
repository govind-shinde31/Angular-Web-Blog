import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    VideosComponent,
  
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FormsModule,
    YouTubePlayerModule
  ]
})
export class VideosModule { }
