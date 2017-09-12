import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { AppDirective } from './app.directive';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    Child2Component,
    Child1Component,
    AppDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
