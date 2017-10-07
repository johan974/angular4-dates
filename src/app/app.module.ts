import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Component, NgModule} from '@angular/core'
import { FormsModule} from '@angular/forms'
import { DateTimePickerModule } from 'ng-pick-datetime';
import { CalendarModule} from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, DateTimePickerModule, CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
