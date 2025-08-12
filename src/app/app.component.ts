import { Component } from '@angular/core';
import { OperatorsComponent } from '@components/operators/operators.component';
import {RxjsComponent} from '@components/rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  imports: [RxjsComponent, OperatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'workout';
}
