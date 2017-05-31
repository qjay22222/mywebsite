import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionDetailsComponent } from './passion-details.component';

describe('PassionDetailsComponent', () => {
  let component: PassionDetailsComponent;
  let fixture: ComponentFixture<PassionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
