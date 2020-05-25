import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder.component';
import { CarScrollerComponent } from './car-scroller/car-scroller.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContentPlaceholderComponent,
    CarScrollerComponent,
    VideoWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
