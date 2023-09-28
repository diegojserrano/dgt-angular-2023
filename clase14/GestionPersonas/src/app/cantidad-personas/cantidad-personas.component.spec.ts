import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadPersonasComponent } from './cantidad-personas.component';

describe('CantidadPersonasComponent', () => {
  let component: CantidadPersonasComponent;
  let fixture: ComponentFixture<CantidadPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantidadPersonasComponent]
    });
    fixture = TestBed.createComponent(CantidadPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
