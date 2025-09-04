import { Component, inject } from '@angular/core';
import { EndpointsService } from '@app/lib/services/endpoints.service';
import { RxjsService } from '@app/lib/services/rxjs.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPosts } from '@app/lib/interfaces/posts.interface';

@Component({
  selector: 'app-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss',
})
export class OperatorsComponent {
  private rxjsService = inject(RxjsService);

  public postForms = new FormGroup({
    id: new FormControl<number | null>(null),
    user: new FormControl<number | null>(null),
    title: new FormControl<string | null>(null),
    body: new FormControl<string | null>(null),
  });

  private postTest = {
    id: 101,
    user: 1,
    title: 'apa ra',
    body: 'works',
  };
  public clickMake() {
    if (!this.postForms.value) return;
    let fullForm = this.postForms.value;
    this.rxjsService
      .makePost$(fullForm as IPosts)
      .subscribe((posts) => console.log(posts));
  }

  public clickPost() {}
}
