import { Component, inject } from '@angular/core';
import { EndpointsService } from '@app/lib/services/endpoints.service';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss'
})
export class OperatorsComponent {
  private endpointsService = inject(EndpointsService);

  public getProducts$ = this.endpointsService.getProducts$();
}
