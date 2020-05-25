import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder.component';
import { CarScrollerComponent } from './car-scroller/car-scroller.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';
import { HomeComponent } from './home/home.component';
import { FirstSceneComponent } from './first-scene/first-scene.component';
import { SecondSceneComponent } from './second-scene/second-scene.component';
import { ThirdSceneComponent } from './third-scene/third-scene.component';
import { ClosingSceneComponent } from './closing-scene/closing-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContentPlaceholderComponent,
    CarScrollerComponent,
    VideoWrapperComponent,
    HomeComponent,
    FirstSceneComponent,
    SecondSceneComponent,
    ThirdSceneComponent,
    ClosingSceneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
