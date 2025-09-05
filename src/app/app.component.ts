import { Component } from '@angular/core';
import { OperatorsComponent } from '@components/operators/operators.component';
import { RxjsComponent } from '@components/rxjs/rxjs.component';
import { PixiComponent } from '@components/pixi/pixi.component';
import { GorilaComponent } from '@components/gorila/gorila.component';

@Component({
  selector: 'app-root',
  imports: [GorilaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'workout';
}
