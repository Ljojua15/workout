import { Component, inject, OnInit } from '@angular/core';
import { EndpointsService } from '@app/lib/services/endpoints.service';
import { AsyncPipe, CommonModule, JsonPipe, NgIf } from '@angular/common';
import { map, Observable, tap } from 'rxjs';
import { IProduct } from '@app/lib/interfaces/products.interface';
import { UnderlineDirective } from '@app/lib/directive/underline.directive';
import { PricePipe } from '@app/lib/pipe/price.pipe';

@Component({
  selector: 'app-rxjs',
  imports: [NgIf, AsyncPipe, CommonModule, UnderlineDirective, PricePipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent implements OnInit {
  private api = inject(EndpointsService);
  private test = {
    id: '2222',
    title: 'foo',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  getProducts$: Observable<
    (IProduct & { mappedPrice: number; prefix: string; discount: number })[]
  > = this.api.getProducts$().pipe(
    map((res) =>
      res.map((x: any) => ({
        ...x,
        mappedPrice: x.price * 2,
        prefix: 'PRE' + x.category,
        discount: x.price / 2,
      })),
    ),
  );

  ngOnInit(): void {}
}
