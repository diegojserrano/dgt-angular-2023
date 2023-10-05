import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPrivadoComponent } from './principal-privado.component';

describe('PrincipalPrivadoComponent', () => {
  let component: PrincipalPrivadoComponent;
  let fixture: ComponentFixture<PrincipalPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPrivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
