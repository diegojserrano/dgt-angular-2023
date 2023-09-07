import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonConteoComponent } from './boton-conteo.component';

describe('BotonConteoComponent', () => {
  let component: BotonConteoComponent;
  let fixture: ComponentFixture<BotonConteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonConteoComponent]
    });
    fixture = TestBed.createComponent(BotonConteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
