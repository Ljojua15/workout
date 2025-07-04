import { Component } from '@angular/core';
import {RxjsComponent} from '@components/rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  imports: [
    RxjsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workout';
}
