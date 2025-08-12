import {
  Directive,
  ElementRef,
  inject,
  Input,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective implements OnInit {
  @Input() appUnderline!: number;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    if (this.appUnderline > 100) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-decoration',
        'line-through',
      );
    }
  }
}
