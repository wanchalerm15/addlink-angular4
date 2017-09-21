import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { AppDirective } from './app.directive';
import { AppService } from './app.service';
import { AppRouting } from './app.routing';
import { GuardComponent } from './guard/guard.component';
import { AppGuard, AppDeactiveGuard } from './app.guard';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    Child2Component,
    Child1Component,
    AppDirective,
    GuardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule
  ],
  providers: [
    AppService,
    AppGuard,
    AppDeactiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
