import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApellidoComponent } from './apellido.component';

describe('ApellidoComponent', () => {
  let component: ApellidoComponent;
  let fixture: ComponentFixture<ApellidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApellidoComponent]
    });
    fixture = TestBed.createComponent(ApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
