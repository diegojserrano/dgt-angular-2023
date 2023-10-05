import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPublicoComponent } from './principal-publico.component';

describe('PrincipalPublicoComponent', () => {
  let component: PrincipalPublicoComponent;
  let fixture: ComponentFixture<PrincipalPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPublicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
