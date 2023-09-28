import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeportesComponent } from './lista-deportes.component';

describe('ListaDeportesComponent', () => {
  let component: ListaDeportesComponent;
  let fixture: ComponentFixture<ListaDeportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeportesComponent]
    });
    fixture = TestBed.createComponent(ListaDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
