import { Component } from '@angular/core';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dt1 : Date;
  dt2: Date;
  dt3: Date;
  dt4: Date;
  dt5: Date;

  constructor() {
    this.dt1 = new Date( 2017, 10, 1);
    this.dt2 = new Date( 2017, 10, 1);
    this.dt4 = new Date( 2017, 10, 1, 11, 10, 9);
    this.dt5 = new Date( 2017, 10, 1, 11, 10, 9);
  }
  // controller
  parseDate(dateString: string): Date {
    if (dateString) {
      let d : Date = new Date(dateString);
      this.dt3 = d;
      return d;
    } else {
      return null;
    }
  }
}
