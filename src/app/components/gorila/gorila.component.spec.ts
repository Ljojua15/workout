import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorilaComponent } from './gorila.component';

describe('GorilaComponent', () => {
  let component: GorilaComponent;
  let fixture: ComponentFixture<GorilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
