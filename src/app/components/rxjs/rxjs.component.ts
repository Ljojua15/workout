import {Component, inject, OnInit} from '@angular/core';
import {EndpointsService} from '@app/lib/services/endpoints.service';
import {AsyncPipe, CommonModule, JsonPipe, NgIf} from '@angular/common';
import {map, Observable, tap} from 'rxjs';
import {IProduct} from '@app/lib/interfaces/products.interface';

@Component({
  selector: 'app-rxjs',
  imports: [
    NgIf,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  private api = inject(EndpointsService)


  getProducts$:Observable<(IProduct & {mappedPrice :number,prefix: string})[]> = this.api.getProducts$().pipe(
    map((res) =>
      res.map((x) => ({
        ...x,
        mappedPrice: x.price * 2,
        prefix: 'PRE' + x.category
      }))
    )
  );

  ngOnInit(): void {
  }


}
