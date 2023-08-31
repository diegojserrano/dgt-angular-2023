import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNumeroComponent } from './detalle-numero.component';

describe('DetalleNumeroComponent', () => {
  let component: DetalleNumeroComponent;
  let fixture: ComponentFixture<DetalleNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNumeroComponent]
    });
    fixture = TestBed.createComponent(DetalleNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
