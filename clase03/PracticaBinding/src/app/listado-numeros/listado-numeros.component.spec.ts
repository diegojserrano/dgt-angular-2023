import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNumerosComponent } from './listado-numeros.component';

describe('ListadoNumerosComponent', () => {
  let component: ListadoNumerosComponent;
  let fixture: ComponentFixture<ListadoNumerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoNumerosComponent]
    });
    fixture = TestBed.createComponent(ListadoNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
