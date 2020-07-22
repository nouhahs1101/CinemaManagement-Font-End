import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSalleComponent } from './form-salle.component';

describe('FormSalleComponent', () => {
  let component: FormSalleComponent;
  let fixture: ComponentFixture<FormSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
