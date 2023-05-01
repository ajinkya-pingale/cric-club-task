import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { createPopper } from '@popperjs/core';
import { SharedModule } from './shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    SharedModule,
    SlickCarouselModule
  ],
  providers: [
    { provide: 'createPopper', useValue: createPopper }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
