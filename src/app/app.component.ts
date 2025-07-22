import { Component } from '@angular/core';
import { OperatorsComponent } from '@components/operators/operators.component';

@Component({
  selector: 'app-root',
  imports: [
    OperatorsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workout';
}
