import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisoresComponent } from './divisores.component';

describe('DivisoresComponent', () => {
  let component: DivisoresComponent;
  let fixture: ComponentFixture<DivisoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisoresComponent]
    });
    fixture = TestBed.createComponent(DivisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
