import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiableEmployeesListComponent } from './fiable-employees-list/fiable-employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FiableEmployeesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
