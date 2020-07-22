import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCinemaComponent } from './form-cinema.component';

describe('FormCinemaComponent', () => {
  let component: FormCinemaComponent;
  let fixture: ComponentFixture<FormCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
